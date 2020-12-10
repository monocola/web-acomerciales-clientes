import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { port_clientes } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { EmpresaSuspendedora } from '../model/suspensionempresa';


@Injectable({
  providedIn: 'root'
})
export class EmpSuspService {

  private baseEndpointEmpSusp = port_clientes + '/v1/suspendedtype';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerEmpresasSusp(empresaSup: EmpresaSuspendedora): Observable<EmpresaSuspendedora> {
    return this.http.post<EmpresaSuspendedora>(`${this.baseEndpointEmpSusp}/suspendedtypelist`, empresaSup, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}