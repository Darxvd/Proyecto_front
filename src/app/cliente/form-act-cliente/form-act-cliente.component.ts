import { Component, OnInit } from '@angular/core';
import { ClienteEntity } from '../model/cliente-entity';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from '../servicio/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-act-cliente',
  templateUrl: './form-act-cliente.component.html',
  styleUrls: ['./form-act-cliente.component.css']
})
export class FormActClienteComponent implements OnInit {

  cliente: ClienteEntity = new ClienteEntity();


  frmCliente = new FormGroup({
    id_cliente: new FormControl(''),
    noap_cliente: new FormControl(''),
    dni_cliente: new FormControl(''),
    tlf_cliente: new FormControl('')
  })

  constructor(private clienteService: ClienteService, private router: Router){}
  
  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.clienteService.obtenerCliente().subscribe(data => {
      console.log(this.llenarData)
      this.cliente = data;
      this.frmCliente.patchValue({
        id_cliente: this.cliente.id_cliente.toString(),
        noap_cliente: this.cliente.noap_cliente,
        dni_cliente: this.cliente.dni_cliente,
        tlf_cliente: this.cliente.tlf_cliente,
      })
    })
  }

  guardarCliente(){
    this.clienteService.actualizarCliente(this.frmCliente.value).subscribe(data => {
      this.frmCliente.reset();
      this.router.navigate(['listarCliente']);
      console.log(data);
    })
  }

}
