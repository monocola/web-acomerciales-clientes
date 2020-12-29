import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { GlobalClient } from '../commons/Clienteglobal';
import { Categoria } from '../model/categoria';
import { Producto } from '../model/producto';
import { Sector } from '../model/sector';
import { TipoOperador } from '../model/tipooperador';
import { CategoriaService } from '../services/categoria.service';
import { ProductoService } from '../services/producto.service';
import { SectorService } from '../services/sector.service';
import { StoreService } from '../services/store.service';
import { TipoOperadorService } from '../services/tipooperador.service';
import { Comerciales } from './comerciales';


interface City {
  name: string,
  code: string,
  inactive: boolean
}
declare var $: any;
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
  selectedTipos: TipoOperador[];
  listadoCategorias: any;
  listarTipoOperadores: any;
  notificacionGlobal: {};
  producto:Producto;
  productoResp:any;
  listaProductos: any;


  /* */
  countries: any[];

  /* */

  constructor(private productoService: ProductoService,
    private sectorService: SectorService,
    private config: GlobalClient,
    private categoriaService: CategoriaService,
    private tipoOpService: TipoOperadorService,
    public store: StoreService) {

  }

  ngOnInit(): void {
    $("#otroOperadorText").hide();
    var nombreUsuario = localStorage.getItem("cpcPersonaEmpresa")
    $("#ejecutivo").val(nombreUsuario).prop("disabled", true);
    $("#sector").prop("disabled", true);
    this.store.cliente.setGlobalEjecutivo(nombreUsuario);
    this.store.cliente.setGlobalCategoriaClienteProveedor(0);
    this.store.cliente.setGlobalOtroTipoOperador(0);
    //this.store.setCliente(this.c);
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

      /* ****Inicio de pruebas **** */
     


       /* ****Fin de pruebas **** */


  }
  
  search(event) {
    var objProd = new Producto();
    objProd.nombreproducto = event.query;
    this.productoService.obtenerProductosOnpremise(objProd).subscribe(
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
      this.store.cliente.setGlobalProductoId(null);
    }else {
    this.idproducto = event.id;
    this.config.setGlobalProductoId(event.id);
    var objProd = new Producto();
    objProd.nombreproducto = event.nombreproducto;

    this.productoService.obtenerProductosOnpremise(objProd).subscribe(
      (dataProducto) => {
        var prodid;
        this.listaProductos = new Array();
        this.listaProductos = dataProducto;
        this.producto = dataProducto;
        $.each(this.producto, function (i, item) {
        $("#sector").val(item.nombresector).prop("disabled", true);
         prodid = item.id
        });
        this.store.cliente.setGlobalProductoId(prodid);
        //this.store.setCliente(this.c);
      })
      
    }
  }
  
  enviarProveedor(prov) {
    if ($('#tipocategoria' + prov).prop('checked')) {

      this.store.cliente.setGlobalCategoriaClienteProveedor(1);
      
    } else {
      this.store.cliente.setGlobalCategoriaClienteProveedor(0);
   
    }
  }

  onSelectOperadores() {
    var listadoTiposCadena = [];
    this.selectedTipos.forEach(element => {
      listadoTiposCadena.push(element.id);
    });

    if(this.selectedTipos.length == 0){
      this.store.cliente.setGlobalListadoTipoOperadores(null);
    }else{
      this.store.cliente.setGlobalListadoTipoOperadores(listadoTiposCadena.toString());
    
    }

    }

  mostrarOtroOperador() {
   
    if ($('#idOtroOperador').is(":checked")) {
      $("#otroOperadorText").show();
      this.store.cliente.setGlobalOtroTipoOperador(1);
    } else {
      $("#otroOperadorText").hide();
      this.store.cliente.setGlobalOtroTipoOperador(0);
     
    }

  }

  enviarOtroOperador(evt) {
    if (evt.target.value == "") {
      this.store.cliente.setGlobalOtroTipoOperadorEspecificar(null);
    } else {
      this.store.cliente.setGlobalOtroTipoOperadorEspecificar(evt.target.value);
    }

  }

}
