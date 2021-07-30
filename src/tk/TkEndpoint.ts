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
        if (req.method) {
            if (req.url === this.parseUrl(map) && this.parseMethods(map).includes(req.method)) {
                this.take.act(req, res);
            }
        }
    }

    private parseUrl<T>(maps: Map<string, T>[]): string {
        for (const map of maps) {
            const value = map.get('url');
            if (Array.isArray(value)) {
                return value[0];
            }
        }
        return '';
    }
    private parseMethods<T>(maps: Map<string, T>[]): string[] {
        for (const map of maps) {
            const value = map.get('methods');
            if (Array.isArray(value)) {
                return value;
            }
        }
        return [];
    }
}
