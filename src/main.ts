import { ServerResponse } from 'http';
import { Basic } from './Basic';
import { ITake } from './tk/ITake';
import { Request } from './Request';
import { TkEndpoint } from './tk/TkEndpoint';
import { TkFork } from './tk/TkFork';

class Main {
    public main(): void {
        new Basic(
            8081,
            new TkFork(
                new TkEndpoint('/user/list', 'GET, POST', new TkUserList()),
                new TkEndpoint('/user/list', 'GET, POST', new TkUserList()),
            ),
            new TkEndpoint('/user/list', 'GET, POST', new TkUserList()),
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