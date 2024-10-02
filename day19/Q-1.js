class Account {
    constructor(accountNumber, accountHolder, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    checkBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }
}
class ATM {
    constructor(account) {
        this.account = account;
    }

    displayOptions() {
        console.log("ATM Options:");
        console.log("1. Check Balance");
        console.log("2. Deposit");
        console.log("3. Withdraw");
        console.log("4. Exit");
    }

    performOperation(operation, amount = 0) {
        switch (operation) {
            case 1:
                console.log(`Current Balance: $${this.account.checkBalance()}`);
                break;
            case 2:
                this.account.deposit(amount);
                console.log(`Deposited: $${amount}`);
                break;
            case 3:
                if (this.account.withdraw(amount)) {
                    console.log(`Withdrawn: $${amount}`);
                } else {
                    console.log("Insufficient funds or invalid amount.");
                }
                break;
            case 4:
                console.log("Exiting. Thank you!");
                break;
            default:
                console.log("Invalid option. Please choose again.");
        }
    }
}

const myAccount = new Account("123456", "John Doe", 1000);
const atm = new ATM(myAccount);


atm.displayOptions(); // Display options
atm.performOperation(1); // Check balance
atm.performOperation(2, 500); // Deposit $500
atm.performOperation(3, 200); // Withdraw $200
atm.performOperation(1); // Check balance again
atm.performOperation(3, 900); // Attempt to withdraw more than balance
atm.performOperation(4); // Exit
