import {Module} from "@nestjs/common";
import {VideojuegosController} from "./videojuegos.controller";
import {VideojuegosService} from "./videojuegos.service";
import {PrismaService} from "../prisma.service";

@Module({
    imports :[
    ],

    controllers: [
        VideojuegosController

    ],

    providers: [
        VideojuegosService,
        PrismaService,

    ],

    exports: [
        VideojuegosService,

    ]
})
export class VideojuegosModule{

}