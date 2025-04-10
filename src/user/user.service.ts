import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PostCreateUserDTO, PostLoginUserDTO } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(body: PostCreateUserDTO): Promise<Partial<User>> {
    const user = await this.userRepository.createUser(body);
    const { password, ...userWithoutPassword } = user.toJSON();
    return userWithoutPassword;
  }

  async loginUser(body: PostLoginUserDTO): Promise<User> {
    const user = await this.userRepository.loginUser(body);
    return user
  }
}
