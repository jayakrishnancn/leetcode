

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


export default class TreeUtil {

  static createFromArray(tree: number[]): TreeNode | null {
    return null;

  }

  static treeToArray(root: TreeNode | null): number[] | null {
    return null;
  }

}
