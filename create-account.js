function createAccount(initialPIN, initialDeposit) {
    let balance = initialDeposit;
    let pin = initialPIN;

    return {
        checkBalance(inputPIN) {
            if (inputPIN !== pin) return "Invalid PIN.";
            return `Current balance: $${balance}.`;
        },
        deposit(inputPIN, amount) {
            if (inputPIN !== pin) return "Invalid PIN.";
            balance += amount;
            return `Successfully deposited $${amount}. Current balance: $${balance}.`;
        },
        withdraw(inputPIN, amount) {
            if (inputPIN !== pin) return "Invalid PIN.";
            if (amount > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            balance -= amount;
            return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
        },
        changePin(oldPIN, newPIN) {
            if (oldPIN !== pin) return "Invalid PIN.";
            pin = newPIN;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };
