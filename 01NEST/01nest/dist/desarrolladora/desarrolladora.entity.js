"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesarrolladoraEntity = void 0;
const typeorm_1 = require("typeorm");
const videojuegos_entity_1 = require("../videojuegos/videojuegos.entity");
let DesarrolladoraEntity = class DesarrolladoraEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DesarrolladoraEntity.prototype, "idDev", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        name: 'nombreDesarrolladora'
    }),
    __metadata("design:type", String)
], DesarrolladoraEntity.prototype, "nombreDev", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        name: 'anioFundacionDesarrolladora'
    }),
    __metadata("design:type", String)
], DesarrolladoraEntity.prototype, "anioDev", void 0);
__decorate([
    typeorm_1.OneToMany(type => videojuegos_entity_1.VideojuegosEntity, videojuego => videojuego.fkDev, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], DesarrolladoraEntity.prototype, "videojuegos", void 0);
DesarrolladoraEntity = __decorate([
    typeorm_1.Entity('Desarrolladora')
], DesarrolladoraEntity);
exports.DesarrolladoraEntity = DesarrolladoraEntity;
//# sourceMappingURL=desarrolladora.entity.js.map