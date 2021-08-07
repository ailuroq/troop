import {it, expect, describe} from '@jest/globals';
import { OptQueries } from '../../src/opt/OptQueries';
import { Request } from '../../src/Request';
import httpMocks from 'node-mocks-http';

describe('class OptQueries', () => {
    it('correct queries from url', () => {
        const req: Request = new Request(httpMocks.createRequest({
            url: '/users/testName/1',
        }));
        new OptQueries('/users?name=testName&id=1').route(req);
        expect(req.getQueries()).toEqual(new Map().set('name', 'testName').set('id', '1'));
    });

    it('correct queries from url', () => {
        const req: Request = new Request(httpMocks.createRequest({
            url: '/users',
        }));
        new OptQueries('/users?').route(req);
        expect(req.getQueries()).toEqual(new Map());
    });
});