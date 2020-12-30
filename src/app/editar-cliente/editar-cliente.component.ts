import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalClient } from '../commons/Clienteglobal';
import { ContactosClienteComponent } from '../contactos-cliente/contactos-cliente.component';
import { Persona } from '../model/persona';
import { PersonaService } from '../services/persona.service';
import { StoreService } from '../services/store.service';
import { SubirArchivoClienteComponent } from './subir-archivo-cliente/subir-archivo-cliente.component';
declare var $: any;
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  pestana = 1;
  posicion: any;

  variablecboxfecha_solicitudAR: any;
  validacion: boolean = false;
  tipoDocumento: string;
  ref: DynamicDialogRef;
  notificacionGlobal: {};
  persona:Persona;
  
  cliente: GlobalClient = new GlobalClient();

  constructor(public config: GlobalClient,
    public contactos: ContactosClienteComponent,
    private dynamicDialogRef: DynamicDialogRef,
    private dialogService: DialogService,
    public store: StoreService,
    private personaService: PersonaService) 
    {
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
  /*      } */


        break;
      }
      case 2: {

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

   /* ACTUALIZACION DE INFORMACIÓN */
   
      this.mensajeGlobalNotificacion("warning", "", false);
      var objPersona = new Persona();
      objPersona.id                              =          this.config.getGlobalEmpresaID();
      objPersona.tipodocumento                   =          this.config.getGlobalTipoDocumento();
      objPersona.ruc                             =          this.config.getGlobalNumeroDocumento();
      objPersona.razonsocial                     =          this.config.getGlobalNombreRazonSocial();
      objPersona.nombrecomercial                 =          this.config.getGlobalNombreComercial()

      objPersona.inicioactividad                 =          this.config.getGlobalFechaDeInscripcion();
      objPersona.direccionfiscal                 =          this.config.getGlobalDireccionFiscal();
      objPersona.actividadeconomica              =          this.config.getGlobalActividadEconomica();
      objPersona.dominio                         =          this.config.getGlobalDominio();
      objPersona.productoid                      =          this.config.getGlobalProductoId();  
      objPersona.ejecutivo                       =          this.config.getGlobalEjecutivo();
      objPersona.escliente                       =          1;
      objPersona.esproveedor                     =          this.config.getGlobalCategoriaClienteProveedor();          
      
      
      objPersona.esagenteaduana                  =          this.config.getGlobalEsAgenteAduana();
      objPersona.esagentecarga                   =          this.config.getGlobalEsAgenteCarga();
      objPersona.esoperadorlogistico             =          this.config.getGlobalEsOperadorLogistico(); 
      objPersona.esdeposito                      =          this.config.getGlobalEsDeposito();
      objPersona.estransportista                 =          this.config.getGlobalEsTransportista();
      objPersona.eslineanaviera                  =          this.config.getGlobalEsLineaNaviera();
      objPersona.esagentemaritimo                =          this.config.getGlobalEsAgenteMaritimo(); 

   
      objPersona.otrooperador                    =          this.config.getGlobalOtroTipoOperadorEspecificar(); 
      objPersona.suspendido                      =          this.config.getGlobalEstadoSuspension();
      objPersona.bloqueopma                      =          this.config.getGlobalSuspendidoPMA();
      objPersona.bloqueotpp                      =          this.config.getGlobalSuspendidoTPP();
      objPersona.bloqueoapl                      =          this.config.getGlobalSuspendidoTPPT();
      objPersona.bloqueogap                      =          this.config.getGlobalSuspendidoTPPAD();
      objPersona.motivobloqueo                   =          this.config.getGlobalMotivoSuspension();
      objPersona.apellidopaterno                 =          "";
      objPersona.apellidomaterno                 =          "";
      objPersona.primernombre                    =          "";
      objPersona.segundonombre                   =          "";
      objPersona.ubigeo                          =          "";
      objPersona.pais                            =          1;
      objPersona.empresatipo                     =          3;
      objPersona.estadosunat                     =          "00"; //this.cliente.getGlobalEstado();
      objPersona.condicionsunat                  =          "00"; //this.cliente.getGlobalCondicion();
      objPersona.usuariocreadorid                =          Number(localStorage.getItem("cpnID_Empresa"));
      objPersona.cpcUsuarioBloquea               =          localStorage.getItem("usurariologin");  

      console.log("Data por enviar: ===> " + JSON.stringify(objPersona));

      this.personaService.actualizarPersonasOnPremise(objPersona).subscribe(
        (empresaId) => {
          console.log("1. respuesta actualizacion persona: " + empresaId);
          if(empresaId == -1){
            console.log("error de actualizacion persona: " + empresaId);
          }else{
            console.log("persona actualizada.");
          }
        })

  }

  cerrar() {
    this.dynamicDialogRef.close();
    this.config.limpiarGlobalCliente();
  }

  subirEvidenciaSuspension(valor){
    this.ref = this.dialogService.open(SubirArchivoClienteComponent, {
      //width: '50%',
      styleClass: 'comisionfile',
      closeOnEscape: false,
      dismissableMask: false,
      baseZIndex: 10000,
      showHeader: false
    });
  }

  



}
