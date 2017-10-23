const fs = require('fs');
const readline = require('readline');
let integerArray = [];
let sortedArray = [];
let testArray = [1,3,5,2,4,6];
let input = fs.createReadStream('./IntegerArray.txt');
let splitInversions = 0;
let nonsplitInversions = 0;
// first attempt == 2397873478
// second attempt == 2408285465
// correct answer (not achieved) == 2407905288
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
   if(integerArray.length == 100000) {
		rl.close();
		mergeSort(integerArray.slice(0,99999));
		console.log(splitInversions);
        console.log(integerArray.length);
   }
})



//function merge(a,b) {
//    let left = a;
//    let right = b;
//    let totalArray = left.length + right.length;
//    let output = [];
//
//    for (let i = 0; i < (totalArray); i++) {
//        if (left[0] <= right[0]) {
//            output.push(left.shift());
//        }else if(left.length > 0 && right.length > 0){
//            output.push(right.shift());
//            splitInversions += left.length;
//        }else if(right.length < 1){
//            output.push(left.shift());
//        }else if(left.length < 1){
//            output.push(right.shift());
//        }
//    }
//    return output;
//};

function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (parseInt(left[0]) <= parseInt(right[0])) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
			splitInversions += left.length;
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}

// Merge sort function
function mergeSort(array) {
    if(array.length < 2){
        return array;
    }

    const middle = Math.floor(array.length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

//console.log(mergeSort([10,9,8,7,6,5,4,3,2,1]), splitInversions);


//// cheater method
//let inversions = 0
//
//function getInversions(array) {
//	for (let i = 0; i < array.length; i++){
//		for (let j = i+1; j < array.length; j++) {
//            if (array[i] > array[j]) {
//                inversions += 1;
//            }
//        }
//    }
//    return inversions;
//}
//
// console.log(getInversions([2,3,1]));

