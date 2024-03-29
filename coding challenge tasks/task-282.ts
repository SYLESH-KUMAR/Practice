// https://leetcode.com/problems/palindrome-number/description/

// 9. Palindrome Number

// Given an integer x, return true if x is a 
// palindrome and false otherwise.

 
function isPalindrome(x: number): boolean {
   
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let original = x;

    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));