import { Injectable } from '@angular/core';
import { port_clientes } from '../public/urls';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseEndpointClientes = port_clientes + '/v1/reservas';

  constructor() { }

 
}
