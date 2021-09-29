import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class VideojuegosService{
    constructor(
        // Inyectar dependencias
        private prisma: PrismaService,
    ) {
    }

    buscarMuchos(
        parametrosBusqueda:
            {   skip?: number;
                take?: number;
                busqueda?: string;
            }) {
        const or = parametrosBusqueda.busqueda ? {
                OR: [ { creador: { contains: parametrosBusqueda.busqueda } },
                    { nombre: { contains: parametrosBusqueda.busqueda } },
                ], } :
            {}; return this.prisma.vIDEOJUEGOS.findMany(
            {   where: or, take: Number(parametrosBusqueda.take) || undefined,
                skip: Number(parametrosBusqueda.skip) || undefined,
            });
    }

    buscarUno(id: number){
        return this.prisma.vIDEOJUEGOS.findUnique({
            where: {
                id: id,
            },
        });
    }

    crearUno(videojuego: Prisma.VIDEOJUEGOSCreateInput) {
        return this.prisma.vIDEOJUEGOS.create({
            data: videojuego,
        });
    }

    actualizarUno(parametrosActualizar: {
        id: number;
        data: Prisma.VIDEOJUEGOSUpdateInput;
    }) {
        return this.prisma.vIDEOJUEGOS.update({
            data: parametrosActualizar.data,
            where: {
                id: +parametrosActualizar.id,
            },
        });
    }


    eliminarUno(id: number) {
        return this.prisma.vIDEOJUEGOS.delete({
            where: { id: +id },
        });
    }

}