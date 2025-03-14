import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PostCreateUserDTO } from 'src/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(body: PostCreateUserDTO) {
    return this.userRepository.createConformity(body);
  }
}
