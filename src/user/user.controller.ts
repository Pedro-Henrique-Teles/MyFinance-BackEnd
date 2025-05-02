import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { PostCreateUserDTO } from 'src/dto/user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('User')
@Controller('api/v1/myFinance/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() userData: PostCreateUserDTO) {
    return this.userService.createUser(userData);
  }

  @Get('public')
  getPublicRoute() {
    return 'Essa é uma rota Publica';
  }

  @Get('private')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  getPrivateRoute() {
    return 'Essa é uma rota Privada';
  }
}
