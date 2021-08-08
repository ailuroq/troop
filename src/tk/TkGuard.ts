import { ServerResponse } from 'http';
import { IOpt } from '../opt/IOpt';
import { ITake } from './ITake';
import { Request } from '../Request';

export class TkGuard implements ITake {
    private readonly options: IOpt[];
    private readonly take: ITake;
    /**
     * Constructor
     * @param take ITake interface supposed to be executed
     * @param options Options on which the ITake interface execution depends
     */
    constructor(take: ITake, ...options: IOpt[]) {
        this.take = take;
        this.options = options;
    }
    /**
     * Checking all options to match with request,
     * if all options return true - execute ITake act() method,
     * else skip current ITake
     * @param req Request
     * @param res Response
     */
    act(req: Request, res: ServerResponse): void {
        for (const option of this.options) {
            if (!option.route(req)) return;
        }
        this.take.act(req, res);
    }

}