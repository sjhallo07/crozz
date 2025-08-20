// Phantom wallet integration placeholder
// You can add Phantom wallet related imports or logic here when needed.
import crypto from 'crypto';

class Block {
    constructor(public index: number, public previousHash: string, public timestamp: number, public data: any, public hash: string) {}
}

class Blockchain {
    private chain: Block[];

    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    private createGenesisBlock(): Block {
        return new Block(0, "0", Date.now(), "Genesis Block", this.calculateHash(0, "0", Date.now(), "Genesis Block"));
    }

    public addBlock(data: any): void {
        const previousBlock = this.chain[this.chain.length - 1];
        const newIndex = previousBlock.index + 1;
        const newTimestamp = Date.now();
        const newHash = this.calculateHash(newIndex, previousBlock.hash, newTimestamp, data);
        const newBlock = new Block(newIndex, previousBlock.hash, newTimestamp, data, newHash);
        this.chain.push(newBlock);
    }

    public getChain(): Block[] {
        return this.chain;
    }

    public isChainValid(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== this.calculateHash(currentBlock.index, currentBlock.previousHash, currentBlock.timestamp, currentBlock.data)) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }

    private calculateHash(index: number, previousHash: string, timestamp: number, data: any): string {
        return crypto.createHash('sha256').update(index + previousHash + timestamp + JSON.stringify(data)).digest('hex');
    }
}

export default Blockchain;