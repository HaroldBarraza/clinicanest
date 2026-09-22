import { Controller, Delete, Get, Param, Patch, Body } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UpdateUserDto } from './dto/update.user.dto.js';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags("empleados")
@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService){}
    @ApiOperation({summary: "obtener la lista de todos los empleados"})
    @Get()
    findAll(){
        return this.UsersService.findAll()
    }
    @ApiOperation({summary: "obtener informacion de un empleado segun id"})
    @Get(":id")
    findOne(@Param("id") id: string){
        return this.UsersService.findOne(+id)
    }
    @ApiOperation({summary: "actualizar la informacion de una empleado segun id "})
    @Patch(":id")
    update(@Param("id") id: string, @Body() UpdateUserDto: UpdateUserDto ){
        return this.UsersService.update(+id, UpdateUserDto)
    }
    @ApiOperation({summary: "eliminar a un empleado"})
    @Delete(":id")
    remove(@Param("id") id:string){
        return this.UsersService.remove(+id)
    }
}
