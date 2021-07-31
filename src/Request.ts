import { IncomingMessage} from 'http';

export class Request {
    public readonly nodeReq: IncomingMessage;
    private readonly maps: Map<string, any>[] = [];

    constructor(req: IncomingMessage) {
        this.nodeReq = req;
    }

    addOption<T>(option: Map<string, T>): void {
        this.maps.push(option);
    }

    checkOption(name: string): boolean {
        for (const map of this.maps) {
            if (map.get(name)) return true;
        }
        return false;
    }

    options<T> (): Map<string, T>[] {
        return this.maps;
    }
}