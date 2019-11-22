import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaPolizasComponent } from './polizas/lista-polizas/lista-polizas.component';
import { ListaPolizasCerradasComponent } from './polizas/lista-polizas-cerradas/lista-polizas-cerradas.component';
import { SubirPolizasComponent } from './polizas/subir-polizas/subir-polizas.component';
import { AuthGuard } from './shared/auth-guard.service';
import { DetallePolizasComponent } from './polizas/detalle-polizas/detalle-polizas.component';
import { CrearPolizasComponent } from './polizas/crear-polizas/crear-polizas.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'crear', component: CrearPolizasComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
    {path: 'polizas', component: ListaPolizasComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
    {path: 'detallePoliza', component: DetallePolizasComponent, canActivate: [AuthGuard]},
    {path: 'historico', component: ListaPolizasCerradasComponent, canActivate: [AuthGuard]},
    {path: 'subir', component: SubirPolizasComponent, canActivate: [AuthGuard]}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}