import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadoEntity } from '../model/empleado-entity';
import { EmpleadoService } from '../servicio/empleado.service';
import { Router } from '@angular/router';
import { CargoEntity } from '../model/cargo-entity';
import { SexoEntity } from '../model/sexo-entity';

@Component({
  selector: 'app-form-act',
  templateUrl: './form-act.component.html',
  styleUrls: ['./form-act.component.css']
})
export class FormActComponent implements OnInit{
  empleado: EmpleadoEntity = new EmpleadoEntity();
  cargo: CargoEntity = new CargoEntity();
  sexo: SexoEntity = new SexoEntity();

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

  llenarData() {
    this.empleadoService.obtenerEmpleado().subscribe(data => {
      this.empleado = data;
      this.frmEmpleado.patchValue({
        id_empleado: this.empleado.id_empleado.toString(),
        nom_empleado: this.empleado.nom_empleado,
        apl_empleado: this.empleado.apl_empleado,
        edad_empleado: this.empleado.edad_empleado.toString(),
        id_sexo: this.empleado.id_sexo.toString(), // Convertir a cadena si es necesario
        dni_empleado: this.empleado.dni_empleado,
        dir_empleado: this.empleado.dir_empleado,
        id_cargo: this.empleado.id_cargo.toString(), // Convertir a cadena si es necesario
      });
    });
  }

  guardarEmpleado(){
    this.empleadoService.actualizarEmpleado(this.frmEmpleado.value).subscribe(data => {
      this.frmEmpleado.reset();
      this.router.navigate(['listarEmpleado']);
      console.log(data);
    })
  }


}
