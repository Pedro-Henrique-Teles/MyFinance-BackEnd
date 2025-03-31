import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { PostCreateUserDTO, PostLoginUserDTO } from 'src/dto/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('api/v1/myFinance/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() userData: PostCreateUserDTO) {
    return this.userService.createUser(userData);
  }

  @Post('login')
  async loginUser(@Body() userData: PostLoginUserDTO) {
    return this.userService.loginUser(userData);
  }   
}
