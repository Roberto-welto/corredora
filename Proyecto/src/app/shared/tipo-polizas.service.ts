import { Poliza } from '../polizas/poliza.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TipoPolizasService{
    public polizas: any;
    public polizasBeta: any;
    public poliza: Poliza;
    public polizasAlpha: any;
    public polizasGamma: Poliza[];
    setTipoPoliza(polizas: any){
        const polizasArray = [];
        // const polizasArrayTest = [];
        for(let i in polizas){
        polizasArray.push([i, polizas[i]]);
        }
        this.polizas = polizasArray.slice(3);
        // console.log(this.polizas);
        // for(let i in this.polizas){
        //     polizasArrayTest.push([i, this.polizas[i][1]]);
        //     console.log(polizasArrayTest)
        // }
        
    }
    setPoliza(poliza: Poliza){
        this.poliza = poliza;
    }
    setPolizasFireStore(polizas: any){
        this.polizas = polizas;
        console.log(this.polizas);
    }
    setPolizasBeta(polizas: any){
        this.polizasBeta = polizas;
    }
    setPolizasAlpha(polizas: any){
        this.polizasAlpha = polizas;
    }
    setPolizasGamma(poliza: Poliza){
        this.polizasGamma.push(poliza);
    } 
    getTipoPoliza(){
        return this.polizas;
    }
    getPoliza(){
        return this.poliza;
    }
    getPolizasAlpha(){
        return this.polizasAlpha;
    }
    getPolizasBeta(){
        return this.polizasBeta;
    }
    getPolizasGamma(){
        return this.polizasGamma;
    }
}