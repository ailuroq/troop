"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'roots': [
        '<rootDir>',
    ],
    'testMatch': [
        '**/tests/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    'transform': {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
