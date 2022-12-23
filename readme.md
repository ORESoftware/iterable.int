
<div align="right">

Travis build status:
[![Build Status](https://travis-ci.org/ORESoftware/iterable.int.svg?branch=master)](https://travis-ci.org/ORESoftware/iterable.int)

CircleCI build status:
[![CircleCI](https://circleci.com/gh/ORESoftware/iterable.int/tree/master.svg?style=svg)](https://circleci.com/gh/ORESoftware/iterable.int/tree/master)

</div>

```typescript

import {IterableInt} from "iterable.int";

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


```
