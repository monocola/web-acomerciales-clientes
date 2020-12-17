import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileItem } from 'src/app/model/file-item';

@Component({
  selector: 'app-subir-archivo-cliente',
  templateUrl: './subir-archivo-cliente.component.html',
  styleUrls: ['./subir-archivo-cliente.component.scss']
})
export class SubirArchivoClienteComponent implements OnInit {

  estaSobreElemento = false;
  archivos: FileItem[] = [];
  modalTitle: number;
  constructor( public config: DynamicDialogConfig,
                private dynamicDialogRef: DynamicDialogRef) { }

  ngOnInit(): void {
    this.modalTitle = this.config.data.id;
  }

  fileBrowseHandler($event) {
    this.archivos = $event.files;
  }

  cerrar(){
    this.dynamicDialogRef.close();
  }

}
