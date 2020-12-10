import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { port_clientes } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { PlazoCredito } from '../model/plazocredito';


@Injectable({
  providedIn: 'root'
})
export class PlazoCreditoService {

  private baseEndpointPlazoCredito = port_clientes + '/v1/creditTerm';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerPlazoCredito(plazoCredito: PlazoCredito): Observable<PlazoCredito> {
    return this.http.post<PlazoCredito>(`${this.baseEndpointPlazoCredito}/creditTermList`, plazoCredito, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}