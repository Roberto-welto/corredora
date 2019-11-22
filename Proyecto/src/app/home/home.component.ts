import { Component, OnInit } from '@angular/core';
import { UsersSistemaService } from '../shared/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
import { TipoPolizasService } from '../shared/tipo-polizas.service';
import { Poliza } from '../polizas/poliza.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  float = false;
  loaded = false;
  constructor(private userServiceLogin: UsersSistemaService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorage: DataStorageService,
              private polizaService: TipoPolizasService) { }
  ngOnInit() {
    this.loaded = true;
    this.userServiceLogin.keepUserLogged();
  }
  onSignIn(form: NgForm){
    const email = form.value.inputEmail;
    const password = form.value.inputPassword;
    this.userServiceLogin.signinUser(email, password);
    
    this.loaded = false;
  }
  checkString101(event: string){
    if(event.includes('@gmail.com')){
      if(this.userServiceLogin.users.includes(event)){
        this.float = true;
      }
    } else {
      console.log()
    }
  }
  autentificarUsuario(){
    setTimeout(() => {
      const token = this.userServiceLogin.isAuthenticated();
      if(token){
        
          setTimeout(() => {
            this.dataStorage.fetchEverything();
            setTimeout(() => {
              let polizas = this.polizaService.getTipoPoliza();
              let poliza1;
              let poliza2;
              let poliza3 = new Array();
              for(let poliza of polizas){
                poliza1 = Object.values(poliza);
                poliza2 = new Poliza(poliza1[33], poliza1[36], poliza1[0], poliza1[0], poliza1[1], poliza[0], poliza1[2], poliza1[3], poliza1[10], poliza[14], poliza1[17], poliza1[16], poliza1[16], "0");
                poliza3.push(poliza2);
                this.polizaService.setPolizasBeta(poliza3);
              }
              ///alert("Se cargaron las polizas correctamente");
               this.loaded = true;
               this.router.navigate(['../subir'], { relativeTo: this.route })
              }, 4000)
          }, 1000)
          
          
        
      }
    }, 1500)
  }
  setActive(){
    this.float = true;
    if(this.float){
      this.float = false;
    }
  }
}
