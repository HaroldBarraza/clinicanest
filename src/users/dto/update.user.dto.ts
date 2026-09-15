import { role } from '../../prisma/generated/prisma/enums.js';

export class UpdateUserDto {
  email: string;
  password: string;
  role: role;
  name_empleado: string;
  appaterno: string;
  appmaterno: string;
  telefono: string;
}
