import { Component, OnInit } from '@angular/core';
import { EmpleadoEntity } from '../model/empleado-entity';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadoService } from '../servicio/empleado.service';
import { Router } from '@angular/router';
import { SexoEntity } from '../model/sexo-entity';
import { CargoEntity } from '../model/cargo-entity';

@Component({
  selector: 'app-tabla-empleado',
  templateUrl: './tabla-empleado.component.html',
  styleUrls: ['./tabla-empleado.component.css']
})
export class TablaEmpleadoComponent implements OnInit{

  data : any[] = []
  empleadoArray:EmpleadoEntity[] = [];
  sexoArray:SexoEntity[] = [];
  cargoArray:CargoEntity[]=[];

  frmEmpleado = new FormGroup({
    id_empleado: new FormControl(''),
    nom_empleado: new FormControl(''),
    apl_emplead: new FormControl(''),
    edad_emplead: new FormControl(''),
    id_sexo: new FormControl(''),
    dni_empleado: new FormControl(''),
    dir_empleado: new FormControl(''),
    id_cargo: new FormControl(''),
  })

  constructor(private empleadoService:EmpleadoService, private router: Router){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.empleadoService.getEmpleado().subscribe(data=>{
      this.data=data;
      this.empleadoArray=data;
      console.log(this.data);
      console.log(this.empleadoArray);
    })
  }

  nuevo(){
    this.router.navigate(['registrarEmpleado']);
  }

  actualizar(codigo: number){
    this.empleadoService.codigo=codigo;
    this.router.navigate(["actualizarEmpleado"]);
  }

  eliminar(codigo:number){
    this.empleadoService.eliminarEmpleado(codigo).subscribe(data => {
      this.llenarData();
    })
  }

  buscarNombre(){
    console.log();
    const nombre = this.frmEmpleado.controls['nom_empleado'].value!;
    this.empleadoService.nombre = "" + nombre;
    if(nombre == ""){
      this.llenarData();
    }
    else{
      this.empleadoService.buscarNombre("" + nombre).subscribe(data=>{
        this.data = data
        this.empleadoArray = this.data;
        console.log(data);
      }
      );
    }
  }

}
