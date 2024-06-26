// link: https://leetcode.com/problems/balance-a-binary-search-tree/description/?envType=daily-question&envId=2024-06-26

import { TreeNode } from '../../utils/tree';

function balanceBST(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const values = [] as number[];
  function inOrder(node: TreeNode) {
    if (node.left) {
      inOrder(node.left);
    }

    values.push(node.val);

    if (node.right) {
      inOrder(node.right);
    }
  }
  inOrder(root);

  function treeFromArray(left: number, right: number): TreeNode | null {
    if (left > right) {
      return null;
    }

    const midIndex = Math.floor((left + right) / 2);
    const root = new TreeNode(
      values[midIndex],
      treeFromArray(left, midIndex - 1),
      treeFromArray(midIndex + 1, right)
    );

    return root;
  }

  return treeFromArray(0, values.length - 1);
}
export default balanceBST;
