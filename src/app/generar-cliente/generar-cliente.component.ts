import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { VerListadoClientesComponent } from '../clientes/ver-listado-clientes/ver-listado-clientes.component';
import { VerlistadoProductosClienteComponent } from '../clientes/verlistado-productos-cliente/verlistado-productos-cliente.component';
import { GlobalClient } from '../commons/Clienteglobal';
import { ContactosClienteComponent } from '../contactos-cliente/contactos-cliente.component';
import { Comerciales } from '../generar-cliente-datos-comerciales/comerciales';
import { Persona } from '../model/persona';
import { StoreService } from '../services/store.service';
import { PersonaService } from '../services/persona.service';
import { PersonaFinanciera } from '../model/PersonaFinanciera';



declare var $: any;
@Component({
  selector: 'app-generar-cliente',
  templateUrl: './generar-cliente.component.html',
  styleUrls: ['./generar-cliente.component.scss'],
  providers: [DatePipe]


})
export class GenerarClienteComponent implements OnInit {
  notificacionGlobal: {};
  pestana = 1;
  posicion: any;
  ref: DynamicDialogRef;

  variablecboxfecha_solicitudAR: any;
  validacion: boolean = false;
  tipoDocumento: string;
  docu:any;

  cliente: GlobalClient = new GlobalClient();

  constructor(public config: GlobalClient,
    public contactos: ContactosClienteComponent,
    private dynamicDialogRef: DynamicDialogRef,
    public dialogService: DialogService,
    public store: StoreService,
    public datepipe: DatePipe,
    private comerciales: Comerciales,
    private personaService: PersonaService
    
  ) {
    this.store.cliente$.subscribe(c => this.cliente = c);
  }




  ngOnInit(): void {
    
    $("#guardar").hide();
    $("#anterior").hide();
    $("#subirarchivo").hide();

    /*  inicia pestaña datos Generales*/
    $("#bodyDatosGenerales").show();
    $("#bodyComercial").hide();
    $("#bobyFinanciera").hide();
    $("#subirarchivo").hide();

    this.mensajeGlobalNotificacion("warning", "", false);


  }

  listadoClientes() {

    this.ref = this.dialogService.open(VerListadoClientesComponent, {
      //width: '50%',
      styleClass: 'comisionfile',
      closeOnEscape: false,
      dismissableMask: false,
      baseZIndex: 10000,
      showHeader: false
    });

  }

 
  listadoProductosYsectores() {

    this.ref = this.dialogService.open(VerlistadoProductosClienteComponent, {
      //width: '50%',
      styleClass: 'comisionfile',
      closeOnEscape: false,
      dismissableMask: false,
      baseZIndex: 10000,
      showHeader: false
    });

  }


  cambiar_pestana_anterio() {

    switch (this.pestana) {

      case 1: {
        this.mensajeGlobalNotificacion("warning", "", false);
        this.pestana = 1;
        break;
      }
      case 2: {
        $("#pestanaDatos").addClass('active');
        $("#pestanaInfoComercial").removeClass('active');
        $("#pestanaInfoFinanciera").removeClass('active');
        $("#anterior").hide();
        $("#siguiente").show();
        $("#guardar").hide();
        $("#bodyDatosGenerales").show();
        $("#bodyComercial").hide();
        $("#bobyFinanciera").hide();
        $("#subirarchivo").hide();
        this.mensajeGlobalNotificacion("warning", "", false);
        this.pestana = 1;
        break;
      }
      case 3: {
        $("#pestanaDatos").removeClass('active');
        $("#pestanaInfoComercial").addClass('active');
        $("#pestanaInfoFinanciera").removeClass('active');
        $("#guardar").hide();
        $("#siguiente").show();
        $("#anterior").show();
        $("#bodyDatosGenerales").hide();
        $("#bodyComercial").show();
        $("#bobyFinanciera").hide();
        $("#subirarchivo").hide();
        this.mensajeGlobalNotificacion("warning", "", false);
        this.pestana = 2;
        break;
      }

    }

  }

