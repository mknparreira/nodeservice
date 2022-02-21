import {format, addColors, createLogger, transports} from 'winston';
const {combine, timestamp, colorize, printf} = format;

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
}
addColors(colors);

const transp = {
    console: new transports.Console(),
    fileError: new transports.File({ dirname: 'logs', filename: 'errors.log', level: 'error', format: format.json() }),
    fileWarning: new transports.File({ dirname: 'logs', filename: 'warnings.log', level: 'warn', format: format.json() }),
};

const formats = combine(
    colorize({all: true}),
    format.splat(),
    format.metadata(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    printf(({timestamp, level, message, metadata}) => {
        return `[${timestamp}] ${level}: ${message}. ${Object.keys(metadata).length !== 0 ? JSON.stringify(metadata) : ''}`;
    })
);

const Logger = createLogger({
    levels : levels,
    format : formats,
    transports : [
        transp.console, transp.fileError, transp.fileWarning
    ]
});

export default Logger;