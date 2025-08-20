import { Wallet } from './wallet/wallet';
import { Blockchain } from './blockchain/blockchain';

const wallet = new Wallet();
const blockchain = new Blockchain();

function init() {
    console.log("Initializing Crozz Coin application...");
    // Additional setup can be done here
}

init();