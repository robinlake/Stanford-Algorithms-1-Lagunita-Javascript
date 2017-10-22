const fs = require('fs');
const readline = require('readline');
let integerArray = [];
let testArray = [1,3,5,2,4,6];
let input = fs.createReadStream('./IntegerArray.txt');
let splitInversions = 0;
let nonsplitInversions = 0;

//const rl = readline.createInterface({
//    input,
//});
//
//if (fs.existsSync('./output.txt')) {
//fs.unlinkSync('./output.txt');
//};
//
//// append each line to array
//rl.on('line', function(line) {
//   integerArray.push(line);
//   fs.appendFile('output.txt', line.concat('\n'), (err) =>{
//       if (err) throw err;
//   });
//   if(integerArray.length == 100000) {
//       rl.close();
//       console.log('length' + integerArray.length);
//   }
//})



function merge(a,b) {
    let left = a;
    let right = b;
    let totalArray = left.length + right.length;
    let output = [];

    for (let i = 0; i < (totalArray); i++) {
        if (left[0] <= right[0]) {
            output.push(left.shift());
        }else if(left.length > 0 && right.length > 0){
            output.push(right.shift());
            splitInversions += left.length;
        }else if(right.length < 1){
            output.push(left.shift());
        }else if(left.length < 1){
            output.push(right.shift());
        }
    }
    return output;
};

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

console.log(mergeSort([6,5,4,3,2,1]), splitInversions);
