import { IOpt } from './IOpt';
import {Request} from '../Request';
import qs from 'qs';

export class OptQueries implements IOpt {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    parse<T>(_req: Request): Map<string, T> {
        return new Map().set('name', 'queries').set('data', new Map(Object.entries(qs.parse(this.url.split('?')[1]))));
    }
}