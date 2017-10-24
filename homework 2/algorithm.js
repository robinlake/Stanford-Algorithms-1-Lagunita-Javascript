let sampleArray = [9,1,4,2,6,3,8,7,5];

var quickSort = (array) => {
    if (array.length == 1) {
        return array;
    }

    else {
        let random = Math.floor(Math.random()*array.length);
        let pivot = parseInt(array[random]);
        console.log(pivot);
        let border = 1;
        let left = 1;
        let right = 2;
        array[random] = array[0];
        array[0] = pivot;
        for (let i = 1; i < array.length; i++) {
            if (array[i] > pivot) {
                let temp = array[right];
                array[right] = array[i];
                array[i] = temp;
                right++;
            }
            else {
                let temp = array[left];
                array[left] = array[i];
                array[i] = temp;
                left++;
            }
        }
        console.log('left = ' + left);
        console.log('right = ' + right);
        return array;
    }
}

console.log(quickSort(sampleArray));
