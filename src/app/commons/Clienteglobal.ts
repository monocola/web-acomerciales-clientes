import { Injectable } from '@angular/core';
import { Contacto } from '../model/contactos';

@Injectable({
    providedIn: 'root',
})
export class GlobalClient {

    globalEmpresaID:number;
    globalTipoDocumento: number;
    globalNumeroDocumento: string;
    globalNombreRazonSocial: string;
    globalNombreComercial: string;
    globalFechaDeInscripcion: Date;
    globalCondicion: string;
    globalEstado: string;
    globalDireccionFiscal: string;
    globalActividadEconomica: number;
    globalCodigoSap: string;
    globalDominio: string;
    globalProductoId: number;
    globalSectorId: number;
    globalEjecutivo: string;
    globalCategoriaClienteProveedor: number;
    globalListadoTipoOperadores: string;
    globalListadoEmpSuspen: string;
    globalOtroTipoOperador: number;
    globalOtroTipoOperadorEspecificar: string;
    globalEstadoSuspension: number;
    globalMotivoSuspension: string;
    globalInstruccionRecibida: string;
    globalPlazoCreditoId: number;
    globalTasaInteresLibroId: any;
    globalTasaInteresEspecial: any;
    globalCalificacionRiesgoId: number;
    globalFecha: string;
    globalContactos: Contacto;
    globalTipo: number;
    globalBusqueda: string;

    globalEsTransportista?:number;				
	globalEsOperadorLogistico?:number;			
	globalEsAgenteCarga?:number;				
	globalEsAgenteAduana?:number;			
	globalEsDeposito?:number;				
	globalEsAgenteMaritimo?:number;			
    globalEsLineaNaviera?:number;	
    
    
    globalSuspendidoPMA?:number;
    globalSuspendidoTPP?:number;
    globalSuspendidoTPPT?:number;
    globalSuspendidoTPPAD?:number;

    constructor() {
        this.globalEmpresaID = 0;
        this.globalTipoDocumento = 0;
        this.globalNumeroDocumento = "";
        this.globalNombreRazonSocial = "";
        this.globalNombreComercial = "";
        this.globalFechaDeInscripcion = null;
        this.globalCondicion = "";
        this.globalEstado = "";
        this.globalDireccionFiscal = "";
        this.globalActividadEconomica = 0;
        this.globalCodigoSap = "";
        this.globalDominio = "";
        this.globalProductoId = 0;
        this.globalSectorId = 0;
        this.globalEjecutivo = "";
        this.globalCategoriaClienteProveedor = 0;
        this.globalListadoTipoOperadores = "";
        this.globalListadoEmpSuspen = "";
        this.globalOtroTipoOperador = 0;
        this.globalOtroTipoOperadorEspecificar = "";
        this.globalEstadoSuspension = 0;
        this.globalMotivoSuspension = "";
        this.globalInstruccionRecibida = "";
        this.globalPlazoCreditoId = 0;
        this.globalTasaInteresLibroId = 0;
        this.globalTasaInteresEspecial = 0;
        this.globalCalificacionRiesgoId = 0;
        this.globalFecha = "";
        this.globalContactos = null;
        this.globalTipo = 0;
        this.globalBusqueda = "";

        this.globalEsTransportista = 0;				
        this.globalEsOperadorLogistico = 0;			
        this.globalEsAgenteCarga = 0;				
        this.globalEsAgenteAduana = 0;			
        this.globalEsDeposito = 0;				
        this.globalEsAgenteMaritimo = 0;			
        this.globalEsLineaNaviera = 0;

        this.globalSuspendidoPMA = 0;
        this.globalSuspendidoTPP = 0;
        this.globalSuspendidoTPPT = 0;
        this.globalSuspendidoTPPAD = 0;
    }

    setGlobalEmpresaID(id: number) {
        this.globalEmpresaID = id;
    }
    getGlobalEmpresaID(): number {
        return this.globalEmpresaID;
    }
    setGlobalTipoDocumento(tipodocumento: number) {
        this.globalTipoDocumento = tipodocumento;
    }
    getGlobalTipoDocumento(): number {
        return this.globalTipoDocumento;
    }

    setGlobalNumeroDocumento(numerodedocumento: string) {
        this.globalNumeroDocumento = numerodedocumento;
    }
    getGlobalNumeroDocumento(): string {
        return this.globalNumeroDocumento;
    }

    setGlobalNombreRazonSocial(nombrerazonsocial: string) {
        this.globalNombreRazonSocial = nombrerazonsocial;
    }
    getGlobalNombreRazonSocial(): string {
        return this.globalNombreRazonSocial;
    }

