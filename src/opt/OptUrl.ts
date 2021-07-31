import { IOpt } from './IOpt';

export class OptUrl implements IOpt {
    private readonly url: string;
    constructor(url: string) {
        this.url = url;
    }
    parse<T>(): Map<string, T> {
        return new Map().set('url', this.url);
    }
}