import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoPolizasService } from 'src/app/shared/tipo-polizas.service';
import { Poliza } from '../poliza.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lista-polizas-cerradas',
  templateUrl: './lista-polizas-cerradas.component.html',
  styleUrls: ['./lista-polizas-cerradas.component.css']
})
export class ListaPolizasCerradasComponent implements OnInit {
  polizasCerradas: Poliza[];
  dataSource;
  displayedColumns: string[] = ["Fecha solicitud", "Nro. Poliza", "Inmobiliaria", "Proyecto", "Detalle"] 
  constructor(private tipoPolizas: TipoPolizasService) { }
  @ViewChild(MatPaginator) paginator : MatPaginator;

  ngOnInit() {
    this.polizasCerradas = this.tipoPolizas.getPolizasGamma();
    this.dataSource = new MatTableDataSource(this.polizasCerradas);
    this.dataSource.paginator = this.paginator;
  }
  filtrar(f){
    
  }
}
