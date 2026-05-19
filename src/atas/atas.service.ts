import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateAtaDto } from './dto/create-ata.dto';

import { Ata } from './entities/ata.entity';

@Injectable()
export class AtasService {
  constructor(
    @InjectRepository(Ata)
    private atasRepository: Repository<Ata>,
  ) {}

  create(createAtaDto: CreateAtaDto) {
    const ata = this.atasRepository.create(createAtaDto);

    return this.atasRepository.save(ata);
  }

  findAll() {
    return this.atasRepository.find();
  }

  findOne(id: string) {
    return this.atasRepository.findOneBy({ id });
  }

  remove(id: string) {
    return this.atasRepository.delete(id);
  }
}