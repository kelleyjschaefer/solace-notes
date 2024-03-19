import { IsDefined, Length } from 'class-validator';
import { Topic } from 'src/topics/topic.entity/topic.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  topicId: number;

  @Column()
  @Length(20, 200)
  @IsDefined()
  content: string;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  posted: Date;

  @ManyToOne(() => Topic, (topic) => topic.notes, { nullable: true })
  @JoinColumn({ name: 'topicId' })
  topic: Topic;
}
