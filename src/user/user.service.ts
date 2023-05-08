import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  async create(userRegister: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;
    return await user.save();
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return await User.findOne({ where: { email } });
  }
}
