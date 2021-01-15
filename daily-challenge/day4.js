// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 

function getOdds(array) {
  let oddArray = array.filter(elem => elem % 2 !== 0)
  return oddArray;
}

console.log(getOdds([1,2,3,4,5,6,7,8,9,69,420]));