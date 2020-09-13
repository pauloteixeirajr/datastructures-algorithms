/**
 * What is a stack?
 *
 * It is a collection of data. A LIFO data structure.
 * The last element added to the stack will be the first
 * element removed from the stack.
 *
 * Think about a stack of plates, or a stack or markers, a stack of... anything.
 * As you pile it up the last thing (or the topmost thing) is what gets
 * removed first.
 *
 * Where stacks are used?
 * - Managing functions invocations
 * - Undo / Redo
 * - Routing History
 * - And more...
 */

// ARRAY IMPLEMENTATION
const stack = [];

stack.push('Google');
stack.push('Instagram');
stack.push('Youtube');

stack.pop(); // Youtube
stack.pop(); // Instagram
stack.pop(); // Google

// CUSTOM IMPLEMENTATION
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
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
