import { PartialType } from '@nestjs/mapped-types'
import { CreatePacienteDto } from './create.pacientes.dto.js'


export class UpdatePacienteDto extends PartialType(CreatePacienteDto){}
