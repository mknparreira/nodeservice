interface RateLimitType {
    msBeforeNext: number;
    remainingPoints: number;
    consumedPoints: number;
}

interface RateLimitHeaders {
    'Retry-After': number,
    'X-RateLimit-Limit' : number,
    'X-RateLimit-Remaining' : number,
    'X-RateLimit-Reset' : object
}

interface RateLimitOptions {
    storeClient : object,
    dbName?: string,
    tableName?: string,
    tableCreated?: boolean,
    storeType?: string,
    points : number,
    duration : number,
    blockDuration?: number
}

export { RateLimitType, RateLimitOptions, RateLimitHeaders };
