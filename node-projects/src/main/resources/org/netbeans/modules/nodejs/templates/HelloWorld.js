<#assign licenseFirst = "/*">
<#assign licensePrefix = " * ">
<#assign licenseLast = " */">
<#include "../../Templates/Licenses/license-${project.license}.txt">

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    
    res.end('Hello World.\n');
    
}).listen(${port}, "");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   rg/netbeans/modules/nodejs/templates[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates $[00m ./scr ipt HelloWorldProjectDescription.html 
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        Node.JS Hello World
    </body>
</html>

]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates $[00m cd
]0;tim@tim:~[01;32mtim@tim[01;34m ~ $[00m cd owrkp^C
]0;tim@tim:~[01;32mtim@tim[01;34m ~ $[00m cd work/personal/nod[K[Ketbeans-nodejs/
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls[K[Kcd org.netbeans.modules.nodejs/
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs $[00m ls
pom.xml  [0m[01;34msrc[0m  [01;34mtarget[0m
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs $[00m cd src/tes[K[K[K
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m lls
bash: lls: command not found
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m mkd[K[K[Kls
[0m[01;34mmain[0m
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m mkdir test[C[C test- testp test[C[C[C[C[C/java/org/netbeans/modules/nodejs/json
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m mkdir -p test/java/org/netbeans/modules/nodejs/json[K[K[K[Kregistry
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m mkdir -p test/java/org/netbeans/modules/nodejs/registryjson[K[C/org/netbeans/modules/nodejs/json[K/org/netbeans/modules/nodejs/json[K/org/netbeans/modules/nodejs/json[K/org/netbeans/modules/nodejs/json[Kr/org/netbeans/modules/nodejs/jsone/org/netbeans/modules/nodejs/jsons/org/netbeans/modules/nodejs/jsono/org/netbeans/modules/nodejs/jsonu/org/netbeans/modules/nodejs/jsonr/org/netbeans/modules/nodejs/jsonc/org/netbeans/modules/nodejs/jsone/org/netbeans/modules/nodejs/jsons/org/netbeans/modules/nodejs/json[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m cd
]0;tim@tim:~[01;32mtim@tim[01;34m ~ $[00m cd work/personal/
]0;tim@tim:~/work/personal[01;32mtim@tim[01;34m ~/work/personal $[00m git clone https://github.com/timboudreau/nb-nodejs.git
Cloning into 'nb-nodejs'...
remote: Counting objects: 4, done.[K
remote: Compressing objects:  33% (1/3)   [Kremote: Compressing objects:  66% (2/3)   [Kremote: Compressing objects: 100% (3/3)   [Kremote: Compressing objects: 100% (3/3), done.[K
remote: Total 4 (delta 0), reused 0 (delta 0)[K
Unpacking objects:  25% (1/4)   Unpacking objects:  50% (2/4)   Unpacking objects:  75% (3/4)   Unpacking objects: 100% (4/4)   Unpacking objects: 100% (4/4), done.
]0;tim@tim:~/work/personal[01;32mtim@tim[01;34m ~/work/personal $[00m cd nb-nodejs/
]0;tim@tim:~/work/personal/nb-nodejs[01;32mtim@tim[01;34m ~/work/personal/nb-nodejs $[00m ls
README.md
]0;tim@tim:~/work/personal/nb-nodejs[01;32mtim@tim[01;34m ~/work/personal/nb-nodejs $[00m ls -la
total 10
drwxr-xr-x  3 tim tim 2048 Dec  2 00:23 [0m[01;34m.[0m
drwxr-xr-x 31 tim tim 2048 Dec  2 00:23 [01;34m..[0m
drwxr-xr-x  7 tim tim 2048 Dec  2 00:23 [01;34m.git[0m
-rw-r--r--  1 tim tim   45 Dec  2 00:23 .gitignore
-rw-r--r--  1 tim tim   83 Dec  2 00:23 README.md
]0;tim@tim:~/work/personal/nb-nodejs[01;32mtim@tim[01;34m ~/work/personal/nb-nodejs $[00m mv .git .gitignore README.md ../netbeans-nodejs/
]0;tim@tim:~/work/personal/nb-nodejs[01;32mtim@tim[01;34m ~/work/personal/nb-nodejs $[00m cd ../n[K
]0;tim@tim:~/work/personal[01;32mtim@tim[01;34m ~/work/personal $[00m rm -Rf nb-nodejs/
]0;tim@tim:~/work/personal[01;32mtim@tim[01;34m ~/work/personal $[00m cd netbeans-nodejs/
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls
[0m[01;34morg.netbeans.modules.nodejs[0m  pom.xml  README.md  [01;34mtarget[0m
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git status
# On branch master
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#	[31morg.netbeans.modules.nodejs/[m
#	[31mpom.xml[m
#	[31mtarget/[m
nothing added to commit but untracked files present (use "git add" to track)
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls target/
[0m[01;34mnetbeans_site[0m
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m nano .gitignore 
(B)07[?47h[1;38r[m[4l[?25h===[39;49m[39;49m[m[H[2J[0;7m  GNU nano 2.3.1                               File: .gitignore                                                                     [3;1H[m*.class[5d# Package Files #[6d*.jar[7d*.war[8d*.ear[36;59H[0;7m[ Read 6 lines ][37d^G[m Get Help[37;23H[0;7m^O[m WriteOut[37;45H[0;7m^W[m Where Is[37;67H[0;7m^V[m Next Page[37;89H[0;7m^U[m UnCut Text[37;111H[0;7mM-|[m First Line[38d[0;7m^X[m Exit[38;23H[0;7m^R[m Read File[38;45H[0;7m^Y[m Prev Page[38;67H[0;7m^K[m Cut Text[38;89H[0;7m^C[m Cur Pos[38;111H[0;7mM-?[m Last Line[3d[4d[5d[6d[7d[8d[9d[1;123H[0;7mModified[9d[mbuild/[10dtarget/[11d.DS_[36d[K[11;5HStore[12d[36d[0;7mSave modified buffer (ANSWERING "No" WILL DESTROY CHANGES) ?                                                                        [37;1H Y[m Yes[K[38d[0;7m N[m No  [38;17H[0;7m^C[m Cancel[K[36;62H[0;7mFile Name to Write: .gitignore                              [37d^G[m Get Help[37;34H[0;7mM-D[m DOS Format[37;67H[0;7mM-A[m Append[37;100H[0;7mM-B[m Backup File[38d[0;7m^C[m Cancel[17G         [38;34H[0;7mM-M[m Mac Format[38;67H[0;7mM-P[m Prepend[36;31H[37d[39;49m[m[J[1;123H[0;7m        [36;57H[m[1K [0;7m[ Wrote 10 lines ][m[K[38;132H[38;1H[2J[?47l8>]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#	[31mmodified:   .gitignore[m
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#	[31morg.netbeans.modules.nodejs/[m
#	[31mpom.xml[m
no changes added to commit (use "git add" and/or "git commit -a")
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git add -A --dry-run
add '.gitignore'
add 'org.netbeans.modules.nodejs/nb-configuration.xml'
warning: CRLF will be replaced by LF in org.netbeans.modules.nodejs/pom.xml.
The file will have its original line endings in your working directory.
add 'org.netbeans.modules.nodejs/pom.xml'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/DefaultExectable.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ExplorerPanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/LineConverter.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSExecutable.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSFileOwnerQueryImpl.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSProject.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectFactory.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectProperties.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectSources.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJsClassPathProvider.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJsEncodingQuery.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeSharabilityQuery.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ProjectMetadata.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ProjectMetadataImpl.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/PropertiesPanel.form'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/PropertiesPanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ScriptResolver.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/actions/RunAction.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/jdk7/SymbolicLinkSupport.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/json/JsonPanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/json/ObjectMapperProvider.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/json/SimpleJSONParser.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/libraries/LibrariesPanel.form'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/libraries/LibrariesPanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/libraries/OneLibraryPanel.form'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/libraries/OneLibraryPanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/AddLibraryAction.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/FileObjectComparator.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/LibrariesChildFactory.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/LibraryFilterNode.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/LibraryNodeChildren.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/NodeJSLogicalViewProvider.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/ProjectNodeKey.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/ProjectNodeKeyTypes.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/options/NodeOptionsPanelController.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/options/NodePanel.form'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/options/NodePanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/registry/FileChangeRegistry.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui/UiUtil.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/ImportantFiles.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/ImportantFilesChildFactory.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/Key.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/KeyType.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/ProjectChildren.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/RootNode.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/SourcesChildFactory.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardIterator.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardKeys.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardPanel.form'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardPanel.java'
add 'org.netbeans.modules.nodejs/src/main/nbm/manifest.mf'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/layer.xml'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/libraries/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/node/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/options/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/hollow.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/js.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/libBadge.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/libs.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/logo.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/logoBadge.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/Empty.js'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorld.js'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorldProjectDescription.html'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorldProjectTemplate.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/Module.js'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/_package.json'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/npmignore'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/script'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/ui2/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/usrEnvNodeResolver.xml'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/wizard/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/test/java/org/netbeans/modules/nodejs/json/MetadataTest.java'
add 'org.netbeans.modules.nodejs/src/test/java/org/netbeans/modules/nodejs/json/SimpleJSONParserTest.java'
add 'org.netbeans.modules.nodejs/src/test/java/org/netbeans/modules/nodejs/registry/FileChangeRegistryTest.java'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/bad_1.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/bad_2.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/bad_3.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/bad_4.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_0.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_1.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_10.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_2.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_3.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_4.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_5.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_6.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_7.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_8.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_9.json'
add 'pom.xml'
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m dos2unix org.netbeans.modules.nodejs/nb-configuration.xml 
dos2unix: converting file org.netbeans.modules.nodejs/nb-configuration.xml to Unix format ...
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls
[0m[01;34morg.netbeans.modules.nodejs[0m  pom.xml  README.md  [01;34mtarget[0m
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls
[0m[01;34morg.netbeans.modules.nodejs[0m  pom.xml  README.md  [01;34mtarget[0m
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m mvn clean
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
[INFO] Scanning for projects...
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Build Order:
[INFO] 
[INFO] netbeans-nodejs
[INFO] NodeJS Projects
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building netbeans-nodejs 2.0
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] --- maven-clean-plugin:2.4.1:clean (default-clean) @ netbeans-nodejs ---
[INFO] Deleting /home/tim/work/personal/netbeans-nodejs/target
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building NodeJS Projects 2.0
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] --- maven-clean-plugin:2.4.1:clean (default-clean) @ nodejs ---
[INFO] Deleting /home/tim/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/target
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO] 
[INFO] netbeans-nodejs ................................... SUCCESS [0.137s]
[INFO] NodeJS Projects ................................... SUCCESS [0.065s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 1.185s
[INFO] Finished at: Sun Dec 02 00:31:29 EST 2012
[INFO] Final Memory: 8M/245M
[INFO] ------------------------------------------------------------------------
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls -l
total 8
drwxr-xr-x 3 tim tim 2048 Dec  2 00:31 [0m[01;34morg.netbeans.modules.nodejs[0m
-rw-r--r-- 1 tim tim 3702 Dec  1 23:26 pom.xml
-rw-r--r-- 1 tim tim   83 Dec  2 00:23 README.md
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m mv org.netbeans.modules.nodejs/[K node-projects
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#	[31mmodified:   .gitignore[m
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#	[31mnode-projects/[m
#	[31mpom.xml[m
no changes added to commit (use "git add" and/or "git commit -a")
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git add -A --dry-run
add '.gitignore'
add 'node-projects/nb-configuration.xml'
warning: CRLF will be replaced by LF in node-projects/pom.xml.
The file will have its original line endings in your working directory.
add 'node-projects/pom.xml'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/DefaultExectable.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ExplorerPanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/LineConverter.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSExecutable.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSFileOwnerQueryImpl.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProject.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectFactory.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectProperties.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectSources.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJsClassPathProvider.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJsEncodingQuery.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeSharabilityQuery.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ProjectMetadata.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ProjectMetadataImpl.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/PropertiesPanel.form'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/PropertiesPanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ScriptResolver.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/actions/RunAction.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/jdk7/SymbolicLinkSupport.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/json/JsonPanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/json/ObjectMapperProvider.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/json/SimpleJSONParser.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/LibrariesPanel.form'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/LibrariesPanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/OneLibraryPanel.form'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/OneLibraryPanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/AddLibraryAction.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/FileObjectComparator.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/LibrariesChildFactory.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/LibraryFilterNode.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/LibraryNodeChildren.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/NodeJSLogicalViewProvider.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/ProjectNodeKey.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/ProjectNodeKeyTypes.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/options/NodeOptionsPanelController.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/options/NodePanel.form'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/options/NodePanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/registry/FileChangeRegistry.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui/UiUtil.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/ImportantFiles.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/ImportantFilesChildFactory.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/Key.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/KeyType.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/ProjectChildren.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/RootNode.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/SourcesChildFactory.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardIterator.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardKeys.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardPanel.form'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardPanel.java'
add 'node-projects/src/main/nbm/manifest.mf'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/Bundle.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/layer.xml'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/libraries/Bundle.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/node/Bundle.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/options/Bundle.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/hollow.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/js.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/libBadge.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/libs.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/logo.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/logoBadge.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/Empty.js'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorld.js'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorldProjectDescription.html'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorldProjectTemplate.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/Module.js'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/_package.json'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/npmignore'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/script'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/ui2/Bundle.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/usrEnvNodeResolver.xml'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/wizard/Bundle.properties'
add 'node-projects/src/test/java/org/netbeans/modules/nodejs/json/MetadataTest.java'
add 'node-projects/src/test/java/org/netbeans/modules/nodejs/json/SimpleJSONParserTest.java'
add 'node-projects/src/test/java/org/netbeans/modules/nodejs/registry/FileChangeRegistryTest.java'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_1.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_2.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_3.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_4.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_0.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_1.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_10.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_2.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_3.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_4.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_5.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_6.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_7.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_8.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_9.json'
add 'pom.xml'
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git add -A
warning: CRLF will be replaced by LF in node-projects/pom.xml.
The file will have its original line endings in your working directory.
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m dos2unix nod-[Ke-projects/pom.xml 
dos2unix: converting file node-projects/pom.xml to Unix format ...
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m dos2unix no[K[Kpom.xml 
dos2unix: converting file pom.xml to Unix format ...
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls
[0m[01;34mnode-projects[0m  pom.xml  README.md
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m dos[K[K[Kls
[0m[01;34mnode-projects[0m  pom.xml  README.md
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m md README.md 
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
^C]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls
[0m[01;34mnode-projects[0m  pom.xml  README.md
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m cat README.md | md
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
<h1>nb-nodejs</h1>

<p>NodeJS support for NetBeans, originally hosted on netbeans.org.</p>

<p>Provides a project type and support for running <a href="nodejs.org">NodeJS</a> 
projects and files in the <a href="http://netbeans.org">NetBeans</a> IDE.</p>

<h2>Features</h2>

<ul>
<li>A NodeJS project type which uses Node's built-in
 metadata: Any folder with a  <code>package.json</code> file is a project</li>
<li>Support for running projects or individual files in Node</li>
<li>Detects dependencies by scanning sources, understands and can update 
 <code>package.json</code> metadata</li>
<li>Support for adding libraries to a project using <code>npm</code> under the hood</li>
<li>Clickable stack traces in the output window
    * Ability to download and open NodeJS's sources as links in a stack trace</li>
<li>Allows the IDE to recognize scripts beginning with
   #!/usr/bin/env node
 as a Javascript source</li>
</ul>

<p>See <a href="http://timboudreau.com/blog/read/NetBeans_Tools_for_Node_js">this blog</a>
for a broader description of the project.</p>

<p>It is now under the licensed under the simple MIT license, which amounts to
do what you want with it but give credit where credit is due.</p>

]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m cat README.md | md
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
<h1>nb-nodejs</h1>

<p>NodeJS support for NetBeans, originally hosted on netbeans.org.</p>

<p>Provides a project type and support for running <a href="nodejs.org">NodeJS</a> 
projects and files in the <a href="http://netbeans.org">NetBeans</a> IDE.</p>

<h2>Features</h2>

<ul>
<li>A NodeJS project type which uses Node's built-in
 metadata: Any folder with a  <code>package.json</code> file is a project</li>
<li>Support for running projects or individual files in Node</li>
<li>Detects dependencies by scanning sources, understands and can update 
 <code>package.json</code> metadata</li>
<li>Support for adding libraries to a project using <code>npm</code> under the hood</li>
<li>Clickable stack traces in the output window
<ul><li>Ability to download and open NodeJS's sources as links in a stack trace</li></ul></li>
<li>Allows the IDE to recognize scripts beginning with
   #!/usr/bin/env node
 as a Javascript source</li>
</ul>

<p>See <a href="http://timboudreau.com/blog/read/NetBeans_Tools_for_Node_js">this blog</a>
for a broader description of the project.</p>

<p>It is now under the licensed under the simple MIT license, which amounts to
do what you want with it but give credit where credit is due.</p>

]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m cat README.md | md
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
<h1>nb-nodejs</h1>

<p>NodeJS support for NetBeans, originally hosted on netbeans.org.</p>

<p>Provides a project type and support for running <a href="nodejs.org">NodeJS</a> 
projects and files in