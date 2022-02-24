import { injectable } from 'tsyringe';

@injectable()
export default class UserRepository {
    constructor() {}

    public getUsers() {
        return [
            {
                id : 1,
                name : 'Joe Dhoe',
                email : 'joe.dhoe@gmail.com'
            },
            {
                id : 2,
                name: 'Mary Smith',
                email: 'mary.smith@gmail.com'
            }
        ];
    }
}