import { IncomingMessage} from 'http';

/**
 * Wrapper over the native node.js http request for options implementations
 */
export class Request {
    private readonly nodeReq: IncomingMessage;
    private readonly params: Map<string, string>;
    private readonly query: Map<string, string>;
    private readonly subPattern: string[] = [''];
    /**
     * 
     * @param req native node.js http request
     */
    constructor(req: IncomingMessage) {
        this.nodeReq = req;
        this.params = new Map();
        this.query = new Map();
    }

    addParam(name: string, value: string): this {
        this.params.set(name, value);
        return this;
    }

    getParam(name: string): string {
        const param = this.params.get(name);
        if (param) return param;
        else throw new Error('There is no param with name: ' + name);
    }
    
    getParams(): Map<string, string> {
        return this.params;
    }
    
    addQuery(name: string, value: string): this {
        this.query.set(name, value);
        return this;
    }

    getQuery(name: string): string {
        const query = this.query.get(name);
        if (query) return query;
        else throw new Error('There is no query with name: ' + name);
    }

    getQueries(): Map<string, string> {
        return this.query;
    }

    addSubPattern(subUrl: string): void {
        this.subPattern.length = 0;
        this.subPattern.push(subUrl);
    }

    getSubPattern(): string {
        return this.subPattern[0];
    }

    nativeReq(): IncomingMessage {
        return this.nodeReq;
    }
}