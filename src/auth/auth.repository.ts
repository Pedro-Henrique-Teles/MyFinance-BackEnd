import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PostLoginUserDTO } from "src/dto/user.dto";
import { User } from "src/entity/user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthRepository {
  constructor(
    @Inject('AUTH_PROVIDER')
    private userEntity: typeof User,
  ) {}


async loginUser(body: PostLoginUserDTO): Promise<User> {
    const { cpf, password } = body;
    const validationUser = await this.userEntity.findOne({
      where: { cpf },
    });
    
    if (!validationUser) {
      throw new UnauthorizedException('Usuário Não Encontrado');
    }
    const isMatch = await bcrypt.compare(password, validationUser.dataValues.password);
    if (!isMatch) {
      throw new UnauthorizedException('Senha Inválida');
    }
    return validationUser
  }
}