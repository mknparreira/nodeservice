import DefaultException from "./default-exception";

class BadRequestException extends DefaultException {
    constructor(message? : string) {
        super(400, message ?? 'Bad Request');
    }
}

export default BadRequestException;