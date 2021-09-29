import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaService} from "./prisma.service";
import {CalculadoraModule} from "./calculadora/calculadora.module";
import { UsuarioModule } from './usuario/usuario.module';
import {VideojuegosModule} from "./videojuegos/videojuegos.module";

//DECORADOR -> FUNCIONES
@Module({
  imports: [ //modulos importados
      CalculadoraModule,
      UsuarioModule,
      VideojuegosModule
  ],
  controllers: [ //controladores de este módulo
      AppController
  ],
  providers: [ // servicios de este módulo
      AppService,
      PrismaService,
  ],
  exports: [// servidores exportados (que se pueden usar fuera de este módulo)
      AppService

  ],
    })

export class AppModule{
}
