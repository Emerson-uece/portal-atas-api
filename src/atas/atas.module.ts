import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AtasService } from './atas.service';
import { AtasController } from './atas.controller';

import { Ata } from './entities/ata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ata])],

  controllers: [AtasController],

  providers: [AtasService],
})
export class AtasModule {}