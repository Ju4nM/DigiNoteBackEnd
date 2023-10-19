import { Module } from '@nestjs/common';
import { RegistrosClinicosService } from './registros-clinicos.service';
import { RegistrosClinicosController } from './registros-clinicos.controller';

@Module({
  controllers: [RegistrosClinicosController],
  providers: [RegistrosClinicosService]
})
export class RegistrosClinicosModule {}
