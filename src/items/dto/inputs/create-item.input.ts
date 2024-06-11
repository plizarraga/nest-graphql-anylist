import { InputType, Field, Float } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsPositive,
} from 'class-validator';

@InputType()
export class CreateItemInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  quantity: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  quantityUnits?: string;
}
