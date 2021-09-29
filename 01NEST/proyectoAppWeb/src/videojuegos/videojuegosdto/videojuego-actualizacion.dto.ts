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
    @MinLength(5)
    @MaxLength(50)
    nombre: string;

    @IsOptional()
    @IsBoolean()
    disponibilidad: boolean;

    @Min(1)
    @IsNotEmpty()
    costo: number;

}