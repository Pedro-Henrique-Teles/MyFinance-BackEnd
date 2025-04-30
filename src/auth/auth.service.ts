import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PostLoginUserDTO } from 'src/dto/user.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/user/user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async loginUser(body: PostLoginUserDTO): Promise<{ accessToken: string }> {
    const { cpf, password } = body;
    const user = await this.userRepository.findUserByCpf(cpf);

    if (!user) {
      throw new UnauthorizedException('Credenciais Inválidas');
    }

    const isMatch = await bcrypt.compare(password, user.dataValues.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciais Inválidas');
    }
    const payload = { cpf: user.cpf, sub: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
