import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  {path: '',redirectTo:'/ingresarPresupuesto', pathMatch: 'full'},
  {path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
  {path: 'gastos', component:GastosComponent},
  // redirecciona siempre a ingresar presupuesto " debe estar al final"
  {path: '**',redirectTo:'/ingresarPresupuesto', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
