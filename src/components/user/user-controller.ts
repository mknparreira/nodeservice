import { Request, Response } from 'express';
import { delay, inject, injectable } from 'tsyringe';
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
}
