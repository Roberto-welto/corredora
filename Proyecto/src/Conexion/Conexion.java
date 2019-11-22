package controlador;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

    private static String hostname;
    private static int port;
    private static String database, username, password;

    private static final String ORACLE_DRIVER_NAME = "oracle.jdbc.driver.OracleDriver";
    private static final String ORACLE_CONN_STRING = "jdbc:oracle:thin:@%s:%s:%s";

    public static void prepararConexion(String hn, int p, String db, String un, String pw) {
        hostname = hn;
        port = p;
        database = db;
        username = un;
        password = pw;
    }

    public static Connection getConexion() {
        Connection conexion = null;
        try {
            Class.forName(ORACLE_DRIVER_NAME);
            String url = String.format(ORACLE_CONN_STRING, new Object[] { hostname, port, database });
            conexion = DriverManager.getConnection(url, username, password);
            conexion.setAutoCommit(true);
            System.out.println("Conexion ok");
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return conexion;
    }

}
