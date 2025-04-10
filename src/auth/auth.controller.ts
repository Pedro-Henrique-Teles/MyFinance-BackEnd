import { Body, Controller, Post } from '@nestjs/common';
import { PostLoginUserDTO } from 'src/dto/user.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
  @Controller('api/v1/myFinance/user/')
  export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('login')
    async loginUser(@Body() userData: PostLoginUserDTO) {
      return this.authService.loginUser(userData);
    }   
}
