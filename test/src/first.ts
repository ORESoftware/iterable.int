#!/usr/bin/env ts-node
'use strict';

import * as cp from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as http from 'http';
import * as assert from 'assert';
import * as EE from 'events';
import * as strm from "stream";
import {IterableInt} from "../..";

assert.deepStrictEqual([...new IterableInt(5)], [1, 2, 3, 4, 5]);
assert.deepStrictEqual([...new IterableInt(-2, 3)], [-2, -1, 0, 1, 2, 3]);
assert.deepStrictEqual([...new IterableInt(5, 0)], [5, 4, 3, 2, 1, 0]);
assert.deepStrictEqual([...new IterableInt(4, -3)], [4, 3, 2, 1, 0, -1, -2, -3]);
assert.deepStrictEqual([...new IterableInt(-4, -3)], [-4, -3]);
assert.deepStrictEqual([...new IterableInt(-1, -0)], [-1, 0]);
assert.deepStrictEqual([...new IterableInt(0, 1)], [0, 1]);
assert.deepStrictEqual([...new IterableInt(1, 1)], []);

assert.throws(() => new IterableInt(1.5), /integer/);
assert.throws(() => new IterableInt(1, 1.5), /integer/);

console.log('iterable.int tests passed.');
