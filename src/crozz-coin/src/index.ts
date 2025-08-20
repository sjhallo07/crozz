import Wallet from './wallet/wallet';
import Blockchain from './blockchain/blockchain';

const wallet = new Wallet();
const blockchain = new Blockchain();
export default {
  wallet,
  blockchain
};