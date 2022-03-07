function bubbleSort(arr) {
    // step 1. move from left to right in the array starting at index 0
    for (j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j; i++) {
            // step 2. compare the value at the current index with the value at the next- if the value is greater than the next
            if (arr[i] > arr[i + 1]) {
                // if out of order, swap the value at the current index with the value of the next.
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]] // = this line is "SWAP", this is called a "destructure swap"
            }
        }
    }
    return arr
}



console.log(bubbleSort([5, 23, 0, 12, 8, 6])) // [0,5,6,8,12,23]