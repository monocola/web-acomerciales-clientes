/*
menus: any[];
  @Input() title: string;
  calendar:any;
  localRadio:any;
  cargaRadio:any;
  manual:any;
  filtro: boolean;
  es: any;
  ref: DynamicDialogRef;
  tipo:number;
  listadoClientes:any;
 
  constructor(public dialogService: DialogService,
              private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.tipo = 1;
    $("#documento").show();
    $("#rsocial").hide();
    $("#producto").hide();
    this.menus =[
      { name: 'Documento', value: 1},
      { name: 'Razón Social', value: 2},
      { name: 'Producto', value: 3}
    ]

    

  }

  onTodayClick($event) {
    console.log($event);
  }

  close() {
    this.filtro = false;
  }
  openFiltro() {
    this.filtro = true;
  }

  showMenu(menu) {
    if(menu == "Documento"){
      this.tipo = 1;
      $("#documento").show();
      $("#producto").hide();
      $("#rsocial").hide();
    }else if(menu == "Razón Social"){
      this.tipo = 2;
      $("#documento").hide();
      $("#producto").hide();
      $("#rsocial").show();     
    }else if(menu == "Producto"){
      this.tipo = 3;
      $("#documento").hide();
      $("#producto").show();
      $("#rsocial").hide();
    }
   }

   buscar(tipo){
     alert(tipo);
     var objCliente = new Cliente();
      objCliente.numerodocumento = 20600261551;
    this.empresaService.obtenerClientePorNumeroDocumento(objCliente).subscribe(
      (dataListadoClientes) => {
        this.listadoClientes = dataListadoClientes;
        console.log("Clientes: " + JSON.stringify(this.listadoClientes));
      }, (error) =>{
        console.log("Clientes error: " + JSON.stringify(error));
      })
   }
  
}




<div class="col-lg-12 inner-addon left-addon">
    <input id="documento" class="form-control input-fill" type="text" placeholder="Ingrese Número Documento" />
    <input id="producto" class="form-control input-fill" type="text" placeholder="Ingrese Nombre Producto" />
    <input id="rsocial" class="form-control input-fill" type="text" placeholder="Ingrese Razón Social" />
    <ico-search class="icon ico-disabled"></ico-search>
</div>
*/