'use strict';

class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  get area() {
    return this._height * this._width;
  }
}

// Usage

const rect = new Rectangle(100, 200);
console.dir({ rect });
console.log('area:', rect.area);
