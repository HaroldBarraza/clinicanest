import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCitasDto } from './dto/create-citas.dto.js';
import { UpdateCitasDto } from './dto/update-citas.dto.js';

@Injectable()
export class CitasService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    return this.prisma.citas.findMany({
      orderBy: { id_cita: 'asc' },
      include: {
        pacientes: {
          select: {
            name_paciente: true,
            appaterno_paciente: true,
            apmaterno_paciente: true,
            genero: true,
            fecha_nacimiento: true,
          },
        },
        estado: {
          select: {
            name_estado: true,
          },
        },
        medico: {
          select: {
            name_empleado: true,
            appaterno: true,
            especialidades: true,
          },
        },
        users: {
          select: {
            name_empleado: true,
            appaterno: true,
            role: true,
          },
        },
      },
    });
  }
  async create(CreateCitasDto: CreateCitasDto) {
    return await this.prisma.citas.create({
      data: CreateCitasDto,
    });
  }
  async findOne(id_cita: number) {
    const cita = await this.prisma.citas.findUnique({
      where: { id_cita },
    });
    if (!cita) {
      throw new NotFoundException(`la cita ${id_cita} no existe`);
    }
    return cita;
  }
  async update(id_cita: number, UpdateCitasDto: UpdateCitasDto) {
    const citavalidate = await this.prisma.citas.findUnique({
      where: { id_cita },
    });
    if (!citavalidate) {
      throw new NotFoundException(`la cita ${id_cita} no existe`);
    }
    return await this.prisma.citas.update({
      where: { id_cita },
      data: UpdateCitasDto,
    });
  }
  async remove(id_cita: number) {
    const citavalidate = await this.prisma.citas.findUnique({
      where: { id_cita },
    });
    if (!citavalidate) {
      throw new NotFoundException(`la cita ${id_cita} no existe`);
    }
    const cita = await this.prisma.citas.delete({
      where: { id_cita },
    });
    return `se elimino con extito el usuario con id ${id_cita}`;
  }
  async filterforDoctor(
    id_empleado: number,
    fecha_inicio: Date,
    fecha_final: Date,
  ) {
    //solcitar cita segun el doctor
  }
}
