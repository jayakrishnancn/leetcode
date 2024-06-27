// link: https://leetcode.com/problems/range-sum-of-bst/description/

import { TreeNode } from '../../utils/tree';

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) {
    return 0;
  }
  let val = 0;
  if (root.val >= low && root.val <= high) {
    val = root.val;
  }
  return (
    rangeSumBST(root.left, low, high) + val + rangeSumBST(root.right, low, high)
  );
}

export default rangeSumBST;
