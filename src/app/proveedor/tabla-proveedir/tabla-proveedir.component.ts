import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProveedorService } from '../servicio/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-proveedir',
  templateUrl: './tabla-proveedir.component.html',
  styleUrls: ['./tabla-proveedir.component.css']
})
export class TablaProveedirComponent implements OnInit {

  data : any[] = []

  frProveedor = new FormGroup({
    id_proveedor: new FormControl(''),
    nom_proveedor: new FormControl(''),
    })

    constructor(private proveedorService: ProveedorService, private router: Router){}

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

}
