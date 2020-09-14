/**
 * What is a Priority Queue?
 *
 * A data structure where each element has a priority.
 * Elements with higher priorities are served before
 * elements with lower priorities.
 */

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

/**
 * PriorityQueue
 *
 * Write a Min Binary Heap - lower number means higher priority
 * Each node has a value and a priority. Use the priority to build the heap.
 * Enqueue method accepts a value and priority, makes a new node, and puts
 * it in the right spot based off of its priority
 * Dequeue method removes root element, returns it, and rearranges
 * heap using priority.
 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const value = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (value.priority >= parent.priority) break;

      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return min;
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
        if (leftChild.priority < value.priority) {
          swap = leftChildIndex;
        }
      }

      if (rigthChildIndex < length) {
        rightChild = this.values[rigthChildIndex];
        if (
          (swap === null && rightChild.priority < value.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
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
