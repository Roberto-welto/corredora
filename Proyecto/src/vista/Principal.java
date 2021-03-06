package vista;

import java.awt.Image;
import javax.swing.Icon;
import javax.swing.ImageIcon;
import controlador.*;
import javax.swing.JOptionPane;

public class Principal extends javax.swing.JFrame {

    /**
     * Creates new form Principal
     */
    public Principal() {
        Conexion.prepararConexion("localhost", 1521, "xe", "subsidio", "minvu");
        this.initComponents();
        ImageIcon imagen  = new ImageIcon("src/vista/icon.jpg");
        Icon icono = new ImageIcon(imagen.getImage().getScaledInstance(iconoMinvu.getWidth(),iconoMinvu.getHeight(),Image.SCALE_DEFAULT));
        this.iconoMinvu.setIcon(icono);
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        LblTitulo = new javax.swing.JLabel();
        iconoMinvu = new javax.swing.JLabel();
        BtnConsultarPos = new javax.swing.JButton();
        BtnEjecutarAsigPtj = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("Sistema integrado para subsidio habitacional");
        setBackground(new java.awt.Color(255, 255, 255));
        setIconImage(getIconImage());
        setLocationByPlatform(true);
        setResizable(false);

        LblTitulo.setFont(new java.awt.Font("Calibri", 1, 30)); // NOI18N
        LblTitulo.setText("Sistema Postulacion Subsidios ");

        BtnConsultarPos.setFont(new java.awt.Font("Tahoma", 1, 11)); // NOI18N
        BtnConsultarPos.setText("Consultar informacion de postulante al subsidio");
        BtnConsultarPos.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BtnConsultarPosActionPerformed(evt);
            }
        });

        BtnEjecutarAsigPtj.setFont(new java.awt.Font("Tahoma", 1, 11)); // NOI18N
        BtnEjecutarAsigPtj.setText("Ejecutar proceso de asignacion de puntaje");
        BtnEjecutarAsigPtj.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BtnEjecutarAsigPtjActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(iconoMinvu, javax.swing.GroupLayout.PREFERRED_SIZE, 159, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(LblTitulo))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(BtnConsultarPos, javax.swing.GroupLayout.PREFERRED_SIZE, 303, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(BtnEjecutarAsigPtj, javax.swing.GroupLayout.PREFERRED_SIZE, 289, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(iconoMinvu, javax.swing.GroupLayout.PREFERRED_SIZE, 166, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(LblTitulo))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(BtnConsultarPos, javax.swing.GroupLayout.PREFERRED_SIZE, 71, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(BtnEjecutarAsigPtj, javax.swing.GroupLayout.PREFERRED_SIZE, 71, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap())
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void BtnConsultarPosActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BtnConsultarPosActionPerformed
        if (Registro.compExistenciaPuntajes()) {
            BuscarRut busqueda = new BuscarRut();
            busqueda.setVisible(true);
        } else {
            JOptionPane.showMessageDialog(this, "¡ERROR! Debe ejecutar el proceso de asignación de puntajes antes de proceder la consulta de un postulante.", "Aviso de error", JOptionPane.ERROR_MESSAGE);
        }
    }//GEN-LAST:event_BtnConsultarPosActionPerformed

    private void BtnEjecutarAsigPtjActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BtnEjecutarAsigPtjActionPerformed
        boolean exito = Registro.ejecutarAsigPtj();
        if (exito) {
            JOptionPane.showMessageDialog(this, "¡Se ha ejecutado el proceso de asignación de puntajes!", "Aviso", JOptionPane.INFORMATION_MESSAGE);
        } else {
            JOptionPane.showMessageDialog(this, "No se ha podido ejecutar el proceso de asignación de puntajes.", "Aviso", JOptionPane.INFORMATION_MESSAGE);
        }
    }//GEN-LAST:event_BtnEjecutarAsigPtjActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Windows".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Principal.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Principal.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Principal.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Principal.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Principal().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton BtnConsultarPos;
    private javax.swing.JButton BtnEjecutarAsigPtj;
    private javax.swing.JLabel LblTitulo;
    private javax.swing.JLabel iconoMinvu;
    // End of variables declaration//GEN-END:variables
}
