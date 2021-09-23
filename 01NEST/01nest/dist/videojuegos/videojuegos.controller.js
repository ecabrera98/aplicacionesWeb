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
const typeorm_1 = require("typeorm");
let VideojuegosController = class VideojuegosController {
    constructor(_videojuegosService) {
        this._videojuegosService = _videojuegosService;
    }
    crearVidView(response, parametrosCuerpo) {
        response.render('./videojuegos/crearVid', { parametrosCuerpo: parametrosCuerpo });
    }
    async crearVid(parametrosCuerpo, response) {
        const respuesta = await this._videojuegosService.videojuegosEntity.save({
            nombre: parametrosCuerpo.nombre,
            anioVideojuego: parametrosCuerpo.anioVideojuego,
            consola: parametrosCuerpo.consola,
            genero: parametrosCuerpo.genero,
            fkDev: parametrosCuerpo.idDev
        });
        response.redirect('/videojuegos/videojuegos?mensaje=Se creó el videojuego ' + parametrosCuerpo.nombre);
    }
    async obtenerVideojuegos(parametrosConsulta, response) {
        let take = 10;
        let skip = 0;
        let order = 'ASC';
        if (parametrosConsulta.busqueda) {
            let porcent = '%';
            let buscarFix1 = porcent.concat(parametrosConsulta.busqueda.toString());
            const buscarFix = buscarFix1.concat(porcent);
            parametrosConsulta.busqueda = buscarFix;
        }
        if (parametrosConsulta.take) {
            take = parametrosConsulta.take;
        }
        if (parametrosConsulta.skip) {
            skip = parametrosConsulta.skip;
        }
        if (parametrosConsulta.order) {
            order = parametrosConsulta.order;
        }
        if (parametrosConsulta.pag) {
            if (parametrosConsulta.pag > 1) {
                skip = (parseInt(parametrosConsulta.pag) * 10) - 10;
            }
        }
        let consultaWhereOR = [
            {
                fkDev: typeorm_1.Like(parametrosConsulta.idDev ? parametrosConsulta.idDev : '%%'),
                nombre: typeorm_1.Like(parametrosConsulta.busqueda ? parametrosConsulta.busqueda : '%%'),
            },
            {
                fkDev: typeorm_1.Like(parametrosConsulta.idDev ? parametrosConsulta.idDev : '%%'),
                anioVideojuego: typeorm_1.Like(parametrosConsulta.busqueda ? parametrosConsulta.busqueda : '%%'),
            }
        ];
        let consulta = {
            where: consultaWhereOR,
            take: take,
            skip: skip,
            order: {
                idVid: order === 'ASC' ? 'ASC' : 'DESC',
            }
        };
        let datos = await this._videojuegosService.videojuegosEntity.findAndCount(consulta);
        response.render('./videojuegos/homeVideojuegos', {
            datos: datos,
            parametrosConsulta: parametrosConsulta
        });
    }
    async borrarVid(response, parametrosConsulta) {
        const respuesta = await this._videojuegosService.videojuegosEntity.delete(parametrosConsulta.idVid);
        response.redirect('/videojuegos/videojuegos?mensaje=Se eliminó el registro satisfactoriamente');
    }
    async modificarVid(response, parametrosConsulta) {
        response.render('videojuegos/modificarVid', { parametrosConsulta: parametrosConsulta });
    }
    async modificarVidPost(parametrosCuerpo, response) {
        const respuesta = await this._videojuegosService.videojuegosEntity.update({ idVid: parametrosCuerpo.idVid }, {
            nombre: parametrosCuerpo.nombre,
            anioVideojuego: parametrosCuerpo.anioVideojuego,
            consola: parametrosCuerpo.consola,
            genero: parametrosCuerpo.genero,
            fkDev: parametrosCuerpo.fkDev
        });
        response.redirect('/videojuegos/videojuegos?mensaje=Se modificó el videojuego: ' + parametrosCuerpo.nombre + ' idforanea :' + parametrosCuerpo.fkDev);
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