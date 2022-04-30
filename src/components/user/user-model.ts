import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from 'typeorm';
import {
  IsEmail, MinLength, IsNumber,
  IsOptional, IsNotEmpty, IsAlpha
} from 'class-validator';
import { IsOnlyDate } from '../../decorators/isOnlyDateValidation-decorator';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column({ nullable: false })
  @IsOptional({ groups: ['edit'] })
  @MinLength(5, { always: true })
  @IsNotEmpty({ always: true, message: 'The name attribute must not be empty' })
    name?: string;

  @Column({ unique: true, nullable: false })
  @IsOptional({ groups: ['edit'] })
  @IsEmail({}, { always: true, message: 'The email attribute must be a email valid' })
  @IsNotEmpty({ always: true, message: 'The email attribute must not be empty' })
    email?: string;

  @Column({ unique: true, nullable: false, type: 'bigint' })
  @IsNumber(undefined, { always: true })
  @IsNotEmpty({ always: true, message: 'The VAT attribute was not provided' })
  readonly vat?: number;

  @Column({ nullable: true })
    address?: string;

  @IsOptional({ groups: ['edit'] })
  @IsNotEmpty({ always: true, message: 'The birthDate attribute was not provided' })
  @IsOnlyDate({
    always: true,
    message: 'The birthDate attribute must be a Date instance'
  })
  @Column({ name: 'birth_date', type: 'date' })
    birthDate?: Date;

  @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

  @CreateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
}
