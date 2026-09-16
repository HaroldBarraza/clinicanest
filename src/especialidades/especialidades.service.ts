import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEspecialidadDto } from './dto/create.especilidad.dto.js';

@Injectable()
export class EspecialidadesService {
    constructor(private readonly prisma:PrismaService){}
    async findAll(){
        return this.prisma.especialidades.findMany()
    }
    async create(CreateEspecialidadDto:CreateEspecialidadDto){
        try {
            return await this.prisma.especialidades.create({
                data:CreateEspecialidadDto,
            })
        } catch (error) {
            return error
        }
    }
}
