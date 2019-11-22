export class Poliza {
    public nroSolicitud;
    public fechaSolicitud;
    public filial: string;
    public centroGastos: string;
    public nombreProyecto: string;
    public unidad: string;
    public nombre: string;
    public rut: string;
    public direccion: string;
    public itemFinanciamiento: string;
    public montoUf: string;
    public fechaVencimiento: string;
    public fechaVigencia: string;
    public total: string;
    constructor(nroSolicitud: string, fechaSolucitud: string, filial: string, centroGastos: string, nombreProyecto: string, unidad: string, nombre: string, rut: string, direccion: string, itemFinanciamiento: string,
        montoUf: string, fechaVencimiento: string, fechaVigencia: string, total: string){
        this.nroSolicitud = nroSolicitud;
        this.fechaSolicitud = fechaSolucitud;
        this.filial = filial;
        this.centroGastos = centroGastos;
        this.nombreProyecto = nombreProyecto;
        this.unidad = unidad;
        this.nombre = nombre;
        this.rut = rut;
        this.direccion = direccion;
        this.itemFinanciamiento = itemFinanciamiento;
        this.montoUf = montoUf;
        this.fechaVencimiento = fechaVencimiento;
        this.fechaVigencia = fechaVigencia;
        this.total = total;
    }
}