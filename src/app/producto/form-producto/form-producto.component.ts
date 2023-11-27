import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductoService } from '../servicio/producto.service';
import { Router } from '@angular/router';
import { CategoriaService } from '../servicio/categoria.service';
import { ProveedorService } from '../servicio/proveedor.service';
import { CargoEntity } from 'src/app/empleado/model/cargo-entity';
import { ProveedorEntity } from '../model/proveedor.entity';
import { CategoriaEntity } from '../model/categoria.entity';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit{

  frmProducto = new FormGroup({
    id_producto: new FormControl(''),
    des_producto: new FormControl(''),
    pre_producto: new FormControl(0.0),
	  stk_producto: new FormControl(0),
    id_categoria: new FormControl(0),
    id_proveedor: new FormControl(0),
  })

  data : any[] = []
  categorias: CategoriaEntity[] = []
  proveedors: ProveedorEntity[] = []
  constructor(private servicioProveedor: ProveedorService, private serviceProducto: ProductoService, private servicioCategoria: CategoriaService, private router: Router){}

  ngOnInit(): void {
    this.llenarCategoria();
    this.llenarProveedor();
  }

  guardarProducto(){
    this.serviceProducto.guardarDataProducto(this.frmProducto.value).subscribe(res => {
      this.frmProducto.reset();
      this.router.navigate(['listarProducto']);
    })
  }

  llenarCategoria(){
    this.servicioCategoria.getCategoria().subscribe(data=>{
      this.categorias=data;
      console.log(this.data);
    })
  }

  llenarProveedor(){
    this.servicioProveedor.getProveedor().subscribe(data=>{
      this.proveedors=data;
      console.log(this.data);
    })
  }

}
