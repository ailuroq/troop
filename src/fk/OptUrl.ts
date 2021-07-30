import { IOpt } from './IOpt';

export class OptUrl implements IOpt {
    private readonly subUrl: string;
    private readonly url: string;
    constructor(subUrl: string, url: string) {
        this.subUrl = subUrl;
        this.url = url;
    }

    parse<T>(): Map<string, T> {
        return new Map().set('url', [this.subUrl + this.url]);
    }

}