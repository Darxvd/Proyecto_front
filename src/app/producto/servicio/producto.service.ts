import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  codigo = 0;
  private urlApiListar='producto/listar';
  private urlApiPost='producto/registrar';
  private urlApiActualizar='producto/actualizar';
  private urlApiObtener='producto/obtener/';
  private urlApiEliminar='producto/eliminar/'

  constructor(private http: HttpClient) { }

  public getProducto(): Observable<any>{
    return this.http.get<any>(this.urlApiListar);
  } 

  public guardarDataProducto(data: any){
    return this.http.post(this.urlApiPost, data);
  }

  public obtenerProducto(){
    return this.http.get<any>(this.urlApiObtener+this.codigo);
  }

  public actualizarProducto(data:any){
    return this.http.put(this.urlApiActualizar, data);
  }

  public eliminarProducto(codigo: number){
    return this.http.delete(this.urlApiEliminar+codigo);
  }



}
