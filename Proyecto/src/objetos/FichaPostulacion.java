package modelo;

import java.util.Date;

public class FichaPostulacion {
    // Atributos
    private int nroFolio;
    private String tituloSubsidio;
    private Date fechaPostulacion;
    private Receptor receptor;
    private Vivienda viviendaElegida;
    
    // Setters
    public void setNroFolio(int nf) {
        this.nroFolio = nf;
    }
    public void setTituloSubsidio(String ts) {
        this.tituloSubsidio = ts;
    }
    public void setFechaPostulacion(Date fp) {
        this.fechaPostulacion = fp;
    }
    public void setReceptor(Receptor r) {
        this.receptor = r;
    }
    public void setViviendaElegida(Vivienda v) {
        this.viviendaElegida = v;
    }
    
    // Getters
    public int getNroFolio() {
        return this.nroFolio;
    }
    public String getTituloSubsidio() {
        return this.tituloSubsidio;
    }
    public Date getFechaPostulacion() {
        return this.fechaPostulacion;
    }
    public Receptor getReceptor() {
        return this.receptor;
    }
    public Vivienda getViviendaElegida() {
        return this.viviendaElegida;
    }
    
    // Constructores
    // Con parámetros
    public FichaPostulacion(int nf, String ts, Date fp, Receptor r, Vivienda v) {
        this.nroFolio = nf;
        this.tituloSubsidio = ts;
        this.fechaPostulacion = fp;
        this.receptor = r;
        this.viviendaElegida = v;
    }
    
    // Sin parámetros
    public FichaPostulacion() {}
}
