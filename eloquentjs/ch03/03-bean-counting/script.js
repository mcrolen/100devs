function countBs(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'B') {
      counter++;
    }
  }
  return counter;
}

function countChar(string, char) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      counter++;
    }
  }
  return counter;
}

console.log(countChar("kakkerlak", "k"));