    setGlobalNombreComercial(nombrecomercial: string) {
        this.globalNombreComercial = nombrecomercial;
    }
    getGlobalNombreComercial(): string {
        return this.globalNombreComercial;
    }

    setGlobalFechaDeInscripcion(fechainscripcion: Date) {
        this.globalFechaDeInscripcion = fechainscripcion;
    }
    getGlobalFechaDeInscripcion(): Date {
        return this.globalFechaDeInscripcion;
    }

    setGlobalCondicion(condicion: string) {
        this.globalCondicion = condicion;
    }
    getGlobalCondicion(): string {
        return this.globalCondicion;
    }

    setGlobalEstado(estado: string) {
        this.globalEstado = estado;
    }
    getGlobalEstado(): string {
        return this.globalEstado;
    }

    setGlobalDireccionFiscal(direccionfiscal: string) {
        this.globalDireccionFiscal = direccionfiscal;
    }
    getGlobalDireccionFiscal(): string {
        return this.globalDireccionFiscal;
    }

    setGlobalActividadEconomica(actividadeconomica: number) {
        this.globalActividadEconomica = actividadeconomica;
    }
    getGlobalActividadEconomica(): number {
        return this.globalActividadEconomica;
    }

    setGlobalCodigoSap(codigosap: string) {
        this.globalCodigoSap = codigosap;
    }
    getGlobalCodigoSap(): string {
        return this.globalCodigoSap;
    }

    setGlobalDominio(dominio: string) {
        this.globalDominio = dominio;
    }
    getGlobalDominio(): string {
        return this.globalDominio;
    }

    setGlobalProductoId(productoid: number) {
        this.globalProductoId = productoid;
    }
    getGlobalProductoId(): number {
        return this.globalProductoId;
    }
    setGlobalSectorId(sectorid: number) {
        this.globalSectorId = sectorid;
    }
    getGlobalSectorId(): number {
        return this.globalSectorId;
    }

    setGlobalEjecutivo(ejecutivo: string) {
        this.globalEjecutivo = ejecutivo;
    }
    getGlobalEjecutivo(): string {
        return this.globalEjecutivo;
    }

    setGlobalCategoriaClienteProveedor(categoria: number) {
        this.globalCategoriaClienteProveedor = categoria;
    }
    getGlobalCategoriaClienteProveedor(): number {
        return this.globalCategoriaClienteProveedor;
    }

    setGlobalListadoTipoOperadores(listadooperadores: string) {
        this.globalListadoTipoOperadores = listadooperadores;
    }
    getGlobalListadoTipoOperadores(): string {
        return this.globalListadoTipoOperadores;
    }

    setGlobalListadoEmpSuspen(listadoempsus: string) {
        this.globalListadoEmpSuspen = listadoempsus;
    }
    getGlobalListadoEmpSuspen(): string {
        return this.globalListadoEmpSuspen;
    }

    setGlobalOtroTipoOperador(otrotipo: number) {
        this.globalOtroTipoOperador = otrotipo;
    }
    getGlobalOtroTipoOperador(): number {
        return this.globalOtroTipoOperador;
    }

    setGlobalOtroTipoOperadorEspecificar(otrotipoespecificar: string) {
        this.globalOtroTipoOperadorEspecificar = otrotipoespecificar;
    }
    getGlobalOtroTipoOperadorEspecificar(): string {
        return this.globalOtroTipoOperadorEspecificar;
    }

    setGlobalEstadoSuspension(estadosuspension: number) {
        this.globalEstadoSuspension = estadosuspension;
    }
    getGlobalEstadoSuspension(): number {
        return this.globalEstadoSuspension;
    }
    setGlobalMotivoSuspension(motivosuspension: string) {
        this.globalMotivoSuspension = motivosuspension;
    }
    getGlobalMotivoSuspension(): string {
        return this.globalMotivoSuspension;
    }
    setGlobalInstruccionRecibida(instruccionrecibida: string) {
        this.globalInstruccionRecibida = instruccionrecibida;
    }
    getGlobalInstruccionRecibida(): string {
        return this.globalInstruccionRecibida;
    }
    setGlobalPlazoCreditoId(plazocreditoid: number) {
        this.globalPlazoCreditoId = plazocreditoid;
    }
    getGlobalPlazoCreditoId(): number {
        return this.globalPlazoCreditoId;
    }
    setGlobalTasaInteresLibroId(tasainteresid: any) {
        this.globalTasaInteresLibroId = tasainteresid;
    }
    getGlobalTasaInteresLibroId(): any {
        return this.globalTasaInteresLibroId;
    }
    setGlobalTasaInteresEspecial(tasainteresespecial: any) {
        this.globalTasaInteresEspecial = tasainteresespecial;
    }
    getGlobalTasaInteresEspecial(): any {
        return this.globalTasaInteresEspecial;
    }
    setGlobalCalificacionRiesgoId(riesgoid: number) {
        this.globalCalificacionRiesgoId = riesgoid;
    }
    getGlobalCalificacionRiesgoId(): number {
        return this.globalCalificacionRiesgoId;
    }

