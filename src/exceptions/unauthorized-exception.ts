import DefaultException from './default-exception';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
class UnauthorizedException extends DefaultException {
  constructor(message? : string) {
    super(StatusCodes.UNAUTHORIZED, message ?? ReasonPhrases.UNAUTHORIZED);
  }
}

export default UnauthorizedException;
