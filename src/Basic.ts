import http from 'http';
import { Request } from './Request';
import { ITake } from './tk/ITake';

export class Basic {
    private readonly port: number;
    private readonly frks: ITake[];
    /**
     * Constructor
     * @param port port for the application
     * @param takes takes for the loop
     */
    constructor(port: number, ...takes: ITake[]) {
        this.port = port;
        this.frks = takes;
    }
    /**
     * Сreating server for processing requests.
     * When request comes to the server request goes through all ITake interface instances to generate response
     */
    start (): void {
        http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
            for (const fork of this.frks) {
                fork.act(new Request(req), res);
            }
        // eslint-disable-next-line no-undef
        }).listen(this.port, () => console.log(`App listening on the port ${this.port}`));
    }
}
