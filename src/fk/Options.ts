import { IOpt } from './IOpt';



export class Options {
    private readonly options: IOpt[];
    private readonly maps: Map<string, any>[];
    constructor(...opts: IOpt[]) {
        this.options = opts;
        this.maps = [];
    }

    empty(): void {
        this.maps.length = 0;
    }

    band<T>(): Map<string, T>[] {
        for (const option of this.options) {
            this.addOption(option.parse());
        }
        return this.maps;
    }

    addOption<T>(options: Map<string, T>): void {
        this.maps.push(options);
    }
}
