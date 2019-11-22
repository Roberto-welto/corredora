package modelo;

public class Vivienda {
    // Atributos
    private int id;
    private String tipo, comuna, region;
    private long valor;
    
    // Setters
    public void setId(int i) {
        this.id = i;
    }
    public void setTipo(String t) {
        this.tipo = t;
    }
    public void setComuna(String c) {
        this.comuna = c;
    }
    public void setRegion(String r) {
        this.region = r;
    }
    public void setValor(long v) {
        this.valor = v;
    }
    
    // Getters
    public int getId() {
        return this.id;
    }
    public String getTipo() {
        return this.tipo;
    }
    public String getComuna() {
        return this.comuna;
    }
    public String getRegion() {
        return this.region;
    }
    public long getValor() {
        return this.valor;
    }
    
    // Constructores
    // Con parámetros
    public Vivienda(int i, String t, String c, String r, long v) {
        this.id = i;
        this.tipo = t;
        this.comuna = c;
        this.region = r;
        this.valor = v;
    }
    
    // Sin parámetros
    public Vivienda() {}
}
