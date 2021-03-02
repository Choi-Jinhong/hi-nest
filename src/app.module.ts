import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // 라우터와 같은 존재, URL을 가지고오는 ㅇ겨할
  providers: [AppService],
})
export class AppModule {}
