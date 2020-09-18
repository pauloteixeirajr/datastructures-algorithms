/**
 * Shortest Path Algorithm
 *
 * One of the most famous and widely used algorithms around!
 * It finds the shortest path between two vertices on a graph
 *
 * Why is it useful?
 * - GPS - fiinding fastest route
 * - Network Routing - finds open shortest path for data
 * - Biology - used to model the spread of viruses among humans
 * - Airline tickets - finding cheapest route to your destination
 * - And many more...
 */

class WeightedGraph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    this.adjList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjList[vertex1].push({ node: vertex2, weight });
    this.adjList[vertex2].push({ node: vertex1, weight });
  }

  shortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // Build up initial state
    for (let vertex in this.adjList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        // We are done
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjList[smallest]) {
          // Find neighbouring node
          let nextNode = this.adjList[smallest][neighbour];
          // Calculate the distance to nextNode
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            // Updating new smallest distance to neighbour
            distances[nextNode.node] = candidate;
            // Updating previous - how we got to neighbour
            previous[nextNode.node] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

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
