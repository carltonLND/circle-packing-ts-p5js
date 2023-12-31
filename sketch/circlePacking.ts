// This is the file you'll do all your work in.
//It contains types and functions dealing with circle packing
//- generating circle positions, checking for overlap, etc.

/** Represents a conceptual circle - its position and radius */
interface CircleData {
  position: Position;
  radius: number;
}

/** Represents a position in 2d space - x and y coordinates. */
interface Position {
  x: number;
  y: number;
}

/**
 * Creates and returns an array of Circle objects which, when visualised, do not overlap each other.
 * @param areaWidth the width of the area within which circles may be generated
 * @param areaHeight the height of the area within which circles may be generated
 * @return an array of generated Circle data objects
 */
function calculatePackedCircles(
  areaWidth: number,
  areaHeight: number,
  minSize?: number,
  maxSize?: number,
  minDistance?: number
): CircleData[] {
  const validatedCircles: CircleData[] = [];

  for (let i = 0; i < 10000; i++) {
    const candidate = randomCircle(areaWidth, areaHeight, minSize, maxSize);

    if (!isOverlapping(candidate, validatedCircles, minDistance)) {
      validatedCircles.push(candidate);
    }
  }

  return validatedCircles;
}

/** Returns the distance between two given positions.
    (This function doesn't require the p5.js library, in case you want to use it in non-p5 projects.)
 */
function distance(p1: Position, p2: Position): number {
  const x = p1.x - p2.x;
  const y = p1.y - p2.y;
  const hyp = Math.sqrt(x * x + y * y);
  return hyp;
}

function randomCircle(
  areaWidth: number,
  areaHeight: number,
  minSize = 10,
  maxSize = 100
): CircleData {
  return {
    position: { x: random(0, areaWidth), y: random(0, areaHeight) },
    radius: random(minSize, maxSize),
  };
}

function isOverlapping(
  circle: CircleData,
  circleArray: CircleData[],
  minDistance = 0
) {
  for (const circle2 of circleArray) {
    const dist = distance(circle.position, circle2.position);
    const radiiSum = circle.radius + circle2.radius;

    if (dist < radiiSum + minDistance) {
      return true;
    }
  }

  return false;
}
