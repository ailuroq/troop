import { IOpt } from './IOpt';
import {Request} from '../Request';
import { OptUrl } from './OptUrl';

export class OptParams implements IOpt {
    private readonly pattern: string;
    /**
     * Constructor
     * @param pattern Pattern to parse for params
     * @example use ':' for determining param pattern, like /users/:city/:id
     */
    constructor(pattern: string) {
        this.pattern = pattern;
    }
    /**
     * @param req Request
     * @returns true if pattern and url match, false if don't
     */
    route(req: Request): boolean {
        this.parse(req);
        return new OptUrl(req.getSubPattern() + this.pattern, req.getParams()).route(req);
    }
    /**
     * parse logic params from request and from pattern
     * @param req Request
     */
    private parse(req: Request): void {
        const splittedPattern = this.pattern.split('/');
        for (let i = 0; i < splittedPattern.length; i++) {
            const splittedPeace = splittedPattern[i].split('');
            const nodeReq = req.nativeReq().url;
            if (splittedPeace[0] === ':' && nodeReq) {
                req.addParam(splittedPattern[i].slice(1), nodeReq.split('/')[i]);
            }
        }
    }
}
