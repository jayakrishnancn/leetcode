// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/?envType=daily-question&envId=2024-06-25

// Definition for a binary tree node.
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function bstCalculate(root: TreeNode | null, parentVal = 0): number {
  if (!root) {
    return 0;
  }
  const right = bstCalculate(root.right, parentVal);
  const left = bstCalculate(root.left, root.val + parentVal + right)
  const oldVal = root.val;
  root.val = root.val + right + parentVal
  return right + left + oldVal
}

function bstToGst(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return null;
  }
  bstCalculate(root, 0)
  return root;
};


export default bstToGst;
