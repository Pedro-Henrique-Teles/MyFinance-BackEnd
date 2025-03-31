import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT ?? 3000;

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(); // Habilitar CORS

  const config = new DocumentBuilder()
    .setTitle('MyFinance')
    .setDescription('Uma Api para a aplicação MyFinance')
    .setVersion('1.0')
    .addTag('Schema')
    .addBearerAuth() // Adicionar segurança com JWT
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(port);
  console.info(`api listenned on port: ${port}`);
}
bootstrap();
