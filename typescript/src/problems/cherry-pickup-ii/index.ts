function cherryPickup(grid: number[][]): number {
  const n = grid.length,
    m = grid[0].length;
  // 4D DP array
  let memo = {};

  function solve(r1, c1, c2) {
    // if invalid state return -ve
    if (r1 >= n || c1 >= m || c2 >= m || c1 < 0 || c2 < 0) {
      return 0;
    }
    // if stored in cache return from dp state
    if (memo[`${r1}${c1}${c2}`]) return memo[`${r1}${c1}${c2}`];

    if (r1 == n - 1) {
      if (c1 == c2) return grid[r1][c1];
      // if both arrive at the same cell add only once
      else return grid[r1][c1] + grid[r1][c2]; // if both are at different cells add both
    }
    let cherries = 0;
    if (c1 == c2) cherries += grid[r1][c1];
    else {
      cherries += grid[r1][c1] + grid[r1][c2];
      // recursive calls for all possible 9 choices
      // each robot has 3 choices => hence total choices = 3*3 =9
      let d1 = solve(r1 + 1, c1 - 1, c2 - 1);
      let d2 = solve(r1 + 1, c1 - 1, c2);
      let d3 = solve(r1 + 1, c1 - 1, c2 + 1);
      let d4 = solve(r1 + 1, c1, c2 - 1);
      let d5 = solve(r1 + 1, c1, c2);
      let d6 = solve(r1 + 1, c1, c2 + 1);
      let d7 = solve(r1 + 1, c1 + 1, c2 - 1);
      let d8 = solve(r1 + 1, c1 + 1, c2);
      let d9 = solve(r1 + 1, c1 + 1, c2 + 1);
      // add optimal choice to ans
      let mx = Math.max(d1, d2, d3, d4, d5, d6, d7, d8, d9);
      cherries += mx;
    }
    // memoize and return
    return (memo[`${r1}${c1}${c2}`] = cherries);
  }
  // let64_t to avoid overflow
  return solve(0, 0, 0);
}

export default cherryPickup;
