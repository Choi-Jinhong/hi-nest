import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // 라우터와 같은 존재, URL을 가지고오는 ㅇ겨할
  providers: [],
})
export class AppModule {}