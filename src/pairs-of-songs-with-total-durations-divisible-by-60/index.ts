function numPairsDivisibleBy60(time: number[]): number {
  let track = {};
  let count = 0;

  for (let num of time) {
    num = num % 60;
    let opp = Math.abs(num - 60) % 60;
    opp = opp === 60 ? 0 : opp;
    if (track[opp] > 0) {
      count += track[opp] > 0 ? track[opp] : 0;
    }
    track[num] = track[num] > 0 ? track[num] + 1 : 1;
  }

  return count;
}

export default numPairsDivisibleBy60;
