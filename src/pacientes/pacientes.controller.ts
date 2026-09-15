import { Body, Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';
import { PacientesService } from './pacientes.service.js';
import { CreatePacienteDto } from './dto/create.pacientes.dto.js';
import { UpdatePacienteDto } from './dto/update.paciente.dto.js';

@Controller('pacientes')
export class PacientesController {
    constructor(private readonly PacientesService:PacientesService) {}

    @Get()
    finAll(){
        return this.PacientesService.findAll()
    }
    @Get(":id")
    findOne(@Param("id") id:string){
        return this.PacientesService.findOne(+id)
    }
    @Patch()
    create(@Body() CreatePacienteDto:CreatePacienteDto){
        return this.PacientesService.create(CreatePacienteDto)
    }
    @Patch(":id")
    update(@Param("id") id:string, @Body()UpdatePacienteDto:UpdatePacienteDto){
        return this.PacientesService.update(+id, UpdatePacienteDto)
    }
    @Delete(":id")
    remove(@Param("id") id:string){
        return this.PacientesService.remove(+id)
    }
}
