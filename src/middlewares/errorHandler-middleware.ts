import { NextFunction, Request, Response } from 'express';
import Logger from '../config/logger';
import DefaultException from '../exceptions/default-exception';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

function ErrorHandlerMiddleware(error : DefaultException, req: Request,
  res: Response, next: NextFunction) {
  try {
    if (res.headersSent) return next(error);

    const status = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = error.message || ReasonPhrases.INTERNAL_SERVER_ERROR;

    Logger.error(`HTTP Status Code: ${status} - Message: ${message} - 
        Error: ${JSON.stringify(error.stack, null, 4)}`);

    const childLogger = Logger.child({ feature: 'x-Request-Id' });

    childLogger.error(`X-Request-Id: ${res.get('X-Request-Id') ?? null}`);

    res.status(status).json({
      message: message,
      success: false
    });
  } catch (err) {
    next(err);
  }
}

export default ErrorHandlerMiddleware;
