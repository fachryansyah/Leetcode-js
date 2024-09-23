const checkMonotonic = function (array){
    if (array.length <= 1) {
        return true;
    }
    
    let a = array[0];
    let b = array[1];
    let isIncrement = a >= b;
    for (let i = 2; i < array.length; i++) {
        if(b == array[i] && isIncrement) {
            return true;
        } else if(b >= array[i] && !isIncrement){
            return false;
        } else if(b <= array[i] && isIncrement) {
            return false;
        } else {
            b = array[i];
        }
    }
    return true;
}

