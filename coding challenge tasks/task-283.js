// https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/
// 1935. Maximum Number of Words You Can Type
// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.
// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.
function canBeTypedWords(text, brokenLetters) {
    var words = text.split(' ');
    var count = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var canBeTypedWords_1 = true;
        for (var _a = 0, word_1 = word; _a < word_1.length; _a++) {
            var letter = word_1[_a];
            if (brokenLetters.includes(letter)) {
                canBeTypedWords_1 = false;
                break;
            }
        }
        if (canBeTypedWords_1) {
            count++;
        }
    }
    return count;
}
console.log(canBeTypedWords("hello world", "ad"));
console.log(canBeTypedWords("leet code", "lt"));
console.log(canBeTypedWords("leet code", "e"));
