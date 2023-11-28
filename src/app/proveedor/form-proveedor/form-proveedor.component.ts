import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../servicio/proveedor.service';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-proveedor',
  templateUrl: './form-proveedor.component.html',
  styleUrls: ['./form-proveedor.component.css']
})
export class FormProveedorComponent implements OnInit {

  constructor(private proveedorService: ProveedorService, private router: Router){}

  
  data : any[] = []

  frProveedor = new FormGroup({
    id_proveedor: new FormControl(''),
    nom_proveedor: new FormControl(''),
    })

    
  ngOnInit(): void {
  }

  guardarProveedor(){
    this.proveedorService.guardarDataProveedor(this.frProveedor.value).subscribe(res => {
      this.frProveedor.reset();
      this.router.navigate(['listarProveedor']);
    })
  }

}
