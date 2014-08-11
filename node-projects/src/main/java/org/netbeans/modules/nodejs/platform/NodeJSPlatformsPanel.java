/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.netbeans.modules.nodejs.platform;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.HashSet;
import java.util.Set;
import javax.swing.DefaultListModel;
import javax.swing.JButton;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import org.netbeans.modules.nodejs.api.NodeJSExecutable;
import org.netbeans.modules.nodejs.api.NodeJSPlatformType;
import org.netbeans.modules.nodejs.ui.UiUtil;

/**
 *
 * @author Tim Boudreau
 */
final class NodeJSPlatformsPanel extends javax.swing.JPanel {

    public NodeJSPlatformsPanel () {
        initComponents();
        for (final NodeJSPlatformType type : NodeJSPlatformType.allTypes()) {
            System.out.println( "TYPE " + type.displayName() );
            if (type.canAdd()) {
                JButton addButton = new JButton( type.displayName() );
                addButton.addActionListener( new ActionListener() {
                    @Override
                    public void actionPerformed ( ActionEvent ae ) {
                        String name = type.add();
                        refresh( name );
                    }
                } );
                addPanel.add( addButton );
            }
        }
        platformList.addListSelectionListener( new ListSelectionListener() {

            @Override
            public void valueChanged ( ListSelectionEvent lse ) {
                Object o = platformList.getSelectedValue();
                if (o instanceof NodeJSExecutable) {
                    NodeJSExecutable n = (NodeJSExecutable) o;
                    NodeJSPlatformsPanel.this.nameField.setText( n.name() );
                }
            }
        } );
        refresh( null );
        UiUtil.prepareComponents( this );
    }

    private void refresh ( String nm ) {
        Object old = platformList.getSelectedValue();
        String toSelect = "default";
        if (nm != null) {
            if (old != null && old instanceof NodeJSExecutable) {
                toSelect = ((NodeJSExecutable) old).name();
            }
        } else {
            toSelect = nm;
        }
        DefaultListModel<NodeJSExecutable> mdl = new DefaultListModel<NodeJSExecutable>();
        Set<NodeJSExecutable> seen = new HashSet<>();
        NodeJSExecutable selectMe = null;
        for (NodeJSExecutable exe : NodeJSPlatforms.all()) {
            if (!seen.contains( exe )) {
                mdl.addElement( exe );
                seen.add( exe );
            }
            if (exe.name().equals( toSelect )) {
                selectMe = exe;
            }
        }
        platformList.setModel( mdl );
        if (selectMe != null) {
            platformList.setSelectedValue( selectMe, true );
        }
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings ("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        platforms = new javax.swing.JScrollPane();
        platformList = new javax.swing.JList();
        pathLabel = new javax.swing.JLabel();
        pathField = new javax.swing.JTextField();
        addPanel = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        nameField = new javax.swing.JTextField();
        jButton1 = new javax.swing.JButton();

        platformList.setModel(new javax.swing.AbstractListModel() {
            String[] strings = { "Item 1", "Item 2", "Item 3", "Item 4", "Item 5" };
            public int getSize() { return strings.length; }
            public Object getElementAt(int i) { return strings[i]; }
        });
        platforms.setViewportView(platformList);

        pathLabel.setLabelFor(pathField);
        org.openide.awt.Mnemonics.setLocalizedText(pathLabel, org.openide.util.NbBundle.getMessage(NodeJSPlatformsPanel.class, "NodeJSPlatformsPanel.pathLabel.text")); // NOI18N

        pathField.setEditable(false);
        pathField.setText(org.openide.util.NbBundle.getMessage(NodeJSPlatformsPanel.class, "NodeJSPlatformsPanel.pathField.text")); // NOI18N

        addPanel.setBorder(javax.swing.BorderFactory.createTitledBorder(org.openide.util.NbBundle.getMessage(NodeJSPlatformsPanel.class, "NodeJSPlatformsPanel.addPanel.border.title"))); // NOI18N
        addPanel.setLayout(new java.awt.FlowLayout(java.awt.FlowLayout.RIGHT));

        org.openide.awt.Mnemonics.setLocalizedText(jLabel1, org.openide.util.NbBundle.getMessage(NodeJSPlatformsPanel.class, "NodeJSPlatformsPanel.jLabel1.text")); // NOI18N

        nameField.setEditable(false);
        nameField.setText(org.openide.util.NbBundle.getMessage(NodeJSPlatformsPanel.class, "NodeJSPlatformsPanel.nameField.text")); // NOI18N

        org.openide.awt.Mnemonics.setLocalizedText(jButton1, org.openide.util.NbBundle.getMessage(NodeJSPlatformsPanel.class, "NodeJSPlatformsPanel.jButton1.text")); // NOI18N
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(platforms, javax.swing.GroupLayout.PREFERRED_SIZE, 258, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(addPanel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel1)
                            .addComponent(pathLabel))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(pathField)
                            .addComponent(nameField)))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addGap(0, 378, Short.MAX_VALUE)
                        .addComponent(jButton1)))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(pathLabel)
                            .addComponent(pathField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(jLabel1)
                            .addComponent(nameField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jButton1)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(addPanel, javax.swing.GroupLayout.PREFERRED_SIZE, 110, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addComponent(platforms, javax.swing.GroupLayout.DEFAULT_SIZE, 414, Short.MAX_VALUE))
                .addContainerGap())
        );
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        NodeJSExecutable exe = (NodeJSExecutable) platformList.getSelectedValue();
        NodeJSPlatforms.setDefault( exe.name() );
    }//GEN-LAST:event_jButton1ActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JPanel addPanel;
    private javax.swing.JButton jButton1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JTextField nameField;
    private javax.swing.JTextField pathField;
    private javax.swing.JLabel pathLabel;
    private javax.swing.JList platformList;
    private javax.swing.JScrollPane platforms;
    // End of variables declaration//GEN-END:variables
}
