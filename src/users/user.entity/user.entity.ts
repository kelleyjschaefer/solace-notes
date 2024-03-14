import { IsDefined, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @IsDefined()
  uuid: number;

  @Column(Unique)
  @MaxLength(25)
  @IsDefined()
  username: string;

  @Column()
  @MinLength(12)
  @IsDefined()
  password: string;
}
