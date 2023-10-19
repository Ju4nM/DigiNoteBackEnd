import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { PacientesModule } from './pacientes/pacientes.module';
import { RegistrosClinicosModule } from './registros-clinicos/registros-clinicos.module';
import { DatosModule } from './datos/datos.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ".env",
		}),
		MongooseModule.forRoot(process.env.DATABASE_URI),
		PacientesModule,
		RegistrosClinicosModule,
		DatosModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
