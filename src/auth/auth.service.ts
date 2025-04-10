import { Injectable } from '@nestjs/common';
import { PostLoginUserDTO } from 'src/dto/user.dto';
import { AuthRepository } from './auth.repository';
import { User } from 'src/entity/user.entity';

@Injectable()
export class AuthService {
      constructor(private readonly authRepository: AuthRepository) {}
    async loginUser(body: PostLoginUserDTO): Promise<User> {
        const user = await this.authRepository.loginUser(body);
        return user
      }
}
