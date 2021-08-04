import { ServerResponse } from 'http';
import { IOpt } from '../opt/IOpt';
import { ITake } from './ITake';
import { Request } from '../Request';

export class TkGuard implements ITake {
    private readonly options: IOpt[];
    private readonly take: ITake;
    
    constructor(take: ITake, ...options: IOpt[]) {
        this.take = take;
        this.options = options;
    }
    act(req: Request, res: ServerResponse): void {
        for (const option of this.options) {
            if (!option.route(req)) return;
        }
        this.take.act(req, res);
    }

}