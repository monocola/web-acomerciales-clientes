import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { port_clientes_onpremise } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { EmpresaSunat } from '../model/empresasunat';
import { Cliente } from '../model/cliente';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseEndpointConsultaSunatRuc =  'https://7wm9bk5qsj.execute-api.us-east-1.amazonaws.com/dev/v1/sunat/ruc';
  private baseEndpointCLiente = port_clientes_onpremise + '/v1/client';

  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  obtenerEmpresaSunat(id: number): Observable<any> {
    return this.http.get(`${this.baseEndpointConsultaSunatRuc}/${id}`);
  }

 
 


  
}