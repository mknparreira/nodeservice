import DefaultException from './default-exception';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

class TooManyConnections extends DefaultException {
  constructor(message? : string) {
    super(StatusCodes.TOO_MANY_REQUESTS, message ?? ReasonPhrases.TOO_MANY_REQUESTS);
  }
}

export default TooManyConnections;
