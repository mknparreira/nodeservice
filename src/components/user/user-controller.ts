import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { delay, inject, injectable } from 'tsyringe';
import validateRequest from '../../decorators/validateRequest-decorator';
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

    async getUsers(req: Request, res: Response, next: NextFunction) : Promise<Response|void> {
        try {
            const users = await this.userService.getUsers();
            if(!users) throw new NotFoundException();
            return res.json(users);
        } catch(error) {
            next(error);
        } 
    }

    @validateRequest(User)
    async create(req: Request, res: Response, next: NextFunction) : Promise<Response|void> {
        try {
            const result = await this.userService.create(req.body);
            return res.status(StatusCodes.CREATED).json(result);
        } catch (error) {
            next(error);
        }
    }
}
