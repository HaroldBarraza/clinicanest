import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from "@nestjs/common";
import { PrismaExceptionFilter } from "./prisma/prisma-exception.filter.js";
import { LoggingInterceptor } from './common/logging.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  const config = new DocumentBuilder()
    .setTitle('Clinica Salud Integral')
    .setDescription('API de la clinica, migrada a NestJS')
    .setVersion('1.0')
    .addBearerAuth()
    .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted:true,
    transform:true
  }))
  app.useGlobalFilters(new PrismaExceptionFilter())
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
