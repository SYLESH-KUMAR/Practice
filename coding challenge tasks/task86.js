function addBinary(a, b) {
    var carry = 0;
    var result = '';
    var i = a.length - 1;
    var j = b.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        var digitA = i >= 0 ? parseInt(a[i]) : 0;
        var digitB = j >= 0 ? parseInt(b[j]) : 0;
        var sum = digitA + digitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }
    return result;
}
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
