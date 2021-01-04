function range(start, end, step = (start > end) ? -1 : 1) {
  let array = [];
  if (step === 0 || (start > end && step > 0) || (start < end && step < 0))  {
    console.log('Invalid params');
  } else if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

function sum(numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(range(1, 10, 2));