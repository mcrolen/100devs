function reverseArray(anArray) {
  const newArray = [];
  for (let i = 0; i < anArray.length; i++) {
    newArray.unshift(anArray[i]);
  }
  return newArray;
}

function reverseArrayInPlace(anArray) {
  let tempValue;
  for (let i = 0 ; i < Math.floor(anArray.length / 2); i++) {
    tempValue = anArray[i];
    anArray[i] = anArray[anArray.length - 1 - i];
    anArray[anArray.length - 1 - i] = tempValue;
  }
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = ["A", "B", "C", 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);