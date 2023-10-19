import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente, PacienteDocument } from './schemas/paciente.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PacientesService {
	constructor(
		@InjectModel(Paciente.name) private PacienteModel: Model<PacienteDocument>,
	) {}

	async create(createPacienteDto: CreatePacienteDto) {
    let newUser = await this.PacienteModel.create(createPacienteDto);
    return await newUser.save();
	}

	async findAll() {
		return await this.PacienteModel.find();
	}

	async findOne(id: string) {
		return await this.PacienteModel.findById(id);
	}

	async update(id: string, updatePacienteDto: UpdatePacienteDto) {
    return await this.PacienteModel.findByIdAndUpdate({_id: id}, updatePacienteDto)
	}

	async remove(id: string) {
    return await this.PacienteModel.findByIdAndDelete(id)
	}
}
