import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlApiCategoria = 'categoria/listar';
  constructor(private http: HttpClient) { }

  public getCategoria(): Observable<any>{
    return this.http.get<any>(this.urlApiCategoria);
  }
}
