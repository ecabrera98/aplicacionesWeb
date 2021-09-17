import {
  BadRequestException, Body,
  Controller,
  Get,
  Header,
  Headers,
  HttpCode,
  InternalServerErrorException, Param, Post, Query,
  Req,
  Res
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // import {Controller, Get, HttpCode} from '@nestjs/common';
  @Get('texto')
  @HttpCode(200)
  holaTexto(): string {
    return 'HOLA TEXTO';
  }
  @Get('html')
  @HttpCode(201)
  holaHTML(): string {
    return '<h1>Hola HTML</h1> <button>Click</button>';
  }
  @Get('json')
  @HttpCode(200)
  holaJSON(): string {
    return '{mensaje: "Hola json" }';
  }

  @Get('bad-request')
  badrequest(){
    throw new BadRequestException();
  }

  @Get('internal-error')
  internalError(){
    throw new InternalServerErrorException();
  }

  @Get ('setear-cookie-insegura')
  setearCookieInsegura(
      @Req() req, // request - PETICION
      @Res() res, // valor
  ){
    res.cookie(
        'galletaInsegura', // nombre
        'Tengo hambre', // valor
    );

    res.cookie(
        'galletaSegurayFirmada', // nombre
        'Web:3', // valor
        {
          secure: true, // solo se transfiere por canales confiables https
          signed: true, //Encriptación
        }
    );
    res.send('ok'); // return de antes
  }

  @Get('mostrar-cookies')
  mostrarCookies(@Req() req){
    const mensaje  ={
      sinFirmar: req.cookies,
      firmadas: req.signedCookies,
    };
    return mensaje;
  }

  @Get('parametros-consulta/:nombre/:apellido')
  @HttpCode(200)
  @Header('cache-control', 'none')//cabeceras de respuesta (response headers)
  @Header('EPN','SISTEMAS')// cabeceras de respuesta (response headers)
  parametrosConsulta(
      @Query() queryParams,
      @Param() params,
  ) {
    return {
      parametrosConsulta: queryParams,
      parametroRuta: params,
    };
}

@Post('parametros-cuerpo')//201
@HttpCode(200)
parametrosCuerpo(
    @Body() bodyParams,
    @Headers() cabecerasPeticion,
){
    return{
      parametrosCuerpo: bodyParams,
      cabeceras: cabecerasPeticion
    };
}

}
