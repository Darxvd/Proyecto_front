import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaEmpleadoComponent } from './empleado/tabla-empleado/tabla-empleado.component';
import { FormEmpleadoComponent } from './empleado/form-empleado/form-empleado.component';
import { FormActComponent } from './empleado/form-act/form-act.component';
import { TablaClienteComponent } from './cliente/tabla-cliente/tabla-cliente.component';
import { FormClienteComponent } from './cliente/form-cliente/form-cliente.component';
import { FormActClienteComponent } from './cliente/form-act-cliente/form-act-cliente.component';


const routes: Routes = [
  {path: 'listarEmpleado', component: TablaEmpleadoComponent},
  {path: 'registrarEmpleado', component: FormEmpleadoComponent},
  {path: 'actualizarEmpleado', component: FormActComponent},
  {path: 'listarCliente', component: TablaClienteComponent},
  {path: 'registrarCliente', component: FormClienteComponent},
  {path: 'actualizarCliente', component: FormActClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
