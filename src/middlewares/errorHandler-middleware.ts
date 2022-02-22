import { NextFunction, Request, Response } from 'express';
import Logger from '../config/logger';
import DefaultException from "../exceptions/default-exception";

function errorHandlerMiddleware(error : DefaultException, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
        return next(error);
    }
    
    const status  = error.status;
    const message = error.message || 'Internal Server Error';

    Logger.error(`StatusCode: ${status} - Message: ${message} - Error: ${JSON.stringify(error.stack, null, 4)}`);

    res.status(status).json({
        message: message,
        success: false
    });    
}

export default errorHandlerMiddleware;