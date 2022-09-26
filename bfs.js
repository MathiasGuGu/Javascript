edges = [
    ['myhouse', 'momanddad'],
    ['momanddad', 'niece1'],
    ['momanddad', 'nephew'],
    ['myhouse', 'inlaws'],
    ['inlaws', 'kid2'],
    ['inlaws', 'kid1']
    ]
vertices = [
    {name: 'myhouse', distance: null, predecessor: null},
    {name: 'momanddad', distance: null, predecessor: null},
    {name: 'inlaws', distance: null, predecessor: null},
    {name: 'niece1', distance: null, predecessor: null},
    {name: 'nephew', distance: null, predecessor: null},
    {name: 'kid1', distance: null, predecessor: null},
    {name: 'kid2', distance: null, predecessor: null}
]

function findNode(nodeName, vertices){
    return vertices.find(vertex=> vertex.name == nodeName)
}
findNode('myhouse', vertices) 

function findAdjacent(nodeName, vertices, edges){
    return edges.filter(edge => edge.includes(nodeName)).map(edge => edge.filter(node =>
    node != nodeName)[0]).map(name =>
        findNode(name, vertices)).filter(node =>
            node.distance == null)
}

function explored(node, adjacentNodes){
    const current = node
    adjacentNodes.forEach(node => {
        node.distance = current.distance + 1
        node.predecessor = current
    })
    return adjacentNodes
}

function bfs(startingNode, vertices, edges){
    startingNode.distance = 0
    let queue = [startingNode]
    let discovered = [startingNode]
    
    while(queue.length != 0){
        let currentNode = queue.shift()
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
        discovered = discovered.concat(adjacentNodes);
        explored(currentNode, adjacentNodes)
        queue = queue.concat(adjacentNodes)
    }
    return discovered
}

console.log(bfs(vertices[3], vertices, edges))