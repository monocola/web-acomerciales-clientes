import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalClient } from 'src/app/commons/Clienteglobal';
import { EconomicActivity } from 'src/app/model/economicactivity';
import { Persona } from 'src/app/model/persona';
import { TipoDocumento } from 'src/app/model/tipodocumento';
import { EconomicActivityService } from 'src/app/services/aconomicactivity.service';
import { PersonaService } from 'src/app/services/persona.service';
import { StoreService } from 'src/app/services/store.service';
import { TipoDocumentoService } from 'src/app/services/tipodocumento.service';
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
  persona: GlobalClient;
  actividades: EconomicActivity;
  listadoTipoDocumentos: any;
  tipoDocumentoID:number;
  tipodoc:number;

  
  constructor(public dialogService: DialogService,
    public config: GlobalClient,
    private store: StoreService,
    private personaService: PersonaService,
    private economicActivityService: EconomicActivityService,
    private tipodeDocumentoService: TipoDocumentoService) { }

  ngOnInit(): void {

    var objTipoDocumento = new TipoDocumento();
    this.tipodeDocumentoService.obtenerTipoDocumento(objTipoDocumento).subscribe(
      (dataTipoDocumentos) => {
        this.listadoTipoDocumentos = dataTipoDocumentos;
      }, (error) => {
      })

    const obj = JSON.parse(JSON.stringify(this.store.cliente));
    $("#tipodocumento").val(obj.tipo_documento);
    $("#numerodocumento").val(obj.numerodocumento).prop("disabled", true);
    $("#nombrecomercial").val(obj.nombrecomercial);
    $("#razonsocial").val(obj.razon_social);
    $("#fechainscripcion").val(obj.inicioactividad).prop("disabled", true);
    $("#condicion").val(obj.condicionsunat).prop("disabled", true);
    $("#estado").val(obj.estadosunat).prop("disabled", true);
    $("#direccionfiscal").val(obj.direccionfiscal).prop("disabled", true);
    $("#codigosap").val(obj.codigosap).prop("disabled", true);
    $("#dominio").val(obj.dominio);
    this.tipoDocumentoID = obj.tipodocumento;


    /* almacenamiento de atributos en variable global  */
    this.config.setGlobalEmpresaID(obj.id);
    this.config.setGlobalTipoDocumento(this.tipoDocumentoID);
    this.config.setGlobalNumeroDocumento(obj.numerodocumento);
    this.config.setGlobalNombreRazonSocial(obj.razon_social);
    this.config.setGlobalNombreComercial(obj.nombrecomercial);
    this.config.setGlobalDireccionFiscal(obj.direccionfiscal);
    this.config.setGlobalFechaDeInscripcion(obj.inicioactividad);
    this.config.setGlobalActividadEconomica(obj.actividadeconomica);
    this.config.setGlobalDominio(obj.dominio);
       

    
    var objActivity = new EconomicActivity();
    objActivity.id = obj.actividadeconomica;
    this.economicActivityService.obtenerActvidadEconomicasPorIdOnPremise(objActivity).subscribe(
      (dataActivities) => {
        this.actividades = dataActivities;
        $.each(this.actividades, function (i, item) {
          var actividad = item.id + " - " + item.nombreactividad;
          $("#actividadeconomica").val(actividad).prop("disabled", true);
        });
        //alert(this.actividades.nombreactividad);

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
  enviarTipoDocumento(){
    var tipodocumento = ((document.getElementById("tipodocumento") as HTMLInputElement).value);
    this.tipodoc = Number(tipodocumento);
  
  if (this.tipodoc == 0) {
      this.config.setGlobalTipoDocumento(null);
    } else {
      this.config.setGlobalTipoDocumento(this.tipodoc);
    }
 

  }

  enviarRazonSocial(evt) {

    if (evt.target.value == "") {
      this.config.setGlobalNombreRazonSocial(null);
    } else {
      this.config.setGlobalNombreRazonSocial(evt.target.value);
    }

  }
  enviarNombreComercial(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalNombreComercial(null);
    } else {
      this.config.setGlobalNombreComercial(evt.target.value);
    }
  
  }
  enviarDireccionFiscal(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalDireccionFiscal(null);
    } else {
      this.config.setGlobalDireccionFiscal(evt.target.value);
    }

  }
 
 
  enviarDominio(evt) {
    if (evt.target.value == "") {
      this.config.setGlobalDominio(null);
    } else {
      this.config.setGlobalDominio(evt.target.value);
    }
  }
}
