import { ITake } from './ITake';
import http from 'http';

export class TkFork implements ITake {
    private readonly subUrl: string;
    private readonly endpoints: ITake[];

    constructor(url: string, ...endpts: ITake[]) {
        this.subUrl = url;
        this.endpoints = endpts;
    }
    
    act(req: http.IncomingMessage, res: http.ServerResponse): void {
        req.rawHeaders.push(`subUrl ${this.subUrl}`);
        for (const endpoint of this.endpoints) {
            endpoint.act(req, res);
        }
    }
}

