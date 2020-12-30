import { ChangeDetectorRef, Component, Injectable, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ResponsiveService } from '../services/resize.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { FileClienteComponent } from '../file-cliente/file-cliente.component';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../model/persona';
import { StoreService } from '../services/store.service';


@Component({
  selector: 'app-cuerpo-tabla-clientes',
  templateUrl: './cuerpo-tabla-clientes.component.html',
  styleUrls: ['./cuerpo-tabla-clientes.component.scss'],
  providers: [DialogService, MessageService],
})
export class CuerpoTablaClientesComponent implements OnInit {
  @Input('tipoBusqueda') tipoBusqueda: any;
  clientes: Persona[] = [];
  dato: any;
  ruc: any;
  lista = [];
  on: boolean;
  openTrazabilidad: boolean;
  editarComision: boolean;
  disabled: boolean = true;
  ref: DynamicDialogRef;
  public isMobile: boolean;
  constructor(
    public dialogService: DialogService,
    private responsiveService: ResponsiveService,
    private personaService: PersonaService,
    public store: StoreService,
    public cdr: ChangeDetectorRef

  ) {
    this.tipoBusqueda = this.dato;
  }

  ngOnInit(): any {
    this.onResize();
    this.responsiveService.checkWidth();
    this.lista = [
      { name: 'Código SAP', col: '15%' },
      { name: 'N° Documento', col: '20%' },
      { name: 'Cliente', col: '20%' },
      { name: 'Razón Social', col: '20%' },
      { name: 'Estado', col: '15%' },
      { name: 'Acción', col: '10%' },
    ];

    var objPersona = new Persona();
    objPersona.numerodocumento = "20603685173";
    this.personaService.obtenerClientePorNumeroDocumento(objPersona).subscribe(
      (dataListadoClientes) => {
        this.clientes = dataListadoClientes;
      }, (error) => {
        //console.log("Clientes error: " + JSON.stringify(error));
      })

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



  collapse($event: { target: HTMLInputElement }) {
    const node = $event.target;
    //console.log(node);
    const lista = node.parentElement.parentElement.parentElement;
    //console.log(lista);
    //console.log(lista.classList);
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

  editarCliente(cliente) {
    this.store.setCliente(cliente);
    this.ref = this.dialogService.open(EditarClienteComponent, {
      //width: '100%',
      styleClass: 'comision',
      closeOnEscape: false,
      dismissableMask: false,
      baseZIndex: 10000,
      showHeader: false
    });
  }
  abrirFileCliente(cliente) {
    this.store.setCliente(cliente);
    this.ref = this.dialogService.open(FileClienteComponent, {
      //width: '50%',
      styleClass: 'comisionfile',
      closeOnEscape: false,
      dismissableMask: false,
      baseZIndex: 10000,
      showHeader: false
    });
  }

  buscarEmpresa(ruc) {
    this.ruc = ruc;
    this.tipoBusqueda = this.ruc;
    var objPersona = new Persona();
      objPersona.numerodocumento = this.tipoBusqueda;
      this.personaService.obtenerClientePorNumeroDocumento(objPersona).subscribe(
        (dataListadoClientes) => {
          this.clientes = dataListadoClientes;
        }, (error) => {
          console.log("Clientes error: " + JSON.stringify(error));
        })
  }
}
