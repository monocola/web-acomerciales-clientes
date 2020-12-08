import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string,
  inactive: boolean
}
@Component({
  selector: 'app-generar-cliente-datos-financiera',
  templateUrl: './generar-cliente-datos-financiera.component.html',
  styleUrls: ['./generar-cliente-datos-financiera.component.scss']
})
export class GenerarClienteDatosFinancieraComponent implements OnInit {

  obtenerdatos_contenedor;
  statusEditable = true;
  cities: City[];
  selectedCities2: City[];
  constructor() { 
    this.cities = [
      {name: 'New York', code: 'NY', inactive: false},
      {name: 'Rome', code: 'RM', inactive: true},
      {name: 'London', code: 'LDN', inactive: false},
      {name: 'Istanbul', code: 'IST', inactive: true},
      {name: 'Paris', code: 'PRS', inactive: false},
      {name: 'New York2', code: 'NY', inactive: false},
      {name: 'Rome2', code: 'RM', inactive: true},
      {name: 'London2', code: 'LDN', inactive: false},
      {name: 'Istanbul2', code: 'IST', inactive: true},
      {name: 'Paris2', code: 'PRS', inactive: false}
  ];
  }

  ngOnInit(): void {

    this.obtenerdatos_contenedor = [
      {
        dam: 'cSxR42xpsRgAZHxiQJHB',
        ctns: {
          data: [
            { id: 1, nombre: 'NYKU-8347799' },
                
          ],
        },
      }

    ];
  }

}
