import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Cliente} from 'src/app/model/cliente';
import { EmpresaService} from 'src/app/services/empresa.service';
import { CuerpoTablaClientesComponent } from '../cuerpo-tabla-clientes/cuerpo-tabla-clientes.component';
//import { CuerpoTablaClientesComponent } from '../cuerpo-tabla-clientes/cuerpo-tabla-clientes.component';


declare var $:any;
@Component({
  selector: 'app-filtrar-cliente',
  templateUrl: './filtrar-cliente.component.html',
  styleUrls: ['./filtrar-cliente.component.scss'],
  providers: [DialogService, MessageService],
})
export class FiltrarClienteComponent implements OnInit {

  @Output() busqueda = new EventEmitter();
  @Output() tipobusqueda = new EventEmitter();

  menus: any[];
  lista = [];
  menu = [];
  @Input() title: string;
  calendar:any;
  localRadio:any;
  cargaRadio:any;
  manual:any;
  filtro: boolean;
  es: any;
  ref: DynamicDialogRef;
  tipo:number;
  listadoClientes:any;

  @ViewChild('cuerpoTabla') cuerpo:CuerpoTablaClientesComponent;
 
  constructor(public dialogService: DialogService,
              private empresaService: EmpresaService,              
              ) {}

  ngOnInit(): void {
    this.tipo = 1;

    this.lista = [
      { name: 'Código SAP', col: '15%' },
      { name: 'N° Documento', col: '15%' },
      { name: 'Cliente', col: '20%' },
      { name: 'Razón Social', col: '25%' },
      { name: 'Estado', col: '15%' },
      { name: 'Acción', col: '10%' },
    ];

    this.menu = [
      { name: 'Local' },
      { name: 'UN' },
      { name: 'Turno' },
      { name: 'Fecha' },
      { name: 'Hora' },
    ];


    this.menus =[
      { name: 'Documento', value: 1},
      { name: 'Razón Social', value: 2},
      { name: 'Producto', value: 3}
    ]

  }

  onTodayClick($event) {
    console.log($event);
  }

  close() {
    this.filtro = false;
  }
  openFiltro() {
    this.filtro = true;
  }

  showMenu(menu) {
    if(menu == "Documento"){
      this.tipo = 1;
      $("#documento").show();
      $("#producto").hide();
      $("#rsocial").hide();
    }else if(menu == "Razón Social"){
      this.tipo = 2;
      $("#documento").hide();
      $("#producto").hide();
      $("#rsocial").show();     
    }else if(menu == "Producto"){
      this.tipo = 3;
      $("#documento").hide();
      $("#producto").show();
      $("#rsocial").hide();
    }
   }

   buscar(type){
    var inputBusqueda = ((document.getElementById("busqueda") as HTMLInputElement).value); 
    this.busqueda.emit(inputBusqueda);
    this.tipobusqueda.emit(this.tipo); 


    this.cuerpo.buscarEmpresa(inputBusqueda);

   }
}