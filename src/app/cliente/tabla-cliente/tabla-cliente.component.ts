import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from '../servicio/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styleUrls: ['./tabla-cliente.component.css']
})
export class TablaClienteComponent implements OnInit {
  
  data: any[] = []

  frmCliente = new FormGroup({
    id_cliente: new FormControl(''),
    noap_cliente: new FormControl(''),
    dni_cliente: new FormControl(''),
    dir_cliente: new FormControl('')
  })

  constructor(private clienteService:ClienteService, private router:Router){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.clienteService.getCliente().subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }

  nuevo(){
    this.router.navigate(['registrarCliente']);
  }

  actualizar(codigo: number){
    this.clienteService.codigo=codigo;
    this.router.navigate(["actualizarCliente"]);
  }

  eliminar(codigo:number){
    this.clienteService.eliminarCliente(codigo).subscribe(data => {
      this.llenarData();
    })
  }

  guardarCliente(){
    console.log(this.frmCliente.value);
    this.clienteService.guardarDataCliente(this.frmCliente.value).subscribe(res => {
      console.log(res);
      this.frmCliente.reset();
      this.router.navigate(['listarCliente']);
    })
  }
}
