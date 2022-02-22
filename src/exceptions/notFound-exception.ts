import DefaultException from "./default-exception";

class NotFoundException extends DefaultException {
    constructor(message? : string) {
        super(404, message ?? 'Not found');
    }
}

export default NotFoundException;