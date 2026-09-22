import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaService } from '../prisma/prisma.service.js';
import { role } from '../prisma/generated/prisma/enums.js';
import { Public } from './decorators/public.decorator.js';


@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async register(dto: {
    email: string;
    password: string;
    role: role;
    name_empleado: string;
    appaterno: string;
    appmaterno: string;
    telefono: string;
    id_especialidad?: number; // opcional si no todos tienen especialidad
  }) {
    const passwordHash = await bcrypt.hash(dto.password, 10);

    return this.prisma.users.create({
      data: {
        email: dto.email,
        password: passwordHash,
        role: dto.role,
        name_empleado: dto.name_empleado,
        appaterno: dto.appaterno,
        appmaterno: dto.appmaterno,
        telefono: dto.telefono,
        id_especialidad: dto.id_especialidad,
      },
      select: {
        id_empleado: true,
        email: true,
        role: true,
      },
    });
  }

  async login(email: string, password: string) {
    const user = await this.prisma.users.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const token = jwt.sign(
      { id: user.id_empleado, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      
      { expiresIn: '8h' },
      
    );
    console.log('SECRET AL FIRMAR:', JSON.stringify(process.env.JWT_SECRET))

    return { token };
  }
}