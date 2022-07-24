class Rectangle {
  constructor(width, height) {
    this.thisWidth = width;
    this.thisHeight = height;
  }

  get width() {
    return this.thisWidth;
  }

  get height() {
    return this.thisHeight;
  }

  getArea() {
    return this.thisHeight * this.thisWidth;
  }
}

const r = new Rectangle(10, 20);
console.log(r.width); // => 10
console.log(r.height); // => 20
console.log(r.getArea()); // => 200
