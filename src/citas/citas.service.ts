import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCitasDto } from './dto/create-citas.dto.js';
import { UpdateCitasDto } from './dto/update-citas.dto.js';

@Injectable()
export class CitasService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    try {
      return this.prisma.citas.findMany({});
    } catch (error) {
      return error;
    }
  }
  async create(CreateCitasDto: CreateCitasDto) {
    try {
      return await this.prisma.citas.create({
        data: CreateCitasDto,
      });
    } catch (error) {
      return error;
    }
  }
  async findOne(id_cita: number) {
    try {
      const cita = await this.prisma.citas.findUnique({
        where: { id_cita },
      });
      if (!cita) {
        throw new NotFoundException(`la cita ${id_cita} no existe`);
      }
      return cita;
    } catch (error) {
      return error;
    }
  }
  async update(id_cita: number, UpdateCitasDto: UpdateCitasDto) {
    try {
      return await this.prisma.citas.update({
        where: { id_cita },
        data: UpdateCitasDto,
      });
    } catch (error) {
      return error;
    }
  }
  async remove(id_cita: number) {
    try {
      const cita = await this.prisma.citas.delete({
        where: { id_cita },
      });
      return (`se elimino con extito el usuario con id ${id_cita}`)
    } catch (error) {
      return error;
    }
  }
}
