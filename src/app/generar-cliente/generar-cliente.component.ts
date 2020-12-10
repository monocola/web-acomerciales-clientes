import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GlobalClient } from '../commons/Clienteglobal';
import { ContactosClienteComponent } from '../contactos-cliente/contactos-cliente.component';


declare var $: any;
@Component({
  selector: 'app-generar-cliente',
  templateUrl: './generar-cliente.component.html',
  styleUrls: ['./generar-cliente.component.scss']


})
export class GenerarClienteComponent implements OnInit {
  notificacionGlobal: {};
  constructor(public config: GlobalClient,
              public contactos: ContactosClienteComponent) { }
  pestana = 1;

  variablecboxfecha_solicitudAR: any;

  tipoDocumento: string;



  ngOnInit(): void {
    //this.tipoDocumento = this.clienteGolbal.tipodeDocumento;

    $("#guardar").hide();
    $("#anterior").hide();
    $("#subirarchivo").hide();

    /*  inicia pestaña datos Generales*/
    $("#bodyDatosGenerales").show();
    $("#bodySap").hide();
    $("#bodyComercial").hide();
    $("#bobyFinanciera").hide();
    $("#subirarchivo").hide();

    this.mensajeGlobalNotificacion("warning", "", false);


  }


  cambiar_pestana_anterio() {
    this.pestana--;
    if (this.pestana == 1) {
      $("#pestanaDatos").addClass('active');
      $("#pestanaDataSap").removeClass('active')
      $("#pestanaInfoComercial").removeClass('active');
      $("#pestanaInfoFinanciera").removeClass('active');
      $("#anterior").hide();
      $("#siguiente").show();
      $("#guardar").hide();
      $("#bodyDatosGenerales").show();
      $("#bodySap").hide();
      $("#bodyComercial").hide();
      $("#bobyFinanciera").hide();
      $("#subirarchivo").hide();


    }
    if (this.pestana == 2) {
      $("#pestanaDatos").removeClass('active');
      $("#pestanaDataSap").removeClass('active');
      $("#pestanaInfoComercial").addClass('active');
      $("#pestanaInfoFinanciera").removeClass('active');
      $("#guardar").hide();
      $("#siguiente").show();
      $("#anterior").show();
      $("#bodyDatosGenerales").hide();
      $("#bodySap").hide();
      $("#bodyComercial").show();
      $("#bobyFinanciera").hide();
      $("#subirarchivo").hide();

    }
    if (this.pestana == 3) {
      $("#pestanaDatos").removeClass('active');
      $("#pestanaDataSap").removeClass('active');
      $("#pestanaInfoComercial").removeClass('active');
      $("#pestanaInfoFinanciera").addClass('active')
      $("#siguiente").hide();
      $("#anterior").show();
      $("#guardar").show();
      $("#bodyDatosGenerales").hide();
      $("#bodySap").hide();
      $("#bodyComercial").hide();
      $("#bobyFinanciera").show();
      $("#subirarchivo").show();

    }
   
  }

  cambiar_pestana_siguiente() {
    //alert(this.config.getGlobalTipoDocumento());
    //alert(this.config.getGlobalNumeroDocumento());
    //alert(this.config.getGlobalNombreRazonSocial());
   

    this.pestana++;
    if (this.pestana == 1) {
     
     
        $("#pestanaDatos").addClass('active');
        $("#pestanaDataSap").removeClass('active')
        $("#pestanaInfoComercial").removeClass('active');
        $("#pestanaInfoFinanciera").removeClass('active');
        $("#anterior").hide();
        $("#siguiente").show();
        $("#guardar").hide();
        $("#subirarchivo").hide();


        /*  mostrar pestaña datos Generales*/
        $("#bodyDatosGenerales").show();
        $("#bodySap").hide();
        $("#bodyComercial").hide();
        $("#bobyFinanciera").hide();
    
    }
    if (this.pestana == 2) {
     
      $("#pestanaDatos").removeClass('active');
      $("#pestanaDataSap").removeClass('active');
      $("#pestanaInfoComercial").addClass('active');
      $("#pestanaInfoFinanciera").removeClass('active');
      $("#guardar").hide();
      $("#anterior").show();
      $("#subirarchivo").hide();


      /*  mostrar pestaña informacion comercial*/
      $("#bodyDatosGenerales").hide();
      $("#bodySap").hide();
      $("#bodyComercial").show();
      $("#bobyFinanciera").hide();
    }
  
    if (this.pestana == 3) {
     
      $("#pestanaDatos").removeClass('active');
      $("#pestanaDataSap").removeClass('active');
      $("#pestanaInfoComercial").removeClass('active');
      $("#pestanaInfoFinanciera").addClass('active');
      $("#siguiente").hide();
      $("#anterior").show();
      $("#guardar").show();
      $("#subirarchivo").show();


      /*  mostrar pestaña informacion finaciera*/
      $("#bodyDatosGenerales").hide();
      $("#bodySap").hide();
      $("#bodyComercial").hide();
      $("#bobyFinanciera").show();

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
    console.log("****************************************")
      console.log("tipodocumento: " + this.config.getGlobalTipoDocumento() );
      console.log("numerodocumento: "  +this.config.getGlobalNumeroDocumento());
      console.log("razonsocial: " + this.config.getGlobalNombreRazonSocial());
      console.log("nombrecomercial: " + this.config.getGlobalNombreRazonSocial() );
      console.log("fechainscripcion: " +this.config.getGlobalFechaDeInscripcion() );
      console.log("condicion: " + this.config.getGlobalCondicion());
      console.log("estado: " + this.config.getGlobalEstado());
      console.log("direccionfiscal: " + this.config.getGlobalDireccionFiscal() );
      console.log("actividadeconomica: " + this.config.getGlobalActividadEconomica());
      console.log("codigosap: " + this.config.getGlobalCodigoSap());
      console.log("dominio: " + this.config.getGlobalDominio());

      console.log("productoid: " + this.config.getGlobalProductoId());
      console.log("sectorid: " + this.config.getGlobalSectorId());
      console.log("ejecutivo: " +  this.config.getGlobalEjecutivo());
      console.log("categoriaid: " + this.config.getGlobalCategoriaClienteProveedor());
      console.log("listadoOperadores: " + this.config.getGlobalListadoTipoOperadores());
      console.log("checkotroOperador: " +  this.config.getGlobalOtroTipoOperador()); 
      console.log("TipoOperadorEspecificar: " +  this.config.getGlobalOtroTipoOperadorEspecificar()); 

      console.log("EstadoSuspension: " + this.config.getGlobalEstadoSuspension());
      console.log("listadoEmpresasSusp: " + this.config.getGlobalListadoEmpSuspen());
      console.log("MotivoSuspension: " + this.config.getGlobalMotivoSuspension()); 
      console.log("InstruccionRecibida: " + this.config.getGlobalInstruccionRecibida()); 
      console.log("PlazoCreditoId: " + this.config.getGlobalPlazoCreditoId()); 
      console.log("TasaInteresLibroId: " + this.config.getGlobalTasaInteresLibroId()); 
      console.log("TasaInteresEspecial: " + this.config.getGlobalTasaInteresEspecial()); 
      console.log("CalificacionRiesgoId: " + this.config.getGlobalCalificacionRiesgoId()); 

      console.log("contactos: " + JSON.stringify(this.config.getGlobalContactos()));
     

  }






}
