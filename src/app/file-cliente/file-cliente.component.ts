import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalClient } from '../commons/Clienteglobal';
import { Categoria } from '../model/categoria';
interface typeOfSelect {
  label: string;
}
@Component({
  selector: 'app-file-cliente',
  templateUrl: './file-cliente.component.html',
  styleUrls: ['./file-cliente.component.scss']
})
export class FileClienteComponent implements OnInit {

  @Input() title: string;
  typesOfShift: SelectItem[];
  typesOfLocal: SelectItem[];
  typesOfUn: SelectItem[];
  listaEmpresa:any;

  selectedTypeOfShift: typeOfSelect;
  selectedTypeOfLocal: typeOfSelect;
  selectedTypeOfUn: typeOfSelect;

  calendar: boolean = false;
  filtro: boolean;
  items: any[];
  date1: Date;
  date2: Date;
  es: any;
  ref: DynamicDialogRef;
  constructor(public dialogService: DialogService,
              private config: GlobalClient,
              private dynamicDialogRef: DynamicDialogRef) {}

  ngOnInit(): void {

   
   
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
    const filtro = document.querySelector('#filter');
    const collapses = document.querySelectorAll('.collapse');
    const collapse = document.querySelector('#collapse-' + menu);
    const listEl = filtro.querySelectorAll('li>button');
    listEl.forEach((eachEl) => {
      eachEl.classList.remove('active');
    });
    document.querySelector(`#${menu}`).classList.add('active');
    collapses.forEach((eachEl) => {
      eachEl.classList.remove('show');
    });
    collapse.classList.add('show');
    this.calendar = menu.toLowerCase() === 'fecha';
  }

  cerrar(){
    this.dynamicDialogRef.close();
    this.config.limpiarGlobalCliente();
  }
  cambiarTipo(){

  }
  registrarFileCliente(){

  }
  validar(){

  }
  search(evt){

  }
  soloNumeros(){

  }
}
