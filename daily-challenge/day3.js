// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function. 

namesList = []

function addName(name) {
  namesList.push(name);
  console.log(`Congrats ${name}! You've been added to the list at position #${namesList.length}!`);
}