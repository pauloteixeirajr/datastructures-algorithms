/**
 * What is a Tree?
 *
 * A data structure that consists of nodes in a parent/child relationship.
 * Trees are nonlinear, they can branch.
 *
 * Tree Terminology
 * - Root: The top node in a tree
 * - Child: A node directly connected to another node when moving away from the root
 * - Parent: The converse notion of a child.
 * - Siblings: A group of nodes with the same parent
 * - Leaf: A node with no children
 * - Edge: The connection between one node and another
 *
 * Uses for Trees
 * - HTML DOM
 * - Network Routing
 * - Abstract Syntax Trees
 * - Artificial Intelligence (Decision Trees)
 * - Folders in Operating Systems
 * - Computer File Systems
 * - And more...
 *
 * Kinds of Trees
 * - Trees
 * - Binary Trees
 * - Binary Search Trees
 *
 * How Binary Search Trees Work?
 * - Every parent node has at most two children
 * - Every node to the left of a parent node is always less than the parent
 * - Every node to the right of a parent node is always greater than the parent
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return undefined;

    let current = root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return current;
  }
}
