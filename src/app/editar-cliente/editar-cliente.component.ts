import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalClient } from '../commons/Clienteglobal';
import { ContactosClienteComponent } from '../contactos-cliente/contactos-cliente.component';
import { SubirArchivoClienteComponent } from './subir-archivo-cliente/subir-archivo-cliente.component';
declare var $: any;
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  notificacionGlobal: {};
  constructor(public config: GlobalClient,
    public contactos: ContactosClienteComponent,
    private dynamicDialogRef: DynamicDialogRef,
    private dialogService: DialogService) { }
  pestana = 1;
  posicion: any;

  variablecboxfecha_solicitudAR: any;
  validacion: boolean = false;
  tipoDocumento: string;
  ref: DynamicDialogRef;



  ngOnInit(): void {
    //this.tipoDocumento = this.clienteGolbal.tipodeDocumento;
    //$("#tipodocumento").val("tipo2"); 
    //this.config.setGlobalTipoDocumento('tipo2');
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
/*
        if (typeof this.config.getGlobalTipoDocumento() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar el Tipo de Documento.", true);
          this.pestana = 1;
        } else if (typeof this.config.getGlobalNumeroDocumento() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar el Numero de Documento.", true);
          this.pestana = 1;
        } else if (typeof this.config.getGlobalNombreRazonSocial() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar una Razón Social.", true);
          this.pestana = 1;
        } else if (typeof this.config.getGlobalNombreComercial() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar un Nombre Comercial.", true);
          this.pestana = 1;
        } else if (typeof this.config.getGlobalFechaDeInscripcion() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar una Fecha de Inscripción.", true);
          this.pestana = 1;
        } else if (typeof this.config.getGlobalCondicion() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar una Condición.", true);
          this.pestana = 1;
        } else if (typeof this.config.getGlobalEstado() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar un estado.", true);
          this.pestana = 1;
        } else if (typeof this.config.getGlobalDireccionFiscal() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar una Dirección Fiscal.", true);
          this.pestana = 1;
        } else if (typeof this.config.getGlobalActividadEconomica() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar la Actividad Económica.", true);
          this.pestana = 1;
        } else if (typeof this.config.getGlobalCodigoSap() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar el código SAP.", true);
          this.pestana = 1;
        } else if (typeof this.config.getGlobalDominio() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar un Dominio.", true);
          this.pestana = 1;
        } else {
*/
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
/*
        if (typeof this.config.getGlobalProductoId() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe seleccionar un producto.", true);
          this.pestana = 2;
        } else if (typeof this.config.getGlobalSectorId() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe seleccionar un Sector.", true);
          this.pestana = 2;
        } else if (typeof this.config.getGlobalEjecutivo() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe ingresar el mombre del ejecutivo.", true);
          this.pestana = 2;
        } else if (typeof this.config.getGlobalCategoriaClienteProveedor() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe Elegir una categoría.", true);
          this.pestana = 2;
        } else if (typeof this.config.getGlobalListadoTipoOperadores() === 'undefined') {
          this.mensajeGlobalNotificacion("warning", "Debe seleccionar el operador.", true);
          this.pestana = 2;
        } else if (this.config.getGlobalOtroTipoOperador() == 1) {
          if (typeof this.config.getGlobalOtroTipoOperadorEspecificar() === 'undefined') {
            this.mensajeGlobalNotificacion("warning", "Debe especificar el tipo de operador.", true);
          }
          this.pestana = 2;
        } else {
*/
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
  /*      } */

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

  
      /*  if (typeof this.config.getGlobalEstadoSuspension() === 'undefined') {
            this.mensajeGlobalNotificacion("warning", "Debe elegir el estado de Suspensión.", true);
            this.pestana = 3;
          } else if (typeof this.config.getGlobalListadoEmpSuspen() === 'undefined') { //SOLO EN EDITAR
            this.mensajeGlobalNotificacion("warning", "Debe seleccionar Empresa relacionada en la Suspensión.", true);
            this.pestana = 3;
          }else  if (typeof this.config.getGlobalMotivoSuspension() === 'undefined') { //SOLO EN EDITAR
            this.mensajeGlobalNotificacion("warning", "Debe ingresar el motivo de la Suspensión.", true);
            this.pestana = 3;
          }else  if (typeof this.config.getGlobalInstruccionRecibida() === 'undefined') { //SOLO EN EDITAR
            this.mensajeGlobalNotificacion("warning", "Debe ingresar la instrucción recibida.", true);
            this.pestana = 3;
          }else
      */
/*     
      if (typeof this.config.getGlobalPlazoCreditoId() === 'undefined') {
        this.mensajeGlobalNotificacion("warning", "Debe seleccionar el plazo de crédito.", true);
        this.pestana = 3;
      } else if (typeof this.config.getGlobalTasaInteresLibroId() === 'undefined') {
        this.mensajeGlobalNotificacion("warning", "Debe seleccionar la tasa de interes Libro.", true);
        this.pestana = 3;
      } else if (typeof this.config.getGlobalTasaInteresEspecial() === 'undefined') {
        this.mensajeGlobalNotificacion("warning", "Debe ingresar la tasa de interes Especial.", true);
        this.pestana = 3;
      } else if (typeof this.config.getGlobalCalificacionRiesgoId() === 'undefined') {
        this.mensajeGlobalNotificacion("warning", "Debe seleccionar la calificación del riesgo.", true);
        this.pestana = 3;
      } else {

*/        
        console.log("****************************************")
        console.log("tipodocumento: " + this.config.getGlobalTipoDocumento()); //ok
        console.log("numerodocumento: " + this.config.getGlobalNumeroDocumento()); //ok
        console.log("razonsocial: " + this.config.getGlobalNombreRazonSocial()); //ok
        console.log("nombrecomercial: " + this.config.getGlobalNombreComercial()); //ok
        console.log("fechainscripcion: " + this.config.getGlobalFechaDeInscripcion()); //ok
        console.log("condicion: " + this.config.getGlobalCondicion()); //ok
        console.log("estado: " + this.config.getGlobalEstado()); //ok
        console.log("direccionfiscal: " + this.config.getGlobalDireccionFiscal()); //ok
        console.log("actividadeconomica: " + this.config.getGlobalActividadEconomica()); //ok
        console.log("codigosap: " + this.config.getGlobalCodigoSap()); //ok
        console.log("dominio: " + this.config.getGlobalDominio());

        console.log("productoid: " + this.config.getGlobalProductoId());
        console.log("sectorid: " + this.config.getGlobalSectorId());
        console.log("ejecutivo: " + this.config.getGlobalEjecutivo());
        console.log("categoriaid: " + this.config.getGlobalCategoriaClienteProveedor());
        console.log("listadoOperadores: " + this.config.getGlobalListadoTipoOperadores());
        console.log("checkotroOperador: " + this.config.getGlobalOtroTipoOperador());
        console.log("TipoOperadorEspecificar: " + this.config.getGlobalOtroTipoOperadorEspecificar());

        console.log("EstadoSuspension: " + this.config.getGlobalEstadoSuspension());
        console.log("listadoEmpresasSusp: " + this.config.getGlobalListadoEmpSuspen());
        console.log("MotivoSuspension: " + this.config.getGlobalMotivoSuspension());
        console.log("InstruccionRecibida: " + this.config.getGlobalInstruccionRecibida());
        console.log("PlazoCreditoId: " + this.config.getGlobalPlazoCreditoId());
        console.log("TasaInteresLibroId: " + this.config.getGlobalTasaInteresLibroId());
        console.log("TasaInteresEspecial: " + this.config.getGlobalTasaInteresEspecial());
        console.log("CalificacionRiesgoId: " + this.config.getGlobalCalificacionRiesgoId());

        console.log("contactos: " + JSON.stringify(this.config.getGlobalContactos()));
        console.log("************* guardado *************");
 /*     }   */






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
