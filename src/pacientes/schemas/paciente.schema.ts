import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PacienteDocument = HydratedDocument<Paciente>;

@Schema({
	timestamps: true,
})
export class Paciente {
	@Prop({ required: true })
	nombre: string;

	@Prop({ required: true, unique: true })
	NSS: string;

	@Prop({ required: true })
	sexo: string;

	@Prop({ unique: true, required: true })
	fechaNacimiento: string;
}

export const PacienteSchema = SchemaFactory.createForClass(Paciente);

