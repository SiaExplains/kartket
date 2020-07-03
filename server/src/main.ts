import { NestFactory } from '@nestjs/core';
import { TaskModule } from './modules/task/task.module';
import connect from './helpers/connect';
import configuration from './helpers/configuration';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(configuration().port);
}
bootstrap();
