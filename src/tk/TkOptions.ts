import { ServerResponse } from 'http';
import { IOpt } from '../opt/IOpt';
import { ITake } from './ITake';
import { Request } from '../Request';

export class TkOptions implements ITake {
    private readonly options: IOpt[];
    constructor(options: IOpt[]) {
        this.options = options;        
    }
    act(req: Request, _res: ServerResponse): void {
        for (const option of this.options) {
            req.addOption(option.parse());
        }
    }

}