import { IOpt } from './IOpt';

export class OptUrl implements IOpt {
    private readonly subUrl: string;
    private readonly url: string;
    constructor(subUrl: string, url: string) {
        this.subUrl = subUrl;
        this.url = url;
    }

    parse(): Map<string, Map<string, string> | string[]> {
        console.log(this)
        return new Map().set('url', [this.subUrl + this.url]);
    }

}