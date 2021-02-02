const monthSelector = document.querySelector('#month');
const daySelector = document.querySelector('#day');
const result = document.querySelector('#resultField');
const horoscope = document.querySelector('#horoscope');
const API_URL = 'http://horoscope-api.herokuapp.com/horoscope/'

monthSelector.addEventListener('change', function () {
  setMonth(this.value);
});

daySelector.addEventListener('change', function () {
  setDay(this.value, monthSelector.value);
});


function setMonth(month) {
  daySelector.disabled = false;
  if (month === 'default') {
    daySelector.innerHTML = '<option value="default" selected>Day</option>';
    daySelector.disabled = true;
  } else if (month === 'apr' || month === 'jun' || month === 'sep' || month === 'nov') {
    makeDays(30);
  } else if (month === 'feb') {
    makeDays(29);
  } else {
    makeDays(31);
  }
}

function makeDays(days) {
  daySelector.innerHTML = '<option value="default" selected>Day</option>';
  for (let i = 1; i <= days; i++) {
    daySelector.innerHTML += `<option value=${i}>${i}</option>`;
  }
}

function setDay(day, month) {
  let sunSign = '';
  if (day !== 'default') {
    if ((month === 'mar' && day > 20) || (month === 'apr' && day < 20)) {
      sunSign = 'aries';
    } else if ((month === 'apr' && day > 19) || (month === 'may' && day < 21)) {
      sunSign = 'taurus';
    } else if ((month === 'may' && day > 20) || (month === 'jun' && day < 21)) {
      sunSign = 'gemini';
    } else if ((month === 'jun' && day > 20) || (month === 'jul' && day < 23)) {
      sunSign = 'cancer';
    } else if ((month === 'jul' && day > 22) || (month === 'aug' && day < 23)) {
      sunSign = 'leo';
    } else if ((month === 'aug' && day > 22) || (month === 'sep' && day < 23)) {
      sunSign = 'virgo';
    } else if ((month === 'sep' && day > 22) || (month === 'oct' && day < 23)) {
      sunSign = 'libra';
    } else if ((month === 'oct' && day > 22) || (month === 'nov' && day < 23)) {
      sunSign = 'scorpio';
    } else if ((month === 'nov' && day > 22) || (month === 'dec' && day < 22)) {
      sunSign = 'sagittarius';
    } else if ((month === 'dec' && day > 21) || (month === 'jan' && day < 20)) {
      sunSign = 'capricorn';
    } else if ((month === 'jan' && day > 19) || (month === 'feb' && day < 19)) {
      sunSign = 'aquarius';
    } else if ((month === 'feb' && day > 18) || (month === 'mar' && day < 21)) {
      sunSign = 'pisces';
    } else {
      alert('ERROR')
    }
    getHoroscope(sunSign);
  }
}

function getHoroscope(sign) {
  result.innerText = sign.toUpperCase();
  fetch(API_URL + 'today/' + sign)
    .then(res => res.json())
    .then(data => {
      result.innerText = data.sunsign.toUpperCase();
      horoscope.innerText = data.horoscope;
    })
    .catch(err => {
      console.log(`error ${err}`);
  });
}