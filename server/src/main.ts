import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule,{cors:true});

    const config = new DocumentBuilder()
        .setTitle('Новостной сайт ивановской ветлаборатории')
        .setDescription('Документация')
        .setVersion('0.0.1')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(process.env.SERVER_PORT ?? 4000);
}

bootstrap();
