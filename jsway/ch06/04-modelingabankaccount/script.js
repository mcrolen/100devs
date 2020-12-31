const account = {
  name: 'Alex',
  balance: 0,

  credit(num) {
    this.balance += num;
  },

  describe() {
    console.log(`owner: ${this.name}, balance ${this.balance}`);
  }
}

account.describe();
account.credit(250);
account.credit(-80);
account.describe();