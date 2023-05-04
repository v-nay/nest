import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';

@Module({
  imports: [CustomerModule, TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
  controllers: [],
  providers: [],
})
export class AppModule {}
