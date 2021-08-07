import {it, expect, describe} from '@jest/globals';
import { Request } from '../src/Request';
import httpMocks from 'node-mocks-http';
import { IncomingMessage } from 'http';

describe('class Request', () => {
    const req: IncomingMessage = httpMocks.createRequest({});
    
    it('add params', () => {
        expect(new Request(req).addParam('name', 'exampleName').addParam('id', '1').getParams()).toEqual(new Map().set('name', 'exampleName').set('id', '1'));
    });

    it('add query', () => {
        expect(new Request(req).addQuery('name', 'exampleName').addQuery('id', '2').getQueries()).toEqual(new Map().set('name', 'exampleName').set('id', '2'));
    });

    it('add pattern', () => {
        const request = new Request(req);
        request.addSubPattern('/subPattern');
        expect(request.getSubPattern()).toBe('/subPattern');
    });
});