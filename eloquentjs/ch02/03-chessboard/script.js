let size = 8;
let chessboardString = '';

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      chessboardString += '#';
    } else {
      chessboardString += ' ';
    }
  }
  chessboardString += '\n';
}

console.log(chessboardString);