function Stopwatch() {
  let startTime, endTime, duration = 0;
  
  this.start = function() {
    if (startTime) {
      console.log('You already started!');
      return;
    }
    startTime = new Date();
  };

  this.stop = function () {
    if (!startTime) {
      console.log('You haven\'t started!');
      return;
    };
    endTime = new Date();
    duration += (endTime.getTime() - startTime.getTime()) / 1000;
    startTime = 0; 
  }

  this.reset = function() {
    if (!duration) {
      console.log('There is no time!');
      return;
    }  
      duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  })
}


// My solution to running a timer. More complicated than it needed to be.
// let timer = new Date();

// function setDate() {
//   timer = new Date();
// };

// setInterval(setDate, 1000);

const sw = new Stopwatch();


// Scratch pad for follow-along 
//  // Factory Function
//  function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log('draw');
//     }
//   };
// }
// const circle = createCircle(1);

// // Constructor Function
// function Circle(radius) { 
//   this.radius = radius;
//   this.defaultLocation = { x: 0, y: 0 };

//   this.computeOptimumLocation = function() {
//     // ...
//   };

//   this.draw = function() {
//     this.computeOptimumLocation();

//     console.log('draw');
//   }
// }
// const another = new Circle(1);

