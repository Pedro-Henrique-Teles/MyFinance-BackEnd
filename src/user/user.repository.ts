import { Inject, Injectable } from '@nestjs/common';
import { PostCreateUserDTO } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_PROVIDER')
    private userEntity: typeof User,
  ) {}

  async createConformity(body: PostCreateUserDTO): Promise<User> {
    const result = await this.userEntity.create(body as User);
    return result;
  }
}
