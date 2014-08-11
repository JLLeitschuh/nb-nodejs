/* Copyright (C) 2014 Tim Boudreau

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
package org.netbeans.modules.avatar.platform;

import java.io.File;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Future;
import java.util.prefs.Preferences;
import org.netbeans.api.java.platform.JavaPlatformManager;
import org.netbeans.api.project.FileOwnerQuery;
import org.netbeans.api.project.Project;
import org.netbeans.modules.avatar.platform.api.BundledAvatarPlatform;
import org.netbeans.modules.nodejs.api.LaunchSupport;
import org.netbeans.modules.nodejs.api.NodeJSExecutable;
import org.openide.filesystems.FileChooserBuilder;
import org.openide.filesystems.FileObject;
import org.openide.filesystems.FileUtil;
import org.openide.modules.InstalledFileLocator;
import org.openide.util.Lookup;
import org.openide.util.NbBundle;
import org.openide.util.NbBundle.Messages;
import org.openide.util.NbPreferences;
import org.openide.util.Utilities;
import org.openide.util.lookup.ServiceProvider;

/**
 * Runs the Avatar implementation of NodeJS
 *
 * @author Tim Boudreau
 */
@ServiceProvider(service = NodeJSExecutable.class, position = 10)
public class AvatarPlatform extends NodeJSExecutable {

    public static final String AVATAR_JAR_RELATIVE_PATH = "avatar.jar"; //NOI18N
    public static final String PREFS_KEY_AVATAR_JAR = "avatar-jar"; //NOI18N
    private BundledAvatarPlatform bundled;

    public AvatarPlatform() {
        bundled = null;
    }

    public AvatarPlatform(BundledAvatarPlatform p) {
        this.bundled = p;
    }

    private File findAvatarJar() {
        if (bundled != null && bundled.jar() != null) {
            return new File(bundled.jar());
        }
        Preferences p = NbPreferences.forModule(AvatarPlatform.class);
        String val = p.get(PREFS_KEY_AVATAR_JAR, null);
        if (val != null) {
            File f = new File(val);
            if (f.exists() && f.isFile()) {
                return new File(val);
            }
        }
        return InstalledFileLocator.getDefault().locate(AVATAR_JAR_RELATIVE_PATH,
                AvatarPlatform.class.getPackage().getName(), false); //NOI18N
    }

    private String javaCommandLine() {
        // XXX provide an option to select
        JavaPlatformManager mgr = JavaPlatformManager.getDefault();
        FileObject java = mgr.getDefaultPlatform().findTool("java"); //NOI18N
        return java == null ? "java" : FileUtil.toFile(java).getAbsolutePath(); //NOI18N
    }

    // LaunchSupport handles using the external execution API correctly for
    // running node, handling output line clicks and so forth
    private final LaunchSupport supp = new LaunchSupport(this) {
        private static final String LOOK_FOR_AVATAR = "LOOK_FOR_AVATAR"; //NOI18N

        @Override
        protected void populateEnv(Map<String, String> env, FileObject toRun, String args) {
            // Look for a subsection in packate.json named "java", and see if there
            // is an array of dependencies ala Maven - see https://github.com/timboudreau/jnpm
            // for the spec for this.
            // If yes, populate the CLASSPATH environment variable with them - these
            // are Java libraries that need to be on the classpath because they are
            // used by the Node project
            Project project = FileOwnerQuery.getOwner(toRun);
            if (project != null) { // could be a standalone js file
                List<JavaDependency> deps = new LinkedList<>();
                JavaDependency.find(project, deps);
                // If we have some deps, populate $CLASSPATH
                if (!deps.isEmpty()) {
                    StringBuilder cp = new StringBuilder();
                    for (JavaDependency dep : deps) {
                        if (cp.length() > 0) {
                            cp.append(File.pathSeparator);
                        }
                        cp.append(dep);
                    }
                    env.put("CLASSPATH", cp.toString());
                }
            }
        }

        @Override
        @Messages(LOOK_FOR_AVATAR + "=Locate avatar.jar") //NOI18N
        protected String[] getLaunchCommandLine(boolean showDialog, Map<String, String> env) {
            String java = javaCommandLine();
            File avatarJar = findAvatarJar();
            if (avatarJar == null) {
                if (showDialog) {
                    avatarJar = new FileChooserBuilder(AvatarPlatform.class)
                            .setFilesOnly(true)
                            .setTitle(NbBundle.getMessage(AvatarPlatform.class,
                                            LOOK_FOR_AVATAR)) //NOI18N
                            .showOpenDialog();
                }
                if (avatarJar == null || !avatarJar.exists()) {
                    return null;
                } else {
                    Preferences p = NbPreferences.forModule(AvatarPlatform.class);
                    p.put(PREFS_KEY_AVATAR_JAR, avatarJar.getAbsolutePath());

                }
            } else {
                File dir = avatarJar.getParentFile();
                if (Utilities.isMac()) {
                    env.put("DYLD_LIBRARY_PATH", dir.getAbsolutePath());
                } else if (Utilities.isWindows()) {
                    env.put("PATH", dir.getAbsolutePath());
                } else { // Linux, Solaris
                    env.put("LD_LIBRARY_PATH", dir.getAbsolutePath());
                }
            }
            System.out.println("ENV IS " + env);
            return new String[]{
                java,
                "-jar", //NOI18N
                avatarJar.getAbsolutePath()
            };
        }
    };

    @Override
    protected Future<Integer> doRun(FileObject file, String args) throws IOException {
        return supp.doRun(file, args);
    }

    @Override
    public String getSourcesLocation() {
        return bundled == null ? bundled.sources() : null; //PENDING - can we provide sources?
    }

    @Override
    public void stopRunningProcesses(Lookup.Provider owner) {
        supp.stopRunningProcesses(owner);
    }

    public String toString() {
        return name() + " in " + findAvatarJar();
    }

    static String jarToName(File avatarJar) {
        return "avatar~" + (avatarJar == null ? "missing" : avatarJar.getAbsolutePath().replace('/', '-'));
    }

    public String name() {
        return jarToName(findAvatarJar());
    }

    public String path() {
        File result = findAvatarJar();
        return result == null ? "" : result.getAbsolutePath();
    }

    public String displayName() {
        return bundled == null ? name() : bundled.displayName();
    }
}
