import { IOpt } from './IOpt';
import {Request} from '../Request';

export class OptUrl implements IOpt {
    private readonly pattern: string;
    private readonly params: Map<string, string>
    /**
     * Constructor
     * @param pattern Pattern to compare with url
     * @example '/users/:id
     * @param params Params as Map
     * @example new Map().set('id', '1')
     */
    constructor(pattern: string, params: Map<string, string>) {
        this.pattern = pattern;
        this.params = params;
    }
    /**
     * @param req Request
     * @returns True if pattern and url match, false if don't
     */
    route(req: Request): boolean {
        let url = req.nativeReq().url;
        for (const [key, value] of this.params) {
            if (url) url = url.replace(String(value), ':' + key);
        }
        return this.pattern === url;
    }
}
