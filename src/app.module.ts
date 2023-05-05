import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { dataSourceOption } from 'db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forRoot(dataSourceOption),
    CustomerModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
