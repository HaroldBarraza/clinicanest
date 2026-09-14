import { Controller,Get } from '@nestjs/common';
import { CitasService } from './citas.service.js';

@Controller('citas')
export class CitasController {
    constructor(private readonly CitasService:CitasService){}
    @Get()
    findAll(){
        return this.CitasService.findAll
    }
}
