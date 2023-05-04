import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { Customer } from 'src/customer/entities/customer.entity';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      // host: configService.get('DB_HOST'),
      // port: configService.get('DB_PORT'),
      // username: configService.get('DB_USERNAME'),
      // password: TypeOrmConfig.getPassword(configService),
      // database: configService.get('DB_DATABASE'),
      host: '127.0.0.1',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'nest_crud',
      entities: [Customer],
      synchronize: true,
    };
  }
  static getPassword(configService: ConfigService): string {
    const password = configService.get<string | (() => string)>('DB_PASSWORD');
    if (typeof password === 'function') {
      return password();
    }
    return password;
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
