import { ServerResponse } from 'http';
import { Basic } from './Basic';
import { ITake } from './tk/ITake';
import { OptMethods } from './opt/OptMethods';
import { OptUrl } from './opt/OptUrl';
import { Request } from './Request';
import { TkEndpoint } from './tk/TkEndpoint';
import { TkFork } from './tk/TkFork';

class Main {
    public main(): void {
        new Basic(
            8080,
            new TkFork(
                new TkEndpoint(new TkUserList(), new OptUrl('/user/list'), new OptMethods('GET, POST')),
                new TkEndpoint(new TkUserList(), new OptUrl('/user/list'), new OptMethods('GET, POST')),
            ),
            new TkEndpoint(new TkUserList(), new OptUrl('/user/list'), new OptMethods('GET, POST')),
        ).start();
    }
}

class TkUserList implements ITake {
    act(_req: Request, res: ServerResponse): void {
        res.write(JSON.stringify({hello: 'there'}));
        res.end();
    }
}

new Main().main();