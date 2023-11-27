import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  codigo = 0;

  private urlApi='proveedor/listar';
  private urlApiPost='proveedor/registrar';
  private urlApiActualizar='proveedor/actualizar';
  private urlApiObtener='proveedor/obtener/';
  private urlApiEliminar='proveedor/eliminar/'

  constructor(private http: HttpClient) { }

  public getProveedor(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataProveedor(data: any){
    return this.http.post(this.urlApiPost, data);
  }

  public obtenerProveedor(){
    return this.http.get<any>(this.urlApiObtener+this.codigo);
  }

  public actualizarProveedor(data:any){
    return this.http.put(this.urlApiActualizar, data);
  }

  public eliminarProveedor(codigo: number){
    return this.http.delete(this.urlApiEliminar+codigo);
  }
}
