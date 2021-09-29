import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";
export declare class VideojuegosService {
    private prisma;
    constructor(prisma: PrismaService);
    buscarMuchos(parametrosBusqueda: {
        skip?: number;
        take?: number;
        busqueda?: string;
    }): import(".prisma/client").PrismaPromise<import(".prisma/client").VIDEOJUEGOS[]>;
    buscarUno(id: number): Prisma.Prisma__VIDEOJUEGOSClient<import(".prisma/client").VIDEOJUEGOS>;
    crearUno(videojuego: Prisma.VIDEOJUEGOSCreateInput): Prisma.Prisma__VIDEOJUEGOSClient<import(".prisma/client").VIDEOJUEGOS>;
    actualizarUno(parametrosActualizar: {
        id: number;
        data: Prisma.VIDEOJUEGOSUpdateInput;
    }): Prisma.Prisma__VIDEOJUEGOSClient<import(".prisma/client").VIDEOJUEGOS>;
    eliminarUno(id: number): Prisma.Prisma__VIDEOJUEGOSClient<import(".prisma/client").VIDEOJUEGOS>;
}
