import { NextFunction, Request, Response } from 'express';
import { delay, inject, injectable } from 'tsyringe';
import AuthService from './auth-service';
import NotFoundException from '../../exceptions/notFound-exception';

@injectable()
export class AuthController {
  private readonly authService : AuthService;

  constructor(@inject(delay(() => AuthService)) authService: AuthService) {
    this.authService = authService;
  }

  generateToken(req: Request, res: Response, next: NextFunction) : Response | undefined {
    try {
      const token = this.authService.generateAuthToken();

      if (!token) throw new NotFoundException();
      return res.json(token);
    } catch (error) {
      next(error);
    }
  }
}
