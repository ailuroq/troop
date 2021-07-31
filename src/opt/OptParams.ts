import { IOpt } from './IOpt';

export class OptParams implements IOpt {
    private readonly url: string;
    private readonly map: Map<string, any>;

    constructor(url: string) {
        this.url = url;
        this.map = new Map();
    }
    parse<T>(): Map<string, T> {
        const splittedUrl = this.url.split('/');
        for (let i = 0; i < splittedUrl.length; i++) {
            const splittedPeace = splittedUrl[i].split('');
            if (splittedPeace[0] === ':') {
                this.map.set(String(i-1), splittedUrl[i].slice(1));
            }
        }
        return new Map().set('params', this.map);
    }
} 
