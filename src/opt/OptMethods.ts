import { IOpt } from './IOpt';
import {Request} from '../Request';
import { MethodsFromString } from '../helpers/MethodsFromString';

export class OptMethods implements IOpt {
    private readonly methods: string[] = [];
    /**
     * Constructors
     * @param methods Methods as string supposed to be in the request
     * @example 'GET, POST', or 'GET POST', or 'GET,POST'
     * 
     * @param methods Methods as array supposed to be in the request
     * @example ['GET', 'POST', 'PATCH']
     */
    constructor(methods: string)
    constructor(methods: string[])
    constructor(methods: string | string[]) {
        if (typeof methods === 'string') {
            return new OptMethods(new MethodsFromString(methods).parse());
        }
        else if (Array.isArray(methods) && methods.every(item => typeof item === 'string')) {
            this.methods = methods;
        } else throw new Error('OptMethods construct error');
    }
    /**
     * Checking methods match
     * @param req Request
     * @returns True if given methods includes method from request and false if doesn't
     */
    route(req: Request): boolean {
        const method = req.nativeReq().method;
        if (method) return this.methods.includes(method);
        return false;
    }
}
