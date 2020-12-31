const vowels = 'aeiou';
const word = prompt('Word?');
let wordLC = word.toLowerCase();
let vowelCount = 0;

for (let i = 0; i < wordLC.length; i++) {
  if (vowels.indexOf(wordLC[i]) !== -1) {
    vowelCount++;
  }
}

const wordReverseArray = [];
for (let j = 0; j < word.length; j++) {
  wordReverseArray[word.length - 1 - j] = word[j];
}
let wordReverse = wordReverseArray.join('');

const checkPal = (word1, word2) => word1 === word2 ? 'yes' : 'no';

console.log(`Length: ${word.length}`);
console.log(`Lowercase: ${wordLC}`);
console.log(`Uppercase: ${word.toUpperCase()}`);
console.log(`Vowels: ${vowelCount}`);
console.log(`Backwards: ${wordReverse}`);
console.log(`Palindrome: ${checkPal(wordLC, wordReverse.toLowerCase())}`);