import {it, expect, describe} from '@jest/globals';
import { OptParams } from '../../src/opt/OptParams';
import { Request } from '../../src/Request';
import httpMocks from 'node-mocks-http';

describe('class OptParams', () => {
    const req: Request = new Request(httpMocks.createRequest({
        method: 'GET',
        url: '/users/testName/1',
    }));

    it('match of parameters and string', () => {
        expect(new OptParams('/users/:name/:id').route(req)).toEqual(true);
    });

    it('parameters and string do not match (0 params when must be 2)', () => {
        expect(new OptParams('/users').route(req)).toEqual(false);
    });
    
    it('parameters and string do not match (1 params when must be 2)', () => {
        expect(new OptParams('/users/bla').route(req)).toEqual(false);
    });
});