import {it, expect, describe} from '@jest/globals';
import { OptUrl } from '../../src/opt/OptUrl';
import { Request } from '../../src/Request';
import httpMocks from 'node-mocks-http';

describe('class OptUrl', () => {
    const req: Request = new Request(httpMocks.createRequest({
        method: 'GET',
        url: '/users/testName/1',
    }));

    it('comparing matching pattern and string', () => {
        expect(new OptUrl('/users/:name/:id', new Map().set('name', 'testName').set('id', '1')).route(req)).toBe(true);
    });

    it('comparing mismatched pattern and string', () => {
        expect(new OptUrl('/users/:name/:id', new Map().set('name', 'testName').set('id', '2')).route(req)).toBe(false);
    });
});