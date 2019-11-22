package modelo;

import java.util.Date;

public abstract class Persona {
    // Atributos
    private int run;
    private char dv;
    private String nombres, apPaterno, apMaterno, nacionalidad;
    private Date fecnac;
    
    // Setters
    public void setRun(int r) {
        this.run = r;
    }
    public void setDV(char d) {
        this.dv = d;
    }
    public void setNombres(String n) {
        this.nombres = n;
    }
    public void setApPaterno(String p) {
        this.apPaterno = p;
    }
    public void setApMaterno(String m) {
        this.apMaterno = m;
    }
    public void setNacionalidad(String n) {
        this.nacionalidad = n;
    }
    public void setFecNac(Date fn) {
        this.fecnac = fn;
    }
    
    // Getters
    public int getRun() {
        return this.run;
    }
    public char getDV() {
        return this.dv;
    }
    public String getNombres() {
        return this.nombres;
    }
    public String getApPaterno() {
        return this.apPaterno;
    }
    public String getApMaterno() {
        return this.apMaterno;
    }
    public String getNacionalidad() {
        return this.nacionalidad;
    }
    public Date getFecNac() {
        return this.fecnac;
    }
    
    // Constructores
    // Con parámetros
    public Persona(int r, char d, String n, String ap, String am, String na, Date fn) {
        this.run = r;
        this.dv = d;
        this.nombres = n;
        this.apPaterno = ap;
        this.apMaterno = am;
        this.nacionalidad = na;
        this.fecnac = fn;
    }
    
    // Sin parámetros
    public Persona() {}
}
