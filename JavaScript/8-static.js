'use strict';

class Rectangle {
  static create(height, width) {
    const rect = new Rectangle();
    rect.getArea = () => height * width;
    return rect;
  }

  get area() {
    return this.getArea();
  }
}

// Usage

const rect = Rectangle.create(100, 200);
console.dir({ rect });
console.log('area:', rect.area);
