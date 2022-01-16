// https://leetcode.com/problems/maximize-distance-to-closest-person/
function maxDistToClosest(seats: number[]): number {
  let count = 0,
    max = 0,
    index = 0,
    firstOnesIndex,
    lastOnesIndex = 0;

  for (let item of seats) {
    if (item === 1 && firstOnesIndex === undefined) {
      firstOnesIndex = index;
    }
    if (item === 1) {
      lastOnesIndex = index;
    }
    max = count > max ? count : max;
    count = item === 1 ? 1 : count + 1;
    index++;
  }

  return Math.max(
    firstOnesIndex,
    Math.floor(max / 2),
    seats.length - 1 - lastOnesIndex
  );
}
export default maxDistToClosest;
