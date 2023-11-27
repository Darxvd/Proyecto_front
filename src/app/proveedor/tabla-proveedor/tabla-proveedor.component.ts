import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProveedorService } from '../servicio/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-proveedor',
  templateUrl: './tabla-proveedor.component.html',
  styleUrls: ['./tabla-proveedor.component.css']
})
export class TablaProveedorComponent implements OnInit {
  
  data: any[] = []

  frmProveedor = new FormGroup({
    id_proveedor: new FormControl(''),
    nom_proveedor: new FormControl('')
  })

  constructor(private proveedorService:ProveedorService, private router:Router){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.proveedorService.getProveedor().subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }

  nuevo(){
    this.router.navigate(['registrarProveedor']);
  }

  actualizar(codigo: number){
    this.proveedorService.codigo=codigo;
    this.router.navigate(["actualizarProveedor"]);
  }

  eliminar(codigo:number){
    this.proveedorService.eliminarProveedor(codigo).subscribe(data => {
      this.llenarData();
    })
  }

}

