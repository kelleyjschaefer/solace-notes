import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  owner: number;

  @Column()
  content: string;

  @Column()
  posted: Date;
}
