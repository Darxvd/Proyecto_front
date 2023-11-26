import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  codigo = 0;

  private urlApi='empleado/listar';
  private urlApiPost='empleado/registrar';
  private urlApiActualizar='empleado/actualizar';
  private urlApiObtener='empleado/obtener/';
  private urlApiEliminar='empleado/eliminar/'

  constructor(private http: HttpClient) { }

  public getEmpleado(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataEmpleado(data: any){
    return this.http.post(this.urlApiPost, data);
  }

  public obtenerEmpleado(){
    return this.http.get<any>(this.urlApiObtener+this.codigo);
  }

  public actualizarEmpleado(data:any){
    return this.http.put(this.urlApiActualizar, data);
  }

  public eliminarEmpleado(codigo: number){
    return this.http.delete(this.urlApiEliminar+codigo);
  }
  

}
