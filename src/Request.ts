import { IncomingMessage} from 'http';

export class Request {
    private readonly nodeReq: IncomingMessage;
    private readonly params: Map<string, string>;
    private readonly query: Map<string, string>;

    constructor(req: IncomingMessage) {
        this.nodeReq = req;
        this.params = new Map();
        this.query = new Map();
    }

    addParam(name: string, value: string): void {
        this.params.set(name, value);
    }

    getParam(name: string): string {
        const param = this.params.get(name);
        if (param) return param;
        else throw new Error('There is no param with name: ' + name);
    }
    
    getParams(): Map<string, string> {
        return this.params;
    }
    
    addQuery(name: string, value: string): void {
        this.query.set(name, value);
    }

    getQuery(name: string): string {
        const query = this.query.get(name);
        if (query) return query;
        else throw new Error('There is no query with name: ' + name);
    }

    nativeReq(): IncomingMessage {
        return this.nodeReq;
    }
}