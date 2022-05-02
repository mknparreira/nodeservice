import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsAplhaWithSpace(validationOptions?: ValidationOptions) {
  return function(object: object, propertyName: string) {
    registerDecorator({
      name: 'IsAplhaWithSpace',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {
        message: 'The $property attribute must be a string',
        ...validationOptions
      },
      validator: {
        validate(value: unknown) {
          const regex = /^[A-Za-zÀ-ÖÙ-öù-ÿĀ-ž ]+$/;

          return typeof value === 'string' && value.trim().length > 0 && regex.test(value);
        }
      }
    });
  };
}
