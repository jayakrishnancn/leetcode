function minJumps(arr: number[]): number {
  let steps = 0;
  let memo = {};
  for (let i = 0; i < arr.length; i++) {
    if (!memo[arr[i]]) {
      memo[arr[i]] = [];
    }
    memo[arr[i]].push(i);
  }

  let queue = [0];
  let step = 0;
  while (queue.length > 0) {
    step++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let j = queue.shift() ?? 0;
      if (j - 1 >= 0 && memo[arr[j - 1]]) {
        queue.push(j - 1);
      }
      if (j + 1 < arr.length && memo[arr[j + 1]]) {
        if (j + 1 === arr.length - 1) return step;
        queue.push(j + 1);
      }
      if (memo[arr[j]]) {
        for (let k of memo[arr[j]]) {
          if (k !== j) {
            if (k === arr.length - 1) return step;
            queue.push(k);
          }
        }
      }
      delete memo[arr[j]];
    }
  }

  return steps;
}
export default minJumps;
