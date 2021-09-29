import { VideojuegosService } from "./videojuegos.service";
export declare class VideojuegosController {
    private videojuegosService;
    constructor(videojuegosService: VideojuegosService);
    formularioCrearUsuario(response: any, parametrosCuerpo: any): Promise<void>;
    inicio(response: any): void;
    crearVidView(response: any, parametrosCuerpo: any): void;
    eliminarVideojuegos(response: any, parametrosRuta: any): Promise<void>;
    CrearUno(parametrosCuerpo: any): Promise<import(".prisma/client").VIDEOJUEGOS>;
    listaVid(responses: any, parametrosConsulta: any): Promise<void>;
    obtenerUno(parametroRuta: any): import(".prisma/client").Prisma.Prisma__VIDEOJUEGOSClient<import(".prisma/client").VIDEOJUEGOS>;
    vistaActualizar(response: any, parametrosRuta: any): Promise<void>;
    actualizarVideojuego(parametrosRuta: any, parametrosCuerpo: any, response: any): Promise<any>;
}
