const words = [];

do {
  let currentWord = prompt('Word?');
  if (currentWord !== 'stop') {
    words.push(currentWord);
  } else {
    break;
  }
} while (true);

words.forEach(word => {
  console.log(word);
})