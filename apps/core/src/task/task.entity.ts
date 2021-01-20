import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

// import { Trader } from '../trader/trader.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ comment: 'Title', length: 128 })
  title: string;

  @Column('text', { comment: 'Description' })
  description: string;

  @Column({ comment: 'Created At', type: 'datetime' })
  createdAt: Date;

  // @ManyToOne(type => Trader, trader => trader.tasks)
  // trader: Trader;
}
