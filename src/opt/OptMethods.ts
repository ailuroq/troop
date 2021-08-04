import { IOpt } from './IOpt';
import {Request} from '../Request';
import { MethodsFromString } from '../helpers/MethodsFromString';

export class OptMethods implements IOpt {
    private readonly methods: string[] = [];

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
    route(req: Request): boolean {
        const method = req.nativeReq().method;
        if (method) return this.methods.includes(method);
        return false;
    }
}
