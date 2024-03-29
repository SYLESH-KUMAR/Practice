function longestAscendingSequence(arr: number[]): { length: number; sequence: number[] } {
    let currentLength = 1;
    let maxLength = 1;
    let currentNum = arr[0];
    let sequence: number[] = [currentNum];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentNum) {
            currentNum = arr[i];
            currentLength++;
            sequence.push(currentNum);
        } else {
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

const arr = [34, 1, 12, 0, 39];
const result = longestAscendingSequence(arr);

console.log(`The max value is : ${result.length}`);
console.log(`${result.length} numbers in ascending order`);
console.log(`${result.sequence.join(' ')} using typescript.`);
