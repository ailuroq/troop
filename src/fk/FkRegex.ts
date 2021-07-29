import { IncomingMessage, ServerResponse } from 'http';
import { Options } from './Options';
import { OptParams } from './OptParams';
import { IFork } from './IFork';
import { OptMethods } from './OptMethods';
import { OptUrl } from './OptUrl';

export class FkRegex implements IFork {
    private readonly url: string;
    private readonly options: Options;
    constructor(url: string, methods: string) {
        this.url = url;
        this.options = new Options(
            new OptParams(url),
            new OptMethods(methods),
        );
    }

    route(req: IncomingMessage, _res: ServerResponse): Options {
        const subUrl = this.parseUrl(req.rawHeaders);
        this.options.addOption(new OptUrl(subUrl, this.url).parse());
        return this.options;
    }

    private parseUrl(values: string[]): string {
        for (const value of values) {
            if (value.slice(0, 6) === 'subUrl') return value.slice(7);
        }
        return '';
    }
}