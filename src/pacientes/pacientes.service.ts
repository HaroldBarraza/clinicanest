import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { NotFoundError } from 'rxjs';
import { UpdatePacienteDto } from './dto/update.paciente.dto.js';
import { CreatePacienteDto } from './dto/create.pacientes.dto.js';

@Injectable()
export class PacientesService {
    constructor(private readonly prisma: PrismaService) {}
    findAll(){
        return this.prisma.pacientes.findMany()
    }
    async findOne(id_paciente:number){
        try {
            const paciente = await this.prisma.pacientes.findUnique({
                where: {id_paciente}
            })
            if(!paciente){
                throw new NotFoundException(`el paciente con id ${id_paciente} no existe`)
            }
            return paciente
        } catch (error) {
            return error
        }
    }
    async create(CreatePacienteDto: CreatePacienteDto){
        try {
            const create = await this.prisma.pacientes.create({
                data: CreatePacienteDto
            })
            return create
        } catch (error) {
            return error
        }
    }
    async update(id_paciente:number, UpdatePacienteDto:UpdatePacienteDto){
        try {
            return await this.prisma.pacientes.update({
                where: {id_paciente},
                data: UpdatePacienteDto
            })
        } catch (error) {
            return error
        }
    }
    async remove(id_paciente:number){
        try {
            const paciente =  await this.prisma.pacientes.delete({
                where:{id_paciente}
            })
            return (`se elimino con exito al paciente con id ${id_paciente}`)
        } catch (error) {
            return error
        }

    }
}
