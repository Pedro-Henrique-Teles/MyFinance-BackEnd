import { MiddlewareConsumer, Module } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { modelProviders } from '.';

@Module({
  imports: [
    ConfigModule.forRoot(), // Habilita o uso de variáveis do .env
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [...modelProviders],
      autoLoadModels: true,
      synchronize: process.env.NODE_ENV !== 'production', // Em produção, use migrations!
      logging: false,
      dialectOptions: {
        connectTimeout: 60000,
      },
      hooks: {
        afterConnect: () => {
          console.log('Conexão com o banco de dados estabelecida com sucesso!');
        },
        afterDisconnect: () => {
          console.log('Conexão com o banco de dados foi encerrada.');
        },
      },
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
