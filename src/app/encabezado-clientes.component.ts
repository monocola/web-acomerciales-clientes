import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GenerarClienteComponent } from './generar-cliente/generar-cliente.component';
//import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';


@Component({
  selector: 'app-encabezado-clientes',
  templateUrl: './encabezado-clientes.component.html',
  styleUrls: ['./encabezado-clientes.component.scss'],
  providers: [DialogService, MessageService],
})
export class EncabezadoClientesComponent implements OnInit {
  @Input('header') lista = [];
  @Input('fact') fact: boolean;
  @Input('action') action: boolean = true;
  busqueda:any;
  tipodebusqueda:any;
  selectedAll: string[] = [];
  ref: DynamicDialogRef;

  constructor( public dialogService: DialogService) {}

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

  busquedaInput(evt){
    this.busqueda = evt;
  }
  tipovariablebusqueda(evt){
    this.tipodebusqueda = evt;
   }
}
