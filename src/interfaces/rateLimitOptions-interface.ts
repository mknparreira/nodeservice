export interface RateLimitOptions {
    storeClient : object,
    dbName?: string,
    tableName?: string,
    tableCreated?: boolean,
    storeType?: string,
    points : number,
    duration : number,
    blockDuration?: number
}
