import { Body, Controller,Get, Post } from '@nestjs/common';
import { EspecialidadesService } from './especialidades.service.js';
import { CreateEspecialidadDto } from './dto/create.especilidad.dto.js';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags("especialidades")
@Controller('especialidades')
export class EspecialidadesController {
    constructor(private readonly EspecialidadesService:EspecialidadesService){}
    @ApiOperation({summary: "obtener lista de todas las especiliadidades"})
    @Get()
    findAll(){
        return this.EspecialidadesService.findAll()
    }
    @ApiOperation({summary: "crear una nueva especialidad"})
    @Post()
    create(@Body() CreateEspecialidadDto: CreateEspecialidadDto){
        return this.EspecialidadesService.create(CreateEspecialidadDto)
    }

}
