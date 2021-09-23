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
exports.DesarrolladoraController = void 0;
const common_1 = require("@nestjs/common");
const desarrolladora_service_1 = require("./desarrolladora.service");
const typeorm_1 = require("typeorm");
let DesarrolladoraController = class DesarrolladoraController {
    constructor(_desarrolladoraService) {
        this._desarrolladoraService = _desarrolladoraService;
    }
    crearDesarrolladoraView(response) {
        response.render('desarrolladoras/creardev');
    }
    async crearDesarrolladora(parametrosCuerpo, response) {
        const respuesta = await this._desarrolladoraService.desarrolladoraEntity.save({
            nombreDev: parametrosCuerpo.nombreDev,
            anioDev: parametrosCuerpo.anioDev
        });
        response.redirect('/desarrolladora/desarrolladoras?mensaje=Se creó la nueva desarrolladora: ' + parametrosCuerpo.nombreDev + ' con su respectivo año: ' + parametrosCuerpo.anioDev);
    }
    async obtenerDesarrolladora(parametrosConsulta, response) {
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
                nombreDev: typeorm_1.Like(parametrosConsulta.busqueda ? parametrosConsulta.busqueda : '%%'),
            },
            {
                anioDev: typeorm_1.Like(parametrosConsulta.busqueda ? parametrosConsulta.busqueda : '%%'),
            }
        ];
        let consulta = {
            where: consultaWhereOR,
            take: take,
            skip: skip,
            order: {
                idDev: order === 'ASC' ? 'ASC' : 'DESC',
            }
        };
        let datos = await this._desarrolladoraService.desarrolladoraEntity.findAndCount(consulta);
        response.render('./desarrolladoras/home', {
            datos: datos,
            parametrosConsulta: parametrosConsulta
        });
    }
    async borrarDevView(response, parametrosConsulta) {
        const respuesta = await this._desarrolladoraService.desarrolladoraEntity.delete(parametrosConsulta.idDev);
        response.redirect('/desarrolladora/desarrolladoras?mensaje=Se eliminó el registro satisfactoriamente');
    }
    async modificarDev(response, parametrosConsulta) {
        response.render('desarrolladoras/modificarDev', { parametrosConsulta: parametrosConsulta });
    }
    async modificarDevPost(parametrosCuerpo, response) {
        const respuesta = await this._desarrolladoraService.desarrolladoraEntity.update({ idDev: parametrosCuerpo.idDev }, {
            nombreDev: parametrosCuerpo.nombreDev,
            anioDev: parametrosCuerpo.anioDev
        });
        response.redirect('/desarrolladora/desarrolladoras?mensaje=Se modificó la desarrolladora: ' + parametrosCuerpo.nombreDev + ' con su respectivo año: ' + parametrosCuerpo.anioDev);
    }
};
__decorate([
    common_1.Get('crear-dev'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DesarrolladoraController.prototype, "crearDesarrolladoraView", null);
__decorate([
    common_1.Post('crear-dev'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DesarrolladoraController.prototype, "crearDesarrolladora", null);
__decorate([
    common_1.Get('desarrolladoras'),
    __param(0, common_1.Query()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DesarrolladoraController.prototype, "obtenerDesarrolladora", null);
__decorate([
    common_1.Get('borrar-dev'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DesarrolladoraController.prototype, "borrarDevView", null);
__decorate([
    common_1.Get('modificar-dev'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DesarrolladoraController.prototype, "modificarDev", null);
__decorate([
    common_1.Post('modificar-dev'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DesarrolladoraController.prototype, "modificarDevPost", null);
DesarrolladoraController = __decorate([
    common_1.Controller('desarrolladora'),
    __metadata("design:paramtypes", [desarrolladora_service_1.DesarrolladoraService])
], DesarrolladoraController);
exports.DesarrolladoraController = DesarrolladoraController;
//# sourceMappingURL=desarrolladora.controller.js.map