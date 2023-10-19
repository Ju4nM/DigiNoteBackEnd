import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistrosClinicoDto } from './create-registros-clinico.dto';

export class UpdateRegistrosClinicoDto extends PartialType(CreateRegistrosClinicoDto) {}
