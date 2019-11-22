import { Injectable } from "@angular/core";
import { Compania } from './compania.model';
@Injectable({providedIn: 'root'})
export class CompaniaService{
    private companias: Compania[] = [
        new Compania(0, "SOCOVESA", "96.757.030-3", 360, 100, 1.9),
        new Compania(1, "FUNDAMENTA", "76787430 - 8", 365, 200, 2.5)
    ]
    constructor(){}
    getCompania(nombreCompania: string){
        let compania: Compania;
        compania = this.companias.find(compania => compania.nombre == nombreCompania);
        return compania;
    }
}