import {
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { PostCreateUserDTO } from '../dto/user.dto';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_PROVIDER')
    private userEntity: typeof User,
  ) {}

  async createUser(body: PostCreateUserDTO): Promise<User> {
    const { cpf, password } = body;
    const existingUser = await this.userEntity.findOne({
      where: { cpf },
    });
    if (existingUser) {
      throw new ConflictException('Usuario com este CPF já existe');
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    body.password = hash;
    const result = await this.userEntity.create(body as User);
    return result;
  }
}
