import { ServerResponse } from 'http';-
import { method } from 'lodash';
import { Request } from '../Request';
import { ITake } from './ITake';
import { TkOptions } from './TkOptions';

export class TkGuard implements ITake {
    private readonly options: TkOptions;
    private readonly take: ITake;

    constructor(options: TkOptions, take: ITake) {
        this.options = options;
        this.take = take;
    }
    act(req: Request, res: ServerResponse): void {
        this.options.act(req, res);
        const methods = req.options().get('methods');
        let url = req.nodeReq.url;
        if (req.nodeReq.method && Array.isArray(methods)) {
            for (const [key, value] of req.options().get('params').entries()) {
                if (key === 'url') {
                    console.log(key, value)
                    if (url) url = url.replace(String(value), ':' + key);
                }
            }
            if (url === req.options().get('url') && methods.includes(req.nodeReq.method)) {
                this.take.act(req, res);
            }
        }
    }
}

// /user/list/:id/:name
// /user/list/321/danil
// Map { id => 321, name => danil }