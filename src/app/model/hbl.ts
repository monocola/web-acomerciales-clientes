export interface Hbl {
  mbl?;
  hbl?;
  volante?;
  fhbl?;
  fvolante?;
  peso?;
  bulto?;
  fdespacho?;
  row?;
}

export interface IBreadCrumb {
  label: string;
  url: string;
}

export interface INotification {
  type?;
  message?;
  show?;
}

export interface IFacturada {
  mbl?;
  rsocial?;
  femision?;
  nfactura?;
  monto?;
  codpago?;
  row?;
}

export interface IMBL {
  archivo?;
  mbl?;
  envio?;
  fecha?;
  estado?;
  row?;
}

export interface IPagoServicio {
  servicio?;
  cantidad?;
  dias?;
  tarifa;
  igv?;
  monto?;
  liquidacion?;
  estado?;
  row?;
}

export interface IPreliquidacion {
  servicio?;
  cantidad?;
  dias?;
  tarifa?;
  monto?;
  igv?;
  subtotal?;
  row?;
}

export interface IAR {
  ctn?;
  tipoCtn?;
  bulto?;
  peso?;
  seguimiento?;
  aprobado?;
  fecha?;
  hora?;
  turno?;
  sede?;
  nroPlacas?;
  row?;
}

export interface Iconductores {
  placa?;
  nombre?;
  apellidoPaterno?;
  apellidoMaterno?;
  nacionalidad?;
  nroBrevete?;
  breveteCaducidad?;
  categoria?;
  telefono?;
  empresa?;
}

export interface Iflota {
  placa?;
  empresa?;
  conductor: Iconductores[];
  checked?;
  row?;
}

//TPP TRANSPORTE SAC`

// placa ?: AES981;
// empresa ?: TPP TRANSPORTE SAC;
// Q076464032 HUERE RUIZ WALTER;
export interface IrepEst {
  estado?;
  unidadDeNegocio?;
  cantidad?;
  porcentaje?;
  row?;
}

export interface Itrans {
  contenedor?;
  recalada?;
  salida?;
  tipo?;
  tiempoTranscurrido?;
  estado?;
  mensajeError?;
  fechaRM?;
  fechaCE?;
  salidaHora?;
  horaRM?;
  horaRCE?;
  row?;
}

export interface INominacion {
  mblBkl?;
  consignatario?;
  estado?;
  operacion?;
  modalidad?;
  puerto?;
  tipoCarga?;
  fechaRegistro?;
  usuarioRegistro?;
  uNominador?;
  uNominado?;
  naveViaje?;
  fechaEta?;
  uRegistro?;
  uEmisor?;
  row?;
}

export interface IDocumentacion {
  BLbk?;
  hbl?;
  consignatario?;
  operacion?;
  aA?;
  tppOperador?;
  via?;
  delegado?;
  combo?;
  registro?;
  fecha?;
  row?;
}

export interface Isolicitud {
  preSol?;
  BLbk?;
  HBL?;
  operacion?;
  consignatario?;
  via?;
  aA?;
  delegado?;
  tppOperador?;
  concepto?;
  fechaRegistroPre?;
  horaRegistroPre?;
  Estado?;
  fechaRegistroRe?;
  horaRegistroRe?;
  usuarioRevisor?;
  row?;
}

export interface IsolicitudAr {
  mbl?;
  hbl?;
  fechaYhora?;
  usuarioAsignado?;
  empresaSolicitante?;
  estado?;
  motivo?;
  nroAR?;
  row?;
}

export interface IRetiroProg {
  nroAR?;
  ctnBultos?;
  fechaRetiro?;
  horaRetiro?;
  turno?;
  uNegocio?;
  local?;
  row?;
}

export interface IRegistroIngreso {
  fechaIngreso?;
  horaIngreso?;
  blAbl?;
  nroPlaca?;
  nroAR?;
  fechaRetiro?;
  horaRetiro?;
  ctns?;
  uAsignado?;
  row?;
}

export interface IsolicitudPatio {
  razonSocial?;
  ruc?;
  tipoBeneficio?;
  vigencia?;
  fechaRegistro?;
  tipoRegistro?;
  statusRegistro?;
  usuario?;
  row?;
}

export interface IsolicitudIndividualG {
  blBk?;
  hbl?;
  bl?;
  volante?;
  fechaVolante?;
  peso?;
  paquetes?;
  contenedores?;
  row?;
}

export interface IfamC {
  name?;
  concept?;
  row?;
}

export interface IcreaAtrib {
  uMed?;
  moneda?;
  costo?;
  costoP?;
  rentMinP?;
  rentMinVal?;
  rentMinP2?;
  rentMinVal2?;
  tipoComp?;
  atributos?;
  row?;
}

export interface IcondicionS {
  servicio?;
  condicion?;
  tipo?;
  detalle?;
  row?;
}
