import {
  IsEmail,
  IsNotEmpty,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'user', timestamps: true })
export class User extends Model<User> {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  name: string;

  @Column({
    type: DataType.STRING(11),
    allowNull: false,
  })
  @IsNotEmpty({ message: 'O CPF não pode estar vazio.' })
  @Length(11, 11, { message: 'O CPF deve conter exatamente 11 caracteres.' })
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter apenas números.' })
  @Matches(/^(?!\d{11})(?!00000000000)(?!11111111111)(?!22222222222)$/, {
    message: 'O CPF fornecido é inválido.',
  })
  cnpj: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @IsEmail({}, { message: 'Você deve passar um endereço de email válido.' })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @MinLength(9, { message: 'Sua senha deve ter no mínimo 9 caracteres' })
  password: string;
}
