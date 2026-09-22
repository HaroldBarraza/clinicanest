import { Controller } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Pacientes')
@Controller('auth')
export class AuthController {}
