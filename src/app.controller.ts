import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/hello") // 데코레이션, 아래 함수와 떨어지면 안됨
  sayHello(): string {
    return 'Hello Everyone';
  }
}
