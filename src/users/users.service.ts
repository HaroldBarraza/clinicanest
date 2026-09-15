import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { UpdateUserDto } from './dto/update.user.dto.js';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}
    findAll(){
        return this.prisma.users.findMany()
    }
    async findOne(id_empleado: number){
        try {
            return await this.prisma.users.findUnique({
                where: {id_empleado}
            })
        } catch (error) {
            return error
        }
    }
    async update(id_empleado: number,UpdateUserDto:UpdateUserDto){
        try {
            return await this.prisma.users.update({
                where: {id_empleado},
                data: UpdateUserDto,
            })
        } catch (error) {
            return error
        }
    }
    async remove(id_empleado:number){
        try {
            const empleado = await this.prisma.users.delete({
                where: {id_empleado}
            })
            return (`se elimino con exito el empleado con id ${id_empleado}`)
        } catch (error) {
            
        }
    }
}
