import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TablaEmpleadoComponent } from './empleado/tabla-empleado/tabla-empleado.component';
import { AppRoutingModule } from './app-routing.module';
import { FormEmpleadoComponent } from './empleado/form-empleado/form-empleado.component';
import { FormActComponent } from './empleado/form-act/form-act.component';
import { TablaClienteComponent } from './cliente/tabla-cliente/tabla-cliente.component';
import { FormClienteComponent } from './cliente/form-cliente/form-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormActClienteComponent } from './cliente/form-act-cliente/form-act-cliente.component';
import { TablaProductoComponent } from './producto/tabla-producto/tabla-producto.component';
import { FormProductoComponent } from './producto/form-producto/form-producto.component';
@NgModule({
  declarations: [
    AppComponent,
    TablaEmpleadoComponent,
    FormEmpleadoComponent,
    FormActComponent,
    TablaClienteComponent,
    FormClienteComponent,
    FormActClienteComponent,
    TablaProductoComponent,
    FormProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
