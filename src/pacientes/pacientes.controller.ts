import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorators.js';
import { Body, Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';
import { PacientesService } from './pacientes.service.js';
import { CreatePacienteDto } from './dto/create.pacientes.dto.js';
import { UpdatePacienteDto } from './dto/update.paciente.dto.js';

@Controller('pacientes')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles("RECEPCIONISTA", "GERENCIA")
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
    @Post()
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
