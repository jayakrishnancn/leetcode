export class TreeNode {
  val: number ;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export default class TreeUtil {
  static createFromArray(tree: (number | null)[]): TreeNode | null {
    const helper = (index: number): TreeNode | null => {
      if (index >= tree.length || tree[index] === null) return null;
      return new TreeNode(
        tree[index] ?? 0,
        helper(2 * index + 1),
        helper(2 * index + 2),
      );
    };
    return helper(0);
  }

  static treeToArray(root: TreeNode | null): number[] | null {
    const tree: number[] = [];
    const helper = (node: TreeNode | null, index: number): void => {
      if (!node) return;
      if (index >= tree.length)
        tree.push(...Array(index - tree.length + 1).fill(null));
      tree[index] = node.val;
      helper(node.left, 2 * index + 1);
      helper(node.right, 2 * index + 2);
    };
    helper(root, 0);
    return tree;
  }
}
