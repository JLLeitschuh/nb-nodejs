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
package org.netbeans.modules.nodejs.platform.wizard;

import java.beans.PropertyChangeEvent;
import java.beans.PropertyChangeListener;
import java.io.File;
import javax.swing.event.ChangeListener;
import org.openide.WizardDescriptor;
import org.openide.WizardValidationException;
import org.openide.util.ChangeSupport;
import org.openide.util.HelpCtx;

public class ValidateNativeNodePanel implements WizardDescriptor.Panel<WizardDescriptor>, PropertyChangeListener {
    private final ChangeSupport supp = new ChangeSupport(this);
    /**
     * The visual component that displays this panel. If you need to access the
     * component from this class, just use getComponent().
     */
    private ValidateNativeNodeVisualPanel component;

    // Get the visual component for the panel. In this template, the component
    // is kept separate. This can be more efficient: if the wizard is created
    // but never displayed, or not all panels are displayed, it is better to
    // create only those which really need to be visible.
    @Override
    public ValidateNativeNodeVisualPanel getComponent () {
        if (component == null) {
            component = new ValidateNativeNodeVisualPanel();
            component.addPropertyChangeListener( "ok", this);
        }
        return component;
    }

    @Override
    public HelpCtx getHelp () {
        // Show no Help button for this panel:
        return HelpCtx.DEFAULT_HELP;
        // If you have context help:
        // return new HelpCtx("help.key.here");
    }

    @Override
    public boolean isValid () {
        return getComponent().isOk();
    }

    @Override
    public void addChangeListener ( ChangeListener l ) {
        supp.addChangeListener( l );
                
    }

    @Override
    public void removeChangeListener ( ChangeListener l ) {
        supp.removeChangeListener( l );
    }

    @Override
    public void readSettings ( WizardDescriptor wiz ) {
        // use wiz.getProperty to retrieve previous panel state
        File f = (File) wiz.getProperty( "file");
        getComponent().setFile(f);
    }

    @Override
    public void storeSettings ( WizardDescriptor wiz ) {
        // use wiz.putProperty to remember current panel state
        wiz.putProperty("info", getComponent().data());
    }

    @Override
    public void propertyChange ( PropertyChangeEvent pce ) {
        supp.fireChange();
    }

}
