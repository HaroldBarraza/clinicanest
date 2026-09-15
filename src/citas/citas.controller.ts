import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CitasService } from './citas.service.js';
import { CreateCitasDto } from './dto/create-citas.dto.js';
import { UpdateCitasDto } from './dto/update-citas.dto.js';

@Controller('citas')
export class CitasController {
  constructor(private readonly CitasService: CitasService) {}
  @Get()
  findAll() {
    return this.CitasService.findAll();
  }
  @Get(":id")
  findOne(@Param("id") id:string){
    return this.CitasService.findOne(+id)
  }
  @Post()
  create(@Body() CreateCitasDto: CreateCitasDto){
    return this.CitasService.create(CreateCitasDto)
  }@Patch(":id")
  update(@Param("id") id:string, @Body()UpdateCitasDto:UpdateCitasDto){
    return this.CitasService.update(+id, UpdateCitasDto)
  }@Delete(":id")
  remove(@Param("id") id:string){
    return this.CitasService.remove(+id)
  }

}
