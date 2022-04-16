import { EntityRepository, Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import { RateLimit } from './rateLimit-model';

@injectable()
@EntityRepository(RateLimit)
export class RateLimitRepository extends Repository<RateLimit> {
  constructor() {
    super();
  }
}
