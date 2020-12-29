import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlazoCredito } from '../model/plazocredito';
import { Riesgo } from '../model/riesgo';
import { EstadoSuspension } from '../model/suspension';
import { EmpresaSuspendedora } from '../model/suspensionempresa';
import { TasaInteresL } from '../model/tasalibro';
import { EmpSuspService } from '../services/empsuspenService.service';
import { EstadoSuspensionService } from '../services/estadosuspension.service';
import { PlazoCreditoService } from '../services/plazocredito.service';
import { RiesgoService } from '../services/riesgo.service';
import { StoreService } from '../services/store.service';
import { TasaInteresLService } from '../services/tasainteresl.service';

declare var $: any;
@Component({
  selector: 'app-generar-cliente-datos-financiera',
  templateUrl: './generar-cliente-datos-financiera.component.html',
  styleUrls: ['./generar-cliente-datos-financiera.component.scss'],
  providers: [DatePipe]
})
export class GenerarClienteDatosFinancieraComponent implements OnInit {

  obtenerdatos_contenedor;
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
  fechaActual:Date;
  fechaActual2:any;
  usuarioLogin:string;


  constructor(private suspensionService: EstadoSuspensionService,
    private empSuspService: EmpSuspService,
    private plazocredito: PlazoCreditoService,
    private tasaService: TasaInteresLService,
    private riesgoService: RiesgoService,
    public datepipe: DatePipe,
    public store: StoreService) {

  }

  ngOnInit(): void {
    $("#fecharegistro").prop("disabled", true);
    $("#usuario").prop("disabled", true);
    this.fechaActual = new Date();
    this.fechaActual2 = this.datepipe.transform(this.fechaActual, 'dd-MM-yyyy');
    this.usuarioLogin = localStorage.getItem("usurariologin");

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
  onSelectPlazoCredito(pcredito: PlazoCredito) {
  
    if (pcredito.id == null) {
      this.store.cliente.setGlobalPlazoCreditoId(null);
    } else {
      this.store.cliente.setGlobalPlazoCreditoId(pcredito.id);
    }
  }

  enviarTasaInteresLibro(evt) {
 
    this.store.cliente.setGlobalTasaInteresLibroId(evt.target.value);
  }
  onSelectRiesgo(riesgo: Riesgo) {

    this.store.cliente.setGlobalCalificacionRiesgoId(riesgo.id);
  }

  
  enviarTasaInteresEspecial(evt) {
    this.store.cliente.setGlobalTasaInteresEspecial(evt.target.value);
  }

 



  

}
