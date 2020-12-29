import { Injectable } from '@angular/core';


import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalClient } from '../commons/Clienteglobal';
@Injectable({ providedIn: 'root' })
export class StoreService {
    
    private _cliente = new BehaviorSubject<GlobalClient>(new GlobalClient());

    /*obtiene el bl actual     */
    get cliente(): GlobalClient {
        return this._cliente.value;
    }

    /*se suscibe a los cambios de cliente  */
    get cliente$(): Observable<GlobalClient> {
        return this._cliente.asObservable();
    }

    /*emite un nuevo bl  */
    setCliente(cl: GlobalClient) {
        this._cliente.next(cl);
    }

}