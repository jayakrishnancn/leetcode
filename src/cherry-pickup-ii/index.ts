// mxn
let cache: any = {};

function cherryPickup(grid: number[][]): number {
  function travel(row, c1, c2) {
    let r = grid[row];
    if (
      row < 0 ||
      c1 < 0 ||
      c2 < 0 ||
      row > grid.length - 1 ||
      c1 > grid[0].length - 1 ||
      c2 > grid[0].length - 1
    ) {
      return 0;
    }

    if (cache?.[row]?.[c1]?.[c2]) {
      return cache[row][c1][c2];
    }

    if (c1 === c2) {
      if (r[c2 + 1] > r[c2 - 1]) {
        c2 = c2 + 1;
      } else {
        c1 = c2 - 1;
      }
    }
    let result = r[c1] ?? 0;
    if (c1 !== c2) {
      result += r[c2] ?? 0;
    }

    if (row < grid.length) {
      let max = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          max = Math.max(
            max,
            travel(row + 1, c1 - 1 + i, c2 - 1 + j)
          );
        }
      }
      result += max;
    }
    if (!cache[row]) {
      cache[row] = {};
    }
    cache[row][c1] = {
      [c2]: result,
    };

    return result;
  }

  return travel(0, 0, grid[0].length - 1);
}
export default cherryPickup;
