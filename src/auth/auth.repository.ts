import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/entity/user.entity';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(User)
    private userEntity: typeof User,
  ) {}
}
