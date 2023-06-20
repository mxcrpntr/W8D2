// Your code here


// Array.prototype.bubbleSort

Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (sorted === false) {
        sorted = true;
        for (i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                sorted = false;
                [this[i], this[i+1]] = [this[i+1], this[i]];
            }
        }
    }
    return this;
}

// String.prototype.substrings
String.prototype.substrings = function() {
    let newArray = [];
    for (let i = 0 ; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length ; j++) {
            newArray.push(this.slice(i,j));
        }
    }
    return newArray;
}

