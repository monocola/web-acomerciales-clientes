import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalClient } from '../commons/Clienteglobal';
import { Categoria } from '../model/categoria';
import { GrupoEmpresarial } from '../model/grupoempresarial';
import { Persona } from '../model/persona';
import { PersonaFinanciera } from '../model/PersonaFinanciera';
import { GrupoEmpresarialService } from '../services/grupoempresarial.service';
import { PersonaService } from '../services/persona.service';
import { StoreService } from '../services/store.service';
interface typeOfSelect {
  label: string;
}
declare var $:any;
@Component({
  selector: 'app-file-cliente',
  templateUrl: './file-cliente.component.html',
  styleUrls: ['./file-cliente.component.scss']
})
export class FileClienteComponent implements OnInit {

  @Input() title: string;
  typesOfShift: SelectItem[];
  typesOfLocal: SelectItem[];
  typesOfUn: SelectItem[];
  listaEmpresa:any;

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
  listarGruposEmpresariales: GrupoEmpresarial;
  listaPersona: Persona;

  cliente: GlobalClient = new GlobalClient();

  constructor(public dialogService: DialogService,
              private config: GlobalClient,
              public store: StoreService,
              private dynamicDialogRef: DynamicDialogRef,
              private grupoEmpresarialService: GrupoEmpresarialService,
              private personaService: PersonaService)
               {
                this.store.cliente$.subscribe(c => this.cliente = c);
              }

  ngOnInit(): void {
    this.mostrarFecha();


    var objGrupoEmp = new GrupoEmpresarial();
    this.grupoEmpresarialService.obtenerGrupoEmpresarialOnPremise(objGrupoEmp).subscribe(
      (dataGrupoEmp) => {
        this.listarGruposEmpresariales = dataGrupoEmp;
        console.log(JSON.stringify(this.listarGruposEmpresariales));
      })

      

    const obj = JSON.parse(JSON.stringify(this.store.cliente));
        
    var objPersona = new Persona();
    objPersona.idempresaarchivo = obj.id;
    this.personaService.obtenerClienteFilePorID(objPersona).subscribe(
      (dataPersona) => {
        this.listaPersona = dataPersona;
        $.each(this.listaPersona, function (i, item) {
        $("#razonsocial").val(item.empresaarchivo).prop("disabled", true);
        $("#ruc").val(item.numerodocumento).prop("disabled", true);
        $("#sector").val(item.sector).prop("disabled", true);
        $("#direccionfiscal").val(item.direccionfiscal2).prop("disabled", true);
        $("#ejecutivo").val(item.ejecutivo).prop("disabled", true);
        $("#customerservice1").val(item.customerservice1);
        $("#customerservice2").val(item.customerservice2);

        });
        
       

        /*
        
        */
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

  cerrar(){
    this.dynamicDialogRef.close();
    this.config.limpiarGlobalCliente();
  }
  cambiarTipo(){

  }
  registrarFileCliente(){

  }
  validar(){

  }
  search(evt){

  }
  soloNumeros(){

  }
  mostrarFecha(){
    this.es = {
      firstDayOfWeek: 0,
      dayNames: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
      ],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      monthNamesShort: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      today: 'Hoy',
      clear: 'Clear',
      dateFormat: 'mm/dd/yy',
      weekHeader: 'Wk',
    };
  }
}
