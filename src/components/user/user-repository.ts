import { EntityRepository, Repository, UpdateResult } from 'typeorm';
import { injectable } from 'tsyringe';
import { User } from './user-model';
import { UserRequestList } from './user-type';
@injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  constructor() {
    super();
  }

  async getUserByVatNumber(req: UserRequestList) : Promise<User | undefined> {
    return await this.findOne({ where: { vat: req?.vatNumber } });
  }

  async getUsers(): Promise<User[]> {
    return await this.find();
  }

  async createUser(req: User) : Promise<User> {
    return await this.save(req);
  }

  async edit(req: User) : Promise<UpdateResult> {
    return await this.update({ vat: req.vat }, req);
  }
}
