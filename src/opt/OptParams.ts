import { IOpt } from './IOpt';
import {Request} from '../Request';
import { OptUrl } from './OptUrl';

export class OptParams implements IOpt {
    private readonly pattern: string;

    constructor(pattern: string) {
        this.pattern = pattern;
    }

    route(req: Request): boolean {
        this.parse(req);
        return new OptUrl(req.getSubPattern() + this.pattern, req.getParams()).route(req);
    }

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
