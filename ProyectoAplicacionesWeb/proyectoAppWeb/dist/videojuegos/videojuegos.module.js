"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideojuegosModule = void 0;
const common_1 = require("@nestjs/common");
const videojuegos_controller_1 = require("./videojuegos.controller");
const videojuegos_service_1 = require("./videojuegos.service");
const prisma_service_1 = require("../prisma.service");
let VideojuegosModule = class VideojuegosModule {
};
VideojuegosModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [
            videojuegos_controller_1.VideojuegosController
        ],
        providers: [
            videojuegos_service_1.VideojuegosService,
            prisma_service_1.PrismaService,
        ],
        exports: [
            videojuegos_service_1.VideojuegosService,
        ]
    })
], VideojuegosModule);
exports.VideojuegosModule = VideojuegosModule;
//# sourceMappingURL=videojuegos.module.js.map