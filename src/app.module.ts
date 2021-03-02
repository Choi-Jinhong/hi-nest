import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], // 라우터와 같은 존재, URL을 가지고오는 ㅇ겨할
  providers: [MoviesService],
})
export class AppModule {}