import http from 'http';
import { Fork } from './Fork';

export class Basic {
    private readonly port: number;
    private readonly frks: Fork[];

    constructor(port: number, ...forks: Fork[]) {
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
