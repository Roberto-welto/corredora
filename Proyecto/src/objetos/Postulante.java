package modelo;

import java.util.Date;

public class Postulante extends Persona {
    // Atributos
    private String ecivil, email, indOrg, titulo, direccion, manzana, sitio, comuna, region, depto;
    private int fonoDom, fonoTrab, fonoMovil, codPostal, nCargas, ptjObtenido;
    private long montoAhorrado;
    private Conyuge conyuge;
    private FichaPostulacion ficha;
    private byte[] foto;
    
    // Setters
    public void setECivil(String ec) {
        this.ecivil = ec;
    }
    public void setEmail(String em) {
        this.email = em;
    }
    public void setIndOrg(String io) {
        this.indOrg = io;
    }
    public void setTitulo(String t) {
        this.titulo = t;
    }
    public void setDireccion(String d) {
        this.direccion = d;
    }
    public void setManzana(String m) {
        this.manzana = m;
    }
    public void setSitio(String s) {
        this.sitio = s;
    }
    public void setComuna(String c) {
        this.comuna = c;
    }
    public void setRegion(String r) {
        this.region = r;
    }
    public void setDepto(String d) {
        this.depto = d;
    }
    public void setFonoDom(int fd) {
        this.fonoDom = fd;
    }
    public void setFonoTrab(int ft) {
        this.fonoTrab = ft;
    }
    public void setFonoMovil(int fm) {
        this.fonoMovil = fm;
    }
    public void setCodPostal(int cp) {
        this.codPostal = cp;
    }
    public void setNCargas(int nc) {
        this.nCargas = nc;
    }
    public void setPtjObtenido(int ptj) {
        this.ptjObtenido = ptj;
    }
    public void setMontoAhorrado(long m) {
        this.montoAhorrado = m;
    }
    public void setConyuge(Conyuge c) {
        this.conyuge = c;
    }
    public void setFicha(FichaPostulacion fp) {
        this.ficha = fp;
    }
    public void setFoto(byte[] f) {
        this.foto = f;
    }
    
    // Getters
    public String getECivil() {
        return this.ecivil;
    }
    public String getEmail() {
        return this.email;
    }
    public String getIndOrg() {
        return this.indOrg;
    }
    public String getTitulo() {
        return this.titulo;
    }
    public String getDireccion() {
        return this.direccion;
    }
    public String getManzana() {
        return this.manzana;
    }
    public String getSitio() {
        return this.sitio;
    }
    public String getComuna() {
        return this.comuna;
    }
    public String getRegion() {
        return this.region;
    }
    public String getDepto() {
        return this.depto;
    }
    public int getFonoDom() {
        return this.fonoDom;
    }
    public int getFonoTrab() {
        return this.fonoTrab;
    }
    public int getFonoMovil() {
        return this.fonoMovil;
    }
    public int getCodPostal() {
        return this.codPostal;
    }
    public int getNCargas() {
        return this.nCargas;
    }
    public int getPtjObtenido() {
        return this.ptjObtenido;
    }
    public long getMontoAhorrad() {
        return this.montoAhorrado;
    }
    public Conyuge getConyuge() {
        return this.conyuge;
    }
    public FichaPostulacion getFicha() {
        return this.ficha;
    }
    public byte[] getFoto() {
        return this.foto;
    }
    
    // Constructores
    // Con parámetros
    public Postulante(int r, char d, String n, String ap, String am, String na, Date fn) {
        super(r, d, n, ap, am, na, fn);
    }
    
    // Sin parámetros
    public Postulante() {
        super();
    }
}
