import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { port_clientes_onpremise } from '../public/urls';
import { catchError } from 'rxjs/operators';
import { Persona } from '../model/persona';
import { PersonaFinanciera } from '../model/PersonaFinanciera';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseEndpointPersonaOnPremise = port_clientes_onpremise + '/v1/client';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  registrarPersonasOnPremise(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.baseEndpointPersonaOnPremise}/register`, persona, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  obtenerClientePorNumeroDocumento(persona: Persona): Observable<Persona[]> {
    return this.http.post<Persona[]>(`${this.baseEndpointPersonaOnPremise}/searchruc`, persona, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  obtenerInformacionPersonaOnPremise(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.baseEndpointPersonaOnPremise}/register`, persona, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  registrarPersonasFinancieraOnPremise(personaF: PersonaFinanciera): Observable<PersonaFinanciera> {
    return this.http.post<PersonaFinanciera>(`${this.baseEndpointPersonaOnPremise}/financeperson/register`, personaF, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  actualizarPersonasOnPremise(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.baseEndpointPersonaOnPremise}/update`, persona, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  obtenerClienteFilePorID(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.baseEndpointPersonaOnPremise}/filecompany`, persona, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }


}