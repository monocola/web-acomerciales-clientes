import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
interface typeOfCat {
  label: string;
}
declare var $: any;
@Component({
  selector: 'app-nuevo-sector-cliente',
  templateUrl: './nuevo-sector-cliente.component.html',
  styleUrls: ['./nuevo-sector-cliente.component.scss']
})
export class NuevoSectorClienteComponent implements OnInit {
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

  nuevoSector(){
    //logica guardar
    this.cerrar()
  }

}
