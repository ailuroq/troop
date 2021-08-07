import {it, expect, describe} from '@jest/globals';
import { OptMethods } from '../../src/opt/OptMethods';
import { Request } from '../../src/Request';
import httpMocks from 'node-mocks-http';

describe('class OptMethods', () => {
    const req: Request = new Request(httpMocks.createRequest({
        method: 'GET',
    }));

    it('methods include the right one, string constructor', () => {
        expect(new OptMethods('GET, POST, PUT').route(req)).toBe(true);
    });

    it('methods include the right one, array constructor', () => {
        expect(new OptMethods(['GET', 'POST', 'PUT']).route(req)).toBe(true);
    });

    it('methods without the right one, string constructor', () => {
        expect(new OptMethods('PATCH, DELETE').route(req)).toBe(false);
    });
    
    it('methods without the right one, array constructor', () => {
        expect(new OptMethods(['PATCH', 'DELETE']).route(req)).toBe(false);
    });
});