import TronWeb from 'tronweb';

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
const eventServer = new HttpProvider("https://api.shasta.trongrid.io");
const privateKey = process.env.PRIVATE_KEY_SHASTA;
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

const publicKey = 'TVfbUyZBhM5aE7jgveA9yFwnQbVEbnfD4c'
const contractAddress = 'TFXFQZKSn17Cxj9nsknGcmbTvK3G7T8Hr3'

import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../contracts/build/contracts/SponsorshipToken.json', 'utf8'));
let contract = tronWeb.contract(data.abi, contractAddress);
let result;

// Mint new NFT
console.log("Minting a new NFT")
// result = await contract.mint(publicKey,
//     [
//         "Zeus",
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Eagle_on_roots_-_crop_3_%28430008061%29.jpg/800px-Eagle_on_roots_-_crop_3_%28430008061%29.jpg",
//         "eagle",
//         "Zeus is a majestic eagle",
//         "Mindadao, Philippines",
//         "WWF",
//         "2021-01-01",
//         "2021-12-31"
//     ], 10).send({
//     feeLimit: 500_000_000,
//     callValue: 0,
//     shouldPollResponse: true
// });
// console.log(result);

// Get number of NFTs
console.log("Getting number of NFTs")
result = await contract.getNumberOfTokens().call();
console.log(result);

// Get NFTs of an address
console.log("Getting NFTs of an address")
result = await contract.getTokensByOwner(publicKey).call();
console.log(result);

// Get metadata of NFT
console.log("Getting URI of NFT")
result = await contract.tokenMetadata(0).call();
console.log(result);

// Get price of NFT
console.log("Getting price of NFT")
result = await contract.price(0).call();
console.log(result);

// Purchase an available NFT
console.log("Purchasing an available NFT")
result = await contract.purchase(0).send({
    feeLimit: 500_000_000,
    callValue: result,
    shouldPollResponse: true
})
