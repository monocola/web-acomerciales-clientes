import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { port_clientes } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { EstadoSuspension } from '../model/suspension';


@Injectable({
  providedIn: 'root'
})
export class EstadoSuspensionService {

  private baseEndpointEstadoSuspension = port_clientes + '/v1/suspendedstate';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerEstadoSuspension(estadoSuspension: EstadoSuspension): Observable<EstadoSuspension> {
    return this.http.post<EstadoSuspension>(`${this.baseEndpointEstadoSuspension}/suspendedstatelist`, estadoSuspension, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}