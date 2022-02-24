import { injectable } from 'tsyringe';
import UserRepository from './user-repository';

@injectable()
export default class UserService {

    private userRepository: UserRepository;

    constructor(
        userRepository : UserRepository,
    ) {
        this.userRepository = userRepository;
    }

    public getUsers() {
        return this.userRepository.getUsers();
    }
}