import { IOpt } from './IOpt';

export class OptMethods implements IOpt {
    private readonly methods: string
    constructor(methods: string) {
        this.methods = methods;
    }

    parse<T>(): Map<string, T> {
        const splittedMethods = this.methods.replace(/ /g, '').split(',');
        if (new Set(splittedMethods).size !== splittedMethods.length) throw new Error('Methods have duplicated values');
        return new Map().set('methods', [...new Set(this.methods.replace(/ /g, '').split(','))]);
    }
}