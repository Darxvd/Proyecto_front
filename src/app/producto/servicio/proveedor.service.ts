import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlApiProveedor='proveedor/listar';

  constructor(private http: HttpClient) { }

  public getProveedor(): Observable<any>{
    return this.http.get<any>(this.urlApiProveedor);
  }
}
