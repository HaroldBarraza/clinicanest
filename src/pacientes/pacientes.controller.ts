import { Body, Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';
import { PacientesService } from './pacientes.service.js';
import { CreatePacienteDto } from './dto/create.pacientes.dto.js';
import { UpdatePacienteDto } from './dto/update.paciente.dto.js';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags("pacientes")
@Controller('pacientes')
export class PacientesController {
    constructor(private readonly PacientesService:PacientesService) {}
    @ApiOperation({summary: "obtener la lista de todos los pacientes"})
    @Get()
    finAll(){
        return this.PacientesService.findAll()
    }
    @ApiOperation({summary: "obtener la informacion de un paciente segun id "})
    @Get(":id")
    findOne(@Param("id") id:string){
        return this.PacientesService.findOne(+id)
    }
    @ApiOperation({summary: "crear un nuevo paciente"})
    @Post()
    create(@Body() CreatePacienteDto:CreatePacienteDto){
        return this.PacientesService.create(CreatePacienteDto)
    }
    @ApiOperation({summary: "actualizar la informacion de una paciente segun id"})
    @Patch(":id")
    update(@Param("id") id:string, @Body()UpdatePacienteDto:UpdatePacienteDto){
        return this.PacientesService.update(+id, UpdatePacienteDto)
    }
    @ApiOperation({summary: "eliminar un paciente segun el id "})
    @Delete(":id")
    remove(@Param("id") id:string){
        return this.PacientesService.remove(+id)
    }
}
