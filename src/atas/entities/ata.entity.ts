import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('atas')
export class Ata {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numero: string;

  @Column()
  orgao: string;

  @Column()
  objeto: string;

  @Column({
    nullable: true,
  })
  fornecedor: string;

  @Column({
    nullable: true,
  })
  categoria: string;

  @Column({
    nullable: true,
  })
  link_oficial: string;
}