import { IsDefined, MaxLength, MinLength } from 'class-validator';
import { Note } from 'src/notes/note.entity/note.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @IsDefined()
  uuid: number;

  @Column({ unique: true })
  @MaxLength(25)
  @IsDefined()
  username: string;

  @Column()
  @MinLength(12)
  @IsDefined()
  password: string;

  @OneToMany(() => Note, (note) => note.owner)
  notes: Note[];
}
