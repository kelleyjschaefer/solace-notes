import { IsDefined, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  owner: number;

  @Column()
  @Length(20, 200)
  @IsDefined()
  content: string;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  posted: Date;
}
