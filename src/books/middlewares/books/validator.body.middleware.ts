/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidatorBody implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.headers.authorization
      ? next()
      : res.status(401).json({ message: 'Acesso não autorizado' });
  }
}
