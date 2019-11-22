package controlador;

import java.sql.Blob;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.CallableStatement;
import modelo.*;

public class Registro {
    public static boolean ejecutarAsigPtj() {
        try {
            Connection conexion = Conexion.getConexion();
            String callstr = "{call sp_asignacion_puntaje}";
            CallableStatement ejecutar = conexion.prepareCall(callstr);
            ejecutar.execute();
            ejecutar.close();
            conexion.close();
            return true;
        } catch (SQLException s) {
            System.out.println(s.getMessage());
            return false;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
    
    private static Conyuge buscarConyuge(int run) {
        try {
            Conyuge con = null;
            Connection conexion = Conexion.getConexion();
            String query = "SELECT c.run, c.dvrun, c.nombres, c.appat, c.apmat, n.nombre, c.fecnac " +
                           "FROM conyuge c JOIN nacionalidad n ON c.idnacion = n.idnacion " +
                           "WHERE runpos = ?";
            PreparedStatement buscar = conexion.prepareStatement(query);
            buscar.setInt(1, run);
            ResultSet registro = buscar.executeQuery();
            registro.next();
            if (registro.getRow() > 0) {
                con = new Conyuge(registro.getInt(1), registro.getString(2).charAt(0), registro.getString(3), registro.getString(4), registro.getString(5), registro.getString(6), registro.getDate(7));
            }
            registro.close();
            buscar.close();
            return con;
        } catch (SQLException s) {
            System.out.println(s.getMessage());
            return null;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
    
    private static Vivienda buscarVivienda(int id) {
        try {
            Vivienda viv = null;
            Connection conexion = Conexion.getConexion();
            String query = "SELECT v.idvivienda, tv.descripcion, c.nombre, r.nombre, v.valor " +
                           "FROM vivienda v JOIN tipo_vivienda tv ON v.idtipo = tv.idtipo " +
                           "JOIN comuna c ON v.idcomuna = c.idcomuna " +
                           "JOIN region r ON c.idregion = r.idregion " +
                           "WHERE v.idvivienda = ?";
            PreparedStatement buscar = conexion.prepareStatement(query);
            buscar.setInt(1, id);
            ResultSet registro = buscar.executeQuery();
            registro.next();
            if (registro.getRow() > 0) {
                viv = new Vivienda(registro.getInt(1), registro.getString(2), registro.getString(3), registro.getString(4), registro.getLong(5));
            }
            registro.close();
            conexion.close();
            return viv;
        } catch (SQLException s) {
            System.out.println(s.getMessage());
            return null;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
    
    private static Receptor buscarReceptor(int run) {
        try {
            Receptor rec = null;
            Connection conexion = Conexion.getConexion();
            String query = "SELECT * FROM receptor WHERE run = ?";
            PreparedStatement buscar = conexion.prepareStatement(query);
            buscar.setInt(1, run);
            ResultSet registro = buscar.executeQuery();
            registro.next();
            if (registro.getRow() > 0) {
                rec = new Receptor(registro.getInt(1), registro.getString(2).charAt(0), registro.getString(3), registro.getString(4), registro.getString(5));
            }
            registro.close();
            conexion.close();
            return rec;
        } catch (SQLException s) {
            System.out.println(s.getMessage());
            return null;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
    
    private static int obtNroCargas(int run) {
        try {
            int ncargas;
            Connection conexion = Conexion.getConexion();
            String query = "SELECT COUNT(*) FROM carga_familiar WHERE runpos = ?";
            PreparedStatement obtener = conexion.prepareStatement(query);
            obtener.setInt(1, run);
            ResultSet registro = obtener.executeQuery();
            registro.next();
            ncargas = registro.getInt(1);
            registro.close();
            conexion.close();
            return ncargas;
        } catch (SQLException s) {
            System.out.println(s.getMessage());
            return 0;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return 0;
        }
    }
    
    private static long obtMontoAhorrado(int run) {
        try {
            long monto;
            Connection conexion = Conexion.getConexion();
            String query = "SELECT SUM(monto) FROM deposito WHERE runpos = ?";
            PreparedStatement obtener = conexion.prepareStatement(query);
            obtener.setInt(1, run);
            ResultSet registro = obtener.executeQuery();
            registro.next();
            monto = registro.getLong(1);
            registro.close();
            conexion.close();
            return monto;
        } catch (SQLException s) {
            System.out.println(s.getMessage());
            return 0;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return 0;
        }
    }
    
    private static FichaPostulacion buscarFicha(int run) {
        try {
            FichaPostulacion fic = null;
            Connection conexion = Conexion.getConexion();
            String query = "SELECT f.idficha, t.nombre, f.fecpos, f.runrec, s.idvivienda " +
                           "FROM ficha_postulacion f JOIN titulo_subsidio t ON f.idtitulo = t.idtitulo " +
                           "JOIN solicitud s ON f.idsolicitud = s.idsolicitud " +
                           "WHERE f.runpos = ?";
            PreparedStatement buscar = conexion.prepareStatement(query);
            buscar.setInt(1, run);
            ResultSet registro = buscar.executeQuery();
            registro.next();
            if (registro.getRow() > 0) {
                fic = new FichaPostulacion(registro.getInt(1), registro.getString(2), registro.getDate(3), buscarReceptor(registro.getInt(4)), buscarVivienda(registro.getInt(5)));
            }
            buscar.close();
            conexion.close();
            return fic;
        } catch (SQLException s) {
            System.out.println(s.getMessage());
            return null;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
    
    public static Postulante consultaPostulante(String run) {
        try {
            Postulante pos = null;
            Connection conexion = Conexion.getConexion();
            String query = "SELECT p.run, p.dvrun, p.nombres, p.appat, p.apmat, n.nombre, p.fecnac, " +
                                  "p.ecivil, NVL(p.pueblo_ind_org, 'NO'), p.fonodom, p.fonotrab, p.fonomovil, " +
                                  "p.direccion, p.depto, p.manzana, p.sitio, c.nombre, r.nombre, " +
                                  "p.foto, p.email, tc.nombre, pp.puntaje_total " +
                           "FROM postulante p JOIN nacionalidad n ON p.idnacion = n.idnacion " +
                           "JOIN (certificado_titulo ct JOIN titulo_carrera tc ON ct.idtitulo = tc.idtitulo) ON p.run = ct.runpos " +
                           "JOIN comuna c ON p.idcomuna = c.idcomuna " +
                           "JOIN region r ON c.idregion = r.idregion " +
                           "JOIN puntaje_postulante pp ON p.run = pp.run_postulante " +
                           "WHERE p.run || '-' || p.dvrun = ?";
            PreparedStatement buscar = conexion.prepareStatement(query);
            buscar.setString(1, run);
            ResultSet registro = buscar.executeQuery();
            registro.next();
            if (registro.getRow() > 0) {
                pos = new Postulante(registro.getInt(1), registro.getString(2).charAt(0), registro.getString(3), registro.getString(4), registro.getString(5), registro.getString(6), registro.getDate(7));
                pos.setECivil(registro.getString(8));
                pos.setIndOrg(registro.getString(9));
                pos.setFonoDom(registro.getInt(10));
                pos.setFonoTrab(registro.getInt(11));
                pos.setFonoMovil(registro.getInt(12));
                pos.setDireccion(registro.getString(13));
                pos.setDepto(registro.getString(14));
                pos.setManzana(registro.getString(15));
                pos.setSitio(registro.getString(16));
                pos.setComuna(registro.getString(17));
                pos.setRegion(registro.getString(18));
                try {
                    Blob image = registro.getBlob(19);
                    if (image.length() > 0) {
                        pos.setFoto(image.getBytes(1, (int)image.length()));
                    }
                } catch (NullPointerException e) {
                    pos.setFoto(null);
                }
                pos.setEmail(registro.getString(20));
                pos.setTitulo(registro.getString(21));
                pos.setNCargas(obtNroCargas(pos.getRun()));
                pos.setConyuge(buscarConyuge(pos.getRun()));
                pos.setFicha(buscarFicha(pos.getRun()));
                pos.setMontoAhorrado(obtMontoAhorrado(pos.getRun()));
                pos.setPtjObtenido(registro.getInt(22));
            }
            return pos;
        } catch (SQLException s) {
            System.out.println(s.getMessage());
            return null;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
    
    public static int obtPromPtj() {
        try {
            int promedio;
            Connection conexion = Conexion.getConexion();
            String query = "SELECT AVG(puntaje_total) FROM puntaje_postulante";
            PreparedStatement obtener = conexion.prepareStatement(query);
            ResultSet registro = obtener.executeQuery();
            registro.next();
            promedio = registro.getInt(1);
            registro.close();
            conexion.close();
            return promedio;
        } catch (SQLException s) {
            System.out.println(s.getMessage());
            return 0;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return 0;
        }
    }
    
    public static boolean compExistenciaPuntajes() {
        try {
            boolean existencia;
            Connection conexion = Conexion.getConexion();
            String query = "SELECT COUNT(*) FROM puntaje_postulante";
            PreparedStatement comprobar = conexion.prepareStatement(query);
            ResultSet registro = comprobar.executeQuery();
            registro.next();
            existencia = (registro.getInt(1) > 0);
            registro.close();
            conexion.close();
            return existencia;
        } catch (SQLException s) {
            System.out.println(s.getMessage());
            return false;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}
