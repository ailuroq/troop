import http from 'http';
import { Request } from '../Request';

export interface ITake {
    act(req: Request, res: http.ServerResponse): void;
}