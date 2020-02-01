'use strict';

const WIDTH = Symbol('width');
const HEIGHT = Symbol('height');

class Rectangle {
  constructor(height, width) {
    this[WIDTH] = width;
    this[HEIGHT] = height;
  }

  get area() {
    return this[HEIGHT] * this[WIDTH];
  }
}

// Usage

const rect = new Rectangle(100, 200);
console.dir({ rect });
console.log('area:', rect.area);
