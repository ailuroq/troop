import { ServerResponse } from 'http';
import { ITake } from './ITake';
import { OptUrl } from '../opt/OptUrl';
import { TkFork } from './TkFork';
import { Request } from '../Request';

export class TkWithUrl implements ITake {
    private readonly url: string;
    private readonly fork: TkFork;

    constructor(url: string, fork: TkFork) {
        this.url = url;
        this.fork = fork;
    }


    act(req: Request, _res: ServerResponse): void {
        req.addOption(new OptUrl(this.url).parse(req));
        throw new Error('Method not implemented.');
    }
}