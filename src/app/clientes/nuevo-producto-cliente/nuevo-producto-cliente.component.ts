import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
interface typeOfCat {
  label: string;
}
declare var $: any;
@Component({
  selector: 'app-nuevo-producto-cliente',
  templateUrl: './nuevo-producto-cliente.component.html',
  styleUrls: ['./nuevo-producto-cliente.component.scss']
})
export class NuevoProductoClienteComponent implements OnInit {
  typesTurnos: SelectItem[];
  selectedTurnos: typeOfCat;
  typesSectores: SelectItem[];
  selectedSector: typeOfCat;
  constructor(private dynamicDialogRef: DynamicDialogRef, private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.dynamicDialogRef.close();
  }

  nuevoProducto(){
    //logica guardar
    this.cerrar()
  }

}
