import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { TipoPolizasService } from 'src/app/shared/tipo-polizas.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Poliza } from '../poliza.model';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-subir-polizas',
  templateUrl: './subir-polizas.component.html',
  styleUrls: ['./subir-polizas.component.css']
})
export class SubirPolizasComponent implements OnInit {
  file: File;
  polizasFireStore: Poliza[];
  polizas: any;
  arrayBuffer: any;
  constructor(private tipoPolizas: TipoPolizasService,
              private dataStorage: DataStorageService,
              private fireStore: AngularFirestore ) { }

  ngOnInit() {
  }
  excelUpdate($event){
    this.file = $event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      let data = new Uint8Array(this.arrayBuffer);
      let arr = new Array();
      for(let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      let bstr = arr.join("");
      let workbook = XLSX.read(bstr, {type: "binary"});
      let first_sheet_name = workbook.SheetNames[0];
      let worksheet = workbook.Sheets[first_sheet_name];
      let arrayP = XLSX.utils.sheet_to_json(worksheet, {raw: false, dateNF: 'dd/mm/yyyy'});
      this.polizas = arrayP.slice(3);
      alert("Se ha procesado con exito el archivo")
    }
    fileReader.readAsArrayBuffer(this.file);
  }
  subirPolizas(){
    if(confirm("Esta seguro de que desea subir este archivo?")){
      try{     
      setTimeout(() => {
        this.dataStorage.storePolizas(this.polizas);
        alert("Se ha subido con exito el archivo")
        try{
          this.dataStorage.fetchEverything();
          setTimeout(() => {
          let polizas = this.tipoPolizas.getTipoPoliza();
          let poliza1;
          let poliza2;
          let poliza3 = new Array();
          for(let poliza of polizas){
          poliza1 = Object.values(poliza);
          poliza2 = new Poliza(poliza1[33], poliza1[36], poliza1[0], poliza1[0], poliza1[1], poliza[0], poliza1[2], poliza1[3], poliza1[10], poliza[14], poliza1[17], poliza1[16], poliza1[16], "0");
          poliza3.push(poliza2);
          this.tipoPolizas.setPolizasBeta(poliza3);
          } 
          alert("Las polizas fueron cargadas con exito al sistema");
          }, 2000)
          
        } catch(e){
          console.log(e)
        }
      }, 1500);
    }catch(e){
      alert("Ha ocurrido un error");
      console.log(e);
      }
    } else {
      
    }
  }
}
