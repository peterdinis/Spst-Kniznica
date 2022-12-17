import { Logger, ValidationPipe, INestApplication } from '@nestjs/common';
import helmet from "helmet";
import { SocketAdapter } from './socket';
import { setupSwagger } from './swagger';

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
  setupSwagger(app);
  
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

export default setupApp