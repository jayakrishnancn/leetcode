function isValidSudoku(board: string[][]): boolean {
  let visitedRows: number[][] = [],
    visitedCols: number[][] = [],
    visitedBox: number[][] = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const element = Number(board[row][col]);
      if (!element) {
        continue;
      }
      let box =
        Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (!visitedRows[row]) {
        visitedRows[row] = [];
      }
      if (!visitedCols[col]) {
        visitedCols[col] = [];
      }
      if (!visitedBox[box]) {
        visitedBox[box] = [];
      }
      if (visitedRows[row].includes(element)) {
        return false;
      }
      if (visitedCols[col].includes(element)) {
        return false;
      }
      if (visitedBox[box].includes(element)) {
        return false;
      }

      visitedRows[row].push(element);
      visitedCols[col].push(element);
      visitedBox[box].push(element);
    }
  }

  return true;
}

export default isValidSudoku;
