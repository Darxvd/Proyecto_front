import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductoService } from '../servicio/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent implements OnInit {

  data: any[] = []

  frmProducto = new FormGroup({
    id_produto: new FormControl(''),
    des_producto: new FormControl(''),
    pre_producto: new FormControl(''),
    stk_producto: new FormControl(''),
    id_categoria: new FormControl(''),
    id_proveedor: new FormControl('')
  })

  constructor(private productoService: ProductoService, private router: Router){}

  ngOnInit(): void {
    console.log(this.data);
    this.llenarData();
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


}
