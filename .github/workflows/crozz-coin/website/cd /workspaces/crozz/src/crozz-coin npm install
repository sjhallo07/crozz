import { Wallet } from './wallet/wallet';
import { Blockchain } from './blockchain/blockchain';

const wallet = new Wallet();
const blockchain = new Blockchain();
export default {
  wallet,
  blockchain
};export interface Transaction {
    sender: string;
    recipient: string;
    amount: number;
}

export interface Block {
    index: number;
    timestamp: number;
    transactions: Transaction[];
    previousHash: string;
    hash: string;
}