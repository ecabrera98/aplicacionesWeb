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
const videojuego_crear_dto_1 = require("./videojuegosdto/videojuego-crear.dto");
const videojuego_actualizacion_dto_1 = require("./videojuegosdto/videojuego-actualizacion.dto");
const class_validator_1 = require("class-validator");
let VideojuegosController = class VideojuegosController {
    constructor(videojuegosService) {
        this.videojuegosService = videojuegosService;
    }
    async formularioCrearUsuario(response, parametrosCuerpo) {
        try {
            await this.videojuegosService.crearUno({
                creador: parametrosCuerpo.creador,
                nombre: parametrosCuerpo.nombre,
                fechaLanzamiento: new Date(parametrosCuerpo.fechaLanzamiento),
                disponibilidad: !!(parametrosCuerpo.disponibilidad),
                costo: +parametrosCuerpo.costo
            });
            response.redirect('/videojuegos/lista-vid'
                + '?mensaje=Se creo el videojuego ' +
                parametrosCuerpo.nombre);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error creando usuario');
        }
    }
    inicio(response) {
        response.render('inicio.ejs');
    }
    crearVidView(response, parametrosCuerpo) {
        response.render('videojuegos/crearVid.ejs', {
            datos: {
                mensaje: parametrosCuerpo.mensaje
            }
        });
    }
    async eliminarVideojuegos(response, parametrosRuta) {
        try {
            await this.videojuegosService.eliminarUno(+parametrosRuta.idVideojuego);
            response.redirect('/videojuegos/lista-vid' + '?mensaje= Se eliminó el videojuego '
                +
                    parametrosRuta.idVideojuego);
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Error');
        }
    }
    async CrearUno(parametrosCuerpo) {
        const videojuegoCrearDTO = new videojuego_crear_dto_1.VideojuegoCrearDto();
        videojuegoCrearDTO.creador = parametrosCuerpo.creador;
        videojuegoCrearDTO.nombre = parametrosCuerpo.nombre;
        videojuegoCrearDTO.fechaLanzamiento = new Date(parametrosCuerpo.fechaLanzamiento);
        videojuegoCrearDTO.disponibilidad = !!(parametrosCuerpo.disponibilidad);
        videojuegoCrearDTO.costo = +parametrosCuerpo.costo;
        try {
            const errores = await class_validator_1.validate(videojuegoCrearDTO);
            if (errores.length > 0) {
                console.log(JSON.stringify(errores));
                throw new common_1.BadRequestException('No envia bien los parametross');
            }
            else {
                return this.videojuegosService.crearUno(videojuegoCrearDTO);
            }
        }
        catch (error) {
            console.error({ error: error, mensaje: 'Errores en crear videojuego' });
            throw new common_1.InternalServerErrorException('error de servidor');
        }
    }
    async listaVid(responses, parametrosConsulta) {
        try {
            const respuesta = await this.videojuegosService.buscarMuchos({
                skip: parametrosConsulta.skip ? +parametrosConsulta.skip : undefined,
                take: parametrosConsulta.take ? +parametrosConsulta.take : undefined,
                busqueda: parametrosConsulta.busqueda ? parametrosConsulta.busqueda : undefined,
            });
            console.log(respuesta);
            responses.render('videojuegos/homeVideojuegos.ejs', {
                datos: {
                    videojuegos: respuesta,
                    mensaje: parametrosConsulta.mensaje
                },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    obtenerUno(parametroRuta) {
        return this.videojuegosService.buscarUno(+parametroRuta.idVideojuego);
    }
    async vistaActualizar(response, parametrosRuta) {
        try {
            const respuesta = await this.videojuegosService.buscarUno(+parametrosRuta.idVideojuego);
            console.log(respuesta);
            response.render('videojuegos/modificarVid.ejs', {
                datos: {
                    videojuego: respuesta
                }
            });
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error');
        }
    }
    async actualizarVideojuego(parametrosRuta, parametrosCuerpo, response) {
        const videojuego = new videojuego_actualizacion_dto_1.ActualizarVideojuegosDTO();
        videojuego.nombre = parametrosCuerpo.nombre;
        videojuego.disponibilidad = !!(parametrosCuerpo.disponibilidad);
        videojuego.costo = +parametrosCuerpo.costo;
        try {
            const errores = await class_validator_1.validate(videojuego);
            if (errores.length > 0) {
                console.error('Error', errores);
                return response.redirect('/videojuegos/lista-vid/' + '?error=Error validando datos');
            }
            else {
                await this.videojuegosService.actualizarUno({
                    id: Number(parametrosRuta.idVideojuego),
                    data: videojuego,
                });
                response.redirect('/videojuegos/lista-vid' +
                    '?mensaje= Se actualizó el videojuego' +
                    '' +
                    parametrosCuerpo.nombre + 'exitosamente');
            }
        }
        catch (e) {
            console.error({ error: e, mensaje: 'Errores en editar videojuego' });
            throw new common_1.InternalServerErrorException('error de servidor');
        }
    }
};
__decorate([
    common_1.Post('crear-vid-formulario'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "formularioCrearUsuario", null);
__decorate([
    common_1.Get('inicio'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VideojuegosController.prototype, "inicio", null);
__decorate([
    common_1.Get('crear-vid'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], VideojuegosController.prototype, "crearVidView", null);
__decorate([
    common_1.Post('eliminar-vid/:idVideojuego'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "eliminarVideojuegos", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "CrearUno", null);
__decorate([
    common_1.Get('lista-vid'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "listaVid", null);
__decorate([
    common_1.Get(':idVideojuego'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VideojuegosController.prototype, "obtenerUno", null);
__decorate([
    common_1.Post('vista-actualizar/:idVideojuego'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "vistaActualizar", null);
__decorate([
    common_1.Post('/actualizar-videojuego/:idVideojuego'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], VideojuegosController.prototype, "actualizarVideojuego", null);
VideojuegosController = __decorate([
    common_1.Controller('videojuegos'),
    __metadata("design:paramtypes", [videojuegos_service_1.VideojuegosService])
], VideojuegosController);
exports.VideojuegosController = VideojuegosController;
//# sourceMappingURL=videojuegos.controller.js.map