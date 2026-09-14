import { Controller, Get } from '@nestjs/common';
import { PacientesService } from './pacientes.service.js';

@Controller('pacientes')
export class PacientesController {
    constructor(private readonly PacientesService:PacientesService) {}

    @Get()
    finAll(){
        return this.PacientesService.findAll()
    }
}
