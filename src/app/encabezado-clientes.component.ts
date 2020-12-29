import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalClient } from './commons/Clienteglobal';
import { CuerpoTablaClientesComponent } from './cuerpo-tabla-clientes/cuerpo-tabla-clientes.component';
//import { ngOnInit } from './cuerpo-tabla-clientes/cuerpo-tabla-clientes.component';
import { GenerarClienteComponent } from './generar-cliente/generar-cliente.component';



@Component({
  selector: 'app-encabezado-clientes',
  templateUrl: './encabezado-clientes.component.html',
  styleUrls: ['./encabezado-clientes.component.scss'],
  providers: [DialogService, MessageService],
})
export class EncabezadoClientesComponent implements OnInit {
  busquedaQuery:any;
  @Input('header') lista = [];
  @Input('fact') fact: boolean;
  @Input('action') action: boolean = true;
  @Output() busqueda = new EventEmitter();
  @Output() tipobusqueda = new EventEmitter();
  busqueda1:any;
  tipodebusqueda:any;
  selectedAll: string[] = [];
  ref: DynamicDialogRef;

  constructor(public dialogService: DialogService, 
              private config: GlobalClient) {}

  ngOnInit(): void {}

  nuevoCliente(){
    this.ref = this.dialogService.open(GenerarClienteComponent, {
      //width: '100%',
      styleClass: 'comision',
      closeOnEscape: false,
      dismissableMask: false,
      baseZIndex: 10000,
      showHeader: false
    });
  }

}
