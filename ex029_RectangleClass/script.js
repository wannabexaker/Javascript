// =====================================================
//  Lesson 29 — Rectangle Class (Area, Perimeter, Square)
//  Featuring: Math, Geometry, and Pure Disappointment™
// =====================================================

// This class represents a rectangle.
// Yes, it can also represent a square. Calm down.
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  // --- Returns the area (width * height)
  area() {
    return this.width * this.height;
  }

  // --- Returns the perimeter (2 * (width + height))
  // Not the area again. We fixed that shameful crime.
  perimeter() {
    return 2 * (this.width + this.height);
  }

  // --- Checks if the rectangle is perfectly square
  // (No judgement, all shapes deserve love)
  isSquare() {
    return this.width === this.height;
  }

  // --- Logs area to the console
  // Because apparently we needed a fancy wrapper for console.log
  logArea() {
    console.log(`Rectangle Area: ${this.area()}`);
  }
}

// Demo object — the Square of Truth™
const square = new Rectangle('Square', 20, 20);

console.log(square.area());       // 400
console.log(square.perimeter());  // 80
console.log(square.isSquare());   // true
square.logArea();                 // Rectangle Area: 400
