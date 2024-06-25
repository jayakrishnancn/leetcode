function carPooling(trips: number[][], capacity: number): boolean {
  let passengerCount: number[] = [];

  for (let i = 0; i < trips.length; i++) {
    let [numPassengers, from, to] = trips[i];

    for (let j = from; j < to; j++) {
      passengerCount[j] =
        passengerCount[j] > 0
          ? passengerCount[j] + numPassengers
          : numPassengers;
      if (passengerCount[j] > capacity) {
        return false;
      }
    }
  }

  return true;
}
export default carPooling;
