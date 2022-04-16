export interface RateLimitType {
    msBeforeNext: number;
    remainingPoints: number;
    consumedPoints: number;
}
