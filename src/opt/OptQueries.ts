import { IOpt } from './IOpt';
import {Request} from '../Request';
import qs from 'qs';

export class OptQueries implements IOpt {
    private readonly url: string;
    /**
     * Constructor
     * @param url Url to parse for queries
     * @example /users?name=exampleName&city=exampleCity
     */
    constructor(url: string) {
        this.url = url;
    }
    /**
     * Add query values to request
     * @param req Request
     * @returns true
     */
    route(req: Request): boolean {
        for (const [key, value] of new Map(Object.entries(qs.parse(this.url.split('?')[1])))) {
            req.addQuery(key, String(value));
        }
        return true;
    }
}