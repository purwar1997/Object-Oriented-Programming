// classes in JS
// class is just a syntactic sugar or an easy way to create objects
// because under the hood JS still create objects by prototype method

class Account {
  constructor(owner, accNo, balance) {
    this.accHolder = owner;
    this.accNo = accNo;
    this.accBalance = balance;

    // methods can be defined inside or outside of constructor function
    // inside contructor(), this keyword has to be used
    // methods defined inside constructor() won't be inside __proto__ property

    this.checkBalance = function () {
      console.log(`${this.accHolder}, your balance is ${this.accBalance} INR.`);
      return this; // current object will be returned to allow method chaining
    };
  }

  // outside constructor(), this keyword is not used
  // methods defined ouside constructor() will be inside __proto__ property

  depositMoney(amount) {
    this.accBalance += amount;
    console.log(`${amount} has been deposited to your account. Now your balance is ${this.accBalance} INR.`);
    return this;
  }

  withdrawMoney(amount) {
    if (this.accBalance >= amount) {
      this.accBalance -= amount;
      console.log(`${amount} has been withdrawn from your account. Now your balance is ${this.accBalance} INR.`);
    } else {
      console.log(`${this.accHolder}, you don't have sufficient balance`);
    }
    return this;
  }

  transferMoney(amount, beneficiary) {
    if (this.accBalance >= amount) {
      this.accBalance -= amount;
      beneficiary.accBalance += amount;
      console.log(
        `INR ${amount} has been tranferred from your account to ${beneficiary.accHolder}'s account. Now your balance is ${this.accBalance}`
      );
    } else {
      console.log(
        `${this.accHolder}, you don't have sufficient balance to make transfer to ${beneficiary.accHolder}'s account`
      );
    }
    return this;
  }

  // static method
  // can't be called upon objects but can be called upon classes
  static typesOfAcc() {
    console.log(`Only savings and current account can be opened`);
  }
}

const account1 = new Account('Shubham', '01630000120', 3000000);
const account2 = new Account('Kapil', '0163000001', 100);

account1.checkBalance();
account1.depositMoney(1000);
account1.withdrawMoney(100);
account2.withdrawMoney(200);

account2.depositMoney(20000);
account2.checkBalance();
account2.withdrawMoney(200);

account1.transferMoney(10000, account2);
account2.checkBalance();

account2.transferMoney(30000, account1);

// can't be called upon objects account1 and account2
// account1.typesOfAcc()

// can only be called upon class Account
Account.typesOfAcc();

// class inheritance
// child class Bank will inherit all the properties and methods of its parent class Account

class Bank extends Account {
  constructor(name, location, owner, accNo, balance) {
    // super() will invoke constructor() of its parent class Account and args will be passed
    super(owner, accNo, balance);
    this.bankName = name;
    this.location = location;

    // ouside __proto__
    this.bankInfo = function () {
      return `${this.bankName} is located in ${this.location}`;
    };
  }

  // inside __proto__
  contains() {
    return `${this.bankName} has ${this.accHolder}'s account`;
  }

  // can't be called upon objects bank1 and bank2
  // can only be called upon Bank class
  static bestBank() {
    console.log(`CitiBank is the best`);
  }
}

const bank1 = new Bank('PNB', 'Etawah', 'Sandeep', '10646500123', 500000);
const bank2 = new Bank('IDBI', 'Noida', 'Tapas', '106566777655', 1000);

bank1.transferMoney(100, account2);
bank2.contains();
bank1.bankInfo();
Bank.bestBank();

// method chaining
// only possible if an object is returned

account1.checkBalance().depositMoney(100).depositMoney(10000).withdrawMoney(1000);
account2.checkBalance().transferMoney(20000, account1).checkBalance();

bank1.checkBalance().depositMoney(100).transferMoney(500000, account1);
account1.checkBalance();
