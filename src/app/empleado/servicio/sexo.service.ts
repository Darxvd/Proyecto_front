import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SexoService {

  private urlApiSexo = 'sexo/listar';

  constructor(private http: HttpClient) { }

  public getSexo(): Observable<any>{
    return this.http.get<any>(this.urlApiSexo);
  }

}
