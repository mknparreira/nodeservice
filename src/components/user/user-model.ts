import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from 'typeorm';
import { IsEmail, MinLength, IsString, IsDefined, IsNumber } from 'class-validator';
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
      id?: number;

    @Column({ nullable: false })
    @MinLength(5)
    @IsString()
      name?: string;

    @Column({ unique: true, nullable: false })
    @IsEmail()
    @IsDefined({ message: 'email field was not provided' })
      email?: string;

    @Column({ unique: true, nullable: false, type: 'bigint' })
    @IsNumber()
      vat?: number;

    @Column({ nullable: true })
      address?: string;

    @Column({ name: 'birth_date', type: 'date' })
      birthDate?: Date;

    @CreateDateColumn({ name: 'created_at' })
      createdAt?: Date;

    @CreateDateColumn({ name: 'updated_at' })
      updatedAt?: Date;
}
