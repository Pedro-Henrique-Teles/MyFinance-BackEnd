import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/entity/user.entity';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { modelProviders } from 'src/idex';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository, User, ...modelProviders],
})
export class UserModule {}
