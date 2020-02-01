'use strict';

const Rectangle = (() => {
  const hidden = new WeakMap();

  return class {
    constructor(height, width) {
      hidden.set(this, { height, width });
    }

    get area() {
      const { height, width } = hidden.get(this);
      return height * width;
    }
  };
})();

// Usage

const rect = new Rectangle(100, 200);
console.dir({ rect });
console.log('area:', rect.area);
