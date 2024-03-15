import { IsDefined, Length } from 'class-validator';
import { User } from 'src/users/user.entity/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  uuid: number;

  @Column()
  @Length(20, 200)
  @IsDefined()
  content: string;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  posted: Date;

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn({ name: 'uuid' })
  owner: User;
}
