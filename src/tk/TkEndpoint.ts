import http from 'http';
import { ITake } from './ITake';
import { Request } from '../Request';
import { TkOptions } from './TkOptions';
import { OptUrl } from '../opt/OptUrl';
import { OptMethods } from '../opt/OptMethods';
import { OptParams } from '../opt/OptParams';
import { OptQueries } from '../opt/OptQueries';

export class TkEndpoint implements ITake {
    private readonly take: ITake;
    private readonly url: string;
    private readonly methods: string;
    private readonly options: TkOptions;

    constructor(url: string, methods: string, take: ITake) {
        this.url = url;
        this.methods = methods;
        this.take = take;
        this.options = new TkOptions(
            new OptUrl(this.url),
            new OptParams(this.url),
            new OptQueries(this.url),
            new OptMethods(this.methods),
        );
    }

    act(req: Request, res: http.ServerResponse): void {
        this.options.act(req, res);
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
