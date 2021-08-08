export class MethodsFromString {
    private readonly methods: string;
    /**
     * Constructor
     * @param methods Methods to parse
     * @example 'GET, POST', or 'GET POST', or 'GET,POST'
     */
    constructor(methods: string) {
        this.methods = methods;
    }
    /**
     * Parsing encapsulated methods
     * @returns Array of unique methods
     * @throws Error if non-unique methods are given
     */
    parse(): string [] {
        const splittedMethods = this.methods.split(/[\s,]+/);
        if (new Set(splittedMethods).size !== splittedMethods.length) throw new Error('Methods have duplicated values');
        return [...new Set(splittedMethods)];
    }
}
