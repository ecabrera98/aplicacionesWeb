import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static('publico')); //servidor cookies
  app.use(cookieParser('Me agradan los poliperros'))//secreto cookies
  app.use(//session
      session({
        name: 'server-session-id',
        secret: 'No será de tomar un traguito',
        resave: true,
        saveUnitialized: true,
        cookie: {secure: false},
        store: new FileStore(),
      })
  )

  await app.listen(3001);//puerto
}
bootstrap();
