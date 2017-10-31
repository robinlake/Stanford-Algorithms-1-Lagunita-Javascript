// accessing file and converting into array
const fs = require('fs'); 
const readline = require('readline'); 
let input = fs.createReadStream('./QuickSort.txt');
let integerArray = [];

const rl = readline.createInterface({
    input,
});

if (fs.existsSync('./output.txt')) {
fs.unlinkSync('./output.txt');
};

if (fs.existsSync('./sorted.txt')) {
fs.unlinkSync('./sorted.txt');
};


// append each line to array
rl.on('line', function(line) {
   integerArray.push(line);
   fs.appendFile('output.txt', line.concat('\n'), (err) =>{
       if (err) throw err;
   });
   if(integerArray.length == 10000) {
        rl.close();
        console.log(integerArray.length);
		quickSort(integerArray, 0, integerArray.length -1);
		console.log(integerArray.slice(0,100));
		console.log('comparisons = ' + comparisons);
   }
})

/////////////////////////
// quicksort algorithm
/////////////////////////

let sampleArray = [3,1,4,2,9,10,8,6,7,5];
let comparisons = 0;

function swap(array,a,b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function selectPivot(array, first, last) {
    //let random = Math.floor(Math.random()*(last - first)); 
    random = last;
    return random;
}

function partition(array, pivot, left, right) {
	let pivotValue = array[pivot];
    //console.log('pivot ='+ pivot);
    //console.log('pivotValue =' + pivotValue);
	let partitionIndex = left;
    swap(array, pivot, right);

	for(let i = left; i < right; i++) {
        if(parseInt(array[i]) < parseInt(pivotValue)) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
	}
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function quickSort(array, left, right) {
    if (left >= right) {
        return
    };
    comparisons += (right - left) -1;
    var pivot = selectPivot(array, left, right);
    let partitionIndex = partition(array, pivot, left, right);
    quickSort(array, left, partitionIndex -1); 
    quickSort(array, partitionIndex + 1, right);
}

//quickSort(sampleArray, 0, 9);
//console.log(sampleArray);
//console.log('comparisons = '+ comparisons);

