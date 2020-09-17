/**
 * What is a Graph?
 *
 * A graph data structure consists of a finite (and possibly mutable) set
 * of vertices or nodes or points, together with a set of unordered
 * pairs of these vertices for an undirected graph or a set of ordered
 * pairs for a directed graph. In summary, a graph is collection of nodes
 * and connections between them.
 *
 * Uses for Graphs
 * - Social Networks,
 * - Location / Mapping
 * - Routing Algorithms
 * - Visual Hierarchy
 * - File System Optimizations
 * - And more...
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    for (const v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
}
