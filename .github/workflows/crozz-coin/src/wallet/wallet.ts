import Wallet from './wallet/wallet';
import Blockchain from './blockchain/blockchain';

class wallet {
    private balance: number;
    private transactions: Array<{ amount: number; to: string; from: string }>;

    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    createWallet(): string {
        // Logic to create a new wallet (e.g., generate a new address)
        return "New wallet created"; // Placeholder return value
    }

    getBalance(): number {
        return this.balance;
    }

    sendCoins(amount: number, to: string): string {
        if (amount > this.balance) {
            return "Insufficient balance";
        }
        this.balance -= amount;
        this.transactions.push({ amount, to, from: "currentAddress" }); // Placeholder for current address
        return `Sent ${amount} coins to ${to}`;
    }
}

export default Wallet;