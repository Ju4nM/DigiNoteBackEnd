import { Test, TestingModule } from '@nestjs/testing';
import { RegistrosClinicosService } from './registros-clinicos.service';

describe('RegistrosClinicosService', () => {
  let service: RegistrosClinicosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrosClinicosService],
    }).compile();

    service = module.get<RegistrosClinicosService>(RegistrosClinicosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
