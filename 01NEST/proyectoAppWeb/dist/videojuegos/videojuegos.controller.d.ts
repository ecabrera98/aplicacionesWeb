import { VideojuegosService } from "./videojuegos.service";
export declare class VideojuegosController {
    private videojuegosService;
    constructor(videojuegosService: VideojuegosService);
    crearUno(response: any, parametrosCuerpo: any): Promise<import(".prisma/client").VIDEOJUEGOS>;
    eliminarVideojuegos(response: any, parametrosRuta: any): Promise<void>;
    crearVidView(response: any, parametrosCuerpo: any): void;
    inicio(response: any): void;
    listaVid(responses: any, parametrosConsulta: any): Promise<void>;
    vistaActualizar(response: any, parametrosRuta: any): Promise<void>;
    actualizarVideojuego(parametrosRuta: any, parametrosCuerpo: any, response: any): Promise<any>;
    obtenerUno(parametroRuta: any): import(".prisma/client").Prisma.Prisma__VIDEOJUEGOSClient<import(".prisma/client").VIDEOJUEGOS>;
}
