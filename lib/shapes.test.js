// import require
const { Circle, Square, Triangle } = require("./shapes");

test("Triangle", () => {
  const shape = new Triangle("blue", "txt", "yellow");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

test("Square", () => {
    const shape = new Square("blue", "txt", "yellow");
    expect(shape.render()).toEqual(
      '<rect width="200" height="200" fill="blue" />'
    );
  });

  test("Circle", () => {
    const shape = new Circle("blue", "txt", "yellow");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="blue" />'
    );
  });