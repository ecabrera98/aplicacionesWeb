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
    @MinLength(4)
    @MaxLength(50)
    creador: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    nombre: string;

    @IsNotEmpty()
    @IsDate()
    fechaLanzamiento: Date;

    @IsOptional()
    @IsBoolean()
    @IsIn([true,false])
   disponibilidad : boolean;


    @Min(1)
    @IsNotEmpty()
    costo: number;

}