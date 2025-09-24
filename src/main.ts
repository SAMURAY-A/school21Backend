import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS yoqish
  app.enableCors({
    origin: '*', // yoki ['http://localhost:3000', 'https://seningsayting.uz']
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3010);
}
bootstrap();
