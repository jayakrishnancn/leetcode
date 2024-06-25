/*
"1807"
"7810"
"11"
"10"
"10"
"11"
"10111"
"11000"
"10000"
"10111"
"00000"
"10111" 
"00000" 
"00000" 
"00000" 
"11111" 
*/

const strip = (s: string, index: number) =>
  s.substring(0, index) + s.substring(index + 1, s.length);

function getHint(secret: string, guess: string): string {
  let memo = {},
    ACount = 0,
    BCount = 0,
    index = 0;
  while (index < secret.length) {
    if (secret[index] === guess[index]) {
      secret = strip(secret, index);
      guess = strip(guess, index);
      index--;
      ACount++;
    } else {
      memo[secret[index]] =
        memo[secret[index]] > 0 ? memo[secret[index]] + 1 : 1;
    }
    index++;
  }
  for (let index = 0; index < guess.length; index++) {
    if (memo[guess[index]] > 0) {
      console.log(guess, memo, memo, guess[index], index);
      memo[guess[index]] = memo[guess[index]] - 1;
      BCount++;
    }
  }

  return `${ACount}A${BCount}B`;
}
export default getHint;
