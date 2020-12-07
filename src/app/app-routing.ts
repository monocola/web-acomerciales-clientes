import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';


const routes: Routes = [
  { path: "clientes/:cpnID_Empresa/:cpnEsAgenteCarga/:cpnESAgenteAduanas/:cpcPersonaEmpresa/:cpcDocumentoIdentidad/:usurariologin/:idToken", component: ClientesComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
