import { Field, Float, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'items' })
@ObjectType()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Float)
  quantity: number;

  @Column()
  @Field(() => String, { nullable: true })
  quantityUnits?: string;

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
  })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    name: 'updated_at',
  })
  @Field(() => Date)
  updatedAt: Date;

  // TODO: Add relationships
}
