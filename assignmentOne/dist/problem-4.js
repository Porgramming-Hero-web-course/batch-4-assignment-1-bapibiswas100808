"use strict";
const calculateShapeArea = (shape) => {
    if ("radius" in shape) {
        return Math.PI * shape.radius * shape.radius;
    }
    else if ("height" in shape) {
        return shape.height * shape.width;
    }
    else {
        throw new Error("Unknown shape type");
    }
};
