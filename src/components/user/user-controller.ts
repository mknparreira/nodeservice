import { Request, Response } from 'express';
import { injectable } from 'tsyringe';
import UserService from './user-service';

@injectable()
export class UserController {

    userService : UserService;
    
    constructor(
        userService: UserService
    ) {
        this.userService = userService;
    }

    getUsers(req: Request, res: Response) {
        const users = this.userService.getUsers();
        return res.json(users);
    }
}
