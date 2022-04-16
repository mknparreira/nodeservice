import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';
@Entity({ name: 'user_rate_limit' })
export class RateLimit extends BaseEntity {
  @PrimaryColumn({ primary: false, type: 'varchar' })
    key?: string;

  @Column({ type: 'int' })
    points?: number;

  @Column({ type: 'bigint' })
    expire?: number;
}
