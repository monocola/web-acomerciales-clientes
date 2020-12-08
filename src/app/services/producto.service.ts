import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { Producto } from '../model/producto';
import { port_clientes } from '../public/urls';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseEndpointProductos = port_clientes + '/v1/product';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerProductos(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.baseEndpointProductos}/productsList`, producto, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}
