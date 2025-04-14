import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PostLoginUserDTO } from 'src/dto/user.dto';
import { AuthRepository } from './auth.repository';
import { User } from 'src/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private userRepository: UserRepository,
  ) {}

  async loginUser(body: PostLoginUserDTO): Promise<Partial<User>> {
    const { cpf, password } = body;
    const user = await this.userRepository.findUserByCpf(cpf);

    if (!user) {
      throw new UnauthorizedException('Usuário Não Encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.dataValues.password);
    if (!isMatch) {
      throw new UnauthorizedException('Senha Inválida');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: pass, ...rest } = user.toJSON();

    return rest;
  }
}
