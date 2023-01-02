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

console.log('your simple typescript test goes here.');

console.log('/////////');
for(const v of new IterableInt(5)){
  console.log(v);
}

console.log('/////////');
for(const v of new IterableInt(-2,3)){
  console.log(v);
}

console.log('/////////');
for(const v of new IterableInt(5,0)){
  console.log(v);
}

console.log('/////////');
for(const v of new IterableInt(4,-3)){
  console.log(v);
}

console.log('/////////');
for(const v of new IterableInt(-4,-3)){
  console.log(v);
}

console.log('/////////');
for(const v of new IterableInt(-1,-0)){
  console.log(v);
}

console.log('/////////');
for(const v of new IterableInt(0, 1)){
  throw new Error('this should not enter')
}

