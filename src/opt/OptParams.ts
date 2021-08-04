import { IOpt } from './IOpt';
import {Request} from '../Request';

export class OptParams implements IOpt {
    private readonly pattern: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private readonly map: Map<string, any>;

    constructor(pattern: string) {
        this.pattern = pattern;
        this.map = new Map();
    }
    parse<T>(_req: Request): Map<string, T> {
        const splittedPattern = this.pattern.split('/');
        for (let i = 0; i < splittedPattern.length; i++) {
            const splittedPeace = splittedPattern[i].split('');
            if (splittedPeace[0] === ':' && _req.nodeReq.url) {
                this.map.set(splittedPattern[i].slice(1), _req.nodeReq.url.split('/')[i]);
            }
        }
        return new Map().set('name', 'params').set('data', this.map);
    }
} 
