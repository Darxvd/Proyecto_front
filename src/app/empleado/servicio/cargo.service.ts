import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private urlApiCargo = 'cargo/listar';

  constructor(private http: HttpClient) { }

  public getCargo(): Observable<any>{
    return this.http.get<any>(this.urlApiCargo);
  }
}
