#!/usr/bin/env node
'use strict';

const assert = require('assert');

process.on('unhandledRejection', reason => {
  console.error(reason);
  process.exit(1);
});

const {IterableInt, r2gSmokeTest} = require('iterable.int');

assert.strictEqual(r2gSmokeTest(), true);
assert.deepStrictEqual([...new IterableInt(3)], [1, 2, 3]);
assert.deepStrictEqual([...new IterableInt(-1, 1)], [-1, 0, 1]);
assert.deepStrictEqual([...new IterableInt(3, 1)], [3, 2, 1]);
assert.deepStrictEqual([...new IterableInt(1, 1)], []);
assert.throws(() => new IterableInt(1.5), /integer/);

console.log('iterable.int r2g smoke test passed.');
