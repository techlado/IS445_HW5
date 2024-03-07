class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return this.side ** 2;
  }
  diagonal() {
    return Math.sqrt(2 * this.side ** 2).toFixed(3);
  }
  describe() {
    return `Square with side ${this.side} has a perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`;
  }
}

//Create three squares and use the describe method to display information
const sq1 = new Square(2);
const sq2 = new Square(3);
const sq3 = new Square(5);

console.log(sq1.describe());
console.log(sq2.describe());
console.log(sq3.describe());

