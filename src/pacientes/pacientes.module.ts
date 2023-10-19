import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Paciente, PacienteSchema } from './schemas/paciente.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Paciente.name,
				schema: PacienteSchema,
			},
		]),
	],
  controllers: [PacientesController],
  providers: [PacientesService],
})
export class PacientesModule {}
