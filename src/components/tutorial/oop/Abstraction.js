class Payment {
  constructor(amount) {
    this.amount = amount;
  }
  pay() {
    throw new Error("pay() method must be implemented");
  }
}

class StripePayment extends Payment {
  constructor(amount, cardNumber) {
    super(amount);
  }
  pay() {
    console.log(`Paying $${this.amount} via Stripe`);
  }
}

class PaypalPayment extends Payment {
  constructor(amount) {
    super(amount);
  }
  pay() {
    console.log(`Paying $${this.amount} via paypal`);
  }
}

const payment1 = new StripePayment(100);
payment1.pay();

const payment2 = new PaypalPayment(100);
payment2.pay();
