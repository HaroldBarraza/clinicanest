import { Controller, Get } from '@nestjs/common';
import { EstadoCitasService } from './estado_citas.service.js';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorators.js';

@Controller('estado-citas')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('RECEPCIONISTA','GERENCIA')
export class EstadoCitasController {
    constructor(private readonly EstadoCitasService:EstadoCitasService){}
    @Get()
    findAll(){
        return this.EstadoCitasService.findAll()
    }
}
