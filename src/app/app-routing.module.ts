import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaEmpleadoComponent } from './empleado/tabla-empleado/tabla-empleado.component';
import { FormEmpleadoComponent } from './empleado/form-empleado/form-empleado.component';
import { FormActComponent } from './empleado/form-act/form-act.component';


const routes: Routes = [
  {path: 'listarEmpleado', component: TablaEmpleadoComponent},
  {path: 'registrarEmpleado', component: FormEmpleadoComponent},
  {path: 'actualizarEmpleado', component: FormActComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
