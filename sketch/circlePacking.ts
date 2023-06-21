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
    areaHeight: number
): CircleData[] {
    //TODO: you need to implement this function properly!

    //These are just a couple of random CircleData objects, with no consideration yet for avoiding overlap.
    //We suggest you delete them once you understand what's happening.

    const circleDataOne: CircleData = {
        position: { x: 300, y: 300 },
        radius: 100,
    };
    const circleDataTwo: CircleData = {
        position: { x: random(0, areaWidth), y: random(0, areaHeight) },
        radius: 20,
    };

    //TODO: you'll have to return a full array of circle data objects, not just these two placeholders.
    return [circleDataOne, circleDataTwo];
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
