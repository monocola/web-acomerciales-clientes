import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { port_clientes } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { TipoOperador } from '../model/tipooperador';


@Injectable({
  providedIn: 'root'
})
export class TipoOperadorService {

  private baseEndpointOperatorType = port_clientes + '/v1/operatortype';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerTipoOperadores(tipoOperador: TipoOperador): Observable<TipoOperador> {
    return this.http.post<TipoOperador>(`${this.baseEndpointOperatorType}/operatorTypeList`, tipoOperador, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}