// =====================================================
//  Lesson 31 — Wallet Class & Fake Financial Freedom
//  Featuring: Balance, Transactions & Mild Regret
// =====================================================

// --- Class: Wallet ---
// A tiny "bank" that stores your money.
// No interest, no overdraft, no joy.
class Wallet {
  constructor() {
    // "Private" properties (not really private, just socially awkward)
    this._balance = 0;
    this._transactions = [];
  }

  // Deposit money into the wallet
  // The only moment in life where numbers increase
  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  // Withdraw money (the usual direction money goes)
  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds');   // Story of everyone’s life
      return;
    }

    this._processWithdraw(amount);
    this._balance -= amount;
  }

  // --- Internal methods (nobody talks about them) ---

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this._transactions.push({
      type: 'deposit',
      amount: amount
    });
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);
    this._transactions.push({
      type: 'withdraw',
      amount: amount
    });
  }

  // --- Getters (read-only doom) ---
  get balance() {
    return this._balance;  // Returns how broke you are
  }

  get transactions() {
    return this._transactions; // Financial history nobody asked for
  }
}

// --- Demo ---
// Creating a wallet (digital poverty simulator)
const wallet = new Wallet();

wallet.deposit(300);   // +300 dopamine
wallet.withdraw(50);   // -50 sadness

console.log(wallet.balance);       // logs: 250
console.log(wallet.transactions);  // logs entire transaction list
