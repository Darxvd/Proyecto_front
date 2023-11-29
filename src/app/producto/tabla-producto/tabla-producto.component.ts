import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductoService } from '../servicio/producto.service';
import { Router } from '@angular/router';
import { CategoriaEntity } from '../model/categoria.entity';
import { CategoriaService } from '../servicio/categoria.service';

@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent implements OnInit {

  data: any[] = []
  categorias: any[] = []
  frmProducto = new FormGroup({
    id_produto: new FormControl(''),
    des_producto: new FormControl(''),
    pre_producto: new FormControl(''),
    stk_producto: new FormControl(''),
    id_categoria: new FormControl(0),
    id_proveedor: new FormControl('')
  })

  constructor(private productoService: ProductoService, private servicioCategoria: CategoriaService, private router: Router){}

  ngOnInit(): void {
    console.log(this.data);
    this.llenarData();
    this.llenarCategoria();
  }

  llenarData(){
    this.productoService.getProducto().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

  nuevo(){
    this.router.navigate(['registrarProducto']);
  }

  actualizar(codigo: number){
    this.productoService.codigo=codigo;
    this.router.navigate(["actualizarProducto"]);
  }

  eliminar(codigo:number){
    this.productoService.eliminarProducto(codigo).subscribe(data => {
      this.llenarData();
    })
  }

  llenarCategoria(){
    this.servicioCategoria.getCategoria().subscribe(data=>{
      this.categorias=data;
      console.log(this.data);
    })
  }

  buscarCategoria() {
    const categoria = this.frmProducto.controls['id_categoria'].value;
    if (categoria === 0 || categoria === null) {
      this.llenarData();
    } else {
      const categoriaNumerica = parseInt("" + categoria, 10);
      this.productoService.buscarCategoria(categoriaNumerica).subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
    }
  }
  
}
