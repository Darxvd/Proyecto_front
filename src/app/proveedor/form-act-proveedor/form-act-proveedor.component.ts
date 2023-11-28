import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProveedorService } from '../servicio/proveedor.service';
import { Router } from '@angular/router';
import { ProveedorEntity } from 'src/app/producto/model/proveedor.entity';

@Component({
  selector: 'app-form-act-proveedor',
  templateUrl: './form-act-proveedor.component.html',
  styleUrls: ['./form-act-proveedor.component.css']
})
export class FormActProveedorComponent implements OnInit{

  data : any[] = []
  proveedor: ProveedorEntity = new ProveedorEntity();

  frProveedor = new FormGroup({
    id_proveedor: new FormControl(''),
    nom_proveedor: new FormControl(''),
    })

    constructor(private proveedorService: ProveedorService, private router: Router){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.proveedorService.obtenerProveedor().subscribe(data => {
      console.log(this.llenarData)
      this.proveedor = data;
      this.frProveedor.patchValue({
        id_proveedor: this.proveedor.id_proveedor.toString(),
        nom_proveedor: this.proveedor.nom_proveedor,
      })
    })
  }

  guardarProveedor(){
    this.proveedorService.actualizarProveedor(this.frProveedor.value).subscribe(data => {
      this.frProveedor.reset();
      this.router.navigate(['listarProveedor']);
      console.log(data);
    })
  }

}
