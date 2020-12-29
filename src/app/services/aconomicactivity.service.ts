import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { port_clientes_onpremise } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { EconomicActivity } from '../model/economicactivity';


@Injectable({
  providedIn: 'root'
})
export class EconomicActivityService {

  private baseEndpointEconomicActivitiesOnPremise = port_clientes_onpremise + '/v1/client';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerActvidadesEconomicasOnPremise(economic: EconomicActivity): Observable<EconomicActivity> {
    return this.http.post<EconomicActivity>(`${this.baseEndpointEconomicActivitiesOnPremise}/economicActivitieslistByName`, economic, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  obtenerActvidadEconomicasPorIdOnPremise(economic: EconomicActivity): Observable<EconomicActivity> {
    return this.http.post<EconomicActivity>(`${this.baseEndpointEconomicActivitiesOnPremise}/economicActivitieslistById`, economic, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

 

}
