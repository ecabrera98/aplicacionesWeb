"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesarrolladoraModule = void 0;
const common_1 = require("@nestjs/common");
const desarrolladora_service_1 = require("./desarrolladora.service");
const desarrolladora_controller_1 = require("./desarrolladora.controller");
const typeorm_1 = require("@nestjs/typeorm");
const desarrolladora_entity_1 = require("./desarrolladora.entity");
let DesarrolladoraModule = class DesarrolladoraModule {
};
DesarrolladoraModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([desarrolladora_entity_1.DesarrolladoraEntity], 'default')
        ],
        controllers: [
            desarrolladora_controller_1.DesarrolladoraController
        ],
        providers: [
            desarrolladora_service_1.DesarrolladoraService
        ],
        exports: [
            desarrolladora_service_1.DesarrolladoraService
        ]
    })
], DesarrolladoraModule);
exports.DesarrolladoraModule = DesarrolladoraModule;
//# sourceMappingURL=desarrolladora.module.js.map