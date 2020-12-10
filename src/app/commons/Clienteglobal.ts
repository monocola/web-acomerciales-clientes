import { Injectable } from '@angular/core';
import { Contacto } from '../model/contactos';

@Injectable({
    providedIn: 'root',
})
export class GlobalClient {

    globalTipoDocumento: string; 
    globalNumeroDocumento: string; 
    globalNombreRazonSocial: string; 
    globalNombreComercial: string; 
    globalFechaDeInscripcion: Date; 
    globalCondicion: string; 
    globalEstado: string; 
    globalDireccionFiscal: string; 
    globalActividadEconomica: string; 
    globalCodigoSap: string; 
    globalDominio: string;
    globalProductoId: number; 
    globalSectorId: number; 
    globalEjecutivo: string; 
    globalCategoriaClienteProveedor: boolean;
    globalListadoTipoOperadores:string;
    globalListadoEmpSuspen:string;
    globalOtroTipoOperador: number; 
    globalOtroTipoOperadorEspecificar: string; 
    globalEstadoSuspension: boolean;
    globalMotivoSuspension: string;
    globalInstruccionRecibida: string;
    globalPlazoCreditoId: number;
    globalTasaInteresLibroId: number;
    globalTasaInteresEspecial: any;
    globalCalificacionRiesgoId: number;
    globalFecha:string;
    globalContactos: Contacto;
    


    setGlobalTipoDocumento(tipodocumento: string) {
        this.globalTipoDocumento = tipodocumento;
    }
    getGlobalTipoDocumento(): string {
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

    setGlobalActividadEconomica(actividadeconomica: string) {
        this.globalActividadEconomica = actividadeconomica;
    }
    getGlobalActividadEconomica(): string {
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

    setGlobalCategoriaClienteProveedor(categoria: boolean) {
        this.globalCategoriaClienteProveedor = categoria;
    }
    getGlobalCategoriaClienteProveedor(): boolean {
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

    setGlobalEstadoSuspension(estadosuspension: boolean) {
        this.globalEstadoSuspension = estadosuspension;
    }
    getGlobalEstadoSuspension(): boolean {
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
    setGlobalTasaInteresLibroId(tasainteresid: number) {
        this.globalTasaInteresLibroId = tasainteresid;
    }
    getGlobalTasaInteresLibroId(): number {
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
    
    


    
}