import http from 'http';

export interface ITake {
    act(req: http.IncomingMessage, res: http.ServerResponse, options?: {subUrl: string}): void;
}