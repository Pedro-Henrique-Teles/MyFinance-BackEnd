import { Body, Controller, Post } from '@nestjs/common';
import { PostLoginUserDTO } from 'src/dto/user.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/entity/user.entity';

@ApiTags('Auth')
@Controller('api/v1/myFinance/user/')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async login(@Body() body: PostLoginUserDTO): Promise<Partial<User>> {
    return this.authService.loginUser(body);
  }
}
