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
    console.log('pivot ='+ pivot);
    console.log('pivotValue =' + pivotValue);
	let partitionIndex = left;
    swap(array, pivot, right);

	for(let i = left; i < right; i++) {
        if(array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            //array[i] = 9;
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
    //quickSort(array, left, right -1);
    //console.log(sampleArray);
}

quickSort(sampleArray, 0, 9);

//swap(sampleArray, 0, 9);
console.log(sampleArray);
console.log('comparisons = '+ comparisons);

