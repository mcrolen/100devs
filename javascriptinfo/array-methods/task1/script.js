// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str) {
  let strArray = str.split('-');
  const capArray = strArray.map((element, index) => {
    if (index !== 0) {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    } else {
      return element.toLowerCase();
    }
  });
  let newString = capArray.join('');
  console.log(newString);
}

camelize('THE-CAPS-TEST');