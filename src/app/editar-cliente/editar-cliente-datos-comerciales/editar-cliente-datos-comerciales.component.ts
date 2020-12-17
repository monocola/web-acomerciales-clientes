import { Component, OnInit } from '@angular/core';
import { GlobalClient } from 'src/app/commons/Clienteglobal';
import { Categoria } from 'src/app/model/categoria';
import { Producto } from 'src/app/model/producto';
import { Sector } from 'src/app/model/sector';
import { TipoOperador } from 'src/app/model/tipooperador';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { SectorService } from 'src/app/services/sector.service';
import { TipoOperadorService } from 'src/app/services/tipooperador.service';
interface City {
  name: string,
  code: string,
  inactive: boolean
}
declare var $: any;
@Component({
  selector: 'app-editar-cliente-datos-comerciales',
  templateUrl: './editar-cliente-datos-comerciales.component.html',
  styleUrls: ['./editar-cliente-datos-comerciales.component.scss']
})
export class EditarClienteDatosComercialesComponent implements OnInit {
  obtenerdatos_contenedor;
  statusEditable = true;
  idproducto: number;
  cities: City[];
  selectedTipos: TipoOperador[];
  listadoCategorias: any;
  listarTipoOperadores: any;
  notificacionGlobal: {};

  constructor(private productoService: ProductoService,
    private sectorService: SectorService,
    private config: GlobalClient,
    private categoriaService: CategoriaService,
    private tipoOpService: TipoOperadorService) {

  }

  ngOnInit(): void {
    $("#otroOperadorText").hide();
    this.config.setGlobalCategoriaClienteProveedor(false);
    this.config.setGlobalOtroTipoOperador(0);

    var objCategoria = new Categoria();
    this.categoriaService.obtenerCategorias(objCategoria).subscribe(
      (dataCategorias) => {
        this.listadoCategorias = dataCategorias;

      })

    var objTipoOperador = new TipoOperador();
    this.tipoOpService.obtenerTipoOperadores(objTipoOperador).subscribe(
      (dataOperadores) => {
        this.listarTipoOperadores = dataOperadores;

      })


  }
  listaProductos: any;
  search(event) {
    var objProd = new Producto();
    objProd.nombreproducto = event.query;
    this.productoService.obtenerProductos(objProd).subscribe(
      (dataProducto) => {
        this.listaProductos = new Array();
        this.listaProductos = dataProducto;

      })
  }

  validar() {

  }

  listaSectores: any;
  onSelect(event) {
    if(event == null){
      alert("vacio");
    }else {
    this.idproducto = event.id;
    this.config.setGlobalProductoId(event.id);
    }
    
  }
  onSelectSector(evt) {
    this.config.setGlobalSectorId(evt.id);
  }

  otrometodo(event){
    alert(event.target.value);
  }
  listaSectoresProd: any;
  searchSector(event1) {
    var objSector = new Sector();
    objSector.productid = this.idproducto;
    objSector.sectorname = event1.query;
    this.sectorService.obtenerSectoresPorProductos(objSector).subscribe(
      (dataSectores) => {
        this.listaSectoresProd = new Array();
        this.listaSectoresProd = dataSectores;

      })
  }

  enviarEjecutivo(evt) {
    this.config.setGlobalEjecutivo(evt.target.value);
  }



  enviarProveedor(prov) {
    if ($('#tipocategoria' + prov).prop('checked')) {
      this.config.setGlobalCategoriaClienteProveedor(true);
    } else {
      this.config.setGlobalCategoriaClienteProveedor(false);
    }
  }
  onSelectOperadores() {
    var listadoTiposCadena = [];
    this.selectedTipos.forEach(element => {
      listadoTiposCadena.push(element.id);
      this.config.setGlobalListadoTipoOperadores(listadoTiposCadena.toString());
    });

  }

  mostrarOtroOperador() {
    if ($('#idOtroOperador').is(":checked")) {
      $("#otroOperadorText").show();
      this.config.setGlobalOtroTipoOperador(1);
    } else {
      $("#otroOperadorText").hide();
      this.config.setGlobalOtroTipoOperador(0);
    }
  }

  enviarOtroOperador(evt) {
    this.config.setGlobalOtroTipoOperadorEspecificar(evt.target.value);
  }

}
