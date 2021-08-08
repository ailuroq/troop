import {it, expect, describe} from '@jest/globals';
import { MethodsFromString } from '../../src/helpers/MethodsFromString';

describe('class MethodsFromString', () => {
    it('comparing matching pattern and string', () => {
        expect(new MethodsFromString('GET, POST, PATCH').parse()).toEqual(['GET', 'POST', 'PATCH']);
    });

    it('comparing mismatched pattern and string', () => {
        expect(new MethodsFromString('GET POST PATCH').parse()).toEqual(['GET', 'POST', 'PATCH']);
    });

    it('comparing mismatched pattern and string', () => {
        expect(new MethodsFromString('GET,POST PATCH').parse()).toEqual(['GET', 'POST', 'PATCH']);
    });

    it('comparing mismatched pattern and string', () => {
        expect(new MethodsFromString('GET,POST,PATCH').parse()).toEqual(['GET', 'POST', 'PATCH']);
    });
});