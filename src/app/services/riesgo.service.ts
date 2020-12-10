import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { port_clientes } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { Categoria } from '../model/categoria';
import { Riesgo } from '../model/riesgo';


@Injectable({
  providedIn: 'root'
})
export class RiesgoService {

  private baseEndpointRiesgo = port_clientes + '/v1/riskrating';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerRiesgos(riesgo: Riesgo): Observable<Riesgo> {
    return this.http.post<Riesgo>(`${this.baseEndpointRiesgo}/riskratingList`, riesgo, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}