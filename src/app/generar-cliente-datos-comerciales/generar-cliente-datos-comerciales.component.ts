import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { Sector } from '../model/sector';
import { ProductoService } from '../services/producto.service';
import { SectorService } from '../services/sector.service';
interface City {
  name: string,
  code: string,
  inactive: boolean
}
@Component({
  selector: 'app-generar-cliente-datos-comerciales',
  templateUrl: './generar-cliente-datos-comerciales.component.html',
  styleUrls: ['./generar-cliente-datos-comerciales.component.scss']
})
export class GenerarClienteDatosComercialesComponent implements OnInit {
  obtenerdatos_contenedor;
  statusEditable = true;
  idproducto: number;
  cities: City[];
  selectedCities2: City[];
  constructor(private productoService: ProductoService,
    private sectorService: SectorService) {
    this.cities = [
      { name: 'New York', code: 'NY', inactive: false },
      { name: 'Rome', code: 'RM', inactive: true },
      { name: 'London', code: 'LDN', inactive: false },
      { name: 'Istanbul', code: 'IST', inactive: true },
      { name: 'Paris', code: 'PRS', inactive: false },
      { name: 'New York2', code: 'NY', inactive: false },
      { name: 'Rome2', code: 'RM', inactive: true },
      { name: 'London2', code: 'LDN', inactive: false },
      { name: 'Istanbul2', code: 'IST', inactive: true },
      { name: 'Paris2', code: 'PRS', inactive: false }
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
  listaProductos: any;
  search(event) {
    var objProd = new Producto();
    objProd.nombreproducto = event.query;
    this.productoService.obtenerProductos(objProd).subscribe(
      (dataProducto) => {
        this.listaProductos = new Array();
        this.listaProductos = dataProducto;
        console.log("listaProductos: ==>" + JSON.stringify(this.listaProductos));
      })
  }

  validar() {

  }
  
  listaSectores: any;
  onSelect(event) {
   this.idproducto = event.id;
   alert(this.idproducto);
  }

  listaSectoresProd: any;
  searchSector(event1) {
    var objSector = new Sector();
    objSector.productid =  this.idproducto;
    objSector.sectorname = event1.query;
    this.sectorService.obtenerSectoresPorProductos(objSector).subscribe(
      (dataSectores) => {
        this.listaSectoresProd = new Array();
        this.listaSectoresProd = dataSectores;
        console.log("listaSectores: ==>" + JSON.stringify(this.listaSectoresProd));
      })
  }

}
