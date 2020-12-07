import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  titulo:string = "Gestión de reservas";
  filtro:string = "Filtro";
  constructor() { }

  ngOnInit(): void {

  }


}
