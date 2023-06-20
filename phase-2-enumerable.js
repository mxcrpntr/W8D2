// Array.protorype.myEach(callback)

// const callback = function(ele) {
//     console.log(ele);
// }

// Array.prototype.myEach = function(callback) {
//     for (let i = 0 ; i < this.length; i++) {
//         callback(this[i]);
//     }
// }


Array.prototype.myMap = function(callback) {
    let newArray = []
    for (i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}


// Array.prototype.myReduce(callback[, initialValue])
// const callback = function(acc, el) {
//     return acc + el;
// }

const callback = function(el) {
    return 2 * el;
}

Array.prototype.myReduce = function(callback, acc) {
    let init = 0;
    if (acc === undefined) {
        acc = this[0];
        init++;        
    } 

    for (let i = init ; i < this.length; i++) {
        acc = callback(acc,this[i]);
    }

    return acc;
}
