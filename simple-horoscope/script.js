const monthSelector = document.querySelector('#month');
const daySelector = document.querySelector('#day');
const result = document.querySelector('#resultField');

monthSelector.addEventListener('change', function() {
  setMonth(this.value);
});

daySelector.addEventListener('change', function() {
  setDay(this.value, monthSelector.value);
});


function setMonth(month) {
  console.log(month);
  if (month === 'default') {
    daySelector.innerHTML = '<option value="default" selected>Day</option>';
  }else if (month === 'apr' || month === 'jun' || month === 'sep' || month === 'nov') {
    makeDays(30);
  } else if (month ==='feb') {
    makeDays(29);
  } else {
    makeDays(31);
  }
  daySelector.disabled = (month === 'default' ? true : false);
}

function makeDays(days) {
  daySelector.innerHTML = '<option value="default" selected>Day</option>';
  for (let i = 1; i <= days; i++) {
  daySelector.innerHTML += `<option value=${i}>${i}</option>`;
  }
}

function setDay(day, month) {
  console.log(month + ' ' + day);
  if (day) {
    if ((month === 'mar' && day > 20) || (month === 'apr' && day < 20)) {
      result.innerText = 'ARIES';
    } else if ((month === 'apr' && day > 19) || (month === 'may' && day < 21)) {
      result.innerText = 'TAURUS';
    } else if ((month === 'may' && day > 20) || (month === 'jun' && day < 21)) {
      result.innerText = 'GEMINI';
    } else if ((month === 'jun' && day > 20) || (month === 'jul' && day < 23)) {
      result.innerText = 'CANCER';
    } else if ((month === 'jul' && day > 22) || (month === 'aug' && day < 23)) {
      result.innerText = 'LEO';
    } else if ((month === 'aug' && day > 22) || (month === 'sep' && day < 23)) {
      result.innerText = 'VIRGO';
    } else if ((month === 'sep' && day > 22) || (month === 'oct' && day < 23)) {
      result.innerText = 'LIBRA';
    } else if ((month === 'oct' && day > 22) || (month === 'nov' && day < 23)) {
      result.innerText = 'SCORPIO';
    } else if ((month === 'nov' && day > 22) || (month === 'dec' && day < 22)) {
      result.innerText = 'SAGITTARIUS';
    } else if ((month === 'dec' && day > 21) || (month === 'jan' && day < 20)) {
      result.innerText = 'CAPRICORN';
    } else if ((month === 'jan' && day > 19) || (month === 'feb' && day < 19)) {
      result.innerText = 'AQUARIUS';
    } else if ((month === 'feb' && day > 18) || (month === 'mar' && day < 21)) {
      result.innerText = 'PISCES';
    } else {
      result.innerText = 'YOU DONE FUCKED UP';
    }
  }
}