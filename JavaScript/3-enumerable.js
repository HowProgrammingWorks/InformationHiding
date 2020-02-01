'use strict';

class Rectangle {
  constructor(height, width) {
    Object.defineProperty(this, 'width', { value: width, enumerable: false });
    Object.defineProperty(this, 'height', { value: height, enumerable: false });
  }

  get area() {
    return this.height * this.width;
  }
}

// Usage

const rect = new Rectangle(100, 200);
console.dir({ rect });
console.log('area:', rect.area);
