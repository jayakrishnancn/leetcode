function fizzBuzz(n: number): string[] {
  let res: string[] = [];
  for (let i = 1; i <= n; i++) {
    let shout = '';
    if (i % 3 === 0) {
      shout = 'Fizz';
    }
    if (i % 5 === 0) {
      shout += 'Buzz';
    }

    res.push(shout.length > 0 ? shout : i + '');
  }

  return res;
}
export default fizzBuzz;
