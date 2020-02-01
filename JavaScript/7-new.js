'use strict';

class Rectangle {
  constructor(height, width) {
    return {
      get area() {
        return height * width;
      }
    };
  }
}

// Usage

const rect = new Rectangle(100, 200);
console.dir({ rect });
console.log('area:', rect.area);
