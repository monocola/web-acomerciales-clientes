import { Component,OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GlobalClient } from '../commons/Clienteglobal';


declare var $: any;
@Component({
  selector: 'app-generar-cliente',
  templateUrl: './generar-cliente.component.html',
  styleUrls: ['./generar-cliente.component.scss'],

})
export class GenerarClienteComponent implements OnInit {
  notificacionGlobal: {};
  constructor(public config: GlobalClient) { }
  pestana = 1;

  variablecboxfecha_solicitudAR:any;

  tipoDocumento:string;

  

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

    this.mensajeGlobalNotificacion("warning", "No existen capacidades programadas para este dia.", false);

  
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
      $("#pestanaDataSap").addClass('active')
      $("#pestanaInfoComercial").removeClass('active');
      $("#pestanaInfoFinanciera").removeClass('active');
      $("#guardar").hide();
      $("#siguiente").show();
      $("#anterior").show();
      $("#bodyDatosGenerales").hide();
      $("#bodySap").show();
      $("#bodyComercial").hide();
      $("#bobyFinanciera").hide();
      $("#subirarchivo").hide();
   

    }
    if (this.pestana == 3) {
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
    if (this.pestana == 4) {
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
    //alert( this.config.getGlobalTipoDocumento());
    if(this.validaciones()){
      this.mensajeGlobalNotificacion("warning","Es necesario completar el campo  Tipo de Documento.",false);
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
        $("#pestanaDataSap").addClass('active')
        $("#pestanaInfoComercial").removeClass('active');
        $("#pestanaInfoFinanciera").removeClass('active');
        $("#guardar").hide();
        $("#anterior").show();
        $("#subirarchivo").hide();
     
  
        /*  mostrar pestaña informacion sap*/
        $("#bodyDatosGenerales").hide();
        $("#bodySap").show();
        $("#bodyComercial").hide();
        $("#bobyFinanciera").hide();
        
      }
      if (this.pestana == 3) {
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
      if (this.pestana == 4) {
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
    
  

  }
  mensajeGlobalNotificacion(tipo, mensaje, view) {
    this.notificacionGlobal = {
      type: tipo,
      message: [{ mensaje: mensaje }],
      show: view
    }
  }

  abrirModalConfirmacion() {

  }

  validaciones(){
    if(this.config.getGlobalTipoDocumento() == null || this.config.getGlobalTipoDocumento() == ""){
      this.mensajeGlobalNotificacion("warning","Es necesario completar el campo  Tipo de Documento.",true);
      return false;
   }else{
     return true;
   }
  }

  


  


}
