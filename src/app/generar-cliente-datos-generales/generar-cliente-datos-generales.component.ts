import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalClient } from '../commons/Clienteglobal';
import { EmpresaSunat } from '../model/empresasunat';
import { TipoDocumento } from '../model/tipodocumento';
import { EmpresaService } from '../services/empresa.service';
import { TipoDocumentoService } from '../services/tipodocumento.service';
import { DatePipe } from '@angular/common'

interface typeOfSelect {
  label: string;
}
declare var $: any;
@Component({
  selector: 'app-generar-cliente-datos-generales',
  templateUrl: './generar-cliente-datos-generales.component.html',
  styleUrls: ['./generar-cliente-datos-generales.component.scss'],
  providers:[DatePipe]

})
export class GenerarClienteDatosGeneralesComponent implements OnInit {

  empresaSunat: EmpresaSunat;
  ruc: number;
  cantidad:number;
  listadoTipoDocumentos:any;
  idtipodocumento:number;
  constructor(public dialogService: DialogService,
    public config: GlobalClient,
    private empresaSunatService: EmpresaService,
    private tipodeDocumentoService: TipoDocumentoService,
    public datepipe: DatePipe) { }

  @Output()
  enviar: EventEmitter<string> = new EventEmitter<string>();
  tipodocumento: string;
  notificacionGlobal: {};
  
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
  selectedtipoDoc:any;


  ngOnInit(): void {

    $("#tipodocumento2").hide();
    $("#busqueda").prop("maxlength",11);
   
    var objTipoDocumento = new TipoDocumento();
    this.tipodeDocumentoService.obtenerTipoDocumento(objTipoDocumento).subscribe(
      (dataTipoDocumentos) => {
        this.listadoTipoDocumentos = dataTipoDocumentos;
        //console.log("tipo de documentos: " + JSON.stringify(this.listadoTipoDocumentos));
      }, (error) =>{
        console.log("tipo de documentos error: " + JSON.stringify(error));
      })
     
  }

  mensajeGlobalNotificacion(tipo, mensaje, view) {
    this.notificacionGlobal = {
      type: tipo,
      message: [{ mensaje: mensaje }],
      show: view
    }
  }

  listaSectoresProd: any;
  buscarTipoDocumento(event1) {
    var objTipoDocumento = new TipoDocumento();
    objTipoDocumento.tipodocumento = event1.query;
    this.tipodeDocumentoService.obtenerTipoDocumento(objTipoDocumento).subscribe(
      (dataTipoDocumentos) => {
        this.listadoTipoDocumentos = dataTipoDocumentos;
        console.log("tipo de documentos: " + JSON.stringify(this.listadoTipoDocumentos));
      })
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

  
  buscarRucSunat() {
    this.mensajeGlobalNotificacion("", "", false);
    var inputBusqueda = ((document.getElementById("busqueda") as HTMLInputElement).value);
    var nombreComercial = ((document.getElementById("nombrecomercial") as HTMLInputElement).value);

    if(inputBusqueda.length > 10){
      this.cantidad = inputBusqueda.length;
      this.ruc = Number(inputBusqueda);
      this.empresaSunatService.obtenerEmpresaSunat(this.ruc)
        .subscribe(data => {
          console.log(data)
          this.empresaSunat = data;
          //let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
          const fechaInscripcion = this.datepipe.transform(this.empresaSunat.fechaInscripcion, 'dd-MM-yyyy');
          $("#numerodocumento").val(this.empresaSunat.ruc).prop("disabled", true);
          $("#razonsocial").val(this.empresaSunat.razonSocial).prop("disabled", true);
          $("#condicion").val(this.empresaSunat.condicion).prop("disabled", true);
          $("#fechainscripcion").val(fechaInscripcion).prop("disabled", true);
          $("#estado").val(this.empresaSunat.estado).prop("disabled", true);
          $("#actividadeconomica").val(this.empresaSunat.actEconomicas).prop("disabled", true);

          var direccionFiscal = this.empresaSunat.direccion + ", " + this.empresaSunat.distrito +  ", " + this.empresaSunat.departamento;
          $("#direccionfiscal").val(direccionFiscal).prop("disabled", true);

          /* guardando campos en variable global cliente  */
          this.config.setGlobalTipoDocumento(3);
          this.config.setGlobalNumeroDocumento(this.empresaSunat.ruc.toString());
          this.config.setGlobalNombreRazonSocial(this.empresaSunat.razonSocial)
          this.config.setGlobalFechaDeInscripcion(this.empresaSunat.fechaInscripcion);
          this.config.setGlobalCondicion(this.empresaSunat.condicion);
          this.config.setGlobalEstado(this.empresaSunat.estado);
          this.config.setGlobalDireccionFiscal(direccionFiscal);
          this.config.setGlobalActividadEconomica(this.empresaSunat.actEconomicas);
          
          $("#tipodocumento2").show().prop("disabled", true);
          $("#tipodocumento1").hide();
        }, error => {
          this.mensajeGlobalNotificacion("warning", "Lo sentimos, El numero de ruc ingresado no Existe.", true);
          console.log("console error: " + error)
        });
    }
   
  }

  soloNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }

  
  }

  listaEmpresa: any;
  onSelect(event) {
    if(event == null){
    }else {
    this.idtipodocumento = event.id;
    this.config.setGlobalTipoDocumento(event.id);
    }
    
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
  enviarTipodocumento(tipodocumento) {
   
    if (tipodocumento == undefined) {
      this.config.setGlobalTipoDocumento(undefined);
    } else {
      this.config.setGlobalTipoDocumento(tipodocumento.id);
    }

  }
  enviarNumeroDocumento(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalNumeroDocumento(undefined);
    } else {
      this.config.setGlobalNumeroDocumento(evt.target.value);
    }

  }
  enviarRazonSocial(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalNombreRazonSocial(undefined);
    } else {
      this.config.setGlobalNombreRazonSocial(evt.target.value);
    }

  }
  enviarNombreComercial(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalNombreComercial(undefined);
    } else {
      this.config.setGlobalNombreComercial(evt.target.value);
    }

  }
  enviarFechaInscripcion(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalFechaDeInscripcion(undefined);
    } else {
      this.config.setGlobalFechaDeInscripcion(evt.target.value);
    }

  }
  enviarCondicion(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalCondicion(undefined);
    } else {
      this.config.setGlobalCondicion(evt.target.value);
    }

  }
  enviarEstado(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalEstado(undefined);
    } else {
      this.config.setGlobalEstado(evt.target.value);
    }

  }
  enviarDireccionFiscal(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalDireccionFiscal(undefined);
    } else {
      this.config.setGlobalDireccionFiscal(evt.target.value);
    }

  }
  enviarActividadEconomica(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalActividadEconomica(undefined);
    } else {
      this.config.setGlobalActividadEconomica(evt.target.value);
    }

  }
  /* data temporal de pestaña datos sap*/
  enviarcodigoSap(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalCodigoSap(undefined);
    } else {
      this.config.setGlobalCodigoSap(evt.target.value);
    }

  }
  enviarDominio(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalDominio(undefined);
    } else {
      this.config.setGlobalDominio(evt.target.value);
    }

  }
}
