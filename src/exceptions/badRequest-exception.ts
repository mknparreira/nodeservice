import DefaultException from "./default-exception";
import {ReasonPhrases, StatusCodes} from 'http-status-codes';

class BadRequestException extends DefaultException {
    constructor(message? : string) {
        super(StatusCodes.BAD_REQUEST, message ?? ReasonPhrases.BAD_REQUEST);
    }
}

export default BadRequestException;