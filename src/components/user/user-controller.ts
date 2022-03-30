import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { delay, inject, injectable } from 'tsyringe';
import BadRequestException from '../../exceptions/badRequest-exception';
import NotFoundException from '../../exceptions/notFound-exception';
import { User } from './user-model';
import UserService from './user-service';

@injectable()
export class UserController {

    private userService : UserService;
    
    constructor(
        @inject(delay(() => UserService))
        userService: UserService
    ) {
        this.userService = userService;
    }

    async getUsers(req: Request, res: Response, next: NextFunction) : Promise<any> {
        try {
            const users = await this.userService.getUsers();
            if(!users) throw new NotFoundException();
            return res.json(users);
        } catch(error) {
            next(error);
        } 
    }

    async create(req: Request, res: Response, next: NextFunction) : Promise<any> {
        try {
            const t = plainToClass(User, req.body);
            const errors = await validate(t);

            if (errors.length > 0) {
                let errorTexts:any = [];
                for (const errorItem of errors) {
                    errorTexts = errorTexts.concat(errorItem.constraints);
                }
                throw new BadRequestException(errorTexts);
            }
        
            const result = await this.userService.create(req.body);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
}
