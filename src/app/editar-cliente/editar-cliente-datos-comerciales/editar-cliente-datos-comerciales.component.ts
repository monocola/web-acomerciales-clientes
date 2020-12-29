import { Component, OnInit } from '@angular/core';
import { GlobalClient } from 'src/app/commons/Clienteglobal';
import { Comerciales } from 'src/app/generar-cliente-datos-comerciales/comerciales';
import { Categoria } from 'src/app/model/categoria';
import { Producto } from 'src/app/model/producto';
import { Sector } from 'src/app/model/sector';
import { TipoOperador } from 'src/app/model/tipooperador';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { SectorService } from 'src/app/services/sector.service';
import { StoreService } from 'src/app/services/store.service';
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
  selectedProduc: any;
  listadoCategorias: any;
  listarTipoOperadores: any;
  notificacionGlobal: {};
  producto: Producto;
  text: any;
  lista: any;
  esproveedor: number;
  estransportista: number;
  esoperadorlogistico: number;
  esagentecarga: number;
  esagenteaduana: number;
  esdeposito: number;
  esagentemaritimo: number;
  eslineanaviera: number;
  otrooperador: string;
  selectedProducto: Producto;
  productoId: number;
  vistamensaje:any;
  prodObjetoTamano:number;


  constructor(private productoService: ProductoService,
    private sectorService: SectorService,
    private config: GlobalClient,
    private categoriaService: CategoriaService,
    private tipoOpService: TipoOperadorService,
    public store: StoreService,
    private comerciales: Comerciales) {

  }



  ngOnInit(): void {
    $("#sector1").prop("disabled", true);
    $("#sector").prop("disabled", true);
    $("#sector1").hide();
    var nombreUsuario = localStorage.getItem("cpcPersonaEmpresa");
    const obj = JSON.parse(JSON.stringify(this.store.cliente));
    $("#ejecutivo").val(nombreUsuario).prop("disabled", true);
    $("#producto").val(obj.producto);
    $("#sector").val(obj.sector).prop("disabled", true);
    this.esproveedor = obj.esproveedor;
    this.config.setGlobalCategoriaClienteProveedor(this.esproveedor);
    this.estransportista = obj.estransportista;
    this.esoperadorlogistico = obj.esoperadorlogistico;
    this.esagentecarga = obj.esagentecarga;
    this.esagenteaduana = obj.esagenteaduana;
    this.esdeposito = obj.esdeposito;
    this.esagentemaritimo = obj.esagentemaritimo;
    this.eslineanaviera = obj.eslineanaviera;
    this.otrooperador = obj.otrooperador;
    $("#otrooperador").val(obj.otrooperador);
    this.config.setGlobalProductoId(obj.productoid);
    this.vistamensaje = 0;
    this.config.setGlobalEsAgenteAduana(this.esagenteaduana);
    this.config.setGlobalEsAgenteCarga(this.esagentecarga);
    this.config.setGlobalEsOperadorLogistico(this.esoperadorlogistico);
    this.config.setGlobalEsDeposito(this.esdeposito);
    this.config.setGlobalEsTransportista(this.estransportista);
    this.config.setGlobalEsLineaNaviera(this.eslineanaviera);
    this.config.setGlobalEsAgenteMaritimo(this.esagentemaritimo);
    this.config.setGlobalOtroTipoOperadorEspecificar(this.otrooperador);
    
    //alert(obj.eslineanaviera);
    /*
        estransportista           
        esoperadorlogistico       
        esagentecarga              
        esagenteaduana      
        esdeposito     
        esagentemaritimo 
        eslineanaviera   
    */


    var objProd = new Producto();
    this.productoService.obtenerProductosOnpremise(objProd).subscribe(
      (dataProducto) => {
        this.listaProductos = dataProducto;
      })

    this.config.setGlobalCategoriaClienteProveedor(0);
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
        console.log("operadores: ===>" + JSON.stringify(this.listarTipoOperadores));

      })



  }

  mensajeGlobalNotificacion(tipo, mensaje, view) {
    this.notificacionGlobal = {
      type: tipo,
      message: [{ mensaje: mensaje }],
      show: view
    }
  }

  listaProductos: any;
  search(event) {
    var objProd = new Producto();
    this.productoService.obtenerProductosOnpremise(objProd).subscribe(
      (dataProducto) => {
        this.listaProductos = new Array();
        this.listaProductos = dataProducto;
        this.listaProductos.filter(c => c.id.startsWith(event.query));
      })


  }


  buscar(evt) {
    
    var objProd = new Producto();
    if (evt.target.value == "") {
      //$("#sector").val("").prop("disabled", true);
      $("#sector").hide().prop("disabled", true);
      $("#sector1").prop("disabled", true);
      $("#sector1").show();

      this.productoService.obtenerProductosOnpremise(objProd).subscribe(
        (dataProducto) => {
          this.listaProductos = new Array();
          this.listaProductos = dataProducto;
          $.each(this.listaProductos, function (i, item) {
            $("#sector").val(item.nombresector).prop("disabled", true);
          });
        })

    } else {
      objProd.nombreproducto = evt.target.value;
      this.productoService.obtenerProductosOnpremise(objProd).subscribe(
        (dataProducto) => {
          this.listaProductos = new Array();
          this.listaProductos = dataProducto;
          this.prodObjetoTamano = Object.keys(this.listaProductos).length;
            this.listaProductos = new Array();
            this.listaProductos = dataProducto;
            var stringify = JSON.parse(JSON.stringify(dataProducto));
            for (var i = 0; i < stringify.length; i++) {
              var idprod = stringify[i]['id'];
              //alert("prodID: " +  idprod);
              this.config.setGlobalProductoId(idprod);
            }
  
            $.each(this.listaProductos, function (i, item) {
              $("#sector").val(item.nombresector).prop("disabled", true);
            });
        })
        if(this.vistamensaje == 1){
          this.mensajeGlobalNotificacion("warning", "El producto ingresado no existe.", true);
        }else if(this.vistamensaje == 0){
          this.mensajeGlobalNotificacion("warning", "", false);
        }
       
    }
    
   


  }

  listaSectores: any;
  onSelectAuto(event) {


  }

 




  onSelectSector(evt) {
    this.config.setGlobalSectorId(evt.id);
  }

  otrometodo(event) {
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



  enviarProveedor() {
    if ($('#tipocategoria2').prop('checked')) {
      this.esproveedor = 1;
      this.config.setGlobalCategoriaClienteProveedor(1);
    } else {
      this.esproveedor = 0;
      this.config.setGlobalCategoriaClienteProveedor(0);
    }
  }
  onSelectOperadores(id) {
    if ($("#tipooperador" +  id).is(':checked')) {
    this.comerciales.enviarTiposOperadoresPorID(id, 1);  
    }else{
      this.comerciales.enviarTiposOperadoresPorID(id, 0);
    } 
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
