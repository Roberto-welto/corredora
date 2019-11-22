import { Component, OnInit } from '@angular/core';
import { TipoPolizasService } from '../shared/tipo-polizas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersSistemaService } from '../shared/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tipoPolizas: TipoPolizasService,
              private router: Router,
              private route: ActivatedRoute,
              private fireLog: UsersSistemaService) { }

  ngOnInit() {
  }
  crearPolizas(){
    this.router.navigate(['crear'], {relativeTo: this.route});
  }
  polizasPendientes(){
    this.router.navigate(['polizas'], {relativeTo: this.route});
  }
  polizasCerradas(){
    this.router.navigate(['historico'], {relativeTo: this.route});
  }
  subirPolizas(){
    this.router.navigate(['subir'], {relativeTo: this.route});
  }
  cerrarSesion(){
    this.fireLog.logOut();
  }
}
