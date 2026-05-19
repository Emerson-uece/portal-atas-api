import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';

import { AtasService } from './atas.service';

import { CreateAtaDto } from './dto/create-ata.dto';

@Controller('atas')
export class AtasController {
  constructor(private readonly atasService: AtasService) {}

  @Post()
  create(@Body() createAtaDto: CreateAtaDto) {
    return this.atasService.create(createAtaDto);
  }

  @Get()
  findAll() {
    return this.atasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atasService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atasService.remove(id);
  }
}