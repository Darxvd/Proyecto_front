import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicio/empleado.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CargoEntity } from '../model/cargo-entity';
import { SexoEntity } from '../model/sexo-entity';
import { SexoService } from '../servicio/sexo.service';
import { CargoService } from '../servicio/cargo.service';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit{
  
  
  constructor(private empleadoService: EmpleadoService, private router: Router, private sexoService: SexoService, private cargoService: CargoService){}
  
  ngOnInit(): void {
    this.llenarCargo();
    this.llenarSexo();
  }

  frmEmpleado = new FormGroup({
    nom_empleado: new FormControl(''),
    apl_empleado: new FormControl(''),
    edad_empleado: new FormControl(''),
    id_sexo: new FormControl(0),
    dni_empleado: new FormControl(''),
    dir_empleado: new FormControl(''),
    id_cargo: new FormControl(0),
  })

  data : any[] = []
  cargos: CargoEntity[] = []
  sexos: SexoEntity[] = []

  guardarEmpleado(){
    console.log(this.frmEmpleado.value);
    this.empleadoService.guardarDataEmpleado(this.frmEmpleado.value).subscribe(res => {
      console.log(res);
      this.frmEmpleado.reset();
      this.router.navigate(['listarEmpleado']);
    })
  }

  llenarSexo(){
    this.sexoService.getSexo().subscribe(data=>{
      this.sexos=data;
    })
  }

  llenarCargo(){
    this.cargoService.getCargo().subscribe(data=>{
      this.cargos=data;
    })
  }


}
