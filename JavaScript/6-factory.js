'use strict';

const rectangle = (height, width) => ({
  get area() {
    return height * width;
  }
});

// Usage

const rect = rectangle(100, 200);
console.dir({ rect });
console.log('area:', rect.area);
