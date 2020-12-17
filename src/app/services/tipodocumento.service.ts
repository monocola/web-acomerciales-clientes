import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { port_clientes_onpremise } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { TipoDocumento } from '../model/tipodocumento';


@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private baseEndpointDocumentType = port_clientes_onpremise + '/v1/client';
  
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerTipoDocumento(tipoDocumento: TipoDocumento): Observable<TipoDocumento> {
    return this.http.post<TipoDocumento>(`${this.baseEndpointDocumentType}/documentypelist`, tipoDocumento, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}