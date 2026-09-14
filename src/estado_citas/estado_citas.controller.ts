import { Controller, Get } from '@nestjs/common';
import { EstadoCitasService } from './estado_citas.service.js';

@Controller('estado-citas')
export class EstadoCitasController {
    constructor(private readonly EstadoCitasService:EstadoCitasService){}
    @Get()
    findAll(){
        return this.EstadoCitasService.findAll()
    }
}
