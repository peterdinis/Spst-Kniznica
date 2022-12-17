import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

const customOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    withCredentials: true,
  },
};

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle("SPST Library API")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("docs", app, document, customOptions);
}