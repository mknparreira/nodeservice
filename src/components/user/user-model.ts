import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from 'typeorm';
import {
  IsEmail, MinLength, IsNumber,
  IsOptional, IsNotEmpty
} from 'class-validator';
import { IsOnlyDate } from '../../decorators/isOnlyDateValidation-decorator';
import { IsAplhaWithSpace } from '../../decorators/isAlphaWithSpaceValidation-decorator';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column({ nullable: false })
  @MinLength(5, { always: true })
  @IsNotEmpty({ always: true, message: 'The name attribute must not be empty' })
  @IsAplhaWithSpace({ always: true })
  @IsOptional({ groups: ['edit'] })
    name?: string;

  @Column({ unique: true, nullable: false })
  @IsEmail({}, { always: true, message: 'The email attribute must be a email valid' })
  @IsNotEmpty({ always: true, message: 'The email attribute must not be empty' })
  @IsOptional({ groups: ['edit'] })
    email?: string;

  @Column({ unique: true, nullable: false, type: 'bigint' })
  @IsNumber(undefined, { always: true })
  @IsNotEmpty({ always: true, message: 'The VAT attribute was not provided' })
  readonly vat?: number;

  @Column({ nullable: true })
    address?: string;

  @Column({ name: 'birth_date', type: 'date' })
  @IsNotEmpty({ always: true, message: 'The birthDate attribute was not provided' })
  @IsOnlyDate({
    always: true,
    message: 'The birthDate attribute must be a Date instance'
  })
  @IsOptional({ groups: ['edit'] })
    birthDate?: Date;

  @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

  @CreateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
}
