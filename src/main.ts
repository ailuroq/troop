import { IncomingMessage, ServerResponse } from 'http';
import { Basic } from './Basic';
import { TkEndpoint } from './tk/TkEndpoint';
import { TkFork } from './tk/TkFork';
import { ITake } from './tk/ITake';
import { FkRegex } from './fk/FkRegex';

class Main {
    public main(): void {
        new Basic(
            8080,
            new TkFork('/users',
                new TkEndpoint(new FkRegex('/list', 'GET, POST, PATCH, DELETE'), new UserList())),
        ).start();
    }
}

class UserList implements ITake {
    act(_req: IncomingMessage, res: ServerResponse): void {
        res.write(JSON.stringify({hello: 'there'}));
        res.end();
    }
}

new Main().main();