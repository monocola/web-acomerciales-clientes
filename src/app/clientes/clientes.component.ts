import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GlobalClient } from '../commons/Clienteglobal';
import { Cliente } from '../model/cliente';
import { IRetiroProg } from '../model/hbl';
import { Persona } from '../model/persona';
import { EmpresaService } from '../services/empresa.service';
import { PersonaService } from '../services/persona.service';
import { ResponsiveService } from '../services/resize.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  titulo:string = "Gestión de Clientes";
  @ViewChild('resizable') box: ElementRef;
  busqueda:any;
  tipodebusqueda:any;
  retiros: IRetiroProg[] = [];
  notificacion: {};
  position: string;
  lista = [];
  menu = [];
  title = 'Visor de Programación de Retiros';
  clientes:any;

  constructor(private personaService: PersonaService, private config: GlobalClient) {}
  ngOnInit() {

    this.lista = [
      { name: 'Código SAP', col: '8%' },
      { name: 'N° Documento', col: '12%' },
      { name: 'Cliente', col: '20%' },
      { name: 'Razón Social', col: '20%' },
      { name: 'Estado', col: '15%' },
      { name: 'Acción', col: '20%' },
    ];

    this.menu = [
      { name: 'Local' },
      { name: 'UN' },
      { name: 'Turno' },
      { name: 'Fecha' },
      { name: 'Hora' },
    ];

   

    this.notificacion = {
      type: 'success',
      message: 'La actualización de comisión se ha realizado.',
    };
  }

  busquedaInput(evt){
    this.config.setGlobalBusqueda(evt);
    //alert("busqueda del main cliente: " + evt)
    var objPersona = new Persona();
    //alert("cliente: " +  this.busqueda);
    this.busqueda = evt; 
    objPersona.numerodocumento = this.busqueda;
    this.personaService.obtenerClientePorNumeroDocumento(objPersona).subscribe(
    (dataListadoClientes) => {
      this.clientes = dataListadoClientes;
      console.log("cliente: " +  JSON.stringify(this.clientes))
    }, (error) =>{
      console.log("Clientes error: " + JSON.stringify(error));
    })
   
  }
  tipovariablebusqueda(evt){
    this.tipodebusqueda = evt;
  }
}
 

