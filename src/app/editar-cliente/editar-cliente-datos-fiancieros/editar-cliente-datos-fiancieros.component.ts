import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalClient } from 'src/app/commons/Clienteglobal';
import { Comerciales } from 'src/app/generar-cliente-datos-comerciales/comerciales';
import { PlazoCredito } from 'src/app/model/plazocredito';
import { Riesgo } from 'src/app/model/riesgo';
import { EstadoSuspension } from 'src/app/model/suspension';
import { EmpresaSuspendedora } from 'src/app/model/suspensionempresa';
import { TasaInteresL } from 'src/app/model/tasalibro';
import { EmpSuspService } from 'src/app/services/empsuspenService.service';
import { EstadoSuspensionService } from 'src/app/services/estadosuspension.service';
import { PlazoCreditoService } from 'src/app/services/plazocredito.service';
import { RiesgoService } from 'src/app/services/riesgo.service';
import { StoreService } from 'src/app/services/store.service';
import { TasaInteresLService } from 'src/app/services/tasainteresl.service';
declare var $: any;
@Component({
  selector: 'app-editar-cliente-datos-fiancieros',
  templateUrl: './editar-cliente-datos-fiancieros.component.html',
  styleUrls: ['./editar-cliente-datos-fiancieros.component.scss'],
  providers: [DatePipe]
})
export class EditarClienteDatosFiancierosComponent implements OnInit {

  obtenerdatos_contenedor;
  notificacionGlobal: {};
  statusEditable = true;
  listaSuspensiones: any;
  listaEmpSusp: any;
  listaPlazocredito: any;
  selectedValuePlazo: any;
  tasaInteresListado: any;
  listadoResigos: any;
  tasaSeleccion: any;
  riesgoSeleccion: any;
  selectedTipos: EmpresaSuspendedora[];
  fechaActual: Date;
  usuarioLogin: string;
  riesgoID: number;
  estadoSuspendido: number;
  globalSuspendidoPMA: number;
  globalSuspendidoTPP: number;
  globalSuspendidoTPPT: number;
  globalSuspendidoTPPAD: number;
  motivosuspension: string;
  plazocreditoid:number;
  fechaRegistro:Date;




  constructor(private suspensionService: EstadoSuspensionService,
    private empSuspService: EmpSuspService,
    private plazocredito: PlazoCreditoService,
    private tasaService: TasaInteresLService,
    private riesgoService: RiesgoService,
    private config: GlobalClient,
    public store: StoreService,
    public datepipe: DatePipe,
    private comerciales: Comerciales) {

  }

  ngOnInit(): void {
    $("#fecharegistro").prop("disabled", true);
    $("#usuario").prop("disabled", true);
    this.fechaActual = new Date();
    this.usuarioLogin = localStorage.getItem("usurariologin");
    const obj = JSON.parse(JSON.stringify(this.store.cliente));
    var intereslibro = obj.tasaintereslibro.toFixed(2);
    $("#tasaintereslibro").val(intereslibro);
    var tasainteresespecial = obj.tasainteresespecial.toFixed(2);
    $("#tasainteresespecial").val(tasainteresespecial);
    this.riesgoID = obj.calificacion;
    const fecharegistro = this.datepipe.transform(obj.fechacreacion, 'dd/MM/yyyy');
    $("#usuarioRegistro").val(obj.usuariocreadorid).prop("disabled", true);
    $("#fecharegistro").val(fecharegistro).prop("disabled", true);
    this.fechaRegistro = obj.fecharegistro;
    

    
    this.globalSuspendidoPMA          =         obj.bloqueopma;
    this.globalSuspendidoTPP          =         obj.bloqueotpp;
    this.globalSuspendidoTPPT         =         obj.bloqueogap;
    this.globalSuspendidoTPPAD        =         obj.bloqueoapl;
    this.estadoSuspendido             =         obj.suspendido;
    this.motivosuspension             =         obj.motivobloqueo;
    this.plazocreditoid               =         obj.plazocredito;

    this.config.setGlobalEstadoSuspension(this.estadoSuspendido);
    this.config.setGlobalSuspendidoPMA(this.globalSuspendidoPMA);
    this.config.setGlobalSuspendidoTPP(this.globalSuspendidoTPP);
    this.config.setGlobalSuspendidoTPPT(this.globalSuspendidoTPPT);
    this.config.setGlobalSuspendidoTPPAD(this.globalSuspendidoTPPAD);
    this.config.setGlobalMotivoSuspension(this.motivosuspension);
    this.config.setGlobalPlazoCreditoId(this.plazocreditoid);
    this.config.setGlobalTasaInteresLibroId(intereslibro);
    this.config.setGlobalTasaInteresEspecial(tasainteresespecial);

    
    $("#motivosuspension").val(this.motivosuspension);
    this.mensajeGlobalNotificacion("warning", "", false);
    $("#instruccionrecibida").val(obj.instruccionrecibida);
    
    
    //alert(this.plazocreditoid);

    var objEstadoSuspension = new EstadoSuspension();
    this.suspensionService.obtenerEstadoSuspension(objEstadoSuspension).subscribe(
      (dataEstadoSuspension) => {
        this.listaSuspensiones = dataEstadoSuspension;
      })

    var objEmpSusp = new EmpresaSuspendedora();
    this.empSuspService.obtenerEmpresasSusp(objEmpSusp).subscribe(
      (dataEmpSusp) => {
        this.listaEmpSusp = dataEmpSusp;
      })

      var objPlazoCredito = new PlazoCredito();
      this.plazocredito.obtenerPlazoCreditoOnPremise(objPlazoCredito).subscribe(
        (dataPlazoCredito) => {
          this.listaPlazocredito = dataPlazoCredito;
        })
  
      var objTasaInt = new TasaInteresL();
      this.tasaService.obtenerTasasInteresesL(objTasaInt).subscribe(
        (dataTasaInteresL) => {
          this.tasaInteresListado = dataTasaInteresL;
        })
  
      var objRiesgo = new Riesgo();
      this.riesgoService.obtenerRiesgosOnPremise(objRiesgo).subscribe(
        (dataRiesgo) => {
          this.listadoResigos = dataRiesgo;
        })

  }
  onSelectPlazoCredito(pcredito) {
    var plazodecredito = ((document.getElementById("plazodecredito") as HTMLInputElement).value);
    var plazoid = Number(plazodecredito);
    this.config.setGlobalPlazoCreditoId(plazoid);
  }

