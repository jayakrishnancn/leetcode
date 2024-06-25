function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = gas.reduce((sum, gasInStation) => sum + gasInStation, 0);
  let totalCost = cost.reduce((sum, constInStation) => sum + constInStation, 0);
  if (totalCost > totalGas) {
    return -1;
  }

  let startIndex = 0;
  let total = 0;
  for (let station = 0; station < gas.length; station++) {
    total += gas[station] - cost[station];
    if (total < 0) {
      total = 0;
      startIndex = station + 1;
    }
  }

  return startIndex;
}
export default canCompleteCircuit;
