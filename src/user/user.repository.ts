import { Injectable } from '@nestjs/common';
import { PostCreateUserDTO } from '../dto/user.dto';
import { User } from '../entity/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private userEntity: typeof User,
  ) {}

  async findUserByCpf(cpf: string): Promise<User | null> {
    return this.userEntity.findOne({
      where: {
        cpf,
      },
    });
  }

  async createUser(body: PostCreateUserDTO): Promise<User> {
    return this.userEntity.create(body as User);
  }
}
