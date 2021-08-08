import { ServerResponse } from 'http';
import { ITake } from './ITake';
import { Request } from '../Request';

export class TkFork implements ITake {
    private readonly subPattern: string = '';
    private readonly takes: ITake[];
    /**
     * Constructor
     * @param subPattern optional first part of url
     * @default subPattern empty string ''
     * @param tks  array of ITake to execute
     */
    constructor(subPattern: string, ...tks: ITake[]) {
        this.subPattern = subPattern;
        this.takes = tks;
    }

    act(req: Request, res: ServerResponse): void {
        req.addSubPattern(this.subPattern);
        for (const take of this.takes) {
            take.act(req, res);
        }
    }
}
