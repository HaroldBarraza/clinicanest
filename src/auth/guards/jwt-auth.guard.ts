import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import jwt from 'jsonwebtoken'

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const header = request.headers.authorization

    if (!header || !header.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token no proporcionado xd')
    }

    try {
      request.user = jwt.verify(header.split(' ')[1], process.env.JWT_SECRET as string)
      console.log('SECRET AL VERIFICAR:', JSON.stringify(process.env.JWT_SECRET))
      return true
      
    } catch(err:any) {
        console.log('❌ ERROR JWT:', err.message)
  console.log('❌ TOKEN RECIBIDO:', JSON.stringify(header.split(' ')[1]))
      throw new UnauthorizedException('Token inválido o expirado xd')
      
    }
  }
}