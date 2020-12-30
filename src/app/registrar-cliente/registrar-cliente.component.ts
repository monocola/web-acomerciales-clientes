import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

interface typeOfSelect {
  label: string;
}
@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.scss']
})
export class RegistrarClienteComponent implements OnInit {

  @Input() title: string;
  typesOfShift: SelectItem[];
  typesOfLocal: SelectItem[];
  typesOfUn: SelectItem[];

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
  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {
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

    this.items = [
      { label: 'Info', icon: 'pi pi-fw pi-angle-right', routerLink: 'fecha' },
      {
        label: 'Message',
        icon: 'pi pi-fw pi-angle-right',
        routerLink: 'items',
      },
    ];
    this.typesOfShift = [
      { label: 'Seleccionar', value: null },
      { label: 'Mañana', value: 'local1' },
      { label: 'Tarde', value: 'local2' },
      { label: 'Noche', value: 'local3' },
    ];
    this.typesOfLocal = [
      { label: 'Seleccionar', value: null },
      { label: 'TPP 1', value: 'local1' },
      { label: 'TPP 2', value: 'local2' },
      { label: 'TPP 3', value: 'local3' },
    ];
    this.typesOfUn = [
      { label: 'Seleccionar U. de Negocio', value: null },
      { label: 'LCL', value: 'un1' },
      { label: 'SIP', value: 'un2' },
      { label: 'SIL', value: 'un3' },
    ];
  }

  onTodayClick($event) {
    //console.log($event);
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

  listaEmpresa:any;
  search(event) {
    /*
     var objCitas = new Citas();
    objCitas.nombrecomercial = event.query;
    objCitas.tipo = 2;
    this.reservasCitas.obtenerinformacionporar(objCitas).subscribe(
      (dataCita) => {
        this.listaEmpresa = new Array();
        this.listaEmpresa = dataCita;
        }) 
    */    
    }  
    
    validar(){

    }
  }
