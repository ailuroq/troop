import { IOpt } from './IOpt';
import {Request} from '../Request';

export class OptMethods implements IOpt {
    private readonly methods: string
    constructor(methods: string) {
        this.methods = methods;
    }

    parse<T>(_req: Request): Map<string, T> {
        const splittedMethods = this.methods.replace(/ /g, '').split(',');
        if (new Set(splittedMethods).size !== splittedMethods.length) throw new Error('Methods have duplicated values');
        return new Map().set('name', 'methods').set('data', [...new Set(this.methods.replace(/ /g, '').split(','))]);
    }
}