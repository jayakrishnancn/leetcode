// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const same = (
  p: TreeNode | null,
  q: TreeNode | null
): boolean => {
  if (p?.val === q?.val) {
    return true;
  }
  return false;
};
function isSameTree(
  p: TreeNode | null,
  q: TreeNode | null
): boolean {
  if (!same(p, q)) {
    return false;
  }
  if (!isSameTree(p.left, q?.left)) {
    return false;
  }
  if (!isSameTree(p.right, q?.right)) {
    return false;
  }
  return true;
}
