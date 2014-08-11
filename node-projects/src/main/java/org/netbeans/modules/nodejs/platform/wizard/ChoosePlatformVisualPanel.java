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

import java.awt.GridBagConstraints;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import javax.swing.ButtonGroup;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import org.netbeans.modules.nodejs.api.NodeJSPlatformType;
import org.openide.util.NbBundle.Messages;

@Messages ({"CHOOSE_TYPE=Choose A Platform Type", "TYPE=Platform Type"})
public final class ChoosePlatformVisualPanel extends JPanel {
    private final ButtonGroup group = new ButtonGroup();
    private NodeJSPlatformType type;

    /**
     * Creates new form PlatformVisualPanel1
     */
    public ChoosePlatformVisualPanel () {
        initComponents();
        GridBagConstraints constraints = new GridBagConstraints();
        constraints.gridy = 0;
        constraints.anchor = GridBagConstraints.NORTHWEST;
        constraints.weightx = 1;
        constraints.weighty = 1;
        add( new JLabel( Bundle.CHOOSE_TYPE() ) );
        List<NodeJSPlatformType> types = new ArrayList<>( NodeJSPlatformType.allTypes() );
        Collections.sort( types );

        constraints.anchor = GridBagConstraints.CENTER;
        constraints.weightx = 1;
        constraints.weighty = 0;

        int max = types.size();
        for (int i = 0; i < max; i++) {
            constraints.gridy = i + 1;
            final NodeJSPlatformType type = types.get( i );
            final JRadioButton button = new JRadioButton( type.displayName() );
            button.putClientProperty( "type", type );
            group.add( button );
            add( button, constraints );
            button.addActionListener( new ActionListener() {

                @Override
                public void actionPerformed ( ActionEvent ae ) {
                    if (button.isSelected()) {
                        setType( type );
                    }
                }

            } );
        }
    }

    @Override
    public String getName () {
        return Bundle.TYPE();
    }

    public void setType ( NodeJSPlatformType type ) {
        if (this.type != type) {
            NodeJSPlatformType old = this.type;
            this.type = type;
            firePropertyChange( "type", old, type );
        }
    }

    public NodeJSPlatformType getType () {
        return type;
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        setLayout(new java.awt.GridBagLayout());
    }// </editor-fold>//GEN-END:initComponents

    // Variables declaration - do not modify//GEN-BEGIN:variables
    // End of variables declaration//GEN-END:variables
}
