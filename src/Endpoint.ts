import { ITake } from './ITake';
import http from 'http';
import { Methods } from './Methods';

export class Endpoint implements ITake {
    private readonly url: string = '';
    private readonly methods: string[] = ['GET'];
    private readonly take: ITake; 
    
    constructor();
    constructor(take: ITake);
    constructor(take: ITake, url: string);
    constructor(take: ITake, url: string, methods: string);
    constructor(take?: ITake, url?: string, methods?: string) {
        if (take && !url && !methods) {
            this.take = take;
        } else if (take && url && !methods) {
            this.take = take;
            this.url = url;
        } else if (take && url && methods) {
            this.url = url;
            this.methods = new Methods(methods).split();
            this.take = take;
        } else throw new Error('Constructor building error!');
    }

    act(req: http.IncomingMessage, res: http.ServerResponse, options: {subUrl: string}): void {
        if (req.method) {
            if (req.url === options.subUrl + this.url && this.methods.includes(req.method)) {
                this.take.act(req, res);
            }
        }
    }
}
