import { IncomingMessage, ServerResponse } from 'http';
import { Basic } from './Basic';
import { Endpoint } from './Endpoint';
import { Fork } from './Fork';
import { ITake } from './ITake';

class Main {
    public main(): void {
        new Basic(
            8080,
            new Fork('/users', new Endpoint(new UserList(), '/list', 'GET')),
            new Fork('/user/:id', new UserList()),
        ).start();
    }
}

class UserList implements ITake {
    act(_req: IncomingMessage, res: ServerResponse): void {
        throw new Error('blabla');
        res.write(JSON.stringify({hello: 'there'}));
        res.end();
    }
}

new Main().main();