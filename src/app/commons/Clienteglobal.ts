import { Injectable } from '@angular/core';

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
    globalActividadEconómica: string;
    globalCodigoSap: string;
    globalDominio: string;
    globalProductoId: number;
    globalSectorId: number;
    globalEjecutivo: string;
    globalCategoriaClienteProveedor: boolean;
    globalOtroTipoOperador: number;
    globalOtroTipoOperadorEspecificar: string;
    globalEstadoSuspension: boolean;
    globalMotivoSuspension: string;
    globalInstruccionRecibida: string;
    globalPlazoCreditoId: number;
    globalTasaInteresLibroId: number;
    globalTasaInteresEspecial: number;
    globalCalificacionRiesgoId: number;


    setGlobalTipoDocumento(tipodocumento: string) {
        this.globalTipoDocumento = tipodocumento;
    }
    getGlobalTipoDocumento(): string {
        return this.globalTipoDocumento;
    }

    setglobalNumeroDocumento(numerodedocumento: string) {
        this.globalNumeroDocumento = numerodedocumento;
    }
    getglobalNumeroDocumento(): string {
        return this.globalNumeroDocumento;
    }

}