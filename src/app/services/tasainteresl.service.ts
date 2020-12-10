import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { port_clientes } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { TasaInteresL } from '../model/tasalibro';


@Injectable({
  providedIn: 'root'
})
export class TasaInteresLService {

  private baseEndpointTasaInteresL = port_clientes + '/v1/interestrate';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerTasasInteresesL(tasa: TasaInteresL): Observable<TasaInteresL> {
    return this.http.post<TasaInteresL>(`${this.baseEndpointTasaInteresL}/interestrateList`, tasa, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}