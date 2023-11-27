import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductoService } from '../servicio/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit{

  frmProducto = new FormGroup({
    

  })

  data : any[] = []
  constructor(private serviceProducto: ProductoService, private router: Router){}

  ngOnInit(): void {
    this.llenarCategoria();
  }

  llenarCategoria(){
    this.serviceProducto.getCategoria().subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }

}
