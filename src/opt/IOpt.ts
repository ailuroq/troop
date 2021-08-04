import {Request} from '../Request';

export interface IOpt {
    parse<T>(req: Request): Map<string, T>;
}