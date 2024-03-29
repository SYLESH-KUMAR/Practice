// https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/

// 1935. Maximum Number of Words You Can Type

// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

function canBeTypedWords(text: string, brokenLetters: string): number {
    const words = text.split(' ');
    let count = 0;

    for (const word of words) {
        let canBeTypedWords = true;
        for (const letter of word) {
            if (brokenLetters.includes(letter)) {
                canBeTypedWords = false;
                break;
            }
        }
        if (canBeTypedWords) {
            count++;
        }
    }

    return count;
}

console.log(canBeTypedWords("hello world", "ad"));
console.log(canBeTypedWords("leet code", "lt")); 
console.log(canBeTypedWords("leet code", "e"));
