const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')

let whitelistAddresses = require("./whitelist.json")

const leafNodes = whitelistAddresses.map(addr => keccak256(addr))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })


console.log(merkleTree.toString())
console.log("Root: ", merkleTree.getRoot().toString('hex'))