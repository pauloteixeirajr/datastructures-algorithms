/**
 * What is a Queue?
 *
 * A Queue is a FIFO (First In First Out) data strucuture.
 *
 * What is used for?
 * - Background tasks
 * - Uploading resources
 * - Printing / Task processing
 * - And more...
 */

// ARRAY IMPLEMENTATION
const queue = [];

queue.push('First');
queue.push('Second');
queue.push('Third');

queue.shift(); // First
queue.shift(); // Second
queue.shift(); // Third

// CUSTOM IMPLEMENTATION
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
