import { genero } from "../../prisma/generated/prisma/enums.js"

export class CreatePacienteDto{
    name_paciente: string
    appaterno_paciente: string
    apmaterno_paciente: string
    email: string
    telefono: string
    fecha_nacimiento: Date
    genero: genero
}