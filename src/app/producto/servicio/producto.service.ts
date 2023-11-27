import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  codigo = 0;

  private urlApiCategoria = 'categoria/listar';
  /*private urlApiProveedor='proveedor/listar';*/
  private urlApiListar='producto/listar';
  private urlApiPost='producto/registrar';

  constructor(private http: HttpClient) { }

  public getCategoria(): Observable<any>{
    return this.http.get<any>(this.urlApiCategoria);
  } /*
  public getProveedor(): Observable<any>{
    return this.http.get<any>(this.urlApiProveedor);
  } */
  public getProducto(): Observable<any>{
    return this.http.get<any>(this.urlApiListar);
  } 

  public guardarDataProducto(data: any){
    return this.http.post(this.urlApiPost, data);
  }
}
