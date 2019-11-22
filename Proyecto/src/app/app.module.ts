import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {getSpanishLabels} from './shared/spanish-paginator';
import { AppComponent } from './app.component';
import { ListaPolizasComponent } from './polizas/lista-polizas/lista-polizas.component';
import { HomeComponent } from './home/home.component';
import { TipoPolizasService } from './shared/tipo-polizas.service';
import { HeaderComponent } from './header/header.component';
import { ListaPolizasCerradasComponent } from './polizas/lista-polizas-cerradas/lista-polizas-cerradas.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubirPolizasComponent } from './polizas/subir-polizas/subir-polizas.component';
import { UsersSistemaService } from './shared/users.service';
import { DetallePolizasComponent } from './polizas/detalle-polizas/detalle-polizas.component';
import { AuthGuard } from './shared/auth-guard.service';
import { DataStorageService } from './shared/data-storage.service'
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material';
import {MatPaginatorIntl} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { CrearPolizasComponent } from './polizas/crear-polizas/crear-polizas.component';
import { CompaniaService } from './shared/companias.service';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    ListaPolizasComponent,
    HomeComponent,
    HeaderComponent,
    ListaPolizasCerradasComponent,
    SubirPolizasComponent,
    DetallePolizasComponent,
    CrearPolizasComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseCongif),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [TipoPolizasService, UsersSistemaService, AuthGuard, DataStorageService, CompaniaService, DatePipe, {provide: MatPaginatorIntl, useValue: getSpanishLabels()}],
  bootstrap: [AppComponent]
})
export class AppModule { }
