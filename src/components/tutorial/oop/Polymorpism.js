class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log("Drawing a shape.");
  }
}

// Child classes
class Circle extends Shape {
  draw() {
    console.log(`Drawing a ${this.color} circle.`);
  }
}

class Rectangle extends Shape {
  draw() {
    console.log(`Drawing a ${this.color} rectangle.`);
  }
}
// USAGE
const myCircle = new Circle("red");
const myRectangle = new Rectangle("blue");
myCircle.draw(); //Output: "Drawing a red Circle."
myRectangle.draw(); // Output: "Drawing a blue rectangle"

const myShape = new Shape();
myShape.draw(); //Output :"Drawing a shape"
