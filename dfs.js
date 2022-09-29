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

// With stack
function DFS_S(G, V, end) {
  let stack = []; // first in last out.
  let discovered = new Set(); // discovered
  stack.push(V);

  while (stack.length > 0) {
    let v = stack.pop();

    if (v.name === end) {
      console.log("found: " + v.name);
      break;
    }

    if (!discovered.has(v.name)) {
      console.log("name is : " + v.name);
      discovered.add(v.name);
      for (let neighbor in v.neighbors) {
        stack.push(
          G[G.findIndex((l) => l.name === v.neighbors[neighbor].name)]
        );
      }
    }
  }
}

DFS_S(locations, locations[0], "nephew");

// Recursive
function DFS_R(G, V) {}
