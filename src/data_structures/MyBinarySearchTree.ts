/** @format */

class STNode {
  public left: STNode | null;
  public right: STNode | null;
  public value: number;

  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class MyBinarySearchTree {
  private root: STNode | null;
  constructor() {
    this.root = null;
  }
  public insert(value: number) {
    const newNode = new STNode(value);
    let currentNode: STNode | null = this.root;

    if (!currentNode) {
      this.root = newNode;
      return this;
    }

    let right: boolean = false;
    let prevNode: STNode | null = null;
    while (currentNode) {
      prevNode = currentNode;
      if (currentNode.value > newNode.value) {
        currentNode = currentNode.left;
        right = false;
      } else {
        currentNode = currentNode.right;
        right = true;
      }
    }
    if (prevNode) {
      if (right) {
        prevNode.right = newNode;
      } else {
        prevNode.left = newNode;
      }
    }
    return this;
  }

  lookup(value: number) {
    let currentNode: STNode | null = this.root;

    while (currentNode && currentNode.value !== value) {
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return currentNode;
  }
}

export default MyBinarySearchTree;
