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

    private parseUrl(value: string[]): string {
        value.map(a => {
            if (a.slice(0, 3) === 'url') return a.slice(5);
        });
        return '';
    }
}