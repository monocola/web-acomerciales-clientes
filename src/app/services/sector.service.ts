import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Sector } from '../model/sector';
import { port_clientes } from '../public/urls';


@Injectable({
    providedIn: 'root'
  })
export class SectorService{

    private baseEndpointSector = port_clientes + '/v1/sector';

  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerSectoresPorProductos(sector: Sector): Observable<Sector> {
    return this.http.post<Sector>(`${this.baseEndpointSector}/sectorList`, sector, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

}