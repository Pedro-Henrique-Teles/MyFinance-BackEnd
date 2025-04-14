import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { User } from 'src/entity/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), UserModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
