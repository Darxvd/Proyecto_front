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
import { FormActProdComponent } from './producto/form-act-prod/form-act-prod.component';
import { TablaProveedirComponent } from './proveedor/tabla-proveedir/tabla-proveedir.component';
import { FormProveedorComponent } from './proveedor/form-proveedor/form-proveedor.component';
import { FormActProveedorComponent } from './proveedor/form-act-proveedor/form-act-proveedor.component';
import { SliderComponent } from './slider/slider/slider.component';
import { FooterComponent } from './slider/footer/footer.component';
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
    FormProductoComponent,
    FormActProdComponent,
    TablaProveedirComponent,
    FormProveedorComponent,
    FormActProveedorComponent,
    SliderComponent,
    FooterComponent
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
