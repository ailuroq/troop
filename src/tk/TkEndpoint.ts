import { ITake } from './ITake';
import http from 'http';
import { Request } from '../Request';
import { IOpt } from '../opt/IOpt';
import { TkOptions } from './TkOptions';
export class TkEndpoint implements ITake {
    private readonly take: ITake; 
    private readonly options: IOpt[];

    constructor(take: ITake, ...options: IOpt[]) {
        this.take = take;
        this.options = options;
    }

    act(req: Request, res: http.ServerResponse): void {
        new TkOptions(this.options).act(req, res);
        if (req.nodeReq.method) {
            if (req.nodeReq.url === this.parseUrl(req.options()) && this.parseMethods(req.options()).includes(req.nodeReq.method)) {
                this.take.act(req, res);
            }
        }
    }

    private parseUrl<T>(maps: Map<string, T>[]): string {
        for (const map of maps) {
            const value = map.get('url');
            if (typeof value === 'string') {
                return value;
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
