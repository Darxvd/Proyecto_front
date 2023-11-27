import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../servicio/categoria.service';
import { ProveedorService } from '../servicio/proveedor.service';
import { ProductoService } from '../servicio/producto.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriaEntity } from '../model/categoria.entity';
import { ProveedorEntity } from '../model/proveedor.entity';
import { ProductoEntity } from '../model/producto.entity';

@Component({
  selector: 'app-form-act-prod',
  templateUrl: './form-act-prod.component.html',
  styleUrls: ['./form-act-prod.component.css']
})
export class FormActProdComponent implements OnInit {

  data: any[] = []

  frmProducto = new FormGroup({
    id_producto: new FormControl(''),
    des_producto: new FormControl(''),
    pre_producto: new FormControl(''),
    stk_producto: new FormControl(''),
    id_categoria: new FormControl(''),
    id_proveedor: new FormControl('')
  })

  producto: ProductoEntity = new ProductoEntity();
  categorias: CategoriaEntity[] = []
  proveedors: ProveedorEntity[] = []

  constructor(private categoriaService: CategoriaService, private proveedorService: ProveedorService,
    private productoService: ProductoService, private router: Router){}

  ngOnInit(): void {
    this.llenarData();
    this.llenarCategoria();
    this.llenarProveedor();
  }

  llenarData(){
    this.productoService.obtenerProducto().subscribe(data => {
      this.producto = data;
      this.frmProducto.patchValue({
          id_producto: this.producto.id_producto.toString(),
          des_producto: this.producto.des_producto,
          pre_producto: this.producto.pre_producto.toString(),
          stk_producto: this.producto.stk_producto.toString(),
          id_categoria: this.producto.id_categoria.toString(),
          id_proveedor: this.producto.id_proveedor.toString(),
      })
    })
  }

  guardarProducto(){
    this.productoService.actualizarProducto(this.frmProducto.value).subscribe(data => {
      this.frmProducto.reset();
      this.router.navigate(['listarProducto']);
      console.log(data);
    })
  }
  llenarCategoria(){
    this.categoriaService.getCategoria().subscribe(data=>{
      this.categorias=data;
      console.log(this.data);
    })
  }

  llenarProveedor(){
    this.proveedorService.getProveedor().subscribe(data=>{
      this.proveedors=data;
      console.log(this.data);
    })
  }



}
