import {Request} from '../Request';

export interface IOpt {
    /**
     * Checking if options and request match
     * @param req Request
     */
    route(req: Request): boolean;
}