  cambiar_pestana_siguiente() {
    switch (this.pestana) {
      case 1: {
        $("#pestanaDatos").addClass('active');
        $("#pestanaInfoComercial").removeClass('active');
        $("#pestanaInfoFinanciera").removeClass('active');
        $("#anterior").hide();
        $("#siguiente").show();
        $("#guardar").hide();
        $("#subirarchivo").hide();

        /*  mostrar pestaña datos Generales*/
        $("#bodyDatosGenerales").show();
        $("#bodyComercial").hide();
        $("#bobyFinanciera").hide();

        this.docu = this.cliente.getGlobalTipoDocumento();

        if (this.cliente.getGlobalTipoDocumento() == null || this.cliente.getGlobalTipoDocumento() == 0 ) {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar el Tipo de Documento.", true);
          this.pestana = 1;
        } else if (this.cliente.getGlobalNumeroDocumento() == null || this.cliente.getGlobalNumeroDocumento() == "") {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar el Numero de Documento.", true);
          this.pestana = 1;
        } else if (this.cliente.getGlobalNombreRazonSocial() == null || this.cliente.getGlobalNombreRazonSocial() == "") {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar una Razón Social.", true);
          this.pestana = 1;
        } else if (this.cliente.getGlobalFechaDeInscripcion() == null) {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar una Fecha de Inscripción.", true);
          this.pestana = 1;
        } else if (this.cliente.getGlobalCondicion() == null) {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar una Condición.", true);
          this.pestana = 1;
        } else if (this.cliente.getGlobalEstado() == null) {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar un estado.", true);
          this.pestana = 1;
        } else if (this.cliente.getGlobalDireccionFiscal() == null || this.cliente.getGlobalDireccionFiscal() == "") {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar una Dirección Fiscal.", true);
          this.pestana = 1;
        } else if (this.cliente.getGlobalActividadEconomica() == null || this.cliente.getGlobalActividadEconomica() == 0) {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar la Actividad Económica.", true);
          this.pestana = 1;
        } else {

          this.pestana = 2;
          this.mensajeGlobalNotificacion("warning", "", false);
          $("#pestanaDatos").removeClass('active');
          $("#pestanaDataSap").removeClass('active');
          $("#pestanaInfoComercial").addClass('active');
          $("#pestanaInfoFinanciera").removeClass('active');
          $("#guardar").hide();
          $("#anterior").show();
          $("#subirarchivo").hide();


          $("#bodyDatosGenerales").hide();
          $("#bodySap").hide();
          $("#bodyComercial").show();
          $("#bobyFinanciera").hide();
        }


        break;
      }
      case 2: {
        if (this.cliente.getGlobalListadoTipoOperadores() == null || this.cliente.getGlobalListadoTipoOperadores() == "" ) {
          this.mensajeGlobalNotificacion("warning", "Debe seleccionar al menos un Operador.", true);
          this.pestana = 2;
        } else if (this.cliente.getGlobalOtroTipoOperador() == 1) {
          if ( this.cliente.getGlobalOtroTipoOperadorEspecificar() == null) {
            this.mensajeGlobalNotificacion("warning", "Debe especificar el tipo de operador.", true);
            this.pestana = 2;
          }else{
            this.pestana = 3;
            this.pestana = 3;
            this.mensajeGlobalNotificacion("warning", "", false);
            $("#pestanaDatos").removeClass('active');
            $("#pestanaDataSap").removeClass('active');
            $("#pestanaInfoComercial").removeClass('active');
            $("#pestanaInfoFinanciera").addClass('active');
            $("#siguiente").hide();
            $("#anterior").show();
            $("#guardar").show();
            $("#subirarchivo").show();

            $("#bodyDatosGenerales").hide();
            $("#bodySap").hide();
            $("#bodyComercial").hide();
            $("#bobyFinanciera").show();
            }
          
        } else {

          this.pestana = 3;
          this.mensajeGlobalNotificacion("warning", "", false);
          $("#pestanaDatos").removeClass('active');
          $("#pestanaDataSap").removeClass('active');
          $("#pestanaInfoComercial").removeClass('active');
          $("#pestanaInfoFinanciera").addClass('active');
          $("#siguiente").hide();
          $("#anterior").show();
          $("#guardar").show();
          $("#subirarchivo").show();

          $("#bodyDatosGenerales").hide();
          $("#bodySap").hide();
          $("#bodyComercial").hide();
          $("#bobyFinanciera").show();
        }

        break;


      }
    }

  }
  mensajeGlobalNotificacion(tipo, mensaje, view) {
    this.notificacionGlobal = {
      type: tipo,
      message: [{ mensaje: mensaje }],
      show: view
    }
  }

