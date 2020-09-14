/**
 * What is a Binary Heap?
 *
 * A binary heap is a heap data structure that takes the form of a binary tree.
 * It is very similar to a binary search tree, but with some different rules.
 * For example, in a MaxBinaryHeap, parent nodes are always larger than
 * child nodes. In a MinBinaryHeap, parent nodes are always smaller than
 * child nodes.
 *
 * Binary Heaps are a common way of implementing priority queues, which are very
 * commonly used data structures. They are also used quite a bit,
 * with graph traversal algorithms.
 *
 * Examples:
 * MAX BINARY HEAP
 * - Each parent has at most two child nodes
 * - The value of each parent node is always greater than its child nodes
 * - In a max binary heap the parent is greater than the children, but
 * there are no guarantees between sibling nodes.
 * - A binary heap is as compact as possible. All the children of each node
 * are as fullas they can be and left children are filled out first.
 */

// There's an easy way of storing a Binary Heap...
// A LIST/ARRAY
// If you want to find a node's children
// For any index of an array n..
// The left child is stored at 2n + 1
// The right child is at 2n + 2
//
// If you have a child node and what to find its parent
// Parent is at index (n - 1) / 2 (floored)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Insert Pseudocode
   * Push the value into the values property onthe heap
   * Bubble the value up to its correct spot
   * - Create a variable called index which is the length of the values property minus 1
   * - Create a variable called parentIndex which is the floor of (index - 1) / 2
   * - Keep looping as long as the values elements at the parentIndex is less than
   * the values element at the child index
   * -- Swap the value of values element at the parentIndex with the value of the element
   * property at the child index
   * -- Set the index to be the parentIndex, and start over
   * @param {number} value
   */
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const value = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (value <= parent) break;

      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  /**
   * ExtractMax Pseudocode
   * Swap the first value in the values property with the last one
   * Pop from the values property, so you can return the value at the end
   * Have the new root "bubble down" to the correct spot!
   * - The parent index starts at 0 (the root)
   * - Find the index of the left child: (2 * index) + 1
   * (make sure it's not out of bounds)
   * - Find the index of the right child: (2 * index) + 2
   * (make sure it's not out of bounds)
   * If the left or right child is greater than the element.. swap. If both left
   * and right children are larger, swap with the largest child
   * The child index you swapped to now becomes the new parent index
   * Keep looping and swapping until neither child is larger than the element
   * Return the old root
   * @param {number} value
   */
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const value = this.values[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rigthChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > value) {
          swap = leftChildIndex;
        }
      }

      if (rigthChildIndex < length) {
        rightChild = this.values[rigthChildIndex];
        if (
          (swap === null && rightChild > value) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rigthChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = value;
      index = swap;
    }
  }
}
