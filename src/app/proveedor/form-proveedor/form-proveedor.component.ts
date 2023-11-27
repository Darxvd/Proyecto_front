import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../servicio/proveedor.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-proveedor',
  templateUrl: './form-proveedor.component.html',
  styleUrls: ['./form-proveedor.component.css']
})
export class FormProveedorComponent implements OnInit{
  
  constructor(private proveedorService: ProveedorService, private router: Router){}

  frmProveedor = new FormGroup({
    id_proveedor: new FormControl(''),
    nom_proveedor: new FormControl('')
  })

  ngOnInit(): void {
  }

  guardarProveedor(){
    console.log(this.frmProveedor.value);
    this.proveedorService.guardarDataProveedor(this.frmProveedor.value).subscribe(res => {
      console.log(res);
      this.frmProveedor.reset();
      this.router.navigate(['listarProveedor']);
    })
  }


}