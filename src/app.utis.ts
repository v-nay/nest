import { HttpStatus, ValidationPipe } from '@nestjs/common';

const PASSWORD_RULE =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/])(?!.*\s).{8,24}$/;

const PASSWORD_RULE_MESSAGE = { message: 'password weak' };

export const REGEX = {
  PASSWORD_RULE,
  PASSWORD_RULE_MESSAGE,
};

const VALIDATION_PIPE = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const SETTING = {
  VALIDATION_PIPE,
};
