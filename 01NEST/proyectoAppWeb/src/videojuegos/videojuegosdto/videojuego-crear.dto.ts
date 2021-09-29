import {
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
    IsOptional, IsDate, Min, IsIn, IsBoolean, IsNumber
} from "class-validator";

export class VideojuegoCrearDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    creador: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    nombre: string;

    @IsNotEmpty()
    @IsDate()
    fechaLanzamiento: Date;

    @IsOptional()
    @IsBoolean()
    @IsIn([true,false])
    @IsNumber()
   disponibilidad : boolean;


    @Min(1)
    @IsNotEmpty()
    costo: number;

}