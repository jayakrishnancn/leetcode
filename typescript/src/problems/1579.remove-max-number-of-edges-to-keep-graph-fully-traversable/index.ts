// link: https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/description/?envType=daily-question&envId=2024-06-30
class DisjoinSet {
  parent: number[];
  size: number[];

  constructor(n: number) {
    this.parent = [];
    this.size = [];

    for (let i = 0; i <= n; i++) {
      this.parent.push(i);
      this.size.push(1);
    }
  }

  union(u: number, v: number) {
    const parent_u = this.find(u);
    const parent_v = this.find(v);

    if (parent_u === parent_v) return;

    if (this.size[parent_u] < this.size[parent_v]) {
      this.parent[parent_u] = parent_v;
      this.size[parent_v] += this.size[parent_u];
    } else {
      this.parent[parent_v] = parent_u;
      this.size[parent_u] += this.size[parent_v];
    }
  }

  find(node: number) {
    if (this.parent[node] === node) return node;

    return (this.parent[node] = this.find(this.parent[node]));
  }
}

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  const setA = new DisjoinSet(n);
  const setB = new DisjoinSet(n);

  let edgesRemoved = 0;

  for (const [type, u, v] of edges) {
    if (type !== 3) {
      continue;
    }
    if (setA.find(u) === setA.find(v)) {
      edgesRemoved++;
    } else {
      setA.union(u, v);
      setB.union(u, v);
    }
  }

  for (const [type, u, v] of edges) {
    if (type !== 1) {
      continue;
    }
      if (setA.find(u) === setA.find(v)) {
        edgesRemoved++;
      } else {
        setA.union(u, v);
      }
    } 
    
    for (const [type, u, v] of edges) {
      if (type !== 2) {
      continue;
      }
      if (setB.find(u) === setB.find(v)) {
        edgesRemoved++;
      } else {
        setB.union(u, v);
      }
    }

  let totalCompA = setA.find(1);
  let totalCompB = setB.find(1);
  // Checking existence of multiple components after applying DSU for Alex & Bob, if mutiple components exits that means Alice or Bob cannot fully traverse the given graph.
  for (let i = 2; i <= n; i++) {
    if (setA.find(i) !== totalCompA) return -1;
    if (setB.find(i) !== totalCompB) return -1;

  }

  return edgesRemoved;
}

export default maxNumEdgesToRemove;
