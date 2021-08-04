import { IncomingMessage} from 'http';

export class Request {
    public readonly nodeReq: IncomingMessage;
    private readonly maps: Map<string, any>;

    constructor(req: IncomingMessage) {
        this.nodeReq = req;
        this.maps = new Map();
    }

    addOption<T>(option: Map<string, T>): void {
        this.maps.set(String(option.get('name')), option.get('data'));
    }

    checkOption(name: string): boolean {
        if (this.maps.get(name)) return true;
        return false;
    }

    options<T> (): Map<string, T> {
        return this.maps;
    }
}