import { ITake } from './ITake';
import http from 'http';
import { IFork } from '../fk/IFork';

export class TkEndpoint implements ITake {
    private readonly take: ITake; 
    private readonly options: IFork;

    constructor(options: IFork, take: ITake) {
        this.take = take;
        this.options = options;
    }

    act(req: http.IncomingMessage, res: http.ServerResponse): void {
        const map = this.options.route(req, res).band();
        console.log(map)
        console.log(req)
        if (req.method) {
            if (req.url === this.parseUrl(map) && this.parseMethods(map).includes(req.method)) {
                this.take.act(req, res);
            }
        }
    }

    private parseUrl(maps: Map<string, Map<string, string> | string[]>[]): string {
        for (const map of maps) {
            const value = map.get('url');
            if (Array.isArray(value)) {
                return value[0];
            }
        }
        return '';
    }
    private parseMethods(maps: Map<string, Map<string, string> | string[]>[]): string[] {
        for (const map of maps) {
            const value = map.get('methods');
            if (Array.isArray(value)) {
                return value;
            }
        }
        return [];
    }
}
