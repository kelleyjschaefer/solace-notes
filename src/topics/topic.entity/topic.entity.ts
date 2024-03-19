import { IsDefined, MaxLength } from 'class-validator';
import { Note } from 'src/notes/note.entity/note.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  topicId: number;

  @Column({ unique: true })
  @MaxLength(25)
  @IsDefined()
  topicname: string;

  @OneToMany(() => Note, (note) => note.topic)
  notes: Note[];
}
