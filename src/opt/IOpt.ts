import {Request} from '../Request';

export interface IOpt {
    route(req: Request): boolean;
}