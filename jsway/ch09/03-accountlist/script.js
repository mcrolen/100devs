class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  credit(num) {
    this.balance += num;
  }

  describe() {
    console.log(`owner: ${this.name}, balance: ${this.balance}`);
  }
}

const accounts = [new Account('Sean'), new Account('Brad'), new Account('Georges')];

accounts.forEach((individual) => {
  individual.credit(1000);
  individual.describe();
} );