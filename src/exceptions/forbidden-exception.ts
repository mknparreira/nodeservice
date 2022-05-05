import DefaultException from './default-exception';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
class ForbiddenException extends DefaultException {
  constructor(message? : string) {
    super(StatusCodes.FORBIDDEN, message ?? ReasonPhrases.FORBIDDEN);
  }
}

export default ForbiddenException;
