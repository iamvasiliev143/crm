import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid', { comment: 'Task ID' })
  id!: string;

  @Column({ length: 128, comment: 'Title' })
  title!: string;

  @Column('text', { comment: 'Description' })
  description!: string;

  @Column({ type: 'datetime', comment: 'Created At' })
  createdAt!: Date;
}
