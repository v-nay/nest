import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Customer } from 'src/customer/entities/customer.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 8889,
  username: 'root',
  password: 'root',
  database: 'nest_crud',
  entities: [Customer],
  synchronize: true,
};
