import { run } from '../src/main'
import * as path from 'path'

describe('Matchers', () => {
    let originalLogMethod: any;
    let outputData: any[] = [];

    beforeAll(() => {
        originalLogMethod = console.log;
        console['log'] = jest.fn(inputs => outputData.push(inputs));
    });

    beforeEach(() => {
        outputData = [];
    });

    afterAll(() => {
        console['log'] = originalLogMethod;
    });

    it('Add matchers', async () => {
        await run();

        expect(outputData).toEqual([
            `##[add-matcher]${path.join(
                __dirname,
                '..',
                '.github/matchers/phpunit.json'
            )}`
        ]);
    });
});
