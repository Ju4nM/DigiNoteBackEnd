import { Injectable } from '@nestjs/common';
import { CreateRegistrosClinicoDto } from './dto/create-registros-clinico.dto';
import { UpdateRegistrosClinicoDto } from './dto/update-registros-clinico.dto';

@Injectable()
export class RegistrosClinicosService {
  create(createRegistrosClinicoDto: CreateRegistrosClinicoDto) {
    return 'This action adds a new registrosClinico';
  }

  findAll() {
    return `This action returns all registrosClinicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registrosClinico`;
  }

  update(id: number, updateRegistrosClinicoDto: UpdateRegistrosClinicoDto) {
    return `This action updates a #${id} registrosClinico`;
  }

  remove(id: number) {
    return `This action removes a #${id} registrosClinico`;
  }
}
