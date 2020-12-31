const vowels = 'aeiou';
const word = prompt('Word?');
let wordLC = word.toLowerCase();
let vowelCount = 0;

for (let i = 0; i < wordLC.length; i++) {
  if (vowels.indexOf(wordLC[i]) !== -1) {
    vowelCount++;
  }
}

console.log(`Length: ${word.length}`);
console.log(`Lowercase: ${wordLC}`);
console.log(`Uppercase: ${word.toUpperCase()}`);
console.log(`Vowels: ${vowelCount}`);