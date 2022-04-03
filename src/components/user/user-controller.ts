import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { delay, inject, injectable } from 'tsyringe';
import validateRequest from '../../decorators/validateRequest-decorator';
import BadRequestException from '../../exceptions/badRequest-exception';
import NotFoundException from '../../exceptions/notFound-exception';
import { User } from './user-model';
import UserService from './user-service';
import { UserRequestList } from './user-type';
@injectable()
export class UserController {
  private userService : UserService;

  constructor(@inject(delay(() => UserService))
        	userService: UserService) {
    this.userService = userService;
  }

  async getUsers(req: Request, res: Response, next: NextFunction) : Promise<Response | void> {
    try {
      const users = await this.userService.getUsers();

      if (!users) throw new NotFoundException();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) : Promise<Response | void> {
    try {
      /* Note: cannot cast from a custom to a primitive without erasing the type first.
			The Unknown type erases the type checking. */
      const params: UserRequestList = req.params as unknown as UserRequestList;
      const user = await this.userService.list(params);

      if (!user) throw new NotFoundException('User not found');
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  @validateRequest(User)
  async create(req: Request, res: Response, next: NextFunction) : Promise<Response | void> {
    try {
      const result = await this.userService.create(req.body);

      return res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  }

  @validateRequest(User)
  async edit(req: Request, res: Response, next: NextFunction) : Promise<Response | void> {
    	try {
    		const result = await this.userService.edit(req.body);

    		if (!result) throw new BadRequestException('Occoured an error try to update user');
    		if (!result.affected) throw new NotFoundException('The user cannot be found');
    		return res.status(StatusCodes.OK).json('The resource successfully updated');
    	} catch (error) {
    		next(error);
    	}
  }
}
