import { Body, Controller,Get, Post } from '@nestjs/common';
import { EspecialidadesService } from './especialidades.service.js';
import { CreateEspecialidadDto } from './dto/create.especilidad.dto.js';

@Controller('especialidades')
export class EspecialidadesController {
    constructor(private readonly EspecialidadesService:EspecialidadesService){}
    @Get()
    findAll(){
        return this.EspecialidadesService.findAll()
    }
    @Post()
    create(@Body() CreateEspecialidadDto: CreateEspecialidadDto){
        return this.EspecialidadesService.create(CreateEspecialidadDto)
    }

}
