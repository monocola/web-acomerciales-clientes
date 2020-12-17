import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IRetiroProg } from '../model/hbl';
import { ResponsiveService } from '../services/resize.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  titulo:string = "Gestión de Clientes";
  @ViewChild('resizable') box: ElementRef;
  retiros: IRetiroProg[] = [];
  notificacion: {};
  position: string;
  lista = [];
  menu = [];
  title = 'Visor de Programación de Retiros';

  constructor(private hblService: ResponsiveService) {}
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
}
