let sampleArray = [9,1,4,2,6,3,8,7,5];

var quickSort = (array,l,r) => {
    if (r-l < 1) {
        return;
    }

    let random = Math.floor(Math.random()*(r-l));
    let pivot = parseInt(array[random]);
    console.log(pivot);
    let left = l+1;
    let right = l+1;
    array[random] = array[l];
    array[l] = pivot;
    for (let i = l+1; i < r+1; i++) {
        if (array[i] < pivot) {
            let temp = array[left];
            array[left] = array[i];
            array[i] = temp;
            left++;
        }
        else {
            right++;
        }
    }
    let temp = array[left - 1];
    array[left - 1] = array[l];
    array[l] = temp;
    //quickSort(array, l, r - 1);
    //quickSort(array, left + 1, r);
    return array;
}

console.log(quickSort(sampleArray,0,9));
