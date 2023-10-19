import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistrosClinicosService } from './registros-clinicos.service';
import { CreateRegistrosClinicoDto } from './dto/create-registros-clinico.dto';
import { UpdateRegistrosClinicoDto } from './dto/update-registros-clinico.dto';

@Controller('registros-clinicos')
export class RegistrosClinicosController {
  constructor(private readonly registrosClinicosService: RegistrosClinicosService) {}

  @Post()
  create(@Body() createRegistrosClinicoDto: CreateRegistrosClinicoDto) {
    return this.registrosClinicosService.create(createRegistrosClinicoDto);
  }

  @Get()
  findAll() {
    return this.registrosClinicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registrosClinicosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistrosClinicoDto: UpdateRegistrosClinicoDto) {
    return this.registrosClinicosService.update(+id, updateRegistrosClinicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrosClinicosService.remove(+id);
  }
}
