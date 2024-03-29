function longestAscendingSequence(arr) {
    var currentLength = 1;
    var maxLength = 1;
    var currentNum = arr[0];
    var sequence = [currentNum];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > currentNum) {
            currentNum = arr[i];
            currentLength++;
            sequence.push(currentNum);
        }
        else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
            currentLength = 1;
            sequence = [arr[i]];
        }
    }
    if (currentLength > maxLength) {
        maxLength = currentLength;
    }
    return { length: maxLength, sequence: sequence.slice(0, maxLength) };
}
var arr = [34, 1, 12, 0, 39];
var result = longestAscendingSequence(arr);
console.log("The max value is : ".concat(result.length));
console.log("".concat(result.length, " numbers in ascending order"));
console.log("".concat(result.sequence.join(' '), " using typescript."));
