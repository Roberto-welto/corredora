export class Compania {
    public idCompania;
    public nombre;
    public rut;
    public diasAnnio;
    public primaMinima;
    public tasa;
    constructor(idCompania: number, nombre: string, rut: string,
         diasAnnio: number, primaMinima: number, tasa: number){
    this.idCompania = idCompania;
    this.nombre = nombre;
    this.rut = rut;
    this.diasAnnio = diasAnnio;
    this.primaMinima = primaMinima;
    this.tasa = tasa;
    }
}