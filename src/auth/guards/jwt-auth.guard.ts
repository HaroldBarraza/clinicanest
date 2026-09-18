import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator.js';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;
    const request = context.switchToHttp().getRequest();
    const header = request.headers.authorization;

    if (!header || !header.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token no proporcionado xd');
    }
    try {
      request.user = jwt.verify(
        header.split(' ')[1],
        process.env.JWT_SECRET as string,
      );
      return true;
    } catch (err: any) {
      throw new UnauthorizedException('Token inválido o expirado xd');
    }
  }
}
