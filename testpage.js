function median(inputArr) {
    const middle = Math.floor(inputArr.length / 2),
        sortedArray = [...inputArr].sort((a, b) => a - b);
    if(inputArr.length % 2 !== 0){
        return sortedArray[middle]
    }else{
        return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    }
}
console.log(median([1,5,6]));

// assert(median([1, 2, 3,10, 4, 5]), 3.0, "Exercise 62");
// assert(median([1, 2, 3]), 2.0, "Exercise 62");
// assert(median([1, 5, 6]), 5.0, "Exercise 62");
// assert(median([1, 2, 5, 6]), 3.5, "Exercise 62");
// addToDone("Exercise 62 is correct.")
// return inputArr.length % 2 !== 0 ? sortedArray[middle] : (sortedArray[middle - 1] + sortedArray[middle]) / 2;