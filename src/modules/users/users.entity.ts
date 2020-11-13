import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  Index,
} from 'typeorm';
import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from 'class-validator';
@Entity('admin_user')
export class UsersEntity {
  @PrimaryGeneratedColumn({
    comment: 'user_id',
    name: 'user_id',
    type: 'smallint',
  })
  userId: number;

  @Column({
    name: 'account_name',
    comment: '账户名称',
    type: 'varchar',
    length: 24,
    nullable: false,
  })
  accountName: string;

  @Column({
    name: 'real_name',
    comment: '真实姓名',
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  realName: string;

  @Column({
    name: 'passwd',
    comment: '密码',
    type: 'char',
    length: 32,
    nullable: false,
  })
  passwd: string;

  @Column({
    name: 'passwd_salt',
    comment: '盐',
    type: 'char',
    length: 6,
    nullable: false,
  })
  passwdSalt: string;

  @Index('idx_m')
  @Column({
    name: 'mobile',
    comment: '手机号',
    type: 'varchar',
    length: 20,
    default: '0',
    nullable: false,
  })
  mobile: string;

  @Column({
    name: 'role',
    comment:
      '用户角色：0-超级管理员|1-管理员|2-开发&测试&运营|3-普通用户（只能查看）',
    default: '3',
    nullable: false,
    type: 'tinyint',
  })
  role: number;

  @Column({
    name: 'user_status',
    comment: '状态：0-失效|1-有效|2-删除',
    default: '0',
    nullable: false,
    type: 'tinyint',
  })
  userStatus: number;

  @Column({
    name: 'create_by',
    comment: '创建人',
    nullable: false,
    type: 'smallint',
    default: 0,
  })
  createBy: number;

  @Column({
    name: 'create_time',
    comment: '创建时间',
    nullable: false,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: number;

  @Column({ name: 'update_by', comment: '修改人', nullable: false, default: 0 })
  updateBy: number;

  @Column({
    name: 'update_time',
    comment: '修改时间',
    nullable: false,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: number;
}
