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
exports.VideojuegosEntity = void 0;
const typeorm_1 = require("typeorm");
const desarrolladora_entity_1 = require("../desarrolladora/desarrolladora.entity");
let VideojuegosEntity = class VideojuegosEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], VideojuegosEntity.prototype, "idVid", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        name: 'nombreVideojuego'
    }),
    __metadata("design:type", String)
], VideojuegosEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        name: 'anioVideojuego'
    }),
    __metadata("design:type", String)
], VideojuegosEntity.prototype, "anioVideojuego", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        name: 'consola'
    }),
    __metadata("design:type", String)
], VideojuegosEntity.prototype, "consola", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        name: 'generoVideojuego'
    }),
    __metadata("design:type", String)
], VideojuegosEntity.prototype, "genero", void 0);
__decorate([
    typeorm_1.ManyToOne(type => desarrolladora_entity_1.DesarrolladoraEntity, desarrolladora => desarrolladora.videojuegos, { onDelete: 'CASCADE' }),
    __metadata("design:type", Number)
], VideojuegosEntity.prototype, "fkDev", void 0);
VideojuegosEntity = __decorate([
    typeorm_1.Entity('Videojuego')
], VideojuegosEntity);
exports.VideojuegosEntity = VideojuegosEntity;
//# sourceMappingURL=videojuegos.entity.js.map