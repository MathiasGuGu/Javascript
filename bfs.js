edges = [
  ["myhouse", "momanddad"],
  ["momanddad", "niece1"],
  ["momanddad", "nephew"],
  ["myhouse", "inlaws"],
  ["inlaws", "kid2"],
  ["inlaws", "kid1"],
  ["niece1", "myhouse"],
];
vertices = [
  { name: "myhouse", distance: null, predecessor: null },
  { name: "momanddad", distance: null, predecessor: null },
  { name: "inlaws", distance: null, predecessor: null },
  { name: "niece1", distance: null, predecessor: null },
  { name: "nephew", distance: null, predecessor: null },
  { name: "kid1", distance: null, predecessor: null },
  { name: "kid2", distance: null, predecessor: null },
];

/*

Creates a neat little list of objects with their respective neighbors

*/
let locations = [];
vertices.forEach((vertex) => {
  let node;

  node = {
    name: vertex.name,
    distance: vertex.distance,
    predecessor: vertex.predecessor,
    neighbors: [],
  };

  for (let i = 0; i < edges.length; i++) {
    if (edges[i][0] === vertex.name) {
      node.neighbors.push(
        vertices[vertices.findIndex((n) => n.name === edges[i][1])]
      );
    }
  }
  locations.push(node);
});

function bfs(start, end) {
  let queue = [start];
  let visited = new Set();

  while (queue.length > 0) {
    let current = queue.shift();
    if (current.name === end) {
      console.log("found: " + end);
      console.log("It took: " + visited.size + "steps");
      break;
    }

    if (!visited.has(current.name)) {
      visited.add(current.name);
      queue = queue.concat(
        locations[locations.findIndex((e) => e.name === current.name)].neighbors
      );
    }
  }
}
bfs(locations[3], "kid1");

/*
function findNode(nodeName, vertices) {
  return vertices.find((vertex) => vertex.name == nodeName);
}
findNode("myhouse", vertices);

function findAdjacent(nodeName, vertices, edges) {
  return edges
    .filter((edge) => edge.includes(nodeName))
    .map((edge) => edge.filter((node) => node != nodeName)[0])
    .map((name) => findNode(name, vertices))
    .filter((node) => node.distance == null);
}

function explored(node, adjacentNodes) {
  const current = node;
  adjacentNodes.forEach((node) => {
    node.distance = current.distance + 1;
    node.predecessor = current;
  });
  return adjacentNodes;
}

function bfs(startingNode, vertices, edges) {
  startingNode.distance = 0;
  let queue = [startingNode];
  let discovered = [startingNode];

  while (queue.length != 0) {
    let currentNode = queue.shift();
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    discovered = discovered.concat(adjacentNodes);
    explored(currentNode, adjacentNodes);
    queue = queue.concat(adjacentNodes);
  }
  return discovered;
}

console.log(bfs(vertices[3], vertices, edges));
*/
