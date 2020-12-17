import { Component, OnInit } from '@angular/core';
import { GlobalClient } from 'src/app/commons/Clienteglobal';
import { PlazoCredito } from 'src/app/model/plazocredito';
import { Riesgo } from 'src/app/model/riesgo';
import { EstadoSuspension } from 'src/app/model/suspension';
import { EmpresaSuspendedora } from 'src/app/model/suspensionempresa';
import { TasaInteresL } from 'src/app/model/tasalibro';
import { EmpSuspService } from 'src/app/services/empsuspenService.service';
import { EstadoSuspensionService } from 'src/app/services/estadosuspension.service';
import { PlazoCreditoService } from 'src/app/services/plazocredito.service';
import { RiesgoService } from 'src/app/services/riesgo.service';
import { TasaInteresLService } from 'src/app/services/tasainteresl.service';
declare var $: any;
@Component({
  selector: 'app-editar-cliente-datos-fiancieros',
  templateUrl: './editar-cliente-datos-fiancieros.component.html',
  styleUrls: ['./editar-cliente-datos-fiancieros.component.scss']
})
export class EditarClienteDatosFiancierosComponent implements OnInit {

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
  usuarioLogin:string;


  constructor(private suspensionService: EstadoSuspensionService,
    private empSuspService: EmpSuspService,
    private plazocredito: PlazoCreditoService,
    private tasaService: TasaInteresLService,
    private riesgoService: RiesgoService,
    private config: GlobalClient) {

  }

  ngOnInit(): void {
    $("#fecharegistro").prop("disabled", true);
    $("#usuario").prop("disabled", true);
    this.fechaActual = new Date();
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
    this.plazocredito.obtenerPlazoCredito(objPlazoCredito).subscribe(
      (dataPlazoCredito) => {
        this.listaPlazocredito = dataPlazoCredito;
      })

    var objTasaInt = new TasaInteresL();
    this.tasaService.obtenerTasasInteresesL(objTasaInt).subscribe(
      (dataTasaInteresL) => {
        this.tasaInteresListado = dataTasaInteresL;
      })

    var objRiesgo = new Riesgo();
    this.riesgoService.obtenerRiesgos(objRiesgo).subscribe(
      (dataRiesgo) => {
        this.listadoResigos = dataRiesgo;
      })


  }
  onSelectPlazoCredito(pcredito: PlazoCredito) {
    this.config.setGlobalPlazoCreditoId(pcredito.id);
  }

  onSelectTasaInteresL(tsaInteresL: TasaInteresL) {
    this.config.setGlobalTasaInteresLibroId(tsaInteresL.id);
  }
  onSelectRiesgo(riesgo: Riesgo) {
    this.config.setGlobalCalificacionRiesgoId(riesgo.id);
  }

  cambiarTipoSuspension(id) {
    this.config.setGlobalEstadoSuspension(id);
  }

  enviarMotivoSuspension(evt) {
    this.config.setGlobalMotivoSuspension(evt.target.value);
  }

  enviarInstruccionRecibida(evt) {
    this.config.setGlobalInstruccionRecibida(evt.target.value);
  }

  enviarTasaInteresEspecial(evt) {
    this.config.setGlobalTasaInteresEspecial(evt.target.value);
  }

 
  seleccionarListadoEmp(){
      var listadoTiposCadena = [];
      if(listadoTiposCadena == []){

      }else{
        this.selectedTipos.forEach(element => {
          listadoTiposCadena.push(element.id);
          this.config.setGlobalListadoEmpSuspen(listadoTiposCadena.toString());
        });
      }
      
  
    }


  

}
