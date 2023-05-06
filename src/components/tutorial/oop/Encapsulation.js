class Wallet {
  #balance = 0; //private field
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  getBalace() {
    return this.#balance;
  }
}

const myWallet = new Wallet(200);
console.log(myWallet.getBalace()); // Output :200
