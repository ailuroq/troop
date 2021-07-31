import { ServerResponse } from 'http';
import { ITake } from './ITake';
import { Request } from '../Request';

export class TkFork implements ITake {
    private readonly takes: ITake[];

    constructor(...tks: ITake[]) {
        this.takes = tks;
    }

    act(req: Request, res: ServerResponse): void {
        for (const take of this.takes) {
            take.act(req, res);
        }
    }
}
