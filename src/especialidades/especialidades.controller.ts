import { Controller,Get } from '@nestjs/common';
import { EspecialidadesService } from './especialidades.service.js';

@Controller('especialidades')
export class EspecialidadesController {
    constructor(private readonly EspecialidadesService:EspecialidadesService){}
    @Get()
    findAll(){
        return this.EspecialidadesService.findAll()
    }

}
