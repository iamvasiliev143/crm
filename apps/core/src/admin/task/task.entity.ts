import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid', { comment: 'Task ID' })
  id: string;

  @Column({ comment: 'Title', length: 128 })
  title: string;

  @Column('text', { comment: 'Description' })
  description: string;

  @Column({ comment: 'Created At', type: 'datetime' })
  createdAt: Date;
}