    setGlobalContactos(contactos: Contacto) {
        this.globalContactos = contactos;
    }

    getGlobalContactos(): Contacto {
        return this.globalContactos;
    }

    setGlobalTipo(tipo: number) {
        this.globalTipo = tipo;
    }

    getGlobalTipo(): number {
        return this.globalTipo;
    }

    setGlobalBusqueda(busqueda: string) {
        this.globalBusqueda = busqueda;
    }

    getGlobalBusqueda(): string {
        return this.globalBusqueda;
    }

    setGlobalEsTransportista(esTransportista: number) {
        this.globalEsTransportista = esTransportista;
    }

    getGlobalEsTransportista(): number {
        return this.globalEsTransportista;
    }

    setGlobalEsOperadorLogistico(esOpLogistico: number) {
        this.globalEsOperadorLogistico = esOpLogistico;
    }

    getGlobalEsOperadorLogistico(): number {
        return this.globalEsOperadorLogistico;
    }

    setGlobalEsAgenteCarga(esOpCarga: number) {
        this.globalEsAgenteCarga = esOpCarga;
    }

    getGlobalEsAgenteCarga(): number {
        return this.globalEsAgenteCarga;
    }

    setGlobalEsAgenteAduana(esAgAduana: number) {
        this.globalEsAgenteAduana = esAgAduana;
    }

    getGlobalEsAgenteAduana(): number {
        return this.globalEsAgenteAduana;
    }
				
	setGlobalEsDeposito(esDeposito: number) {
        this.globalEsDeposito = esDeposito;
    }

    getGlobalEsDeposito(): number {
        return this.globalEsDeposito;
    }

    setGlobalEsAgenteMaritimo(esAMaritimo: number) {
        this.globalEsAgenteMaritimo = esAMaritimo;
    }

    getGlobalEsAgenteMaritimo(): number {
        return this.globalEsAgenteMaritimo;
    }
    
    setGlobalEsLineaNaviera(esLineNaviera: number) {
        this.globalEsLineaNaviera = esLineNaviera;
    }

    getGlobalEsLineaNaviera(): number {
        return this.globalEsLineaNaviera;
    }

    setGlobalSuspendidoPMA(suspma: number) {
        this.globalSuspendidoPMA = suspma;
    }

    getGlobalSuspendidoPMA(): number {
        return this.globalSuspendidoPMA;
    }

    setGlobalSuspendidoTPP(sustpp: number) {
        this.globalSuspendidoTPP = sustpp;
    }

    getGlobalSuspendidoTPP(): number {
        return this.globalSuspendidoTPP;
    }

    setGlobalSuspendidoTPPT(sustppt: number) {
        this.globalSuspendidoTPPT = sustppt;
    }

    getGlobalSuspendidoTPPT(): number {
        return this.globalSuspendidoTPPT;
    }

    setGlobalSuspendidoTPPAD(sustppad: number) {
        this.globalSuspendidoTPPAD = sustppad;
    }

    getGlobalSuspendidoTPPAD(): number {
        return this.globalSuspendidoTPPAD;
    }

    
    limpiarGlobalCliente() {
        this.setGlobalTipoDocumento(null);
        this.setGlobalNumeroDocumento(null);
        this.setGlobalNombreRazonSocial(null);
        this.setGlobalNombreComercial(null);
        this.setGlobalFechaDeInscripcion(null);
        this.setGlobalCondicion(null);
        this.setGlobalEstado(null);
        this.setGlobalDireccionFiscal(null);
        this.setGlobalActividadEconomica(null);
        this.setGlobalCodigoSap(null)
        this.setGlobalDominio(null);
        this.setGlobalProductoId(null);
        this.setGlobalSectorId(null);
        this.setGlobalEjecutivo(null);
        this.setGlobalCategoriaClienteProveedor(null);
        this.setGlobalListadoTipoOperadores(null);
        this.setGlobalListadoEmpSuspen(null);
        this.setGlobalOtroTipoOperador(null);
        this.setGlobalOtroTipoOperadorEspecificar(null);
        this.setGlobalEstadoSuspension(null);
        this.setGlobalMotivoSuspension(null);
        this.setGlobalInstruccionRecibida(null);
        this.setGlobalPlazoCreditoId(null);
        this.setGlobalTasaInteresLibroId(null);
        this.setGlobalTasaInteresEspecial(null);
        this.setGlobalCalificacionRiesgoId(null);
        this.setGlobalContactos(null);
    }


}