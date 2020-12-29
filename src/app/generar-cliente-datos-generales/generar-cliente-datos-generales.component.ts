import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalClient } from '../commons/Clienteglobal';
import { EmpresaSunat } from '../model/empresasunat';
import { TipoDocumento } from '../model/tipodocumento';
import { EmpresaService } from '../services/empresa.service';
import { TipoDocumentoService } from '../services/tipodocumento.service';
import { DatePipe } from '@angular/common'
import { IfStmt } from '@angular/compiler';
import { StoreService } from '../services/store.service';
import { Comerciales } from '../generar-cliente-datos-comerciales/comerciales';
import { EconomicActivity } from '../model/economicactivity';
import { EconomicActivityService } from '../services/aconomicactivity.service';
import { Generales } from './generales';
import { Persona } from '../model/persona';
import { PersonaService } from '../services/persona.service';

interface typeOfSelect {
  label: string;
}
declare var $: any;
@Component({
  selector: 'app-generar-cliente-datos-generales',
  templateUrl: './generar-cliente-datos-generales.component.html',
  styleUrls: ['./generar-cliente-datos-generales.component.scss'],
  providers: [DatePipe]

})
export class GenerarClienteDatosGeneralesComponent implements OnInit {

  @Output()
  enviar: EventEmitter<string> = new EventEmitter<string>();
  tipodocumento: string;
  notificacionGlobal: {};
  empresaSunat: EmpresaSunat;
  ruc: number;
  cantidad: number;
  listadoTipoDocumentos: any;
  idtipodocumento: number;

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
  selectedtipoDoc: any;
  listaActividades: any;
  selectedActividades: EconomicActivity

  constructor(public dialogService: DialogService,
    public config: GlobalClient,
    private empresaSunatService: EmpresaService,
    private tipodeDocumentoService: TipoDocumentoService,
    public datepipe: DatePipe,
    public store: StoreService,
    private economicActivityService: EconomicActivityService,
    private generales: Generales,
    private personaService: PersonaService) {}

  

  botonClick() {
    this.enviar.emit(this.tipodocumento);
  }

  

