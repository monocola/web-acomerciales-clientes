import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NuevoProductoClienteComponent } from '../nuevo-producto-cliente/nuevo-producto-cliente.component';
import { NuevoSectorClienteComponent } from '../nuevo-sector-cliente/nuevo-sector-cliente.component';

interface typeOfCat {
  label: string;
}
declare var $: any;
@Component({
  selector: 'app-verlistado-productos-cliente',
  templateUrl: './verlistado-productos-cliente.component.html',
  styleUrls: ['./verlistado-productos-cliente.component.scss']
})
export class VerlistadoProductosClienteComponent implements OnInit {
  listaBusqueda: any;
  campobusqueda: any;
  placeholderText: any;
  typesTurnos: SelectItem[];
  selectedTurnos: typeOfCat;
  typesSectores: SelectItem[];
  selectedSector: typeOfCat;
  tipo: number;
  ref: DynamicDialogRef;
  constructor(private dynamicDialogRef: DynamicDialogRef, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.tipo = 1;
    if (this.tipo == 1) {
      $("#producto").show();
      $("#sector").hide();
      $("#tablasector").hide();
      $("#tablaproducto").show();
    } else if (this.tipo == 2) {
      $("#producto").hide();
      $("#sector").show();
      $("#tablasector").show();
      $("#tablaproducto").hide();
    }

    this.typesTurnos = [
      { label: 'Seleccionar Producto', value: null },
      { label: 'Mañana', value: 'turno1' },
      { label: 'Tarde', value: 'turno2' },
      { label: 'Noche', value: 'turno3' },
    ];

    this.typesSectores = [
      { label: 'Seleccionar Sector', value: null },
      { label: 'Mañana', value: 'turno1' },
      { label: 'Tarde', value: 'turno2' },
      { label: 'Noche', value: 'turno3' },
    ];

  }

  cerrar() {
    this.dynamicDialogRef.close();
  }

  tipoBusqueda(tipoB) {

    this.tipo = tipoB;
    if (this.tipo == 1) {
      $("#producto").show();
      $("#sector").hide();
      $("#tablasector").hide();
      $("#tablaproducto").show();

    } else if (this.tipo == 2) {
      $("#producto").hide();
      $("#sector").show();
      $("#tablasector").show();
      $("#tablaproducto").hide();
    }

  }

  nuevoProducto(){
    this.ref = this.dialogService.open(NuevoProductoClienteComponent, {
      //width: '30%',
      styleClass: 'comisionfile',
      closeOnEscape: false,
      dismissableMask: false,
      baseZIndex: 10000,
      showHeader: false
    });

  }

  nuevoSector(){
    this.ref = this.dialogService.open(NuevoSectorClienteComponent, {
      //width: '50%',
      styleClass: 'comisionfile',
      closeOnEscape: false,
      dismissableMask: false,
      baseZIndex: 10000,
      showHeader: false
    });
  }

}
