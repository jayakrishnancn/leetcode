// link: https://leetcode.com/problems/find-center-of-star-graph/?envType=daily-question&envId=2024-06-27

function findCenter(edges: number[][]): number {
  const [a, b] = edges[0];
  const [c, d] = edges[1];

  return a == c ? a : a == d ? d : b;
}

export default findCenter;
