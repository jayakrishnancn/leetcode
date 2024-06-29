// link: https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/description/?envType=daily-question&envId=2024-06-29

function getAncestors(n: number, edges: number[][]): number[][] {
  const res: number[][] = [];

  let adj = [] as number[][];

  for (const [parent, child] of edges) {
    adj[child] = [...(adj[child] ?? []), parent];
  }

  let memo = [] as number[][];

  function dfs(node: number): number[] {
    if (memo[node]) {
      return memo[node];
    }

    if (adj[node] === undefined) {
      return [];
    }
    let parents = [] as number[];

    for (const parent of adj[node]) {
      parents = [...dfs(parent), parent, ...parents];
    }

    memo[node] = [...new Set(parents)].sort((a, b) => a - b);
    return memo[node];
  }

  for (let node = 0; node < n; node++) {
    res[node] = dfs(node);
  }

  return res;
}

export default getAncestors;
