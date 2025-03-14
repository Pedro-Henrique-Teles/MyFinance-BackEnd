import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  Length,
  Matches,
  MinLength,
} from 'class-validator';

export class PostCreateUserDTO {
  @ApiProperty({
    type: String,
    description: 'Digite seu nome',
  })
  @Length(5, 50, { message: 'O nome deve ter mais de 5 letras e menos de 50.' })
  @IsNotEmpty({ message: 'O Nome não pode estar vazio.' })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Digite seu CPF',
  })
  @IsNotEmpty({ message: 'O CPF não pode estar vazio.' })
  @Length(11, 11, { message: 'O CPF deve conter exatamente 11 caracteres.' })
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter apenas números.' })
  @Matches(/^(?!\d{11})(?!00000000000)(?!11111111111)(?!22222222222)$/, {
    message: 'O CPF fornecido é inválido.',
  })
  cpf: string;

  @ApiProperty({
    type: String,
    description: 'Digite um email válido',
  })
  @IsEmail({}, { message: 'Você deve passar um endereço de email válido.' })
  email: string;

  @ApiProperty({
    type: String,
    description: 'Digite sua senha',
  })
  @MinLength(9, { message: 'Sua senha deve ter no mínimo 9 caracteres' })
  password: string;
}
