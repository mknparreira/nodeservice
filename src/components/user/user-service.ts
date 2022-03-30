import { injectable } from 'tsyringe';
import { User } from './user-model';
import { UserRepository } from './user-repository';
import { getCustomRepository } from "typeorm";
@injectable()
export default class UserService {
    constructor(private userRepository: UserRepository) {
        this.userRepository = getCustomRepository(UserRepository);  
    }

    async getUsers() : Promise<User[]> {
        return await this.userRepository.getUsers();
    }

    async create(req: User) : Promise<User> {
       return await this.userRepository.createUser(req);
    }
}