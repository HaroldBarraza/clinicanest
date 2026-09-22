import { Controller, Get } from '@nestjs/common';
import { EstadoCitasService } from './estado_citas.service.js';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags("estado de citas")
@Controller('estado-citas')
export class EstadoCitasController {
    constructor(private readonly EstadoCitasService:EstadoCitasService){}
    @ApiOperation({summary:"obtener una lista de los estados de citas"})
    @Get()
    findAll(){
        return this.EstadoCitasService.findAll()
    }
}
