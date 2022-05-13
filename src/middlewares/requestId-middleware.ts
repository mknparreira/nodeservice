import { v4 as uuidv4 } from 'uuid';
import { NextFunction, Request, Response } from 'express';

const headerName = 'X-Request-Id';

function RequestId(req: Request, res: Response, next: NextFunction) {
  try {
    const oldValue = req.get(headerName);

    const id = oldValue === undefined ? uuidv4() : oldValue;

    res.set(headerName, id);

    next();
  } catch (err) {
    next(err);
  }
}

export default RequestId;
