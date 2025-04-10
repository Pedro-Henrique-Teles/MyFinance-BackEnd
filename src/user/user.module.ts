import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/entity/user.entity';
import { UserController } from './user.controller';
import { myFinanceProviders } from 'src';
import { UserRepository } from './user.repository';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository, User, ...myFinanceProviders],
})
export class UserModule {}
