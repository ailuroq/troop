import { IOpt } from './IOpt';
import qs from 'qs';

export class OptQueries implements IOpt {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    parse<T>(): Map<string, T> {
        return new Map().set('queries', new Map(Object.entries(qs.parse(this.url.split('?')[1]))));
    }
}