import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IRetiroProg } from '../model/hbl';
import { ResponsiveService } from '../services/resize.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-cuerpo-tabla-clientes',
  templateUrl: './cuerpo-tabla-clientes.component.html',
  styleUrls: ['./cuerpo-tabla-clientes.component.css'],
  providers: [DialogService, MessageService],
})
export class CuerpoTablaClientesComponent implements OnInit {
  @Input('content') retirosP: IRetiroProg[] = [];
  on: boolean;
  openTrazabilidad: boolean;
  editarComision: boolean;
  disabled: boolean = true;
  ref: DynamicDialogRef;
  public isMobile: boolean;
  constructor(
    public dialogService: DialogService,
    private responsiveService: ResponsiveService
  ) {}

  ngOnInit(): void {
    this.onResize();
    this.responsiveService.checkWidth();
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  close(on, show) {
    document.getElementById(show).classList.remove('show');
    document.getElementById(on).classList.remove('on');
  }

  open(nodo) {
    document.getElementById(nodo).classList.add('on');
  }

  showExonResgis() {
  /*
    this.ref = this.dialogService.open(RegistrarExonComponent, {
      styleClass: 'anular',
      closeOnEscape: true,
      dismissableMask: true,
      baseZIndex: 10000,
      showHeader: false,
    });
  */  
  }

  collapse($event: { target: HTMLInputElement }) {
    const node = $event.target;
    console.log(node);
    const lista = node.parentElement.parentElement.parentElement;
    console.log(lista);
    console.log(lista.classList);
    const head = lista.firstChild as HTMLElement;
    if (lista.classList.contains('on')) {
      lista.classList.remove('on');
      head.classList.remove('lista-row-mobile');
      lista.classList.remove('reverse-table');
    } else {
      lista.classList.add('on');
      head.classList.add('lista-row-mobile');
      lista.classList.add('reverse-table');
    }
  }
}
