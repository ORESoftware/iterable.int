#!/usr/bin/env ts-node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const __1 = require("../..");
assert.deepStrictEqual([...new __1.IterableInt(5)], [1, 2, 3, 4, 5]);
assert.deepStrictEqual([...new __1.IterableInt(-2, 3)], [-2, -1, 0, 1, 2, 3]);
assert.deepStrictEqual([...new __1.IterableInt(5, 0)], [5, 4, 3, 2, 1, 0]);
assert.deepStrictEqual([...new __1.IterableInt(4, -3)], [4, 3, 2, 1, 0, -1, -2, -3]);
assert.deepStrictEqual([...new __1.IterableInt(-4, -3)], [-4, -3]);
assert.deepStrictEqual([...new __1.IterableInt(-1, -0)], [-1, 0]);
assert.deepStrictEqual([...new __1.IterableInt(0, 1)], [0, 1]);
assert.deepStrictEqual([...new __1.IterableInt(1, 1)], []);
assert.throws(() => new __1.IterableInt(1.5), /integer/);
assert.throws(() => new __1.IterableInt(1, 1.5), /integer/);
console.log('iterable.int tests passed.');
