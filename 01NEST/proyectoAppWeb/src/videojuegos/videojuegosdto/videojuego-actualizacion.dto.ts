import {
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
    IsOptional, Min, IsIn, IsBoolean, IsNumber
} from "class-validator";

export class  ActualizarVideojuegosDTO{
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    nombre: string;


    @IsOptional()
    @IsBoolean()
    @IsIn([true,false])
    disponibilidad: boolean;

    @Min(1)
    @IsNotEmpty()
    costo: number;

}