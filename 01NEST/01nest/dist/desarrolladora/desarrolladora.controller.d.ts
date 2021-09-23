import { DesarrolladoraService } from "./desarrolladora.service";
export declare class DesarrolladoraController {
    private _desarrolladoraService;
    constructor(_desarrolladoraService: DesarrolladoraService);
    crearDesarrolladoraView(response: any): void;
    crearDesarrolladora(parametrosCuerpo: any, response: any): Promise<void>;
    obtenerDesarrolladora(parametrosConsulta: any, response: any): Promise<void>;
    borrarDevView(response: any, parametrosConsulta: any): Promise<void>;
    modificarDev(response: any, parametrosConsulta: any): Promise<void>;
    modificarDevPost(parametrosCuerpo: any, response: any): Promise<void>;
}
