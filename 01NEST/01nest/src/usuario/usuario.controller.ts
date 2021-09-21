import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    InternalServerErrorException,
    Param,
    Post,
    Put, Query, Res
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import {Prisma} from "@prisma/client";
import {UsuarioCrearDto} from "./dto/usuario-crear.dto";
import {validate} from "class-validator";
import {take} from "rxjs";

// http://localhost:3001/usuario/......
@Controller('usuario')
export class UsuarioController {
    private prisma: any;
    constructor(
        // Inyeccion dependencias
        private usuarioService: UsuarioService,
    ) {}

    @Get('inicio')
    inicio(@Res() response){
      response.render('inicio.ejs')
    }

    @Get('lista-usuarios')
    async listaUsuarios(@Res() response, @Query() parametrosConsulta) {
        try {
            // validar parámetros de consulta con un dto
            const respuesta = await this.usuarioService.buscarMuchos({
                skip: parametrosConsulta.skip ? +parametrosConsulta.skip : undefined,
                take: parametrosConsulta.take ? +parametrosConsulta.take : undefined,
                busqueda: parametrosConsulta.busqueda ? parametrosConsulta.busqueda : undefined,
            });
            console.log(respuesta);
            response.render('usuario/lista.ejs',{
                datos: {
                    usuarios: respuesta
                },
            });
        } catch (error) {
            throw new InternalServerErrorException('Error del servidor');
        }
    }

    @Get('vista-crear')
    vistaCrear(@Res() response){
        response.render("usuario/crear.ejs");
    }


    @Get(':idUsuario')
    obtenerUno(@Param() parametrosRuta) {
        return this.usuarioService.buscarUno(+parametrosRuta.idUsuario);
    }

    /*@Post('editar')
    crearUno(@Body() bodyParams) {
        const objetoUsuario: Prisma.EPN_USUARIOCreateInput = {
            apellido: bodyParams.apellido,
            nombre: bodyParams.nombre,
        };
        return this.usuarioService.crearUno(objetoUsuario);
    }*/

    /*@Post('editar')
    crearUno(@Body() bodyParams) {
        const apellido = bodyParams.apellido;
        const nombre = bodyParams.nombre;
        return this.usuarioService.crearUno({apellido:apellido,nombre:nombre});
    }*/


    @Post()
    async crearUno(@Body() bodyParams) {
        const usuarioCrearDto = new UsuarioCrearDto();
        usuarioCrearDto.nombre = bodyParams.nombre;
        usuarioCrearDto.apellido = bodyParams.apellido;
        usuarioCrearDto.fechaCreacion = bodyParams.fechaCreacion;
        try{
            const errores = await validate(usuarioCrearDto);
            if(errores.length>0){
                console.log(JSON.stringify(errores));
                throw new BadRequestException('No envía bien los parámetros')
            }else{
                return this.usuarioService.crearUno(usuarioCrearDto);
            }

        }catch(error) {
            console.error({error: error, mensaje: 'Errores en crear usuario'});
            throw new InternalServerErrorException('Error en el servidor')
        }
    }


    /*@Put('/:idUsuario/:apellido/:nombre')
    actualizarUno(@Param() parametrosRuta) {
        const objetoWhere: Prisma.EPN_USUARIOWhereUniqueInput = {
            id: Number(parametrosRuta.idUsuario),
        };
        const objetoUsuarioUpdate: Prisma.EPN_USUARIOUpdateInput = {
            apellido: parametrosRuta.apellido,
            nombre: parametrosRuta.nombre,
        };

        const parametrosActualizar = {
            where: objetoWhere,
            data: objetoUsuarioUpdate,
        };

        return this.usuarioService.actualizarUno(parametrosActualizar);
    }*/



    @Put('/:idUsuario/:apellido/:nombre')
    actualizarUno(parametrosActualizar: {
        id: number;
        data: Prisma.EPN_USUARIOUpdateInput;
    }) {
        return this.prisma.ePN_USUARIO.update({
            data: parametrosActualizar.data,
            where: {
                id: parametrosActualizar.id,
            },
        });
    }



    /*@Delete('eliminar/:idUsuario')
    eliminarUno(@Param() parametro) {
        const objetoUsuario: Prisma.EPN_USUARIOWhereUniqueInput = {
            id: Number(parametro.idUsuario),
        };
        this.usuarioService.eliminarUno(objetoUsuario) ;
        return "se elimino el usuario"
    }*/

    /*@Delete('eliminar/:idUsuario')
    eliminarUno(@Param() parametrosRuta) {
        return this.usuarioService.eliminarUno({id:+parametrosRuta.idUsuario})
    }*/


    @Delete('eliminar/:idUsuario')
    eliminarUno(id: number) {
        return this.prisma.ePN_USUARIO.delete({
            where: { id: id },
        });
    }

}