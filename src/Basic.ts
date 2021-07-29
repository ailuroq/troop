import http from 'http';
import { TkFork } from './tk/TkFork';

export class Basic {
    private readonly port: number;
    private readonly frks: TkFork[];

    constructor(port: number, ...forks: TkFork[]) {
        this.port = port;
        this.frks = forks;
    }
    start (): void {
        http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
            for (const fork of this.frks) {
                fork.act(req, res);
            }
        }).listen(this.port, () => console.log(`App listening on the port ${this.port}`));
    }
}
