import { Logger, ValidationPipe, INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from "helmet";
import { SocketAdapter } from './socket';

async function setupApp(app: INestApplication) {
app.enableCors({
    methods: '*',
    allowedHeaders: '*',
  });
  
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.use(helmet());
  app.useWebSocketAdapter(new SocketAdapter(app));

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('SPŠT Knižnica')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

export default setupApp