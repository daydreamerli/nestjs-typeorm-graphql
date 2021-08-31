import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import console from 'console';
import { AppModule } from './app.module';
require("dotenv").config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enable the globalpipe for validation class pipeline
  app.useGlobalPipes(new ValidationPipe());
  // enable Cors 
  app.enableCors();
  
  await app.listen(process.env.PORT || 8000);
  
}
bootstrap();
process