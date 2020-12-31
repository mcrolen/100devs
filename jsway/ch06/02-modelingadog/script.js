const dog = {
  name: 'Sampson',
  species: 'Shih Tzu',
  size: '12 lbs',

  bark() {
    return 'Woof!';
  }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);