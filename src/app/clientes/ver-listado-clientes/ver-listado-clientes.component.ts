import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Categoria } from 'src/app/model/categoria';
import { Producto } from 'src/app/model/producto';
import { Sector } from 'src/app/model/sector';
import { TipoOperador } from 'src/app/model/tipooperador';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { SectorService } from 'src/app/services/sector.service';
import { TipoOperadorService } from 'src/app/services/tipooperador.service';
declare var $:any;
@Component({
  selector: 'app-ver-listado-clientes',
  templateUrl: './ver-listado-clientes.component.html',
  styleUrls: ['./ver-listado-clientes.component.scss']
})
export class VerListadoClientesComponent implements OnInit {

  constructor(private dynamicDialogRef: DynamicDialogRef,
    private categoriaService: CategoriaService,
    private tipoOpService: TipoOperadorService,
    private productoService: ProductoService,
    private sectorService: SectorService) { }
  tipo: number;
  listaBusqueda: any;
  campobusqueda: any;
  placeholderText:any;

  ngOnInit(): void {
    this.tipo = 1;
    this.placeholderText = "Ingrese categoría a buscar...";

  }

  cerrar() {
    this.dynamicDialogRef.close();
  }
  cambiarTipo(tipo) {
    this.tipo = tipo;
   
    switch (this.tipo) {
      case 1:
       this.placeholderText = "Ingrese categoría a buscar...";
        break;
      case 2:
        this.placeholderText = "Ingrese tipo de operador a buscar...";
        break;

      case 3:
        this.placeholderText = "Ingrese producto a buscar...";
        break;
      case 4:
        this.placeholderText = "Ingrese sector a buscar...";
        break;
    }
  }
  search(event) {
    switch (this.tipo) {
      case 1:
        this.campobusqueda = "categoryname";
        var objCategoria = new Categoria();
        this.categoriaService.obtenerCategorias(objCategoria).subscribe(
          (dataCategorias) => {
            this.listaBusqueda = dataCategorias;

          })
        break;
      case 2:
        this.campobusqueda = "tipooperador";
        var objTipoOperador = new TipoOperador();
        this.tipoOpService.obtenerTipoOperadores(objTipoOperador).subscribe(
          (dataOperadores) => {
            this.listaBusqueda = dataOperadores;
    
          })
        break;
      case 3:
        this.campobusqueda = "nombreproducto";
        var objProd = new Producto();
        objProd.nombreproducto = event.query;
        this.productoService.obtenerProductos(objProd).subscribe(
          (dataProducto) => {
            this.listaBusqueda = new Array();
            this.listaBusqueda = dataProducto;
          })
        break;
      case 4:
        this.campobusqueda = "sectorname";
        var objSector = new Sector();
        objSector.sectorname = event.query;
        this.sectorService.obtenerListaSectores(objSector).subscribe(
          (dataSectores) => {
            this.listaBusqueda = new Array();
            this.listaBusqueda = dataSectores;
    
          })
        break;
    }

  }

}
