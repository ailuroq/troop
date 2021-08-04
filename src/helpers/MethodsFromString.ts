export class MethodsFromString {
    private readonly methods: string;
    constructor(methods: string) {
        this.methods = methods;
    }
    parse(): string [] {
        const splittedMethods = this.methods.replace(/ /g, '').split(',');
        if (new Set(splittedMethods).size !== splittedMethods.length) throw new Error('Methods have duplicated values');
        return [...new Set(this.methods.replace(/ /g, '').split(','))];
    }
}