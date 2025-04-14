import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PostCreateUserDTO } from 'src/dto/user.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(body: PostCreateUserDTO): Promise<Partial<User>> {
    const { cpf, password } = body;
    const existingUser = await this.userRepository.findUserByCpf(cpf);

    if (existingUser) {
      throw new ConflictException('Este usuario já existe');
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    body.password = hash;
    const result = await this.userRepository.createUser(body);
    const plainResult = result.toJSON();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password: pass, ...rest} = plainResult
    return rest
  }
}
