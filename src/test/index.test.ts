// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {factorielle} from '../index';

describe('La factorielle de ', () => {
    test('1 vaut 1', () => {
        expect(factorielle(1)).toEqual(1);
    });

    test('2 vaut 2', () => {
        expect(factorielle(2)).toEqual(2);
    });

    test('3 vaut 6', () => {
        expect(factorielle(3)).toEqual(6);
    });

    test('4 vaut 24', () => {
        expect(factorielle(4)).toEqual(24);
    });

    test('5 vaut 120', () => {
        expect(factorielle(5)).toEqual(120);
    });

    test('0 vaut 1', () => {
        expect(factorielle(0)).toEqual(1);
    });
});