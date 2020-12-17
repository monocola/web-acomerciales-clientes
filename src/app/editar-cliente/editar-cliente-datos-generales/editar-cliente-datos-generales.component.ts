import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalClient } from 'src/app/commons/Clienteglobal';
interface typeOfSelect {
  label: string;
}
declare var $: any;
@Component({
  selector: 'app-editar-cliente-datos-generales',
  templateUrl: './editar-cliente-datos-generales.component.html',
  styleUrls: ['./editar-cliente-datos-generales.component.scss']
})
export class EditarClienteDatosGeneralesComponent implements OnInit {

  constructor(public dialogService: DialogService, public config: GlobalClient) { }

  @Output()
  enviar: EventEmitter<string> = new EventEmitter<string>();
  tipodocumento: string;

  @Input('variablecboxfecha_solicitudAR') variablecboxfecha_solicitudAR;


  botonClick() {
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

  listaEmpresa: any;
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

  clienteExistente() {
    $("#tipodocumento").prop("disabled", true);
    $("#fechainscripcion").prop("disabled", true);
    $("#condicion").prop("disabled", true);
    $("#estado").prop("disabled", true);
    $("#direccionfiscal").prop("disabled", true);
    $("#actividadeconomica").prop("disabled", true);


  }
  /* data temporal de pestaña datos generales */
  enviarTipodocumento(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalTipoDocumento(undefined);
    }else{
      this.config.setGlobalTipoDocumento(evt.target.value);
    }
   
  }
  enviarNumeroDocumento(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalNumeroDocumento(undefined);
    }else{
      this.config.setGlobalNumeroDocumento(evt.target.value);
    }
    
  }
  enviarRazonSocial(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalNombreRazonSocial(undefined);
    }else{
      this.config.setGlobalNombreRazonSocial(evt.target.value);
    }
    
  }
  enviarNombreComercial(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalNombreComercial(undefined);
    }else{
      this.config.setGlobalNombreComercial(evt.target.value);
    }
   
  }
  enviarFechaInscripcion(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalFechaDeInscripcion(undefined);
    }else{
      this.config.setGlobalFechaDeInscripcion(evt.target.value);
    }
  
  }
  enviarCondicion(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalCondicion(undefined);
    }else{
      this.config.setGlobalCondicion(evt.target.value);
    }
  
  }
  enviarEstado(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalEstado(undefined);
    }else{
      this.config.setGlobalEstado(evt.target.value);
    }
  
  }
  enviarDireccionFiscal(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalDireccionFiscal(undefined);
    }else{
      this.config.setGlobalDireccionFiscal(evt.target.value);
    }
   
  }
  enviarActividadEconomica(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalActividadEconomica(undefined);
    }else{
      this.config.setGlobalActividadEconomica(evt.target.value);
    }
   
  }
  /* data temporal de pestaña datos sap*/
  enviarcodigoSap(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalCodigoSap(undefined);
    }else{
      this.config.setGlobalCodigoSap(evt.target.value);
    }
   
  }
  enviarDominio(evt) {
    if(evt.target.value  == ""){
      this.config.setGlobalDominio(undefined);
    }else{
      this.config.setGlobalDominio(evt.target.value);
    }
   
  }
}
