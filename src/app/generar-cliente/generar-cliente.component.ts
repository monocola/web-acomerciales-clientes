import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-generar-cliente',
  templateUrl: './generar-cliente.component.html',
  styleUrls: ['./generar-cliente.component.scss']
})
export class GenerarClienteComponent implements OnInit {

  constructor() { }
  pestana = 1;

  ngOnInit(): void {
    $("#guardar").hide();
    $("#anterior").hide();
   
    /*  inicia pestaña datos Generales*/
    $("#bodyDatosGenerales").show();
    $("#bodySap").hide();
    $("#bodyComercial").hide();
    $("#bobyFinanciera").hide();
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
    }

  }

  cambiar_pestana_siguiente() {
    this.pestana++;
    if (this.pestana == 1) {
      $("#pestanaDatos").addClass('active'); 
      $("#pestanaDataSap").removeClass('active')
      $("#pestanaInfoComercial").removeClass('active');
      $("#pestanaInfoFinanciera").removeClass('active');
      $("#anterior").hide();
      $("#siguiente").show();
      $("#guardar").hide();

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

      /*  mostrar pestaña informacion finaciera*/
      $("#bodyDatosGenerales").hide();
      $("#bodySap").hide();
      $("#bodyComercial").hide();
      $("#bobyFinanciera").show();
      
    }

  }

  abrirModalConfirmacion() {

  }


  


}
