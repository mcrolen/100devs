//FOR VERSION


const endTurns = prompt(`Turns?`);
const evenOdd = Number(prompt(`Odd/even start?`));

for (let i = 0; i < endTurns; i++) {
  console.log(i + 1);
}

for (let i = evenOdd; i <= evenOdd + 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

let validInput = prompt(`Input a number`);

while (validInput > 100 || validInput < 50 || validInput == '') {
  validInput = prompt(`Input a number`);
}

let yesNo = prompt(`Type yes or no`);

while (yesNo !== 'yes' && yesNo !== 'no') {
  yesNo = prompt(`Type yes or no`);
}


//WHILE VERSION

let turns = 1;
while (turns <= endTurns) {
  console.log(`Turn ${turns}`);
  turns++;
}

let evenWhile = evenOdd;
while (evenWhile <= evenOdd + 10) {
  if (evenWhile % 2 === 0) {
    console.log(`${evenWhile} is even`);
  } else {
    console.log(`${evenWhile} is odd`);
  }
  evenWhile++;
}