export interface IOpt {
    parse<T>(): Map<string, Map<string, T>>;
}