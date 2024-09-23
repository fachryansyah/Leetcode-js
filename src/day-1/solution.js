function sortedSquarredArray(array){
    //write code here.make sure to return desired array 
    const newArr = new Array(array.length).fill(0);
    let leftIndex = 0;
    let rightIndex = array.length-1;
    for(let i = array.length-1; i >= 0; i--) {
        const leftSquared = array[leftIndex] * array[leftIndex];
        const rightSquared = array[rightIndex] * array[rightIndex];
        if (leftSquared > rightSquared) {
            newArr[i] = leftSquared;
            leftIndex++;
        } else {
            newArr[i] = rightSquared;
            rightIndex--;
        }
    }
    console.log('newArr = ', newArr);
    return newArr;
}