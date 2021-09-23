import { Repository } from "typeorm";
import { DesarrolladoraEntity } from "./desarrolladora.entity";
export declare class DesarrolladoraService {
    desarrolladoraEntity: Repository<DesarrolladoraEntity>;
    constructor(desarrolladoraEntity: Repository<DesarrolladoraEntity>);
}
