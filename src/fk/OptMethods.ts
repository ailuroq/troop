import { IOpt } from './IOpt';

export class OptMethods implements IOpt {
    private readonly methods: string
    constructor(methods: string) {
        this.methods = methods;
    }

    parse(): Map<string, string[]> {
        const splittedMethods = this.methods.replace(/ /g, '').split(',');
        if (new Set(splittedMethods).size !== splittedMethods.length) throw new Error('Methods have duplicated values');
        return new Map().set('methods', [...new Set(this.methods.replace(/ /g, '').split(','))]);
    }
}