import { IOpt } from './IOpt';
import {Request} from '../Request';

export class OptUrl implements IOpt {
    private readonly pattern: string;
    private readonly params: Map<string, string>

    constructor(pattern: string, params: Map<string, string>) {
        this.pattern = pattern;
        this.params = params;
    }
    route(req: Request): boolean {
        let url = req.nativeReq().url;
        for (const [key, value] of this.params) {
            if (url) url = url.replace(String(value), ':' + key);
        }
        return this.pattern === url;
    }
}
