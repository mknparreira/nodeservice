import DefaultException from './default-exception';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
class InternalServerErrorException extends DefaultException {
  constructor(message? : string) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message ?? ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
}

export default InternalServerErrorException;
