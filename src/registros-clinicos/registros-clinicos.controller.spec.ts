import { Test, TestingModule } from '@nestjs/testing';
import { RegistrosClinicosController } from './registros-clinicos.controller';
import { RegistrosClinicosService } from './registros-clinicos.service';

describe('RegistrosClinicosController', () => {
  let controller: RegistrosClinicosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrosClinicosController],
      providers: [RegistrosClinicosService],
    }).compile();

    controller = module.get<RegistrosClinicosController>(RegistrosClinicosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
