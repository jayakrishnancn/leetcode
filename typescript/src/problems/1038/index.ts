// daily-question
// link : https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/?envType=daily-question&envId=2024-06-25

import { TreeNode } from '../../utils/tree'



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
