const values = [3, 11, 7, 2, 9, 10];
let maximum = 0;

values.forEach(value => {
  if (value > maximum) {
    maximum = value;
  }
});

console.log(maximum);