import { ServerResponse } from 'http';
import { Basic } from './Basic';
import { ITake } from './tk/ITake';
import { Request } from './Request';
import { TkEndpoint } from './tk/TkEndpoint';
class TkUserList implements ITake {
    act(_req: Request, res: ServerResponse): void {
        res.write(JSON.stringify({hello: 'there'}));
        res.end();
    }
}

new Basic(
    8081,
    new TkEndpoint('/user/list/:id', 'GET, POST', new TkUserList()),
).start();
