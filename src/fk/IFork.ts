import { IncomingMessage, ServerResponse } from 'http';
import { Options } from './Options';

export interface IFork {
    route(req: IncomingMessage, res: ServerResponse): Options;
}