import { Injectable } from "@angular/core";
import { Persona } from "../model/persona";
import { PersonaService } from "../services/persona.service";

@Injectable({
    providedIn: 'root',
})
export class Generales {
    estado: boolean;
    listadoPersona: Persona;

    constructor(private personaService: PersonaService) { }

    obtenerIdActividadEconomica(actividadSunat: string) {
        var res = actividadSunat.split(" ");
        return res[0];
    }

    obtenerNombreActividadEconomica(actividadSunat: string) {
        var res = actividadSunat.split("-");
        return res[1];
    }


   


}