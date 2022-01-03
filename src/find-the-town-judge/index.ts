function findJudge(n: number, trust: number[][]): number {
  let trustedBy = {};
  if (n === 1 && trust.length === 0) return 1;
  for (let i = 0; i < trust.length; i++) {
    const ai = trust[i][0];
    const bi = trust[i][1];

    trustedBy[ai] =
      trustedBy[ai] > 0 ? trustedBy[ai] - 1 : 0;
    trustedBy[bi] =
      trustedBy[bi] > 0 ? trustedBy[bi] + 1 : 1;
  }

  return (
    Number(
      Object.keys(trustedBy).find(key => {
        return trustedBy[key] === n - 1;
      })
    ) || -1
  );
}

export default findJudge;
