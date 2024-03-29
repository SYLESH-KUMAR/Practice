function maxProduct(arr) {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements");
    }
    var maxProduct = arr[0] * arr[1];
    for (var i = 1; i < arr.length - 1; i++) {
        var currentProduct = arr[i] * arr[i + 1];
        maxProduct = Math.max(maxProduct, currentProduct);
    }
    return maxProduct;
}
var sequence = [9, 9, 4, 5];
console.log("The maximum product: ".concat(maxProduct(sequence)));
