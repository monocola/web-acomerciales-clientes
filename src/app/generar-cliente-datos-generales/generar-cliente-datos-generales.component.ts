import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalClient } from '../commons/Clienteglobal';

interface typeOfSelect {
  label: string;
}
declare var $: any;
@Component({
  selector: 'app-generar-cliente-datos-generales',
  templateUrl: './generar-cliente-datos-generales.component.html',
  styleUrls: ['./generar-cliente-datos-generales.component.scss'],

})
export class GenerarClienteDatosGeneralesComponent implements OnInit {

  constructor(public dialogService: DialogService, public config: GlobalClient) {}

  @Output()
  enviar: EventEmitter<string> = new EventEmitter<string>();
  tipodocumento:string;

  @Input('variablecboxfecha_solicitudAR') variablecboxfecha_solicitudAR;
  

  botonClick(){
    this.enviar.emit(this.tipodocumento);
  }

  @Input() title: string;
  typesOfShift: SelectItem[];
  typesOfLocal: SelectItem[];
  typesOfUn: SelectItem[];

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
  

  ngOnInit(): void {
    //this.clienteExistente();
    

 
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

  listaEmpresa:any;
  search(event) {
    /*
     var objCitas = new Citas();
    objCitas.nombrecomercial = event.query;
    objCitas.tipo = 2;
    this.reservasCitas.obtenerinformacionporar(objCitas).subscribe(
      (dataCita) => {
        this.listaEmpresa = new Array();
        this.listaEmpresa = dataCita;
        }) 
    */    
    }  
    
    clienteExistente(){
      $("#tipodocumento").prop("disabled", true);
      $("#fechainscripcion").prop("disabled", true);
      $("#condicion").prop("disabled", true);
      $("#estado").prop("disabled", true);
      $("#direccionfiscal").prop("disabled", true);
      $("#actividadeconomica").prop("disabled", true);
     
      
    }

    enviarTipodocumento(evt){
     this.config.setGlobalTipoDocumento(evt.target.value);
    }
  }
