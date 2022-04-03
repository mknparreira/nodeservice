import { injectable } from 'tsyringe';
import { User } from './user-model';
import { UserRepository } from './user-repository';
import { getCustomRepository, UpdateResult } from 'typeorm';
import { UserRequestList } from './user-type';
@injectable()
export default class UserService {
  constructor(private userRepository: UserRepository) {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async list(req: UserRequestList) : Promise<User | undefined> {
    return await this.userRepository.getUserByVatNumber(req);
  }

  async getUsers() : Promise<User[]> {
    return await this.userRepository.getUsers();
  }

  async create(req: User) : Promise<User> {
    return await this.userRepository.createUser(req);
  }

  async edit(req: User) : Promise<UpdateResult> {
    return await this.userRepository.edit(req);
  }
}
