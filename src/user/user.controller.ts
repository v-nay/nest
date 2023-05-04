import {
  Body,
  Controller,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SETTING } from 'src/app.utis';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async doUserRegistration(
    @Body(SETTING.VALIDATION_PIPE)
    userRegister: CreateUserDto,
  ): Promise<User> {
    return await this.userService.create(userRegister);
  }
}
