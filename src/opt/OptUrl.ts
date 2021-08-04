import { IOpt } from './IOpt';
import {Request} from '../Request';

export class OptUrl implements IOpt {
    private readonly url: string;
    constructor(url: string) {
        this.url = url;
    }
    parse<T>(_req: Request): Map<string, T> {
        return new Map().set('name', 'url').set('data', this.url);
    }
}