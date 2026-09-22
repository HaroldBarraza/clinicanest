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
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Citas')
@Controller('citas')
export class CitasController {
  constructor(private readonly CitasService: CitasService) {}
  @ApiOperation({summary: "lista de todos las citas"})
  @Get()
  findAll() {
    return this.CitasService.findAll();
  }
  @ApiOperation({summary: "lista de cita por id"})
  @Get(":id")
  findOne(@Param("id") id:string){
    return this.CitasService.findOne(+id)
  }
  @ApiOperation({summary: "crear una nueva cita"})
  @Post()
  create(@Body() CreateCitasDto: CreateCitasDto){
    return this.CitasService.create(CreateCitasDto)
  }
  @ApiOperation({summary: "actulizar una cita segun id"})
  @Patch(":id")
  update(@Param("id") id:string, @Body()UpdateCitasDto:UpdateCitasDto){
    return this.CitasService.update(+id, UpdateCitasDto)
  }
  @ApiOperation({summary: "eliminar una cita"})
  @Delete(":id")
  remove(@Param("id") id:string){
    return this.CitasService.remove(+id)
  }

}
