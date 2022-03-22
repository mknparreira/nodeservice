import { EntityRepository, Repository } from "typeorm";
import { injectable } from 'tsyringe';
import { User } from './user-model';

@injectable()
@EntityRepository(User)

export class UserRepository extends Repository<User> {

    constructor() {
        super();
    }

    async getUsers(): Promise<User[]> {
        return await this.find();
    }
}