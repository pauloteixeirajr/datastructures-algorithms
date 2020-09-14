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
  /**
   * Tree Traversal
   *
   * Two ways:
   * - Breadth-first Search
   * - Depth-first Search
   */

  // Breadth-first Search (BFS)
  // Pseudocode
  // Create a queue (this can be an array) and a variable
  // to store the values of nodes visited
  // Place the root node in the queue
  // Looop as long as there is anything in the queue
  // Dequeue a node from the queue and push the value of
  // the node into the variable that stores the nodes
  // I there is a left property on the node dequeued
  // - add it to the queue
  // If there is a right property on the node dequeued
  // - add it to the queue
  // Return the variable that stores the values
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // Depth First Search (DFS)
  // PreOrder Pseudocode
  // Create a variable to store the values of nodes visited
  // Store the root of the BST in a variable called current
  // Write a helper function which accepts a node
  // - Push the value of the node to the variable that stores the values
  // - If the node has a left property, call the helper function with
  // the left property of the node
  // - If the node has a right property, call the helper function with
  // the right property of the node
  // Invoke the helper fucntion with the current variable
  // Return the array of values
  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  // PostOrder Pseudocode
  // Create a variable to store the values of nodes visited
  // Store the root of the BST in a variable called current
  // Write a helper function which accepts a node
  // - If a node has a left property, call the helper function
  // with the left property on the node
  // - If the node has a right property, call the helper function
  // with the right property on the node
  // - Push the value of the ndoe to the variable that stores the values
  // - Invoke the helper function with the current variable
  // Return the array of values
  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  // InOrder Pseudocode
  // Create a variable to store the values of nodes visited
  // Store the root of the BST in a variable called current
  // Write a helper function which accepts a node
  // - If the node has a left property, call the helper function
  // with the left property on the node
  // - Push the value of the node to the variable that stores the values
  // - If the node has a right property, call the helper funciton
  // with the right property on the node
  // Invoke the helper function with the current variable
  // Return the array of values
  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}
