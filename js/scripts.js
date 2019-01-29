function Database(){
  this.accounts = [];
  this.id = 0;
}

Database.prototype.assignId = function(account) {
  this.id += 1;
  account.id = this.id;
}

Database.prototype.addAccount = function(account) {
  this.assignId(account);
  this.accounts.push(account);
}

Database.prototype.findAccount = function(id) {

  for(var i = 0; i < this.accounts.length; i++) {
    if(this.accounts[i]) {

      if(this.accounts[i].id == id) {

        return this.accounts[i];

      }
    }
  }

  return false;
}

Database.prototype.removeAccount = function(id) {

  for(var i = 0; i < this.accounts.length; i++) {
    if(this.accounts[i]){
      if(this.accounts[i].id == id) {
        delete this.accounts[i];
        return true;
      }
    }
  }
  return false;
}

function Account(user, balance) {
  this.user = user;
  this.balance = balance;
}

Account.prototype.deposit = function(value){
  if(value > 0) {
  this.balance += value;
  } else {
    return "No Deposit Available"
  }
}

Account.prototype.withdraw = function(value){
  if (this.balance - value > -100) {
    this.balance -= value;
  } else {
    return "No Funds to Withdraw"
  }
}

Account.prototype.transfer = function(secondAccount, transferAmount) {
  console.log(secondAccount);
  if(this.balance > transferAmount) {
    this.balance -= transferAmount;
    secondAccount.balance += transferAmount;
  }
}

var newDatabase = new Database();

var newUser = new Account("user1", 100);
var newUser2 = new Account("user2", 300);
newDatabase.addAccount(newUser);
newDatabase.addAccount(newUser2);





newUser2.transfer(newDatabase.findAccount(1), 100);


console.log(newDatabase);
