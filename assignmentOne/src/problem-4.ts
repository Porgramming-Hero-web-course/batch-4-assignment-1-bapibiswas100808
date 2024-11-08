type Shape = Circle | Rectangle;

type Circle = {
  shape: "circle";
  radius: number;
};
type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};
const calculateShapeArea = (shape: Circle | Rectangle): number => {
  if ("radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else if ("height" in shape) {
    return shape.height * shape.width;
  } else {
    throw new Error("Unknown shape type");
  }
};
