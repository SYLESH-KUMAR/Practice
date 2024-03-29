function maxProduct(arr: number[]): number {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements");
    }

    let maxProduct = arr[0] * arr[1];

    for (let i = 1; i < arr.length - 1; i++) {
        const currentProduct = arr[i] * arr[i + 1];
        maxProduct = Math.max(maxProduct, currentProduct);
    }

    return maxProduct;
}

const sequence = [9, 9, 4, 5];
console.log(`The maximum product: ${maxProduct(sequence)}`);
