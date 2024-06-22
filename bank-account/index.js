class BankAccount {
    constructor(accountNumber, accountName, balance = 0) {
        this.accountName = accountName
        this.accountNumber = accountNumber
        this.balance = balance
    }

    deposit(amount) {
        if(amount > 0) {
            this.balance = this.balance+amount
            console.log(`new balance ${this.balance}`)
        } else {
            console.log("must be positive")
        }
    }

    withdraw(amount) {
        if(amount > this.balance) {
            console.log("balance not enough")
        } else {
            this.balance -= amount
            console.log(`new balance ${this.balance}`)
        }
    }

}