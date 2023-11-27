import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaEmpleadoComponent } from './empleado/tabla-empleado/tabla-empleado.component';
import { FormEmpleadoComponent } from './empleado/form-empleado/form-empleado.component';
import { FormActComponent } from './empleado/form-act/form-act.component';
import { TablaClienteComponent } from './cliente/tabla-cliente/tabla-cliente.component';
import { FormClienteComponent } from './cliente/form-cliente/form-cliente.component';
import { FormActClienteComponent } from './cliente/form-act-cliente/form-act-cliente.component';
import { TablaProductoComponent } from './producto/tabla-producto/tabla-producto.component';
import { FormProductoComponent } from './producto/form-producto/form-producto.component';
import { FormActProdComponent } from './producto/form-act-prod/form-act-prod.component';
import { TablaProveedorComponent } from './proveedor/tabla-proveedor/tabla-proveedor.component';
import { FormProveedorComponent } from './proveedor/form-proveedor/form-proveedor.component';
import { FormActProveedorComponent } from './proveedor/form-act-proveedor/form-act-proveedor.component';


const routes: Routes = [
  {path: 'listarEmpleado', component: TablaEmpleadoComponent},
  {path: 'registrarEmpleado', component: FormEmpleadoComponent},
  {path: 'actualizarEmpleado', component: FormActComponent},
  {path: 'listarCliente', component: TablaClienteComponent},
  {path: 'registrarCliente', component: FormClienteComponent},
  {path: 'actualizarCliente', component: FormActClienteComponent},
  {path: 'listarProducto', component: TablaProductoComponent},
  {path: 'registrarProducto', component: FormProductoComponent},
  {path: 'actualizarProducto', component: FormActProdComponent},
  {path: 'listarProveedor', component: TablaProveedorComponent},
  {path: 'registrarProveedor', component: FormProveedorComponent},
  {path: 'actualizarProveedor', component: FormActProveedorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
