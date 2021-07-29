/** @format */

class Graph {
  private adjacentList: any;
  private numberOfNodes: number;

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node: number) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1: number, node2: number) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

export default Graph;
