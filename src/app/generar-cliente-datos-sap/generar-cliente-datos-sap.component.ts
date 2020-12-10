import { Component, OnInit } from '@angular/core';
import { GlobalClient } from '../commons/Clienteglobal';

@Component({
  selector: 'app-generar-cliente-datos-sap',
  templateUrl: './generar-cliente-datos-sap.component.html',
  styleUrls: ['./generar-cliente-datos-sap.component.scss']
})
export class GenerarClienteDatosSapComponent implements OnInit {

  constructor(public config: GlobalClient) { }

  ngOnInit(): void {
  }

  /* data temporal de pestaña datos sap*/
  enviarcodigoSap(evt){
    this.config.setGlobalCodigoSap(evt.target.value);
   }
   enviarDominio(evt){
     this.config.setGlobalDominio(evt.target.value);
   }

}