  guardarCliente() {


   
    if (this.cliente.getGlobalPlazoCreditoId() == null || this.cliente.getGlobalPlazoCreditoId() == 0) {
      this.mensajeGlobalNotificacion("warning", "Debe seleccionar el plazo de crédito.", true);
      this.pestana = 3;
    } else if (this.cliente.getGlobalTasaInteresLibroId() == null || this.cliente.getGlobalTasaInteresLibroId() == 0) {
      this.mensajeGlobalNotificacion("warning", "Debe ingresar la tasa de interes Libro.", true);
      this.pestana = 3;
    } else if (this.cliente.getGlobalTasaInteresEspecial() == null || this.cliente.getGlobalTasaInteresEspecial() == "") {
      this.mensajeGlobalNotificacion("warning", "Debe ingresar la tasa de interes Especial.", true);
      this.pestana = 3;
    } else if (this.cliente.getGlobalCalificacionRiesgoId() == null || this.cliente.getGlobalCalificacionRiesgoId() == 0) {
      this.mensajeGlobalNotificacion("warning", "Debe seleccionar la calificación del riesgo.", true);
      this.pestana = 3;
    } else {

      /* GUARDADO DE INFORMACIÓN */
      this.mensajeGlobalNotificacion("warning", "", false);
      var objPersona = new Persona();
      objPersona.tipodocumento                   =          this.cliente.getGlobalTipoDocumento();
      objPersona.ruc                             =          this.cliente.getGlobalNumeroDocumento();
      objPersona.razonsocial                     =          this.cliente.getGlobalNombreRazonSocial();
      objPersona.nombrecomercial                 =          this.cliente.getGlobalNombreComercial()
      
      //const fechaInicioSunat = this.datepipe.transform(fecha, 'yyyy-MM-dd');
      objPersona.inicioactividad                 =          this.cliente.getGlobalFechaDeInscripcion();
      objPersona.direccionfiscal                 =          this.cliente.getGlobalDireccionFiscal();
      objPersona.actividadeconomica              =          this.cliente.getGlobalActividadEconomica();
      objPersona.dominio                         =          this.cliente.getGlobalDominio();
      objPersona.productoid                      =          this.cliente.getGlobalProductoId();  
      objPersona.ejecutivo                       =          this.cliente.getGlobalEjecutivo();
      objPersona.escliente                       =          1;
      objPersona.esproveedor                     =          this.cliente.getGlobalCategoriaClienteProveedor();          
      
      /* se envia el listado de los tipos de operadores seleccionado y se inserta en cada tipo por separado */
      this.comerciales.resetearTiposOperadores();
      this.comerciales.enviarTiposOperadores(this.cliente.getGlobalListadoTipoOperadores());

      objPersona.esagenteaduana                  =          this.cliente.getGlobalEsAgenteAduana();
      objPersona.esagentecarga                   =          this.cliente.getGlobalEsAgenteCarga();
      alert("agente carga: " + this.cliente.getGlobalEsAgenteCarga());
      objPersona.esoperadorlogistico             =          this.cliente.getGlobalEsOperadorLogistico(); 
      objPersona.esdeposito                      =          this.cliente.getGlobalEsDeposito();
      objPersona.estransportista                 =          this.cliente.getGlobalEsTransportista();
      objPersona.eslineanaviera                  =          this.cliente.getGlobalEsLineaNaviera();
      objPersona.esagentemaritimo                =          this.cliente.getGlobalEsAgenteMaritimo(); 

      objPersona.otrooperador                    =          this.cliente.getGlobalOtroTipoOperadorEspecificar(); 
      objPersona.suspendido                      =          0;
      objPersona.bloqueopma                      =          0;
      objPersona.bloqueotpp                      =          0;
      objPersona.bloqueoapl                      =          0;
      objPersona.bloqueogap                      =          0;
      objPersona.motivobloqueo                   =          "desconocido";
      objPersona.apellidopaterno                 =          "desconocido";
      objPersona.apellidomaterno                 =          "desconocido";
      objPersona.primernombre                    =          "desconocido";
      objPersona.segundonombre                   =          "desconocido";
      objPersona.ubigeo                          =          "desconocido";
      objPersona.pais                            =          1;
      objPersona.empresatipo                     =          3;
      objPersona.estadosunat                     =          "00";//this.cliente.getGlobalEstado();
      objPersona.condicionsunat                  =          "00"; //this.cliente.getGlobalCondicion();
      objPersona.usuariocreadorid                =          Number(localStorage.getItem("cpnID_Empresa"));
      objPersona.cpcUsuarioBloquea               =          localStorage.getItem("usurariologin");  

     
      this.personaService.registrarPersonasOnPremise(objPersona).subscribe(
        (empresaId) => {
          //console.log("1. respuesta registro persona: " + empresaId);
          if(empresaId == -1){
            //console.log("error de registro persona: " + empresaId);
          }else{
            /* Registro persona financiera */
            var objPersonaF = new PersonaFinanciera();
            objPersonaF.empresaid                     =         Number(empresaId);     
            objPersonaF.calificacionid                =         this.cliente.getGlobalCalificacionRiesgoId();
            objPersonaF.plazoid                       =         this.cliente.getGlobalPlazoCreditoId();
            objPersonaF.tasainteresespecial           =         this.cliente.getGlobalTasaInteresEspecial();
            objPersonaF.tasaintereslibro              =         this.cliente.getGlobalTasaInteresLibroId();

            this.personaService.registrarPersonasFinancieraOnPremise(objPersonaF).subscribe(
              (pfinanciera) => {
                //console.log("2. respuesta registro persona financiera: " + pfinanciera);
                if(pfinanciera == -1){
                  this.mensajeGlobalNotificacion("warning", "Ocurrió un problema, el registro no pudo ser guardado.", true);
                }else{
                  this.mensajeGlobalNotificacion("success", "Éxito, el cliente ha sido registrado satisfactóriamente.", true);
                }
              });
           
          }
        },
        error =>{
          //console.log("Objeto error persona: " + JSON.stringify(error));
        })


    }

  }

  cerrar() {
    this.dynamicDialogRef.close();
    this.config.limpiarGlobalCliente();
  }




}
