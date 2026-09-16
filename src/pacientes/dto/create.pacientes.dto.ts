import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
  MaxDate,
  IsEnum
} from 'class-validator';

import { genero } from '../../prisma/generated/prisma/enums.js';
import { Transform } from 'class-transformer';


export class CreatePacienteDto {
  @Transform(({ value }) => value?.trim())
  @IsString()
  @MinLength(3, {
    message: 'el nombre tiene que tener como minimo 3 caracteres',
  })
  @Matches(/^[a-zA-Z áéíóú\s]+$/, {message: "no se aceptan caracteres especiales"})
  @IsNotEmpty({ message: 'Este campo es obligatorio' })
  name_paciente: string;
  @Transform(({ value }) => value?.trim())
  @IsString()
  @MinLength(3, { message: 'el apellido debe tener como minimo 3 caracteres' })
  @Matches(/^[a-zA-Z áéíóú\s]+$/, {message: "no se aceptan caracteres especiales"})
  @IsNotEmpty({ message: 'el campo es obligatorio' })
  appaterno_paciente: string;
  @Transform(({ value }) => value?.trim())
  @IsString()
  @MinLength(3, {
    message: 'el apellido materno tiene que tener almenos 3 caracteres',
  })
  @Matches(/^[a-zA-Z áéíóú\s]+$/, {message: "no se aceptan caracteres especiales"})
  @IsNotEmpty({ message: 'este campo es obligatorio' })
  apmaterno_paciente: string;
  @IsEmail({}, { message: 'El correo tiene que estar en un formato valido' })
  email: string;
  @Transform(({value}) => value?.trim())
  @IsString()
  @MinLength(6,{message: "el numero tiene que tener al menos 6 caracteres"})
  @Matches(/^\+?\d+$/,{message: "el numero solo puede contener numeros y el simbolo + "})
  telefono: string;
  @Transform(({value}) => new Date(value))
  @IsDate()
  @MaxDate(new Date, {message: "la fecha nacimiento no puede ser una futura"})
  fecha_nacimiento: Date;
  @Transform(({value}) => value?.toUpperCase())
  @IsEnum(genero,{
    message:"Genero invalido escoja entre MASCULINO y FEMENINO"
  })
  genero: genero;
}
