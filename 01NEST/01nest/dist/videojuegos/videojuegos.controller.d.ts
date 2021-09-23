import { VideojuegosService } from "./videojuegos.service";
export declare class VideojuegosController {
    private _videojuegosService;
    constructor(_videojuegosService: VideojuegosService);
    crearVidView(response: any, parametrosCuerpo: any): void;
    crearVid(parametrosCuerpo: any, response: any): Promise<void>;
    obtenerVideojuegos(parametrosConsulta: any, response: any): Promise<void>;
    borrarVid(response: any, parametrosConsulta: any): Promise<void>;
    modificarVid(response: any, parametrosConsulta: any): Promise<void>;
    modificarVidPost(parametrosCuerpo: any, response: any): Promise<void>;
}
