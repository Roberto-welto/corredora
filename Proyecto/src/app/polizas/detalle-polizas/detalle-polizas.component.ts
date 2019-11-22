import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { TipoPolizasService } from 'src/app/shared/tipo-polizas.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalle-polizas',
  templateUrl: './detalle-polizas.component.html',
  styleUrls: ['./detalle-polizas.component.css']
})
export class DetallePolizasComponent implements OnInit, OnDestroy {
  poliza = this.tipoPolizaService.getPoliza();
  detalleForm: FormGroup;
  constructor(private tipoPolizaService: TipoPolizasService,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.initForm();
  }
  ngOnDestroy(){
    this.tipoPolizaService.setPoliza(null);
  }
  private initForm(){
    let fechaSolicitud = this.poliza.fechaSolicitud;
    let centroGastos = this.poliza.centroGastos;
    let inmobiliaria = this.poliza.filial;
    let nombreProyecto = this.poliza.nombreProyecto;
    let rut = this.poliza.rut;
    let fechaNacimiento = this.poliza.fechaVencimiento;
    let comprador = this.poliza.nombre;
    let tipoPersona = this.poliza.centroGastos;
    this.detalleForm = new FormGroup({
      'fechaSolicitud': new FormControl(fechaSolicitud),
      'centroGastos': new FormControl(centroGastos),
      'inmobiliaria': new FormControl(inmobiliaria),
      'nombreProyecto': new FormControl(nombreProyecto),
      'rut': new FormControl(rut),
      'fechaNacimiento': new FormControl(fechaNacimiento),
      'comprador': new FormControl(comprador),
      'tipoPersona': new FormControl(tipoPersona)
    });
    //fix a problem with dates
  }
}
