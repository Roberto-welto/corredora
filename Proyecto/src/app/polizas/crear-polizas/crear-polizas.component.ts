import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Poliza } from '../poliza.model';
import { TipoPolizasService } from 'src/app/shared/tipo-polizas.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CompaniaService } from 'src/app/shared/companias.service';
import { Compania } from 'src/app/shared/compania.model';

@Component({
  selector: 'app-crear-polizas',
  templateUrl: './crear-polizas.component.html',
  styleUrls: ['./crear-polizas.component.css']
})
export class CrearPolizasComponent implements OnInit {
  polizaForm: FormGroup;
  polizas: Poliza[] ;
  compania: Compania;
  constructor(private tipoPolizaService: TipoPolizasService,
              private dataStorageService: DataStorageService,
              private companiaService: CompaniaService) { }

  ngOnInit() {
    this.initForm();
  }
  setCompania(){
    let nombreCompania = this.polizaForm.value['inmobiliaria'].toUpperCase();
    let compania = this.companiaService.getCompania(nombreCompania);
    this.compania = compania;
    this.polizaForm.controls['tasa'].setValue(compania.tasa)
  }
  setTotal(){
    let totalDias = (new Date(this.polizaForm.value['fechaVencimiento']).getTime() - new Date(this.polizaForm.value['fechaSolicitud']).getTime()) / (1000 * 3600 * 24);
    let total = (this.polizaForm.value['montoCuota'] * this.polizaForm.value['tasa'])/this.compania.diasAnnio*totalDias;
    this.polizaForm.controls['total'].setValue(total);
  }
  crearPoliza(){
    
    this.polizas = this.tipoPolizaService.getPolizasAlpha();
    const poliza = new Poliza(this.polizaForm.value['nroSolicitud'], this.polizaForm.value['fechaSolicitud'], this.polizaForm.value['inmobiliaria'],
    this.polizaForm.value['centroGastos'], this.polizaForm.value['nombreProyecto'], this.polizaForm.value['unidad'],
    this.polizaForm.value['nombre'], this.polizaForm.value['rut'], this.polizaForm.value['direccion'], this.polizaForm.value['itemFinan'],
    this.polizaForm.value['montoUf'], this.polizaForm.value['fechaVencimiento'], this.polizaForm.value['fechaVigencia'], this.polizaForm.value['total']);
    let polizaObject = {...poliza};
    if(confirm("Desea guardar esta poliza?")){
      try{
        this.dataStorageService.storePolizasAlpha(polizaObject);
        alert("Se ha guardado la poliza con exito");
      } 
      catch(e){
        console.log(e)
      }
      this.polizaForm.reset();
    } else {
      alert("No se guardara la poliza");
    }
   
  }
  private initForm(){
    let nroSolicitud = '';
    let fechaSolicitud = '';
    let centroGastos = '';
    let inmobiliaria = '';
    let nombreProyecto = '';
    let unidad = '';
    let itemFinan = '';
    let montoUf = '';
    let fechaVencimiento = '';
    let fechaVigencia = '';
    let rut = '';
    let direccion = '';
    let nombre = '';
    let montoCuota = '';
    let tasa = '';
    let total = '';
    this.polizaForm = new FormGroup({
      'nroSolicitud': new FormControl(nroSolicitud, Validators.required),
      'fechaSolicitud': new FormControl(fechaSolicitud, Validators.required),
      'centroGastos': new FormControl(centroGastos, Validators.required),
      'inmobiliaria': new FormControl(inmobiliaria, Validators.required),
      'nombreProyecto': new FormControl(nombreProyecto, Validators.required),
      'unidad': new FormControl(unidad, Validators.required),
      'itemFinan': new FormControl(itemFinan, Validators.required),
      'montoUf': new FormControl(montoUf, Validators.required),
      'fechaVencimiento': new FormControl(fechaVencimiento, Validators.required),
      'fechaVigencia': new FormControl(fechaVigencia, Validators.required),
      'rut': new FormControl(rut, Validators.required),
      'direccion': new FormControl(direccion, Validators.required),
      'nombre': new FormControl(nombre, Validators.required),
      'montoCuota': new FormControl(montoCuota, Validators.required),
      'tasa': new FormControl(tasa, Validators.required),
      'total': new FormControl(total)
    });
  }
}
