import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { PostCreateUserDTO } from 'src/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('api/v1/myFinance/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() userData: PostCreateUserDTO) {
    return this.userService.createUser(userData);
  }
}
