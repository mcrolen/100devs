const baseSelector = document.querySelector('#baseCurrency');
const compSelector = document.querySelector('#secondCurrency');
const firstResult = document.querySelector('#firstResult');
const secondResult = document.querySelector('#secondResult');
const API_URL = 'https://api.ratesapi.io/api/latest'

baseSelector.addEventListener('change', function () {
  getRates(this.value, compSelector.value);
})

compSelector.addEventListener('change', function () {
  getRates(baseSelector.value, this.value);
})

fetch(API_URL)
  .then(res => res.json())
  .then(data => buildSelector(Object.keys(data.rates)))
  .catch(err => {
    console.log(`error ${err}`);
  })

const buildSelector = (currencies) => {
  currencies.forEach(element => {
    let newOption = `<option value="${element}">${element}</option>`
    baseSelector.innerHTML += newOption;
    compSelector.innerHTML += newOption;
  });
}

const getRates = (base, comp) => {
  if (base && comp) {
    fetch(API_URL + '?base=' + base + '&symbols=' + comp)
      .then(res => res.json())
      .then(data => secondResult.innerText = data.rates[comp]);
  }
}