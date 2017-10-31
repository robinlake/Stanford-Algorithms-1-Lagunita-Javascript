// Parse text file
const fs = require('fs');
const readline = require('readline');
const promise = require('promise');
let adjacencyList = [];
// Create stream from text file
let input = fs.createReadStream('./kargerMinCut.txt');
const rl = readline.createInterface({
    input,
});

// Parse file into adjacency list
rl.on('line', function(line) {
	adjacencyList.push(line.split(/[ \t]+/));

	// execute remaining functions after file has been read
	if (adjacencyList.length == 200) {
		//console.log(adjacencyList);
	}
});


/////////////////////////////////
// Random contraction algorithm
/////////////////////////////////


// Combines two vertices into one and removes loops
var contractVertex = (graph, v1, v2) => {
    let vertex1 = graph[v1];
    console.log ('vertex1 = ' + vertex1);
    let vertex2 = graph[v2];
    console.log ('vertex2 = ' + vertex2);
    // add all edges from the second vertex to the first
    for (let i = 1; i < vertex2.length; i++) {
        vertex1.push(vertex2[i]);
    }
    console.log('vertex1 now = ' + graph[v1]);
    // remove any duplicate edges (loops)
	for (let i = 1; i < vertex1.length; i++) {
        for (let j =2; j < vertex1.length; j++) {
            if(vertex1[i] == vertex1[j]) {
                vertex1.splice(j, 1);
            }
        }
    }
    graph.splice(v2, 1);
}

// Combines two vertices with a shared edge into one and removes loops
let contractEdge = (graph, v1, v2) => {
    let vertex1;
    let vertex2;
    for (let i = 0; i < graph.length; i++) {
        if (graph[i][0] == v1) {
            vertex1 = graph[i];
        }
        if (graph[i][0] == v2) {
            vertex2 = graph[i];
        }
    }
    // add all edges from the second vertex to the first
    for (let i = 1; i < vertex2.length; i++) {
        vertex1.push(vertex2[i]);
    }
    console.log('vertex1 = ' + vertex1);
    // Remove any parallel edges and loops
	for (let i = 1; i < vertex1.length; i++) {
        for (let j =2; j < vertex1.length; j++) {
            if(vertex1[i] == vertex1[j]) {
                vertex1.splice(j, 1);
            }
        }
    }
    console.log('vertex2 = ' + vertex2);
    graph.splice((vertex2[0] -1), 1);
}

// select random edge
let randomEdge = (graph) => {
    // Select random vertex from graph
    let random = Math.floor(Math.random()*graph.length);
    let randomVertex = graph[random];
    // Select vertex adjacent to first vertex
    let random2 = Math.ceil(Math.random()*(randomVertex.length-1));
    let randomVertex2 = randomVertex[random2];
    // Return edge connecting two vertices
    return [randomVertex[0], randomVertex2];
}


// Implement Karger's algorithm
let KargersAlgorithm = (graph) => {
    if (graph.length <= 2) {
        return ;
    }else {
        // Call random edge
        let edgeToContract = randomEdge(graph);
        console.log('edge to contract = ' + edgeToContract);
        contractEdge(graph, edgeToContract[0], edgeToContract[1]);
        console.log(graph);
    }
}


// test current code

let sampleArray = [[1,2,3,4],[2,3,4],[3,1,2,4],[4,1,2,3]];
KargersAlgorithm(sampleArray);
