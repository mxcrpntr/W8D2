// Your code here

// Array.prototype.uniq


Array.prototype.uniq = function() {
    let newArray = [];
    this.forEach(function(el) {
        if (!newArray.includes(el)) {
            newArray.push(el);
        }
    });
    return newArray;
}

// Array.prototype.twosum

Array.prototype.twoSum = function() {
    let newArray = [];
    for (let i = 0 ; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length ; j++) {
            if (this[i] + this[j] === 0) {
                newArray.push([i,j]);
            }
        }
    }
    return newArray;
}

// Array.prototype.transpose

Array.prototype.transpose = function() {
    let newArray = Array.from(Array(this.length), () => []);
    for (let i = 0 ; i < this.length; i++) {
        for (let j = 0; j < this.length ; j++) {
            newArray[j].push(this[i][j]);
        }
    }
    return newArray;
}