import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { PacientesModule } from './pacientes/pacientes.module.js';
import { EspecialidadesModule } from './especialidades/especialidades.module.js';
import { UsersModule } from './users/users.module.js';
import { EstadoCitasModule } from './estado_citas/estado_citas.module.js';
import { CitasModule } from './citas/citas.module.js';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'clinica',
    }),
    PrismaModule,
    PacientesModule,
    EspecialidadesModule,
    UsersModule,
    EstadoCitasModule,
    CitasModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
