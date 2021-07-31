import { IOpt } from './IOpt';

export class OptParams implements IOpt {
    private readonly url: string;
    private readonly map: Map<string, any>;

    constructor(url: string) {
        this.url = url;
        this.map = new Map();
    }
    parse<T>(): Map<string, T> {
        this.url.split('').map((e, i) => {
            if (e === ':') {
                this.map.set(this.url.slice(i+1).split('/')[0], String(i));
            }
        });
        return new Map().set('params', this.map);
    }
} 