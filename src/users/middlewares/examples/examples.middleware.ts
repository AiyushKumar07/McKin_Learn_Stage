import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExamplesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Example MiddleWare");
    console.log(req.headers.authorization);
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException("No Authorization Token", HttpStatus.FORBIDDEN)
    if (authorization === "njdsjadnsjksd") {
      next();
    } else {
      throw new HttpException("Invalid Authorization Token", HttpStatus.FORBIDDEN)
    }
  }
}
