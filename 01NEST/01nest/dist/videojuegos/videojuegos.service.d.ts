import { VideojuegosEntity } from "./videojuegos.entity";
import { Repository } from "typeorm";
export declare class VideojuegosService {
    videojuegosEntity: Repository<VideojuegosEntity>;
    constructor(videojuegosEntity: Repository<VideojuegosEntity>);
}
