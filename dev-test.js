const Block = require('./block');

const newBlock = Block.mineBlock(Block.genesis(), 'newDataString');

console.log(newBlock.toString());