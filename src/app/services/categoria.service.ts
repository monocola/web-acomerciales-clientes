import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { Producto } from '../model/producto';
import { port_clientes } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { Categoria } from '../model/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseEndpointCategoria = port_clientes + '/v1/category';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  obtenerCategorias(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.baseEndpointCategoria}/categoryList`, categoria, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}