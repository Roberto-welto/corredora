import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { TipoPolizasService } from './tipo-polizas.service';

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private fireStore: AngularFirestore,
                private polizaService: TipoPolizasService){}
    storePolizas(polizas: Array<[]>){
       for(let poliza of polizas){
            this.fireStore.collection('polizas').add(poliza);
            //necesita revision en la primera posicion del objeto al iniciar por primera vez la aplicacion
            //solucionado el problema de la posicion definiendo el objeto de las polizas como un modelo de objeto
         }
    }
    storePolizasAlpha(poliza: any){
       this.fireStore.collection('polizasAlpha').add(poliza)
    }
    fetchPolizas(){
       return this.fireStore.collection('polizas').snapshotChanges(); 
    }
    fetchPolizasAlpha(){
       return this.fireStore.collection('polizasAlpha').snapshotChanges();
    }
    fetchEverything(){
      setTimeout(() => {

     
      try{
         this.fetchPolizas().subscribe(data => {
           this.polizaService.setPolizasFireStore(data.map( e => {
             return{
               ...e.payload.doc.data()
             }
           }))
         })
         console.log("Se han llamado las polizas correctamente")
         } catch(e){
           console.log(e);
         }
         try{
           this.fetchPolizasAlpha().subscribe(data => {
             this.polizaService.setPolizasAlpha(data.map(e => {
               return{
                 ...e.payload.doc.data()
               }
             }))
           })
           console.log("Se han llamado las polizas correctamente")
         } catch(e){
           console.log(e);
         }
         ///
        }, 1500)
    }
} 
