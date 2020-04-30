class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block -
      Timestamp: ${this.timestamp} 
      Last Hash: ${this.lastHash}
      Hash     : ${this.hash}
      Data     : ${this.data}`;
    }
}