  onSelectTasaInteresL(tsaInteresL: TasaInteresL) {
    this.config.setGlobalTasaInteresLibroId(tsaInteresL.id);
  }
  onSelectRiesgo(riesgo: Riesgo) {
    
  }

  cambiarTipoSuspension(id) {
    if (id == 1) {
      this.mensajeGlobalNotificacion("warning", "", false);
      this.config.setGlobalEstadoSuspension(0);
    } else if (id == 2) {
      var motivosuspension = ((document.getElementById("motivosuspension") as HTMLInputElement).value);
      if (motivosuspension == "" || motivosuspension == null) {
        this.mensajeGlobalNotificacion("warning", "Debe ingresar un motivo de suspensión.", true);
      }else{
        this.mensajeGlobalNotificacion("warning", "", false);
      }

      if ((this.globalSuspendidoPMA == 1 || this.globalSuspendidoTPP == 1 ||
        this.globalSuspendidoTPPT == 1 || this.globalSuspendidoTPPAD == 1) && (this.estadoSuspendido == 1)) {
        this.mensajeGlobalNotificacion("warning", "Debe ingresar un motivo de suspensión. 1", true);
      }
      this.config.setGlobalEstadoSuspension(1);
    }


  }

  enviarMotivoSuspension(evt) {
    var motivosuspension = ((document.getElementById("motivosuspension") as HTMLInputElement).value);
    if (motivosuspension == "" && (this.estadoSuspendido == 1)) {
      this.mensajeGlobalNotificacion("warning", "Debe ingresar un motivo de suspensión.", true);
    } else {
      this.mensajeGlobalNotificacion("warning", "", false);
      this.config.setGlobalMotivoSuspension(evt.target.value);
    }

  }

  enviarInstruccionRecibida(evt) {
    this.config.setGlobalInstruccionRecibida(evt.target.value);
  }

  enviarTasaInteresLibro(evt){
    this.config.setGlobalTasaInteresLibroId(evt.target.value);
  }

  enviarTasaInteresEspecial(evt) {
    this.config.setGlobalTasaInteresEspecial(evt.target.value);
  }


  seleccionarListadoEmp(id) {
    if ($("#tipoempresa" +  id).is(':checked')) {
      this.comerciales.enviarEmpresaSuspendederaPorID(id, 1);  
      }else{
      this.comerciales.enviarEmpresaSuspendederaPorID(id, 0);
      } 

  }

  onSelectCalificacionRiesgo(){
    var riesgo = ((document.getElementById("riesgo") as HTMLInputElement).value);
    var riesgoid = Number(riesgo);
    this.config.setGlobalCalificacionRiesgoId(riesgoid);
  }

 
  mensajeGlobalNotificacion(tipo, mensaje, view) {
    this.notificacionGlobal = {
      type: tipo,
      message: [{ mensaje: mensaje }],
      show: view
    }
  }



}
