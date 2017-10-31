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




// test current code

let sampleArray = [[1,2,3,4],[2,3,4],[3,1,2,4],[4,1,2,3]];
contractVertex(sampleArray, 1, 2);
console.log(sampleArray);
