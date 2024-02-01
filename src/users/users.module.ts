import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExamplesMiddleware } from './middlewares/examples/examples.middleware';
import { AnotherMiddlewareMiddleware } from './middlewares/another-middleware/another-middleware.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ExamplesMiddleware).forRoutes('users') //For All Routes 
    // consumer.apply(ExamplesMiddleware).forRoutes(UsersController) // Can Also pass Whole Controller
    //For Specified Routes 
    consumer.apply(ExamplesMiddleware).forRoutes(
      {
        path: 'users',
        method: RequestMethod.GET,
      },
      {
        path: 'users/:id',
        method: RequestMethod.GET,
      }
    ).apply(AnotherMiddlewareMiddleware).forRoutes(UsersController);

  }
}
