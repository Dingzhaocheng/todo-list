import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('class')
export class classEntity {
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  class_id: number;

  @Column({ length: 32, comment: '班级名称' })
  class_name: string;

  @Column('int')
  stu_count: number;
}
