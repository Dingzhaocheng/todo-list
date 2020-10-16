import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('student')
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  name: string;

  @Column('int')
  age: number;

  @Column('int')
  grade: number;

}
