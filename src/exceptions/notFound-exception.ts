import DefaultException from "./default-exception";
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

class NotFoundException extends DefaultException {
    constructor(message? : string) {
        super(StatusCodes.NOT_FOUND, message ?? ReasonPhrases.NOT_FOUND);
    }
}

export default NotFoundException;