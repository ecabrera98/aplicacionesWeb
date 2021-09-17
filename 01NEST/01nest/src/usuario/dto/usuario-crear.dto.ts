import {
    IsEmail,
    IsEmpty, IsIn,
    IsNotEmpty, IsNumber,
    IsNumberString,
    IsOptional, IsPositive,
    IsString,
    Length,
    MaxLength,
    MinLength,
    minLength
} from "class-validator";

export class UsuarioCrearDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(10)
    nombre: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(10)
    apellido: string;

    @IsNotEmpty()
    fechaCreacion: string;



}