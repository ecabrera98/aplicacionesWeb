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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideojuegosController = void 0;
const common_1 = require("@nestjs/common");
const videojuegos_service_1 = require("./videojuegos.service");
let VideojuegosController = class VideojuegosController {
    constructor(_videojuegosService) {
        this._videojuegosService = _videojuegosService;
    }
    crearVidView(response, parametrosCuerpo) {
        response.render('videojuegos/crearVid.ejs', { parametrosCuerpo: parametrosCuerpo });
    }
    async crearVid(parametrosCuerpo, response) {
    }
    async obtenerVideojuegos(parametrosConsulta, response) {
    }
    async borrarVid(response, parametrosConsulta) {
    }
    async modificarVid(response, parametrosConsulta) {
        response.render('videojuegos/modificarVid.ejs', { parametrosConsulta: parametrosConsulta });
    }
    async modificarVidPost(parametrosCuerpo, response) {
    }
};
__decorate([
    common_1.Get('crear-vid'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], VideojuegosController.prototype, "crearVidView", null);
__decorate([
    common_1.Post('crear-vid'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "crearVid", null);
__decorate([
    common_1.Get('videojuegos'),
    __param(0, common_1.Query()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "obtenerVideojuegos", null);
__decorate([
    common_1.Get('borrar-vid'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "borrarVid", null);
__decorate([
    common_1.Get('modificar-vid'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "modificarVid", null);
__decorate([
    common_1.Post('modificar-vid'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "modificarVidPost", null);
VideojuegosController = __decorate([
    common_1.Controller('videojuegos'),
    __metadata("design:paramtypes", [videojuegos_service_1.VideojuegosService])
], VideojuegosController);
exports.VideojuegosController = VideojuegosController;
//# sourceMappingURL=videojuegos.controller.js.map