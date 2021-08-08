export class MethodsFromString {
    private readonly methods: string;
    constructor(methods: string) {
        this.methods = methods;
    }
    parse(): string [] {
        const splittedMethods = this.methods.split(/[\s,]+/);
        if (new Set(splittedMethods).size !== splittedMethods.length) throw new Error('Methods have duplicated values');
        return [...new Set(splittedMethods)];
    }
}

// 'GET POST PATCH'
// 'GET, POST, PATCH'
// 'GET,POST,PATCH'
// 'GET, POST,PATCH'
// result ['GET', 'POST', 'PATCH']