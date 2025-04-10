import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { UserRepository } from 'src/user/user.repository';
import { User } from 'src/entity/user.entity';
import { myFinanceProviders } from 'src';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    UserRepository,
    User,
    ...myFinanceProviders,
  ],
})
export class AuthModule {}
