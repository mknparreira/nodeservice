import { NextFunction, Request, Response } from 'express';
import Logger from '../config/logger';
import DefaultException from "../exceptions/default-exception";
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

function ErrorHandlerMiddleware(error : DefaultException, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
        return next(error);
    }
    
    const status  = error.status  || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = error.message || ReasonPhrases.INTERNAL_SERVER_ERROR;

    Logger.error(`StatusCode: ${status} - Message: ${message} - Error: ${JSON.stringify(error.stack, null, 4)}`);

    res.status(status).json({
        message: message,
        success: false
    });    
}

export default ErrorHandlerMiddleware;