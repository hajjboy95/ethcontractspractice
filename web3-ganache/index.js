const Web3 = require('web3');
const EthereumTransaction = require("ethereumjs-tx")

const web3 = new Web3('HTTP://127.0.0.1:7545')

const sendingAddress = '0x1ffe7465A5540220ae41fCa20691040fcE2A4777'

web3.eth.getTransactionCount(sendingAddress).then(console.log)