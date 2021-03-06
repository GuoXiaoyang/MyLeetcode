/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 133. Clone Graph
 Clone an undirected graph. Each node in the graph contains a label and a list of
 its neighbors.


 OJ's undirected graph serialization:
 Nodes are labeled uniquely.

 We use # as a separator for each node, and , as a separator for node label and
 each neighbor of the node.
 As an example, consider the serialized graph {0,1,2#1,2#2,2}.

 The graph has a total of three nodes, and therefore contains three parts as separatedby #.

 First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
 Second node is labeled as 1. Connect node 1 to node 2.
 Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
 Visually, the graph looks like the following:

    1
   / \
  /   \
 0 --- 2
      / \
      \_/
****************************************************************/
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  var map={};
  return cloneHelper(map,graph);
};

var cloneHelper = function (map,graphNode) {
  if(graphNode===null) return null;
  if(map[graphNode.label]!==undefined) return map[graphNode.label];
  var newGraphNode = new UndirectedGraphNode(graphNode.label);
  for(var i=0;i<graphNode.neighbors.length;i++) {
    newGraphNode.neighbors.push(cloneHelper(map,graphNode.neighbors[i]));
  }
  map[newGraphNode.label] = newGraphNode;
  return newGraphNode;
};

