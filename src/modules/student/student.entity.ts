import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('student')
export class StudentEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  id: number;

  @Column({ length: 32, comment: '昵称' })
  name: string;

  @Column('int')
  age: number;

  @Column('int')
  grade: number;

  @Column('int')
  class_id: number;
}