  ngOnInit(): void {

    $("#tipodocumento2").hide();
    $("#busquedaruc").prop("maxlength", 11);
    $("#actividadeconomica").hide();
    this.store.cliente.setGlobalOtroTipoOperador(0);
    var objTipoDocumento = new TipoDocumento();
    this.tipodeDocumentoService.obtenerTipoDocumento(objTipoDocumento).subscribe(
      (dataTipoDocumentos) => {
        this.listadoTipoDocumentos = dataTipoDocumentos;
        //console.log("tipo de documentos: " + JSON.stringify(this.listadoTipoDocumentos));
      }, (error) => {
        console.log("tipo de documentos error: " + JSON.stringify(error));
      })

  }
  searchActivities(event) {
    var objActivity = new EconomicActivity();
    objActivity.nombreactividad = "%" + event.query + "%";
    this.economicActivityService.obtenerActvidadesEconomicasOnPremise(objActivity).subscribe(
      (dataActivities) => {
        this.listaActividades = new Array();
        this.listaActividades = dataActivities;
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
    var inputBusqueda = ((document.getElementById("busquedaruc") as HTMLInputElement).value);
    //var nombreComercial = ((document.getElementById("nombrecomercial") as HTMLInputElement).value);
      
    if (inputBusqueda.length > 10) {
      var objPersona = new Persona();
      objPersona.numerodocumento = inputBusqueda;
      this.personaService.obtenerClientePorNumeroDocumento(objPersona).subscribe(
          (dataListadoClientes) => {
              if (Object.keys(dataListadoClientes).length === 0) {
                this.cantidad = inputBusqueda.length;
                this.ruc = Number(inputBusqueda);
                this.empresaSunatService.obtenerEmpresaSunat(this.ruc)
                  .subscribe(data => {
                    console.log(data)
                    this.empresaSunat = data;
          
          
                    //let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
                    $("#actividadeconomica").show();
                    $("#actividadeseconomicasinput").hide();
                    const fechaInscripcion = this.datepipe.transform(this.empresaSunat.fechaInscripcion, 'dd-MM-yyyy');
                    $("#numerodocumento").val(this.empresaSunat.ruc).prop("disabled", true);
                    $("#razonsocial").val(this.empresaSunat.razonSocial).prop("disabled", true);
                    $("#condicion").val(this.empresaSunat.condicion).prop("disabled", true);
                    $("#fechainscripcion").val(fechaInscripcion).prop("disabled", true);
                    $("#estado").val(this.empresaSunat.estado).prop("disabled", true);
                    var actividadesSunatNombre = this.generales.obtenerNombreActividadEconomica(this.empresaSunat.actEconomicas.toString());
                    $("#actividadeconomica").val(actividadesSunatNombre).prop("disabled", true);
          
                    var direccionFiscal = this.empresaSunat.direccion + ", " + this.empresaSunat.distrito + ", " + this.empresaSunat.departamento;
                    $("#direccionfiscal").val(direccionFiscal).prop("disabled", true);
          
                    /* guardando campos en variable global cliente  */
                    this.store.cliente.setGlobalTipoDocumento(3);
                    this.store.cliente.setGlobalNumeroDocumento(this.empresaSunat.ruc.toString());
                    this.store.cliente.setGlobalNombreRazonSocial(this.empresaSunat.razonSocial)
                    this.store.cliente.setGlobalFechaDeInscripcion(this.empresaSunat.fechaInscripcion);
                    this.store.cliente.setGlobalCondicion(this.empresaSunat.condicion);
                    this.store.cliente.setGlobalEstado(this.empresaSunat.estado);
                    this.store.cliente.setGlobalDireccionFiscal(direccionFiscal);
                    this.store.cliente.setGlobalActividadEconomica(Number(this.generales.obtenerIdActividadEconomica(this.empresaSunat.actEconomicas.toString())));
          
                    $("#tipodocumento2").show().prop("disabled", true);
                    $("#tipodocumento1").hide();
          
          
          
                    //alert(this.generales.obtenerNombreActividadEconomica(this.empresaSunat.actEconomicas.toString()));
          
                  }, error => {
          
                    if (error.status == 400) {
                      this.mensajeGlobalNotificacion("warning", "Lo sentimos, El numero de ruc ingresado no se encuentra registrado en la Sunat.", true);
                    } else {
                      this.mensajeGlobalNotificacion("warning", "Lo sentimos, Ha Ocurrido un error interno.", true);
                    }
                    console.log("console error: " + JSON.stringify(error))
                  });
              } else {
                this.mensajeGlobalNotificacion("warning", "Cliente ya se encuentra registrado.", true);
              }
      })

     
    }

  }

  soloNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }


  }

  
 
  onSelect(evt) {
   if(evt == undefined || evt == null){
    this.store.cliente.setGlobalActividadEconomica(null);
   }else{
    this.store.cliente.setGlobalActividadEconomica(evt.id); 
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

    if (tipodocumento == null) {
      this.store.cliente.setGlobalTipoDocumento(null);
    } else {
      this.store.cliente.setGlobalTipoDocumento(tipodocumento.id);
    }

  }
  enviarNumeroDocumento(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalNumeroDocumento(null);
    } else {
      this.store.cliente.setGlobalNumeroDocumento(evt.target.value);
    }

  }
  enviarRazonSocial(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalNombreRazonSocial(null);
    } else {
      this.store.cliente.setGlobalNombreRazonSocial(evt.target.value);
    }

  }
  enviarNombreComercial(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalNombreComercial(null);
    } else {
      this.store.cliente.setGlobalNombreComercial(evt.target.value);
    }

  }
  enviarFechaInscripcion(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalFechaDeInscripcion(null);
    } else {
      this.store.cliente.setGlobalFechaDeInscripcion(evt.target.value);
    }

  }
  enviarCondicion(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalCondicion(null);
    } else {
      this.store.cliente.setGlobalCondicion(evt.target.value);
    }

  }
  enviarEstado(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalEstado(null);
    } else {
      this.store.cliente.setGlobalEstado(evt.target.value);
    }

  }
  enviarDireccionFiscal(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalDireccionFiscal(null);
    } else {
      this.store.cliente.setGlobalDireccionFiscal(evt.target.value);
    }

  }
  enviarActividadEconomica(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalActividadEconomica(null);
    } else {
      this.store.cliente.setGlobalActividadEconomica(evt.target.value);
    }

  }
  /* data temporal de pestaña datos sap*/
  enviarcodigoSap(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalCodigoSap(null);
    } else {
      this.store.cliente.setGlobalCodigoSap(evt.target.value);
    }

  }
  enviarDominio(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalDominio(null);
    } else {
      this.store.cliente.setGlobalDominio(evt.target.value);
    }

  }

  
}
