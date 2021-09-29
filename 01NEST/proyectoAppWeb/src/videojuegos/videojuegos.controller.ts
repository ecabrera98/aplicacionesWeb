import {
    BadRequestException,
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    Param,
    Post,
    Query,
    Res
} from "@nestjs/common";
import {VideojuegosService} from "./videojuegos.service";
import {VideojuegoCrearDto} from "./videojuegosdto/videojuego-crear.dto";
import { ActualizarVideojuegosDTO} from "./videojuegosdto/videojuego-actualizacion.dto";
import {validate} from "class-validator";


@Controller('videojuegos')
export class VideojuegosController {
    constructor(
        private videojuegosService: VideojuegosService,
    ) {
    }


    @Post('crear-vid-formulario')
    async formularioCrearUsuario(
        @Res() response,
        @Body() parametrosCuerpo
    ){
        try{
            await this.videojuegosService.crearUno({
                creador: parametrosCuerpo.creador,
                nombre: parametrosCuerpo.nombre,
                fechaLanzamiento:  new Date(parametrosCuerpo.fechaLanzamiento),
                disponibilidad: !!(parametrosCuerpo.disponibilidad),
                costo: +parametrosCuerpo.costo
            });
            response.redirect('/videojuegos/lista-vid'
                +'?mensaje=Se creo el videojuego '+
                parametrosCuerpo.nombre);

        }catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error creando usuario')
        }
    }
    @Get('inicio')
    inicio(@Res() response){
        response.render('inicio.ejs')
    }

    @Get('crear-vid')
    crearVidView(
        @Res()
            response,
        @Query()
            parametrosCuerpo
    ) {
        response.render('videojuegos/crearVid.ejs',{
            datos: {
                mensaje: parametrosCuerpo.mensaje
            }
        });
    }


    @Post('eliminar-vid/:idVideojuego')
    async eliminarVideojuegos(@Res() response, @Param() parametrosRuta){
        try {
            await this.videojuegosService.eliminarUno(+parametrosRuta.idVideojuego);
            response.redirect(
                '/videojuegos/lista-vid' + '?mensaje= Se eliminó el videojuego '
                +
                parametrosRuta.idVideojuego
            );
        } catch (error){
            console.log(error);
            throw new InternalServerErrorException('Error')
        }

    }



    @Post()
    async CrearUno(
        @Body() parametrosCuerpo
    ){
        const videojuegoCrearDTO = new VideojuegoCrearDto();
        videojuegoCrearDTO.creador = parametrosCuerpo.creador;
        videojuegoCrearDTO.nombre = parametrosCuerpo.nombre;
        videojuegoCrearDTO.fechaLanzamiento = new Date(parametrosCuerpo.fechaLanzamiento);
        videojuegoCrearDTO.disponibilidad = !!(parametrosCuerpo.disponibilidad);
        videojuegoCrearDTO.costo = +parametrosCuerpo.costo;

        try{
            const errores = await validate(videojuegoCrearDTO);
            if(errores.length>0){
                console.log(JSON.stringify(errores));
                throw new BadRequestException('No envia bien los parametross');
            }
            else{
                return this.videojuegosService.crearUno(videojuegoCrearDTO);
            }

        }catch (error){
            console.error({error: error, mensaje: 'Errores en crear videojuego'});
            throw new InternalServerErrorException('error de servidor');
        }
    }
    @Get('lista-vid')
    async listaVid(
        @Res() responses,
        @Query() parametrosConsulta,
    ){
        try {
            const respuesta = await this.videojuegosService.buscarMuchos({
                skip: parametrosConsulta.skip ? +parametrosConsulta.skip : undefined,
                take: parametrosConsulta.take ? +parametrosConsulta.take : undefined,
                busqueda: parametrosConsulta.busqueda ? parametrosConsulta.busqueda : undefined,
            });
            console.log(respuesta);
            responses.render('videojuegos/homeVideojuegos.ejs', {
                datos : {
                    videojuegos: respuesta,
                    mensaje: parametrosConsulta.mensaje
                },
            });
        }catch (error){
            throw new InternalServerErrorException(error)
        }

    }

    @Get(':idVideojuego')
    obtenerUno(@Param() parametroRuta) {
        return this.videojuegosService.buscarUno(+parametroRuta.idVideojuego);
    }




    @Post ('vista-actualizar/:idVideojuego')
    async vistaActualizar(@Res() response, @Param() parametrosRuta){
        try{
            const respuesta = await this.videojuegosService.buscarUno(+parametrosRuta.idVideojuego);
            console.log(respuesta)
            response.render('videojuegos/modificarVid.ejs', {
                datos: {
                    videojuego: respuesta
                }
            })
        } catch (error){
            console.error(error)
            throw new InternalServerErrorException('Error')
        }

    }


    @Post('/actualizar-videojuego/:idVideojuego')
    async actualizarVideojuego(
        @Param() parametrosRuta,
        @Body() parametrosCuerpo,
        @Res() response,
    ) {
        const videojuego = new  ActualizarVideojuegosDTO();
            videojuego.nombre = parametrosCuerpo.nombre;
            videojuego.disponibilidad = !!(parametrosCuerpo.disponibilidad);
            videojuego.costo = +parametrosCuerpo.costo;
        try {
            const errores = await validate(videojuego);
            if (errores.length > 0) {
                console.error('Error', errores);
                return response.redirect(
                    '/videojuegos/lista-vid/' + '?error=Error validando datos')
            } else {
                await this.videojuegosService.actualizarUno({
                    id: Number(parametrosRuta.idVideojuego),
                    data: videojuego,
                });
                response.redirect(
                    '/videojuegos/lista-vid' +
                    '?mensaje= Se actualizó el videojuego' +
                    ''+
                    parametrosCuerpo.nombre + 'exitosamente',
                );

            }
        }catch (e) {
            console.error({error: e, mensaje: 'Errores en editar videojuego'});
            throw new InternalServerErrorException('error de servidor');
        }

    }

}