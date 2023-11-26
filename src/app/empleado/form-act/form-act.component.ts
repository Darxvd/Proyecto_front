import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadoEntity } from '../model/empleado-entity';
import { EmpleadoService } from '../servicio/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-act',
  templateUrl: './form-act.component.html',
  styleUrls: ['./form-act.component.css']
})
export class FormActComponent implements OnInit{
  empleado: EmpleadoEntity = new EmpleadoEntity();

  frmEmpleado = new FormGroup({
    id_empleado: new FormControl(''),
    nom_empleado: new FormControl(''),
    apl_empleado: new FormControl(''),
    edad_empleado: new FormControl(''),
    id_sexo: new FormControl(''),
    dni_empleado: new FormControl(''),
    dir_empleado: new FormControl(''),
    id_cargo: new FormControl(''),
  })


  constructor(private empleadoService: EmpleadoService, private router: Router){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.empleadoService.obtenerEmpleado().subscribe(data => {
      console.log(this.frmEmpleado.value);
      this.empleado = data;
      this.frmEmpleado.controls['id_empleado'].setValue(""+this.empleado.id_empleado);
      this.frmEmpleado.controls['nom_empleado'].setValue(this.empleado.nom_empleado);
      this.frmEmpleado.controls['apl_empleado'].setValue(this.empleado.apl_empleado);
      this.frmEmpleado.controls['edad_empleado'].setValue("" + this.empleado.edad_empleado);
      this.frmEmpleado.controls['id_sexo'].setValue(""+this.empleado.id_sexo);
      this.frmEmpleado.controls['dni_empleado'].setValue(this.empleado.dni_empleado);
      this.frmEmpleado.controls['dir_empleado'].setValue(this.empleado.dir_empleado);
      this.frmEmpleado.controls['id_cargo'].setValue(""+this.empleado.id_cargo);
    })
  }

  guardarEmpleado(){
    this.empleadoService.actualizarEmpleado(this.frmEmpleado.value).subscribe(data => {
      this.frmEmpleado.reset();
      this.router.navigate(['listarEmpleado']);
    })
  }


}
