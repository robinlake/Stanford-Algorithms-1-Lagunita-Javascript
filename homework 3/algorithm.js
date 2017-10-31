// Parse text file
const fs = require('fs');
const readline = require('readline');
let adjacencyList = [];
// Create stream from text file
let input = fs.createReadStream('./kargerMinCut.txt');
const rl = readline.createInterface({
    input,
});
rl.on('line', function(line) {
	adjacencyList.push(line.split(/[ \t]+/));

	// execute remaining functions after file has been read
	if (adjacencyList.length == 200) {
		console.log(adjacencyList);
	}
});




let sampleList = "1  2  3  4 \n 2  1  3  4 \n 3  1  2  4 \n4  1  2  3"

let convertedList = sampleList.split(/ +/);

console.log(adjacencyList);
