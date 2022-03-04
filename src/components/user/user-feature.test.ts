import 'jest';

describe('Hello', () => {
    it('should returns false', async () => {
        console.log(process.env.NODE_ENV);
        console.log(process.env.HOST_PORT);
        const result = false;
        expect(result).toBe(false);
    });

    it('should returns true', async () => {
        const result = true;
        expect(result).toBe(true);
    });
});