import http from 'http';
import { Request } from '../Request';

export interface ITake {
    /**
     * Convert request and given options to response
     * @param req Request
     * @param res Response
     */
    act(req: Request, res: http.ServerResponse): void;
}