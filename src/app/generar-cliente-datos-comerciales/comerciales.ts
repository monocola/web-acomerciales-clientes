import { Injectable } from "@angular/core";
import { GlobalClient } from "../commons/Clienteglobal";
import { StoreService } from "../services/store.service";

@Injectable({
    providedIn: 'root',
})
export class Comerciales {

    constructor(private store: StoreService,
                private config: GlobalClient) { }

    enviarTiposOperadores(listado: string) {
        var array = JSON.parse("[" + listado + "]");
        array.forEach(tipo => {

           
            switch (tipo) {
                case 1:
                    this.store.cliente.setGlobalEsAgenteAduana(1);
                    break;
                case 2:
                    this.store.cliente.setGlobalEsAgenteCarga(1);
                    break;
                case 3:
                    this.store.cliente.setGlobalEsOperadorLogistico(1);
                    break;
                case 4:
                    this.store.cliente.setGlobalEsDeposito(1);
                    break;
                case 5:
                    this.store.cliente.setGlobalEsTransportista(1);
                    break;
                case 6:
                    this.store.cliente.setGlobalEsLineaNaviera(1);
                    break;
                case 7:
                    this.store.cliente.setGlobalEsAgenteMaritimo(1);
                    break;
                default:
                    this.store.cliente.setGlobalEsAgenteAduana(0);
                    this.store.cliente.setGlobalEsAgenteCarga(0);
                    this.store.cliente.setGlobalEsOperadorLogistico(0);
                    this.store.cliente.setGlobalEsDeposito(0);
                    this.store.cliente.setGlobalEsTransportista(0);
                    this.store.cliente.setGlobalEsLineaNaviera(0);
                    this.store.cliente.setGlobalEsAgenteMaritimo(0);
                    break;
            }
        });
    }

    resetearTiposOperadores() {
        this.store.cliente.setGlobalEsAgenteAduana(0);
        this.store.cliente.setGlobalEsAgenteCarga(0);
        this.store.cliente.setGlobalEsOperadorLogistico(0);
        this.store.cliente.setGlobalEsDeposito(0);
        this.store.cliente.setGlobalEsTransportista(0);
        this.store.cliente.setGlobalEsLineaNaviera(0);
        this.store.cliente.setGlobalEsAgenteMaritimo(0);
    }   
    
    enviarTiposOperadoresPorID(tipo: number, value: number) {
                  
            switch (tipo) {
                case 1:
                    this.config.setGlobalEsAgenteAduana(value);
                    break;
                case 2:
                    this.config.setGlobalEsAgenteCarga(value);
                    break;
                case 3:
                    this.config.setGlobalEsOperadorLogistico(value);
                    break;
                case 4:
                    this.config.setGlobalEsDeposito(value);
                    break;
                case 5:
                    this.config.setGlobalEsTransportista(value);
                    break;
                case 6:
                    this.config.setGlobalEsLineaNaviera(value);
                    break;
                case 7:
                    this.config.setGlobalEsAgenteMaritimo(value);
                    break;
                default:
                    break;
            }
    }

    enviarEmpresaSuspendederaPorID(tipo: number, value: number) {
                  
        switch (tipo) {
            case 1:
                this.config.setGlobalSuspendidoPMA(value);
                break;
            case 2:
                this.config.setGlobalSuspendidoTPP(value);
                break;
            case 3:
                this.config.setGlobalSuspendidoTPPT(value);
                break;
            case 4:
                this.config.setGlobalSuspendidoTPPAD(value);
                break;
            default:
                break;
        }
}


}