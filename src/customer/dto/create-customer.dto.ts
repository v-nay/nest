import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;
}
