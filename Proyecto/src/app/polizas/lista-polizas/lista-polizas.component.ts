import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TipoPolizasService } from 'src/app/shared/tipo-polizas.service';
import { Poliza } from '../poliza.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lista-polizas',
  templateUrl: './lista-polizas.component.html',
  styleUrls: ['./lista-polizas.component.css']
})
export class ListaPolizasComponent implements OnInit {
  polizas: Poliza[];
  polizaArray: Poliza[];
  polizasDetalladas: Poliza;
  dataSource;
  displayedColumns: string[] = ["Fecha solicitud", "Nro. Poliza", "Inmobiliaria", "Proyecto", "Detalle", "Aprobar", "Rechazar"]
  constructor(private tipoPolizas: TipoPolizasService,
            private router: Router,
            private route: ActivatedRoute,
            private dataStorage: DataStorageService) { }
  @ViewChild(MatPaginator) paginator : MatPaginator;
  
  ngOnInit() {
    if(this.tipoPolizas.getPolizasBeta()){
      this.polizas = this.tipoPolizas.getPolizasBeta().concat(this.tipoPolizas.getPolizasAlpha());
      this.dataSource = new MatTableDataSource(this.polizas);
      this.dataSource.paginator = this.paginator;
    } else{
      alert("No se han encontrado polizas en el sistema");
    }
    console.log(this.polizas);

  }
  getDetalle(i: number){
    console.log(i);
    //console.log(this.polizas[i]);
    this.polizasDetalladas = this.polizas[i];
    console.log(this.polizasDetalladas);
    this.tipoPolizas.setPoliza(this.polizasDetalladas);
    this.router.navigate(['../detallePoliza'], {relativeTo: this.route});
    
  }
  filtrar(form: NgForm){
    const desde = form.value.desde;
    const hasta = form.value.hasta;
    const nroPoliza = form.value.nroPoliza;
    const inmobiliaria = form.value.inmobiliaria;
    console.log(desde + " " + hasta + " " + nroPoliza + " " + inmobiliaria);
    if(desde != "" && hasta != "" && nroPoliza != "" && inmobiliaria != ""){
      alert("Solo puede filtrar las polizas usando los campos desde y hasta juntos o haciendo uso de los campos nro poliza o inmobiliaria de forma individual");
    } else {
    if(desde != "" && hasta != ""){
      let desdeArray = this.polizas.filter(function(poliza) {
        return poliza.fechaSolicitud == desde && poliza.fechaVencimiento == hasta;
      });
      form.value.nroPoliza = "";
      form.value.inmobiliaria = "";
      this.dataSource = desdeArray;
    } else if(nroPoliza != ""){
      let nroPolizaArray = this.polizas.filter(function(poliza) {
        return poliza.nroSolicitud == nroPoliza;
      });
      this.dataSource = nroPolizaArray;
      form.value.desde = "";
      form.value.hasta = "";
      form.value.inmobiliaria = "";
    } else if(inmobiliaria != ""){
      let inmobiliariaArray = this.polizas.filter(function(poliza) {
        return poliza.filial == inmobiliaria;
      });
      this.dataSource = inmobiliariaArray;
      form.value.desde = "";
      form.value.hasta = "";
      form.value.nroPoliza = "";
    }
  }
  }
  cerrarPoliza(i: number){
    this.polizasDetalladas = this.polizas[i];
    this.tipoPolizas.setPolizasGamma(this.polizasDetalladas);
    console.log(this.tipoPolizas.getPolizasGamma());
  }
  limpiarFiltros(){
    if(this.tipoPolizas.getPolizasBeta()){
      this.dataSource = this.tipoPolizas.getPolizasBeta().concat(this.tipoPolizas.getPolizasAlpha());
    } else{
      alert("No se han encontrado polizas en el sistema");
    }
    console.log(this.polizas);
  }

    

  
}
