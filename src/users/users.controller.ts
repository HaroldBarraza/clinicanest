
import { Roles } from '../auth/decorators/roles.decorators.js';
import { Controller, Delete, Get, Param, Patch, Body, Query } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UpdateUserDto } from './dto/update.user.dto.js';


@Controller('users')
@Roles('RECEPCIONISTA','GERENCIA')
export class UsersController {
    constructor(private readonly UsersService: UsersService){}
    @Get()
    findAll(){
        return this.UsersService.findAll()
    }
    @Get(":id")
    findOne(@Param("id") id: string){
        return this.UsersService.findOne(+id)
    }
    @Patch(":id")
    update(@Param("id") id: string, @Body() UpdateUserDto: UpdateUserDto ){
        return this.UsersService.update(+id, UpdateUserDto)
    }
    @Delete(":id")
    remove(@Param("id") id:string){
        return this.UsersService.remove(+id)
    }
    @Get("medicos")
    findMedico(@Query("especialidad") especialidad:string){
        return this.UsersService.findEspecialidad(especialidad)
    }
}
