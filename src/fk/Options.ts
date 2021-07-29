import { IOpt } from './IOpt';



export class Options {
    private readonly options: IOpt[];
    private readonly maps: Map<string, Map<string, string> | string[]>[];
    constructor(...opts: IOpt[]) {
        this.options = opts;
        this.maps = [];
    }

    empty(): void {
        this.maps.length = 0;
    }

    band(): Map<string, Map<string, string> | string[]>[] {
        for (const option of this.options) {
            this.addOption(option.parse());
        }
        return this.maps;
    }

    addOption(options: Map<string, Map<string, string> | string[]>): void {
        this.maps.push(options);
    }
}
