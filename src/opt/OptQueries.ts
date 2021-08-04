import { IOpt } from './IOpt';
import {Request} from '../Request';
import qs from 'qs';

export class OptQueries implements IOpt {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    route(req: Request): boolean {
        for (const [key, value] of new Map(Object.entries(qs.parse(this.url.split('?')[1])))) {
            req.addQuery(key, String(value));
        }
        return true;
    }
}