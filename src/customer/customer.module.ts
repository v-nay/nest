import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';

@Module({
  controllers: [CustomerController],
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerService],
})
export class CustomerModule {}
