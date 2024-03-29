import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import BadRequestException from '../exceptions/badRequest-exception';

const validateRequest = (entity:ClassConstructor<object>, group:object) => {
  return (target:object, key:string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function(req: Request, res: Response, next: NextFunction) {
      try {
        const rules = plainToInstance(entity, req.body);
        const errors = await validate(rules, group);

        if (errors.length > 0) {
          let errorTexts:any = [];

          for (const errorItem of errors) {
            errorTexts = errorTexts.concat(errorItem.constraints);
          }
          throw new BadRequestException(errorTexts);
        }

        return originalMethod.bind(this)(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  };
};

export default validateRequest;
