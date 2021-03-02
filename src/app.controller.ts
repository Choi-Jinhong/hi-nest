import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hello") // 데코레이션, 함수와 떨어질 경우 오류를 발생
  sayHello(): string {
    return 'Hello Everyone';
  }
}
