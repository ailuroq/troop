export interface IOpt {
    parse(): Map<string, Map<string, string> | string[]>;
}