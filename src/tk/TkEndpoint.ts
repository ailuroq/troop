import http from 'http';
import { ITake } from './ITake';
import { Request } from '../Request';
import { OptMethods } from '../opt/OptMethods';
import { OptParams } from '../opt/OptParams';
import { OptQueries } from '../opt/OptQueries';
import { TkGuard } from './TkGuard';

export class TkEndpoint implements ITake {
    private readonly take: ITake;
    private readonly pattern: string;
    private readonly methods: string;
    /**
     * 
     * @param pattern Url pattern
     * @param methods Methods for endpoint
     * @param take Take to execute
     */
    constructor(pattern: string, methods: string, take: ITake) {
        this.pattern = pattern;
        this.methods = methods;
        this.take = take;
    }
    /**
     * Checking if options and request match to execute ITake interface instance
     * @param req Request
     * @param res Response
     */
    act(req: Request, res: http.ServerResponse): void {
        new TkGuard(
            this.take,
            new OptParams(this.pattern),
            new OptQueries(this.pattern),
            new OptMethods(this.methods),
        ).act(req, res);
    }
}
