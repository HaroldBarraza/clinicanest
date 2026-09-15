import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEstadoDto } from './dto/create.especilidad.dto.js';

@Injectable()
export class EspecialidadesService {
    constructor(private readonly prisma:PrismaService){}
    async findAll(){
        return this.prisma.especialidades.findMany()
    }
    async create(CreateEstadoDto:CreateEstadoDto){
        try {
            return await this.prisma.especialidades.create({
                data:CreateEstadoDto,
            })
        } catch (error) {
            return error
        }
    }
}
