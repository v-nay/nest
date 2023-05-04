import { match } from 'assert';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { REGEX } from 'src/app.utis';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(REGEX.PASSWORD_RULE, REGEX.PASSWORD_RULE_MESSAGE)
  password: string;

  @IsNotEmpty()
  @Matches(REGEX.PASSWORD_RULE, REGEX.PASSWORD_RULE_MESSAGE)
  confirm: string;
}
