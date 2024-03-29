// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/description/

// 1974. Minimum Time to Type Word Using Special Typewriter

// There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.


// Each second, you may perform one of the following operations:

// Move the pointer one character counterclockwise or clockwise.
// Type the character the pointer is currently on.
// Given a string word, return the minimum number of seconds to type out the characters in word.

function minTimeToType(word: string): number {
    let totalTime = 0;
    let currentChar = 'a';

    for (let i = 0; i < word.length; i++) {
        const targetChar = word[i];
        const clockwiseDistance = Math.abs(targetChar.charCodeAt(0) - currentChar.charCodeAt(0));
        const counterclockwiseDistance = 26 - clockwiseDistance;

        totalTime += Math.min(clockwiseDistance, counterclockwiseDistance) + 1;

        currentChar = targetChar;
    }

    return totalTime;
}

console.log(minTimeToType("abc"));
console.log(minTimeToType("bza"));
console.log(minTimeToType("zjpc"));
