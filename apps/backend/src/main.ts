import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import setupApp from './setupApp';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  setupApp(app)
}

bootstrap();
