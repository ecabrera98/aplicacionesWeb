import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

//DECORADOR -> FUNCIONES
@Module({
  imports: [ //modulos importados

  ],
  controllers: [ //controladores de este módulo
      AppController
  ],
  providers: [ // servicios de este módulo
      AppService
  ],
  exports: [// servidores exportados (que se pueden usar fuera de este módulo)
      AppService

  ],
    })

export class AppModule{
}
