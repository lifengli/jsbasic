//search for the shortest path between start and end nodes
//undirected and unweighted graph in adjacency list format
//name: a mesh network

function reconstructPath(howWeReachedNodes, startNode, endNode){
  var reversedShortestPath = [];

  //start from the endNode
  var currentNode = endNode;

  //the start node is associated with null, so we know that we reached start when currentNode is null
  while(currentNode !== null){
    reversedShortestPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode];
  }

  //reverse it to show from start to end
  return reversedShortestPath.reverse();
}

function bfsGetPath(graph, startNode, endNode){
  if(!graph.hasOwnProperty(startNode)){
    throw new Error("start node is not in graph");
  }

  if(!graph.hasOwnProperty(endNode)){
    throw new Error("end node is not in graph");
  }

  //treat this as queue
  var nodesToVisit = []; //new Queue();
  nodesToVisit.push(startNode);

  var howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  while(nodesToVisit.length > 0){
    //worst case will go through all nodes: the end node is the last one
    //this is linear O(N)
    var currentNode = nodesToVisit.shift();

    //stop when get to endNode
    if(currentNode === endNode){
      return reconstructPath(howWeReachedNodes, startNode, endNode);
    }

    //key step: since this is Breadth-first, we go through layer by layer
    //only record same node once, whoever get to it first will be added (to howWeReachedNodes)
    //since it is on same layer, so it has same distance, doesn't matter who get recorded
    if(graph[currentNode]){
      //for each node, need to check their neighboring node
      //we don't record all of them, but do need to check all of them
      //this is linear O(M)
      graph[currentNode].forEach(function(neighbor){
        if(!howWeReachedNodes.hasOwnProperty(neighbor)){
          nodesToVisit.push(neighbor);
          howWeReachedNodes[neighbor] = currentNode;
        }
      });
    }
  }

  //never get to endNode
  return null;
}

var graph = {
    'John'     : ['William', 'Thomas', 'Don'],
    'William' : ['John', 'Lindsay'],
    'Thomas'  : ['John', 'Pamela', 'Paul', 'Lindsay'],
    'Paul'     : ['Thomas', 'Don'],
    'Pamela'  : ['Thomas', 'Adam', 'Frank'],
    'Adam'    : ['Pamela', 'Frank', 'Sofia', 'Lucas'],
    'Frank'  : ['Pamela', 'Adam', 'Liam', 'Nathan'],
    'Lindsay'    : ['Nathan', 'Thomas', 'William'],
    'Don'    : ['Paul', 'John', 'Scott']
};

console.log(bfsGetPath(graph, 'John', 'Adam'));
