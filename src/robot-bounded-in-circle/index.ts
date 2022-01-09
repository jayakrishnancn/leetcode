function isRobotBounded(inst: string): boolean {
  let x = 0,
    y = 0,
    xd = 0,
    yd = 1;

  for (let i of inst) {
    if (i === "G") {
      x += xd;
      y += yd;
    }
    if (i === "L") {
      [xd, yd] = [-1 * yd, xd];
    }
    if (i === "R") {
      [xd, yd] = [yd, -1 * xd];
    }
  }

  return (x === 0 && y === 0) || !(xd === 0 && yd === 1);
}
export default isRobotBounded;
