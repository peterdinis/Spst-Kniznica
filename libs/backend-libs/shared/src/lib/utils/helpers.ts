import { HttpStatus, ValidationPipe } from '@nestjs/common';

const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const ISBN_RULE = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
const EMAIL_RULE = /^\S+@\S+\.\S+$/;

export const PASSWORD_RULE_MESSAGE =
  'Password should have 1 upper case, lowcase letter along with a number and special character.';

export const ISBN_RULE_MESSAGE = "Example for isbn 978-0-306-40615-6"
export const ISBN_EMAIL_RULE = "Email must not contain any whitespaces"

const VALIDATION_PIPE = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const REGEX = {
  PASSWORD_RULE,
  ISBN_RULE,
  EMAIL_RULE
};

export const MESSAGES = {
  PASSWORD_RULE_MESSAGE,
  ISBN_RULE_MESSAGE,
  ISBN_EMAIL_RULE
};

export const SETTINGS = {
  VALIDATION_PIPE,
};