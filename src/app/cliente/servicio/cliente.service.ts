import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  codigo = 0;

  private urlApi='cliente/listar';
  private urlApiPost='cliente/registrar';
  private urlApiActualizar='cliente/actualizar';
  private urlApiObtener='cliente/obtener/';
  private urlApiEliminar='cliente/eliminar/'

  constructor(private http: HttpClient) { }

  public getCliente(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataCliente(data: any){
    return this.http.post(this.urlApiPost, data);
  }

  public obtenerCliente(){
    return this.http.get<any>(this.urlApiObtener+this.codigo);
  }

  public actualizarCliente(data:any){
    return this.http.put(this.urlApiActualizar, data);
  }

  public eliminarCliente(codigo: number){
    return this.http.delete(this.urlApiEliminar+codigo);
  }
}
