import { Test, TestingModule } from '@nestjs/testing';
import { AtasController } from './atas.controller';
import { AtasService } from './atas.service';

describe('AtasController', () => {
  let controller: AtasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtasController],
      providers: [AtasService],
    }).compile();

    controller = module.get<AtasController>(AtasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
