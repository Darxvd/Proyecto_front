import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicio/cliente.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit{
  
  constructor(private clienteService: ClienteService, private router: Router){}

  frmCliente = new FormGroup({
    id_cliente: new FormControl(''),
    noap_cliente: new FormControl(''),
    dni_cliente: new FormControl(''),
    tlf_cliente: new FormControl('')
  })

  ngOnInit(): void {
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
