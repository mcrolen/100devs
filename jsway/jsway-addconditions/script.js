const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const enteredDay = document.querySelector('#dayOfWeek');
const resultArea = document.querySelector('#putDaTextHere');

document.querySelector('#submitIt').addEventListener('click', () => {
  const indexFound = daysOfWeek.indexOf(enteredDay.value);
  if (indexFound !== -1) {
    const newDay = indexFound + 1;
    const index = (newDay == daysOfWeek.length) ? 0 : newDay;
    resultArea.innerText = daysOfWeek[index].charAt(0).toUpperCase() + daysOfWeek[index].slice(1);
  } else {
    console.log('Requires valid day');
  }
});

const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const newTime = document.querySelector('#whatsTheTime');

document.querySelector('#getTheTime').addEventListener('click', () => {
  let newHours = Number(hours.value);
  let newMinutes = Number(minutes.value);
  let newSeconds = Number(seconds.value) + 1;
  if (newSeconds > 59) {
    newSeconds = 0;
    newMinutes++;
    if (newMinutes > 59) {
      newMinutes = 0;
      newHours++;
      if (newHours > 23) {
        newHours = 0;
      }
    }
  }
  newTime.innerText = `${newHours}h ${newMinutes}m ${newSeconds}s`;
})