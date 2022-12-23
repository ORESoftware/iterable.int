'use strict';

export const r2gSmokeTest = function () {
  // r2g command line app uses this exported function
  return true;
};


export class IterableInt {

  point = 0;
  start: number = 0;
  end: number = 0;
  direction: 'nil' | 'down' | 'up' = 'nil';

  constructor(val: number, end?: number) {

    if(arguments.length < 1){
      throw new Error('please specify a start/end')
    }

    if(!Number.isInteger(val)){
      throw new Error('first argument must be an integer.')
    }

    if(arguments.length > 1){
      if(!Number.isInteger(end)){
        throw new Error('second argument must be an integer.')
      }
      this.start = val;
      this.end = <number>end;
    } else {
      this.start = 1;
      this.end = val;
    }


    if(this.start < this.end){
      this.direction = 'up';
      this.point = this.start;
    } else if(this.start > this.end){
      this.direction = 'down';
      this.point = this.start;
    }

  }

  static create(val: number){
    return new IterableInt(val);
  }

  iterator(){
    return this;
  }

  [Symbol.iterator](): Iterator<number> {

    const self = this;
    return {
      next(): IteratorResult<number, any> {

        if(self.direction === 'nil'){
          return {done: true, value: null};
        }

        if(self.direction === 'down'){
          const value = self.point--;
          const done = value < self.end;
          return {value, done}
        }

        if(self.direction !== 'up'){
          throw new Error('Corrupt direction value.')
        }

        const value = self.point++;
        const done = value > self.end;
        return {value, done}

      }
    }
  }
}








