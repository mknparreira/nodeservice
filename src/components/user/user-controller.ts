import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { delay, inject, injectable } from 'tsyringe';
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

    async getUsers(req: Request, res: Response) : Promise<any> {
        const users = await this.userService.getUsers();
        return res.json(users);
    }

    async create(req: Request, res: Response) : Promise<any> {
        
        const t = plainToClass(User, req.body);

        const errors = await validate(t);

        if (errors.length > 0) {
            let errorTexts:any = [];
            for (const errorItem of errors) {
                errorTexts = errorTexts.concat(errorItem.constraints);
            }
            return res.status(400).json(errorTexts);
        }
        
        const result = await this.userService.create(req.body);
        return res.json(result);
    }
}
