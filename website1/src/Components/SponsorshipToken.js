export const contractAddress = "TXM7F7Uf7dMsDUvq4Eny6cYTmrdU5rBiMm"
export const sponsorshipTokenAbi = {
    "contractName": "SponsorshipToken",
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event",
            "stateMutability": "nonpayable"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "_approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event",
            "stateMutability": "nonpayable"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event",
            "stateMutability": "nonpayable"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event",
            "stateMutability": "nonpayable"
        },
        {
            "inputs": [],
            "name": "CANNOT_TRANSFER_TO_ZERO_ADDRESS",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "NOT_CURRENT_OWNER",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "adopted",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_approved",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNumberOfTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "getTokensByOwner",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "uri",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "species",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "location",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "organization",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "sponsorshipStart",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "sponsorshipEnd",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct NFTMetadata",
                    "name": "_metadata",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "price",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "purchase",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceID",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "_symbol",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "tokenByIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenMetadata",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "uri",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "species",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "location",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "organization",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "sponsorshipStart",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "sponsorshipEnd",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct NFTMetadata",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "tokenOfOwnerByIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x60806040523480156200001157600080fd5b50d380156200001f57600080fd5b50d280156200002d57600080fd5b5060016000806301ffc9a760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555060016000806380ac58cd60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160008063780e9d6360e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555033600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600c819055506040518060400160405280601881526020017f416e696d616c2053706f6e736f727368697020546f6b656e0000000000000000815250600a9080519060200190620001b79291906200025d565b506040518060400160405280600381526020017f4153540000000000000000000000000000000000000000000000000000000000815250600b9080519060200190620002059291906200025d565b506001600080635b5e139f60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555062000372565b8280546200026b906200033c565b90600052602060002090601f0160209004810192826200028f5760008555620002db565b82601f10620002aa57805160ff1916838001178555620002db565b82800160010185558215620002db579182015b82811115620002da578251825591602001919060010190620002bd565b5b509050620002ea9190620002ee565b5090565b5b8082111562000309576000816000905550600101620002ef565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200035557607f821691505b602082108114156200036c576200036b6200030d565b5b50919050565b61425080620003826000396000f3fe6080604052600436106101815760003560e01c806370a08231116100d1578063aa38e38c1161008a578063e985e9c511610064578063e985e9c5146107f3578063efeecb511461084a578063f2fde38b1461088f578063f3fe3bc3146108d257610181565b8063aa38e38c14610751578063b4c886c31461076d578063b88d4fde146107b057610181565b806370a0823114610591578063754b86ea146105e8578063860d248a1461063f5780638da5cb5b1461068457806395d89b41146106c9578063a22cb4651461070e57610181565b806326a49e371161013e57806342842e0e1161011857806342842e0e146104495780634f6ccce71461048c5780636352211e146104e35780636914db601461053a57610181565b806326a49e37146103445780632f745c591461039b57806340398d67146103f257610181565b806301ffc9a71461018657806306fdde03146101dd578063081812fc14610222578063095ea7b31461027957806318160ddd146102bc57806323b872dd14610301575b600080fd5b34801561019257600080fd5b50d3801561019f57600080fd5b50d280156101ac57600080fd5b506101c760048036038101906101c291906132dd565b610917565b6040516101d49190613325565b60405180910390f35b3480156101e957600080fd5b50d380156101f657600080fd5b50d2801561020357600080fd5b5061020c61097e565b60405161021991906133d9565b60405180910390f35b34801561022e57600080fd5b50d3801561023b57600080fd5b50d2801561024857600080fd5b50610263600480360381019061025e9190613431565b610a10565b604051610270919061349f565b60405180910390f35b34801561028557600080fd5b50d3801561029257600080fd5b50d2801561029f57600080fd5b506102ba60048036038101906102b59190613512565b610b2b565b005b3480156102c857600080fd5b50d380156102d557600080fd5b50d280156102e257600080fd5b506102eb610f0e565b6040516102f89190613561565b60405180910390f35b34801561030d57600080fd5b50d3801561031a57600080fd5b50d2801561032757600080fd5b50610342600480360381019061033d919061357c565b610f1b565b005b34801561035057600080fd5b50d3801561035d57600080fd5b50d2801561036a57600080fd5b5061038560048036038101906103809190613431565b61136d565b6040516103929190613561565b60405180910390f35b3480156103a757600080fd5b50d380156103b457600080fd5b50d280156103c157600080fd5b506103dc60048036038101906103d79190613512565b61138a565b6040516103e99190613561565b60405180910390f35b3480156103fe57600080fd5b50d3801561040b57600080fd5b50d2801561041857600080fd5b50610433600480360381019061042e91906135cf565b6114ad565b60405161044091906136ba565b60405180910390f35b34801561045557600080fd5b50d3801561046257600080fd5b50d2801561046f57600080fd5b5061048a6004803603810190610485919061357c565b611544565b005b34801561049857600080fd5b50d380156104a557600080fd5b50d280156104b257600080fd5b506104cd60048036038101906104c89190613431565b611564565b6040516104da9190613561565b60405180910390f35b3480156104ef57600080fd5b50d380156104fc57600080fd5b50d2801561050957600080fd5b50610524600480360381019061051f9190613431565b61160c565b604051610531919061349f565b60405180910390f35b34801561054657600080fd5b50d3801561055357600080fd5b50d2801561056057600080fd5b5061057b60048036038101906105769190613431565b6116f2565b6040516105889190613807565b60405180910390f35b34801561059d57600080fd5b50d380156105aa57600080fd5b50d280156105b757600080fd5b506105d260048036038101906105cd91906135cf565b611bb0565b6040516105df9190613561565b60405180910390f35b3480156105f457600080fd5b50d3801561060157600080fd5b50d2801561060e57600080fd5b5061062960048036038101906106249190613431565b611c6a565b6040516106369190613325565b60405180910390f35b34801561064b57600080fd5b50d3801561065857600080fd5b50d2801561066557600080fd5b5061066e611c94565b60405161067b91906133d9565b60405180910390f35b34801561069057600080fd5b50d3801561069d57600080fd5b50d280156106aa57600080fd5b506106b3611ccd565b6040516106c0919061349f565b60405180910390f35b3480156106d557600080fd5b50d380156106e257600080fd5b50d280156106ef57600080fd5b506106f8611cf3565b60405161070591906133d9565b60405180910390f35b34801561071a57600080fd5b50d3801561072757600080fd5b50d2801561073457600080fd5b5061074f600480360381019061074a9190613855565b611d85565b005b61076b600480360381019061076691906138fa565b611e82565b005b34801561077957600080fd5b50d3801561078657600080fd5b50d2801561079357600080fd5b506107ae60048036038101906107a9919061397f565b612064565b005b3480156107bc57600080fd5b50d380156107c957600080fd5b50d280156107d657600080fd5b506107f160048036038101906107ec9190613a44565b612194565b005b3480156107ff57600080fd5b50d3801561080c57600080fd5b50d2801561081957600080fd5b50610834600480360381019061082f9190613acc565b6121eb565b6040516108419190613325565b60405180910390f35b34801561085657600080fd5b50d3801561086357600080fd5b50d2801561087057600080fd5b5061087961227f565b6040516108869190613561565b60405180910390f35b34801561089b57600080fd5b50d380156108a857600080fd5b50d280156108b557600080fd5b506108d060048036038101906108cb91906135cf565b612289565b005b3480156108de57600080fd5b50d380156108eb57600080fd5b50d280156108f857600080fd5b506109016124bb565b60405161090e91906133d9565b60405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600a805461098d90613b3b565b80601f01602080910402602001604051908101604052809291908181526020018280546109b990613b3b565b8015610a065780601f106109db57610100808354040283529160200191610a06565b820191906000526020600020905b8154815290600101906020018083116109e957829003601f168201915b5050505050905090565b600081600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303032000000000000000000000000000000000000000000000000000081525090610aee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae591906133d9565b60405180910390fd5b506002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b8060006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610c245750600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6040518060400160405280600681526020017f303033303033000000000000000000000000000000000000000000000000000081525090610c9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9291906133d9565b60405180910390fd5b5082600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303032000000000000000000000000000000000000000000000000000081525090610d78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6f91906133d9565b60405180910390fd5b5060006001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303038000000000000000000000000000000000000000000000000000081525090610e58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4f91906133d9565b60405180910390fd5b50856002600087815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550848673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050505050565b6000600580549050905090565b8060006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610fec57503373ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b8061107d5750600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6040518060400160405280600681526020017f3030333030340000000000000000000000000000000000000000000000000000815250906110f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110eb91906133d9565b60405180910390fd5b5082600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f3030333030320000000000000000000000000000000000000000000000000000815250906111d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c891906133d9565b60405180910390fd5b5060006001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f3030333030370000000000000000000000000000000000000000000000000000815250906112b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a791906133d9565b60405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303031000000000000000000000000000000000000000000000000000081525090611359576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135091906133d9565b60405180910390fd5b5061136486866124f4565b50505050505050565b6000600f6000838152602001908152602001600020549050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905082106040518060400160405280600681526020017f303035303037000000000000000000000000000000000000000000000000000081525090611448576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143f91906133d9565b60405180910390fd5b50600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061149a57611499613b6d565b5b9060005260206000200154905092915050565b6060600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561153857602002820191906000526020600020905b815481526020019060010190808311611524575b50505050509050919050565b61155f838383604051806020016040528060008152506125a9565b505050565b600060058054905082106040518060400160405280600681526020017f3030353030370000000000000000000000000000000000000000000000000000815250906115e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115dc91906133d9565b60405180910390fd5b50600582815481106115fa576115f9613b6d565b5b90600052602060002001549050919050565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f3030333030320000000000000000000000000000000000000000000000000000815250906116ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e391906133d9565b60405180910390fd5b50919050565b6116fa613193565b600d60008381526020019081526020016000206040518061010001604052908160008201805461172990613b3b565b80601f016020809104026020016040519081016040528092919081815260200182805461175590613b3b565b80156117a25780601f10611777576101008083540402835291602001916117a2565b820191906000526020600020905b81548152906001019060200180831161178557829003601f168201915b505050505081526020016001820180546117bb90613b3b565b80601f01602080910402602001604051908101604052809291908181526020018280546117e790613b3b565b80156118345780601f1061180957610100808354040283529160200191611834565b820191906000526020600020905b81548152906001019060200180831161181757829003601f168201915b5050505050815260200160028201805461184d90613b3b565b80601f016020809104026020016040519081016040528092919081815260200182805461187990613b3b565b80156118c65780601f1061189b576101008083540402835291602001916118c6565b820191906000526020600020905b8154815290600101906020018083116118a957829003601f168201915b505050505081526020016003820180546118df90613b3b565b80601f016020809104026020016040519081016040528092919081815260200182805461190b90613b3b565b80156119585780601f1061192d57610100808354040283529160200191611958565b820191906000526020600020905b81548152906001019060200180831161193b57829003601f168201915b5050505050815260200160048201805461197190613b3b565b80601f016020809104026020016040519081016040528092919081815260200182805461199d90613b3b565b80156119ea5780601f106119bf576101008083540402835291602001916119ea565b820191906000526020600020905b8154815290600101906020018083116119cd57829003601f168201915b50505050508152602001600582018054611a0390613b3b565b80601f0160208091040260200160405190810160405280929190818152602001828054611a2f90613b3b565b8015611a7c5780601f10611a5157610100808354040283529160200191611a7c565b820191906000526020600020905b815481529060010190602001808311611a5f57829003601f168201915b50505050508152602001600682018054611a9590613b3b565b80601f0160208091040260200160405190810160405280929190818152602001828054611ac190613b3b565b8015611b0e5780601f10611ae357610100808354040283529160200191611b0e565b820191906000526020600020905b815481529060010190602001808311611af157829003601f168201915b50505050508152602001600782018054611b2790613b3b565b80601f0160208091040260200160405190810160405280929190818152602001828054611b5390613b3b565b8015611ba05780601f10611b7557610100808354040283529160200191611ba0565b820191906000526020600020905b815481529060010190602001808311611b8357829003601f168201915b5050505050815250509050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303031000000000000000000000000000000000000000000000000000081525090611c59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5091906133d9565b60405180910390fd5b50611c63826129fc565b9050919050565b6000600e600083815260200190815260200160002060009054906101000a900460ff169050919050565b6040518060400160405280600681526020017f303138303032000000000000000000000000000000000000000000000000000081525081565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600b8054611d0290613b3b565b80601f0160208091040260200160405190810160405280929190818152602001828054611d2e90613b3b565b8015611d7b5780601f10611d5057610100808354040283529160200191611d7b565b820191906000526020600020905b815481529060010190602001808311611d5e57829003601f168201915b5050505050905090565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611e769190613325565b60405180910390a35050565b600c548110611ec6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ebd90613be8565b60405180910390fd5b600f600082815260200190815260200160002054341015611f1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f1390613c54565b60405180910390fd5b600e600082815260200190815260200160002060009054906101000a900460ff1615611f7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f7490613cc0565b60405180910390fd5b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015611ffb573d6000803e3d6000fd5b5061200633836124f4565b6001600e600084815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600d60008481526020019081526020016000209050848482600001919061205c9291906131d8565b505050505050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f30313830303100000000000000000000000000000000000000000000000000008152509061212c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161212391906133d9565b60405180910390fd5b506000600c54905061213e8482612a48565b82600d6000838152602001908152602001600020818161215e9190614124565b90505081600f6000838152602001908152602001600020819055506001600c546121889190614161565b600c8190555050505050565b6121e485858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506125a9565b5050505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000600c54905090565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f303138303031000000000000000000000000000000000000000000000000000081525090612351576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161234891906133d9565b60405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f3031383030320000000000000000000000000000000000000000000000000000815250906123fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123f191906133d9565b60405180910390fd5b508073ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6040518060400160405280600681526020017f303138303031000000000000000000000000000000000000000000000000000081525081565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061253582612aa8565b61253f8183612ae1565b6125498383612da8565b818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b8160006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148061267a57503373ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b8061270b5750600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6040518060400160405280600681526020017f303033303034000000000000000000000000000000000000000000000000000081525090612782576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161277991906133d9565b60405180910390fd5b5083600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f30303330303200000000000000000000000000000000000000000000000000008152509061285f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161285691906133d9565b60405180910390fd5b5060006001600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f30303330303700000000000000000000000000000000000000000000000000008152509061293e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161293591906133d9565b60405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f3030333030310000000000000000000000000000000000000000000000000000815250906129e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129de91906133d9565b60405180910390fd5b506129f287876124f4565b5050505050505050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b612a528282612fa5565b60058190806001815401808255809150506001900390600052602060002001600090919091909150556001600580549050612a8d91906141b7565b60066000838152602001908152602001600020819055505050565b6002600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550565b8173ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f303033303037000000000000000000000000000000000000000000000000000081525090612bba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bb191906133d9565b60405180910390fd5b506001600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560006008600083815260200190815260200160002054905060006001600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050612c5a91906141b7565b9050818114612d3d576000600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110612cb657612cb5613b6d565b5b9060005260206000200154905080600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110612d1557612d14613b6d565b5b9060005260206000200181905550826008600083815260200190815260200160002081905550505b600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480612d8c57612d8b6141eb565b5b6001900381819060005260206000200160009055905550505050565b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f303033303036000000000000000000000000000000000000000000000000000081525090612e82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e7991906133d9565b60405180910390fd5b50816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150556001600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050612f8a91906141b7565b60086000838152602001908152602001600020819055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f30303330303100000000000000000000000000000000000000000000000000008152509061304d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161304491906133d9565b60405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f303033303036000000000000000000000000000000000000000000000000000081525090613128576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161311f91906133d9565b60405180910390fd5b506131338282612da8565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60405180610100016040528060608152602001606081526020016060815260200160608152602001606081526020016060815260200160608152602001606081525090565b8280546131e490613b3b565b90600052602060002090601f016020900481019282613206576000855561324d565b82601f1061321f57803560ff191683800117855561324d565b8280016001018555821561324d579182015b8281111561324c578235825591602001919060010190613231565b5b50905061325a919061325e565b5090565b5b8082111561327757600081600090555060010161325f565b5090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6132ba81613285565b81146132c557600080fd5b50565b6000813590506132d7816132b1565b92915050565b6000602082840312156132f3576132f261327b565b5b6000613301848285016132c8565b91505092915050565b60008115159050919050565b61331f8161330a565b82525050565b600060208201905061333a6000830184613316565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561337a57808201518184015260208101905061335f565b83811115613389576000848401525b50505050565b6000601f19601f8301169050919050565b60006133ab82613340565b6133b5818561334b565b93506133c581856020860161335c565b6133ce8161338f565b840191505092915050565b600060208201905081810360008301526133f381846133a0565b905092915050565b6000819050919050565b61340e816133fb565b811461341957600080fd5b50565b60008135905061342b81613405565b92915050565b6000602082840312156134475761344661327b565b5b60006134558482850161341c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006134898261345e565b9050919050565b6134998161347e565b82525050565b60006020820190506134b46000830184613490565b92915050565b600074ffffffffffffffffffffffffffffffffffffffffff82169050919050565b6134e4816134ba565b81146134ef57600080fd5b50565b600081359050613501816134db565b61350a8161347e565b905092915050565b600080604083850312156135295761352861327b565b5b6000613537858286016134f2565b92505060206135488582860161341c565b9150509250929050565b61355b816133fb565b82525050565b60006020820190506135766000830184613552565b92915050565b6000806000606084860312156135955761359461327b565b5b60006135a3868287016134f2565b93505060206135b4868287016134f2565b92505060406135c58682870161341c565b9150509250925092565b6000602082840312156135e5576135e461327b565b5b60006135f3848285016134f2565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b613631816133fb565b82525050565b60006136438383613628565b60208301905092915050565b6000602082019050919050565b6000613667826135fc565b6136718185613607565b935061367c83613618565b8060005b838110156136ad5781516136948882613637565b975061369f8361364f565b925050600181019050613680565b5085935050505092915050565b600060208201905081810360008301526136d4818461365c565b905092915050565b600082825260208201905092915050565b60006136f882613340565b61370281856136dc565b935061371281856020860161335c565b61371b8161338f565b840191505092915050565b600061010083016000830151848203600086015261374482826136ed565b9150506020830151848203602086015261375e82826136ed565b9150506040830151848203604086015261377882826136ed565b9150506060830151848203606086015261379282826136ed565b915050608083015184820360808601526137ac82826136ed565b91505060a083015184820360a08601526137c682826136ed565b91505060c083015184820360c08601526137e082826136ed565b91505060e083015184820360e08601526137fa82826136ed565b9150508091505092915050565b600060208201905081810360008301526138218184613726565b905092915050565b6138328161330a565b811461383d57600080fd5b50565b60008135905061384f81613829565b92915050565b6000806040838503121561386c5761386b61327b565b5b600061387a858286016134f2565b925050602061388b85828601613840565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f8401126138ba576138b9613895565b5b8235905067ffffffffffffffff8111156138d7576138d661389a565b5b6020830191508360018202830111156138f3576138f261389f565b5b9250929050565b6000806000604084860312156139135761391261327b565b5b600084013567ffffffffffffffff81111561393157613930613280565b5b61393d868287016138a4565b935093505060206139508682870161341c565b9150509250925092565b600080fd5b600061010082840312156139765761397561395a565b5b81905092915050565b6000806000606084860312156139985761399761327b565b5b60006139a6868287016134f2565b935050602084013567ffffffffffffffff8111156139c7576139c6613280565b5b6139d38682870161395f565b92505060406139e48682870161341c565b9150509250925092565b60008083601f840112613a0457613a03613895565b5b8235905067ffffffffffffffff811115613a2157613a2061389a565b5b602083019150836001820283011115613a3d57613a3c61389f565b5b9250929050565b600080600080600060808688031215613a6057613a5f61327b565b5b6000613a6e888289016134f2565b9550506020613a7f888289016134f2565b9450506040613a908882890161341c565b935050606086013567ffffffffffffffff811115613ab157613ab0613280565b5b613abd888289016139ee565b92509250509295509295909350565b60008060408385031215613ae357613ae261327b565b5b6000613af1858286016134f2565b9250506020613b02858286016134f2565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613b5357607f821691505b60208210811415613b6757613b66613b0c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f546f6b656e20646f6573206e6f74206578697374000000000000000000000000600082015250565b6000613bd260148361334b565b9150613bdd82613b9c565b602082019050919050565b60006020820190508181036000830152613c0181613bc5565b9050919050565b7f496e73756666696369656e742066756e64730000000000000000000000000000600082015250565b6000613c3e60128361334b565b9150613c4982613c08565b602082019050919050565b60006020820190508181036000830152613c6d81613c31565b9050919050565b7f546f6b656e2068617320616c7265616479206265656e20736f6c640000000000600082015250565b6000613caa601b8361334b565b9150613cb582613c74565b602082019050919050565b60006020820190508181036000830152613cd981613c9d565b9050919050565b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112613d0c57613d0b613ce0565b5b80840192508235915067ffffffffffffffff821115613d2e57613d2d613ce5565b5b602083019250600182023603831315613d4a57613d49613cea565b5b509250929050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302613dee7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613db1565b613df88683613db1565b95508019841693508086168417925050509392505050565b6000819050919050565b6000613e35613e30613e2b846133fb565b613e10565b6133fb565b9050919050565b6000819050919050565b613e4f83613e1a565b613e63613e5b82613e3c565b848454613dbe565b825550505050565b600090565b613e78613e6b565b613e83818484613e46565b505050565b5b81811015613ea757613e9c600082613e70565b600181019050613e89565b5050565b601f821115613eec57613ebd81613d8c565b613ec684613da1565b81016020851015613ed5578190505b613ee9613ee185613da1565b830182613e88565b50505b505050565b600082821c905092915050565b6000613f0f60001984600802613ef1565b1980831691505092915050565b6000613f288383613efe565b9150826002028217905092915050565b613f428383613d52565b67ffffffffffffffff811115613f5b57613f5a613d5d565b5b613f658254613b3b565b613f70828285613eab565b6000601f831160018114613f9f5760008415613f8d578287013590505b613f978582613f1c565b865550613fff565b601f198416613fad86613d8c565b60005b82811015613fd557848901358255600182019150602085019450602081019050613fb0565b86831015613ff25784890135613fee601f891682613efe565b8355505b6001600288020188555050505b50505050505050565b614013838383613f38565b505050565b600081016000830161402a8185613cef565b614035818386614008565b50505050600181016020830161404b8185613cef565b614056818386614008565b50505050600281016040830161406c8185613cef565b614077818386614008565b50505050600381016060830161408d8185613cef565b614098818386614008565b5050505060048101608083016140ae8185613cef565b6140b9818386614008565b505050506005810160a083016140cf8185613cef565b6140da818386614008565b505050506006810160c083016140f08185613cef565b6140fb818386614008565b505050506007810160e083016141118185613cef565b61411c818386614008565b505050505050565b61412e8282614018565b5050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061416c826133fb565b9150614177836133fb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156141ac576141ab614132565b5b828201905092915050565b60006141c2826133fb565b91506141cd836133fb565b9250828210156141e0576141df614132565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26474726f6e582212202e273b607e2df4991604aee34fba21e07e95b8b3527c6fbbeb59b680aabb1b1764736f6c634300080b0033",
    "deployedBytecode": "0x6080604052600436106101815760003560e01c806370a08231116100d1578063aa38e38c1161008a578063e985e9c511610064578063e985e9c5146107f3578063efeecb511461084a578063f2fde38b1461088f578063f3fe3bc3146108d257610181565b8063aa38e38c14610751578063b4c886c31461076d578063b88d4fde146107b057610181565b806370a0823114610591578063754b86ea146105e8578063860d248a1461063f5780638da5cb5b1461068457806395d89b41146106c9578063a22cb4651461070e57610181565b806326a49e371161013e57806342842e0e1161011857806342842e0e146104495780634f6ccce71461048c5780636352211e146104e35780636914db601461053a57610181565b806326a49e37146103445780632f745c591461039b57806340398d67146103f257610181565b806301ffc9a71461018657806306fdde03146101dd578063081812fc14610222578063095ea7b31461027957806318160ddd146102bc57806323b872dd14610301575b600080fd5b34801561019257600080fd5b50d3801561019f57600080fd5b50d280156101ac57600080fd5b506101c760048036038101906101c291906132dd565b610917565b6040516101d49190613325565b60405180910390f35b3480156101e957600080fd5b50d380156101f657600080fd5b50d2801561020357600080fd5b5061020c61097e565b60405161021991906133d9565b60405180910390f35b34801561022e57600080fd5b50d3801561023b57600080fd5b50d2801561024857600080fd5b50610263600480360381019061025e9190613431565b610a10565b604051610270919061349f565b60405180910390f35b34801561028557600080fd5b50d3801561029257600080fd5b50d2801561029f57600080fd5b506102ba60048036038101906102b59190613512565b610b2b565b005b3480156102c857600080fd5b50d380156102d557600080fd5b50d280156102e257600080fd5b506102eb610f0e565b6040516102f89190613561565b60405180910390f35b34801561030d57600080fd5b50d3801561031a57600080fd5b50d2801561032757600080fd5b50610342600480360381019061033d919061357c565b610f1b565b005b34801561035057600080fd5b50d3801561035d57600080fd5b50d2801561036a57600080fd5b5061038560048036038101906103809190613431565b61136d565b6040516103929190613561565b60405180910390f35b3480156103a757600080fd5b50d380156103b457600080fd5b50d280156103c157600080fd5b506103dc60048036038101906103d79190613512565b61138a565b6040516103e99190613561565b60405180910390f35b3480156103fe57600080fd5b50d3801561040b57600080fd5b50d2801561041857600080fd5b50610433600480360381019061042e91906135cf565b6114ad565b60405161044091906136ba565b60405180910390f35b34801561045557600080fd5b50d3801561046257600080fd5b50d2801561046f57600080fd5b5061048a6004803603810190610485919061357c565b611544565b005b34801561049857600080fd5b50d380156104a557600080fd5b50d280156104b257600080fd5b506104cd60048036038101906104c89190613431565b611564565b6040516104da9190613561565b60405180910390f35b3480156104ef57600080fd5b50d380156104fc57600080fd5b50d2801561050957600080fd5b50610524600480360381019061051f9190613431565b61160c565b604051610531919061349f565b60405180910390f35b34801561054657600080fd5b50d3801561055357600080fd5b50d2801561056057600080fd5b5061057b60048036038101906105769190613431565b6116f2565b6040516105889190613807565b60405180910390f35b34801561059d57600080fd5b50d380156105aa57600080fd5b50d280156105b757600080fd5b506105d260048036038101906105cd91906135cf565b611bb0565b6040516105df9190613561565b60405180910390f35b3480156105f457600080fd5b50d3801561060157600080fd5b50d2801561060e57600080fd5b5061062960048036038101906106249190613431565b611c6a565b6040516106369190613325565b60405180910390f35b34801561064b57600080fd5b50d3801561065857600080fd5b50d2801561066557600080fd5b5061066e611c94565b60405161067b91906133d9565b60405180910390f35b34801561069057600080fd5b50d3801561069d57600080fd5b50d280156106aa57600080fd5b506106b3611ccd565b6040516106c0919061349f565b60405180910390f35b3480156106d557600080fd5b50d380156106e257600080fd5b50d280156106ef57600080fd5b506106f8611cf3565b60405161070591906133d9565b60405180910390f35b34801561071a57600080fd5b50d3801561072757600080fd5b50d2801561073457600080fd5b5061074f600480360381019061074a9190613855565b611d85565b005b61076b600480360381019061076691906138fa565b611e82565b005b34801561077957600080fd5b50d3801561078657600080fd5b50d2801561079357600080fd5b506107ae60048036038101906107a9919061397f565b612064565b005b3480156107bc57600080fd5b50d380156107c957600080fd5b50d280156107d657600080fd5b506107f160048036038101906107ec9190613a44565b612194565b005b3480156107ff57600080fd5b50d3801561080c57600080fd5b50d2801561081957600080fd5b50610834600480360381019061082f9190613acc565b6121eb565b6040516108419190613325565b60405180910390f35b34801561085657600080fd5b50d3801561086357600080fd5b50d2801561087057600080fd5b5061087961227f565b6040516108869190613561565b60405180910390f35b34801561089b57600080fd5b50d380156108a857600080fd5b50d280156108b557600080fd5b506108d060048036038101906108cb91906135cf565b612289565b005b3480156108de57600080fd5b50d380156108eb57600080fd5b50d280156108f857600080fd5b506109016124bb565b60405161090e91906133d9565b60405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600a805461098d90613b3b565b80601f01602080910402602001604051908101604052809291908181526020018280546109b990613b3b565b8015610a065780601f106109db57610100808354040283529160200191610a06565b820191906000526020600020905b8154815290600101906020018083116109e957829003601f168201915b5050505050905090565b600081600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303032000000000000000000000000000000000000000000000000000081525090610aee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae591906133d9565b60405180910390fd5b506002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b8060006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610c245750600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6040518060400160405280600681526020017f303033303033000000000000000000000000000000000000000000000000000081525090610c9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9291906133d9565b60405180910390fd5b5082600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303032000000000000000000000000000000000000000000000000000081525090610d78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6f91906133d9565b60405180910390fd5b5060006001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303038000000000000000000000000000000000000000000000000000081525090610e58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4f91906133d9565b60405180910390fd5b50856002600087815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550848673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050505050565b6000600580549050905090565b8060006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610fec57503373ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b8061107d5750600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6040518060400160405280600681526020017f3030333030340000000000000000000000000000000000000000000000000000815250906110f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110eb91906133d9565b60405180910390fd5b5082600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f3030333030320000000000000000000000000000000000000000000000000000815250906111d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c891906133d9565b60405180910390fd5b5060006001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f3030333030370000000000000000000000000000000000000000000000000000815250906112b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a791906133d9565b60405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303031000000000000000000000000000000000000000000000000000081525090611359576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135091906133d9565b60405180910390fd5b5061136486866124f4565b50505050505050565b6000600f6000838152602001908152602001600020549050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905082106040518060400160405280600681526020017f303035303037000000000000000000000000000000000000000000000000000081525090611448576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143f91906133d9565b60405180910390fd5b50600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061149a57611499613b6d565b5b9060005260206000200154905092915050565b6060600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561153857602002820191906000526020600020905b815481526020019060010190808311611524575b50505050509050919050565b61155f838383604051806020016040528060008152506125a9565b505050565b600060058054905082106040518060400160405280600681526020017f3030353030370000000000000000000000000000000000000000000000000000815250906115e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115dc91906133d9565b60405180910390fd5b50600582815481106115fa576115f9613b6d565b5b90600052602060002001549050919050565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f3030333030320000000000000000000000000000000000000000000000000000815250906116ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e391906133d9565b60405180910390fd5b50919050565b6116fa613193565b600d60008381526020019081526020016000206040518061010001604052908160008201805461172990613b3b565b80601f016020809104026020016040519081016040528092919081815260200182805461175590613b3b565b80156117a25780601f10611777576101008083540402835291602001916117a2565b820191906000526020600020905b81548152906001019060200180831161178557829003601f168201915b505050505081526020016001820180546117bb90613b3b565b80601f01602080910402602001604051908101604052809291908181526020018280546117e790613b3b565b80156118345780601f1061180957610100808354040283529160200191611834565b820191906000526020600020905b81548152906001019060200180831161181757829003601f168201915b5050505050815260200160028201805461184d90613b3b565b80601f016020809104026020016040519081016040528092919081815260200182805461187990613b3b565b80156118c65780601f1061189b576101008083540402835291602001916118c6565b820191906000526020600020905b8154815290600101906020018083116118a957829003601f168201915b505050505081526020016003820180546118df90613b3b565b80601f016020809104026020016040519081016040528092919081815260200182805461190b90613b3b565b80156119585780601f1061192d57610100808354040283529160200191611958565b820191906000526020600020905b81548152906001019060200180831161193b57829003601f168201915b5050505050815260200160048201805461197190613b3b565b80601f016020809104026020016040519081016040528092919081815260200182805461199d90613b3b565b80156119ea5780601f106119bf576101008083540402835291602001916119ea565b820191906000526020600020905b8154815290600101906020018083116119cd57829003601f168201915b50505050508152602001600582018054611a0390613b3b565b80601f0160208091040260200160405190810160405280929190818152602001828054611a2f90613b3b565b8015611a7c5780601f10611a5157610100808354040283529160200191611a7c565b820191906000526020600020905b815481529060010190602001808311611a5f57829003601f168201915b50505050508152602001600682018054611a9590613b3b565b80601f0160208091040260200160405190810160405280929190818152602001828054611ac190613b3b565b8015611b0e5780601f10611ae357610100808354040283529160200191611b0e565b820191906000526020600020905b815481529060010190602001808311611af157829003601f168201915b50505050508152602001600782018054611b2790613b3b565b80601f0160208091040260200160405190810160405280929190818152602001828054611b5390613b3b565b8015611ba05780601f10611b7557610100808354040283529160200191611ba0565b820191906000526020600020905b815481529060010190602001808311611b8357829003601f168201915b5050505050815250509050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303031000000000000000000000000000000000000000000000000000081525090611c59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5091906133d9565b60405180910390fd5b50611c63826129fc565b9050919050565b6000600e600083815260200190815260200160002060009054906101000a900460ff169050919050565b6040518060400160405280600681526020017f303138303032000000000000000000000000000000000000000000000000000081525081565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600b8054611d0290613b3b565b80601f0160208091040260200160405190810160405280929190818152602001828054611d2e90613b3b565b8015611d7b5780601f10611d5057610100808354040283529160200191611d7b565b820191906000526020600020905b815481529060010190602001808311611d5e57829003601f168201915b5050505050905090565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611e769190613325565b60405180910390a35050565b600c548110611ec6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ebd90613be8565b60405180910390fd5b600f600082815260200190815260200160002054341015611f1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f1390613c54565b60405180910390fd5b600e600082815260200190815260200160002060009054906101000a900460ff1615611f7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f7490613cc0565b60405180910390fd5b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015611ffb573d6000803e3d6000fd5b5061200633836124f4565b6001600e600084815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600d60008481526020019081526020016000209050848482600001919061205c9291906131d8565b505050505050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f30313830303100000000000000000000000000000000000000000000000000008152509061212c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161212391906133d9565b60405180910390fd5b506000600c54905061213e8482612a48565b82600d6000838152602001908152602001600020818161215e9190614124565b90505081600f6000838152602001908152602001600020819055506001600c546121889190614161565b600c8190555050505050565b6121e485858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506125a9565b5050505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000600c54905090565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f303138303031000000000000000000000000000000000000000000000000000081525090612351576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161234891906133d9565b60405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f3031383030320000000000000000000000000000000000000000000000000000815250906123fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123f191906133d9565b60405180910390fd5b508073ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6040518060400160405280600681526020017f303138303031000000000000000000000000000000000000000000000000000081525081565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061253582612aa8565b61253f8183612ae1565b6125498383612da8565b818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b8160006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148061267a57503373ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b8061270b5750600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6040518060400160405280600681526020017f303033303034000000000000000000000000000000000000000000000000000081525090612782576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161277991906133d9565b60405180910390fd5b5083600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f30303330303200000000000000000000000000000000000000000000000000008152509061285f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161285691906133d9565b60405180910390fd5b5060006001600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f30303330303700000000000000000000000000000000000000000000000000008152509061293e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161293591906133d9565b60405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f3030333030310000000000000000000000000000000000000000000000000000815250906129e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129de91906133d9565b60405180910390fd5b506129f287876124f4565b5050505050505050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b612a528282612fa5565b60058190806001815401808255809150506001900390600052602060002001600090919091909150556001600580549050612a8d91906141b7565b60066000838152602001908152602001600020819055505050565b6002600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550565b8173ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f303033303037000000000000000000000000000000000000000000000000000081525090612bba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bb191906133d9565b60405180910390fd5b506001600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560006008600083815260200190815260200160002054905060006001600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050612c5a91906141b7565b9050818114612d3d576000600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110612cb657612cb5613b6d565b5b9060005260206000200154905080600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110612d1557612d14613b6d565b5b9060005260206000200181905550826008600083815260200190815260200160002081905550505b600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480612d8c57612d8b6141eb565b5b6001900381819060005260206000200160009055905550505050565b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f303033303036000000000000000000000000000000000000000000000000000081525090612e82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e7991906133d9565b60405180910390fd5b50816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150556001600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050612f8a91906141b7565b60086000838152602001908152602001600020819055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f30303330303100000000000000000000000000000000000000000000000000008152509061304d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161304491906133d9565b60405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f303033303036000000000000000000000000000000000000000000000000000081525090613128576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161311f91906133d9565b60405180910390fd5b506131338282612da8565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60405180610100016040528060608152602001606081526020016060815260200160608152602001606081526020016060815260200160608152602001606081525090565b8280546131e490613b3b565b90600052602060002090601f016020900481019282613206576000855561324d565b82601f1061321f57803560ff191683800117855561324d565b8280016001018555821561324d579182015b8281111561324c578235825591602001919060010190613231565b5b50905061325a919061325e565b5090565b5b8082111561327757600081600090555060010161325f565b5090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6132ba81613285565b81146132c557600080fd5b50565b6000813590506132d7816132b1565b92915050565b6000602082840312156132f3576132f261327b565b5b6000613301848285016132c8565b91505092915050565b60008115159050919050565b61331f8161330a565b82525050565b600060208201905061333a6000830184613316565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561337a57808201518184015260208101905061335f565b83811115613389576000848401525b50505050565b6000601f19601f8301169050919050565b60006133ab82613340565b6133b5818561334b565b93506133c581856020860161335c565b6133ce8161338f565b840191505092915050565b600060208201905081810360008301526133f381846133a0565b905092915050565b6000819050919050565b61340e816133fb565b811461341957600080fd5b50565b60008135905061342b81613405565b92915050565b6000602082840312156134475761344661327b565b5b60006134558482850161341c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006134898261345e565b9050919050565b6134998161347e565b82525050565b60006020820190506134b46000830184613490565b92915050565b600074ffffffffffffffffffffffffffffffffffffffffff82169050919050565b6134e4816134ba565b81146134ef57600080fd5b50565b600081359050613501816134db565b61350a8161347e565b905092915050565b600080604083850312156135295761352861327b565b5b6000613537858286016134f2565b92505060206135488582860161341c565b9150509250929050565b61355b816133fb565b82525050565b60006020820190506135766000830184613552565b92915050565b6000806000606084860312156135955761359461327b565b5b60006135a3868287016134f2565b93505060206135b4868287016134f2565b92505060406135c58682870161341c565b9150509250925092565b6000602082840312156135e5576135e461327b565b5b60006135f3848285016134f2565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b613631816133fb565b82525050565b60006136438383613628565b60208301905092915050565b6000602082019050919050565b6000613667826135fc565b6136718185613607565b935061367c83613618565b8060005b838110156136ad5781516136948882613637565b975061369f8361364f565b925050600181019050613680565b5085935050505092915050565b600060208201905081810360008301526136d4818461365c565b905092915050565b600082825260208201905092915050565b60006136f882613340565b61370281856136dc565b935061371281856020860161335c565b61371b8161338f565b840191505092915050565b600061010083016000830151848203600086015261374482826136ed565b9150506020830151848203602086015261375e82826136ed565b9150506040830151848203604086015261377882826136ed565b9150506060830151848203606086015261379282826136ed565b915050608083015184820360808601526137ac82826136ed565b91505060a083015184820360a08601526137c682826136ed565b91505060c083015184820360c08601526137e082826136ed565b91505060e083015184820360e08601526137fa82826136ed565b9150508091505092915050565b600060208201905081810360008301526138218184613726565b905092915050565b6138328161330a565b811461383d57600080fd5b50565b60008135905061384f81613829565b92915050565b6000806040838503121561386c5761386b61327b565b5b600061387a858286016134f2565b925050602061388b85828601613840565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f8401126138ba576138b9613895565b5b8235905067ffffffffffffffff8111156138d7576138d661389a565b5b6020830191508360018202830111156138f3576138f261389f565b5b9250929050565b6000806000604084860312156139135761391261327b565b5b600084013567ffffffffffffffff81111561393157613930613280565b5b61393d868287016138a4565b935093505060206139508682870161341c565b9150509250925092565b600080fd5b600061010082840312156139765761397561395a565b5b81905092915050565b6000806000606084860312156139985761399761327b565b5b60006139a6868287016134f2565b935050602084013567ffffffffffffffff8111156139c7576139c6613280565b5b6139d38682870161395f565b92505060406139e48682870161341c565b9150509250925092565b60008083601f840112613a0457613a03613895565b5b8235905067ffffffffffffffff811115613a2157613a2061389a565b5b602083019150836001820283011115613a3d57613a3c61389f565b5b9250929050565b600080600080600060808688031215613a6057613a5f61327b565b5b6000613a6e888289016134f2565b9550506020613a7f888289016134f2565b9450506040613a908882890161341c565b935050606086013567ffffffffffffffff811115613ab157613ab0613280565b5b613abd888289016139ee565b92509250509295509295909350565b60008060408385031215613ae357613ae261327b565b5b6000613af1858286016134f2565b9250506020613b02858286016134f2565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613b5357607f821691505b60208210811415613b6757613b66613b0c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f546f6b656e20646f6573206e6f74206578697374000000000000000000000000600082015250565b6000613bd260148361334b565b9150613bdd82613b9c565b602082019050919050565b60006020820190508181036000830152613c0181613bc5565b9050919050565b7f496e73756666696369656e742066756e64730000000000000000000000000000600082015250565b6000613c3e60128361334b565b9150613c4982613c08565b602082019050919050565b60006020820190508181036000830152613c6d81613c31565b9050919050565b7f546f6b656e2068617320616c7265616479206265656e20736f6c640000000000600082015250565b6000613caa601b8361334b565b9150613cb582613c74565b602082019050919050565b60006020820190508181036000830152613cd981613c9d565b9050919050565b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112613d0c57613d0b613ce0565b5b80840192508235915067ffffffffffffffff821115613d2e57613d2d613ce5565b5b602083019250600182023603831315613d4a57613d49613cea565b5b509250929050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302613dee7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613db1565b613df88683613db1565b95508019841693508086168417925050509392505050565b6000819050919050565b6000613e35613e30613e2b846133fb565b613e10565b6133fb565b9050919050565b6000819050919050565b613e4f83613e1a565b613e63613e5b82613e3c565b848454613dbe565b825550505050565b600090565b613e78613e6b565b613e83818484613e46565b505050565b5b81811015613ea757613e9c600082613e70565b600181019050613e89565b5050565b601f821115613eec57613ebd81613d8c565b613ec684613da1565b81016020851015613ed5578190505b613ee9613ee185613da1565b830182613e88565b50505b505050565b600082821c905092915050565b6000613f0f60001984600802613ef1565b1980831691505092915050565b6000613f288383613efe565b9150826002028217905092915050565b613f428383613d52565b67ffffffffffffffff811115613f5b57613f5a613d5d565b5b613f658254613b3b565b613f70828285613eab565b6000601f831160018114613f9f5760008415613f8d578287013590505b613f978582613f1c565b865550613fff565b601f198416613fad86613d8c565b60005b82811015613fd557848901358255600182019150602085019450602081019050613fb0565b86831015613ff25784890135613fee601f891682613efe565b8355505b6001600288020188555050505b50505050505050565b614013838383613f38565b505050565b600081016000830161402a8185613cef565b614035818386614008565b50505050600181016020830161404b8185613cef565b614056818386614008565b50505050600281016040830161406c8185613cef565b614077818386614008565b50505050600381016060830161408d8185613cef565b614098818386614008565b5050505060048101608083016140ae8185613cef565b6140b9818386614008565b505050506005810160a083016140cf8185613cef565b6140da818386614008565b505050506006810160c083016140f08185613cef565b6140fb818386614008565b505050506007810160e083016141118185613cef565b61411c818386614008565b505050505050565b61412e8282614018565b5050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061416c826133fb565b9150614177836133fb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156141ac576141ab614132565b5b828201905092915050565b60006141c2826133fb565b91506141cd836133fb565b9250828210156141e0576141df614132565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26474726f6e582212202e273b607e2df4991604aee34fba21e07e95b8b3527c6fbbeb59b680aabb1b1764736f6c634300080b0033",
    "sourceMap": "306:2296:0:-:0;;;629:183;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;463:4:9;429:19;:31;449:10;429:31;;;;;;;;;;;;;;;;;:38;;;;;;;;;;;;;;;;;;2810:4:6;2776:19;:31;2796:10;2776:31;;;;;;;;;;;;;;;;;:38;;;;;;;;;;;;;;;;;;1041:4:5;1007:19;:31;1027:10;1007:31;;;;;;;;;;;;;;;;;:38;;;;;;;;;;;;;;;;;;1035:10:1;1027:5;;:18;;;;;;;;;;;;;;;;;;665:1:0;657:5;:9;;;;676:36;;;;;;;;;;;;;;;;;:7;:36;;;;;;;;;;;;:::i;:::-;;722:17;;;;;;;;;;;;;;;;;:9;:17;;;;;;;;;;;;:::i;:::-;;783:4;749:19;:31;769:10;749:31;;;;;;;;;;;;;;;;;:38;;;;;;;;;;;;;;;;;;306:2296;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:180:10:-;55:77;52:1;45:88;152:4;149:1;142:15;176:4;173:1;166:15;193:320;237:6;274:1;268:4;264:12;254:22;;321:1;315:4;311:12;342:18;332:81;;398:4;390:6;386:17;376:27;;332:81;460:2;452:6;449:14;429:18;426:38;423:84;;;479:18;;:::i;:::-;423:84;244:269;193:320;;;:::o;306:2296:0:-;;;;;;;",
    "deployedSourceMap": "306:2296:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;685:163:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;818:108:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;7909:173:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5770:338;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1175:113:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5020:338:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2145:108:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1840:240:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2355:125:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4286:170:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1422:189:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;7475:198:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1054:160:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;7019:194:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2486:114:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;473:65:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;588:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;932:116:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6510:223:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1544:595:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1220:318;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3687:199:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;8343:182;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2259:90:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1380:229:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;418:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;685:163:9;789:4;810:19;:33;830:12;810:33;;;;;;;;;;;;;;;;;;;;;;;;;;;803:40;;685:163;;;:::o;818:108:0:-;869:19;912:7;904:15;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;818:108;:::o;7909:173:6:-;8031:7;8008:8;2676:1;2645:33;;:9;:19;2655:8;2645:19;;;;;;;;;;;;;;;;;;;;;:33;;;;2680:13;;;;;;;;;;;;;;;;;2637:57;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;8055:12:::1;:22;8068:8;8055:22;;;;;;;;;;;;;;;;;;;;;8048:29;;7909:173:::0;;;;:::o;5770:338::-;5877:8;1863:18;1884:9;:19;1894:8;1884:19;;;;;;;;;;;;;;;;;;;;;1863:40;;1938:10;1924:24;;:10;:24;;;:68;;;;1952:16;:28;1969:10;1952:28;;;;;;;;;;;;;;;:40;1981:10;1952:40;;;;;;;;;;;;;;;;;;;;;;;;;1924:68;2000:21;;;;;;;;;;;;;;;;;1909:118;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;5904:8:::1;2676:1;2645:33;;:9;:19;2655:8;2645:19;;;;;;;;;;;;;;;;;;;;;:33;;;;2680:13;;;;;;;;;;;;;;;;::::0;2637:57:::1;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;5922:18:::2;5943:9;:19;5953:8;5943:19;;;;;;;;;;;;;;;;;;;;;5922:40;;5989:10;5976:23;;:9;:23;;;;6001:8;;;;;;;;;;;;;;;;::::0;5968:42:::2;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;6042:9;6017:12;:22;6030:8;6017:22;;;;;;;;;;;;:34;;;;;;;;;;;;;;;;;;6094:8;6083:9;6062:41;;6071:10;6062:41;;;;;;;;;;;;5916:192;2033:1:::1;1857:182:::0;5770:338;;;:::o;1175:113:5:-;1246:7;1270:6;:13;;;;1263:20;;1175:113;:::o;5020:338:6:-;5146:8;2227:18;2248:9;:19;2258:8;2248:19;;;;;;;;;;;;;;;;;;;;;2227:40;;2302:10;2288:24;;:10;:24;;;:70;;;;2348:10;2322:36;;:12;:22;2335:8;2322:22;;;;;;;;;;;;;;;;;;;;;:36;;;2288:70;:120;;;;2368:16;:28;2385:10;2368:28;;;;;;;;;;;;;;;:40;2397:10;2368:40;;;;;;;;;;;;;;;;;;;;;;;;;2288:120;2416:30;;;;;;;;;;;;;;;;;2273:179;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;5173:8:::1;2676:1;2645:33;;:9;:19;2655:8;2645:19;;;;;;;;;;;;;;;;;;;;;:33;;;;2680:13;;;;;;;;;;;;;;;;::::0;2637:57:::1;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;5191:18:::2;5212:9;:19;5222:8;5212:19;;;;;;;;;;;;;;;;;;;;;5191:40;;5259:5;5245:19;;:10;:19;;;5266:9;;;;;;;;;;;;;;;;::::0;5237:39:::2;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;5305:1;5290:17;;:3;:17;;;;5309:12;;;;;;;;;;;;;;;;::::0;5282:40:::2;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;5329:24;5339:3;5344:8;5329:9;:24::i;:::-;5185:173;2458:1:::1;2221:243:::0;5020:338;;;;:::o;2145:108:0:-;2201:7;2227:9;:19;2237:8;2227:19;;;;;;;;;;;;2220:26;;2145:108;;;:::o;1840:240:5:-;1961:7;1995:10;:18;2006:6;1995:18;;;;;;;;;;;;;;;:25;;;;1986:6;:34;2022:13;;;;;;;;;;;;;;;;;1978:58;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;2049:10;:18;2060:6;2049:18;;;;;;;;;;;;;;;2068:6;2049:26;;;;;;;;:::i;:::-;;;;;;;;;;2042:33;;1840:240;;;;:::o;2355:125:0:-;2420:16;2455:10;:18;2466:6;2455:18;;;;;;;;;;;;;;;2448:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:125;;;:::o;4286:170:6:-;4408:43;4426:5;4433:3;4438:8;4408:43;;;;;;;;;;;;:17;:43::i;:::-;4286:170;;;:::o;1422:189:5:-;1516:7;1550:6;:13;;;;1541:6;:22;1565:13;;;;;;;;;;;;;;;;;1533:46;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;1592:6;1599;1592:14;;;;;;;;:::i;:::-;;;;;;;;;;1585:21;;1422:189;;;:::o;7475:198:6:-;7566:14;7599:9;:19;7609:8;7599:19;;;;;;;;;;;;;;;;;;;;;7590:28;;7650:1;7632:20;;:6;:20;;;;7654:13;;;;;;;;;;;;;;;;;7624:44;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;7475:198;;;:::o;1054:160:0:-;1144:18;;:::i;:::-;1185:12;:22;1198:8;1185:22;;;;;;;;;;;1178:29;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1054:160;;;:::o;7019:194:6:-;7110:7;7153:1;7135:20;;:6;:20;;;;7157:12;;;;;;;;;;;;;;;;;7127:43;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;7183:25;7201:6;7183:17;:25::i;:::-;7176:32;;7019:194;;;:::o;2486:114:0:-;2544:4;2567:16;:26;2584:8;2567:26;;;;;;;;;;;;;;;;;;;;;2560:33;;2486:114;;;:::o;473:65:1:-;;;;;;;;;;;;;;;;;;;:::o;588:20::-;;;;;;;;;;;;;:::o;932:116:0:-;985:21;1032:9;1022:19;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;932:116;:::o;6510:223:6:-;6660:9;6618:16;:28;6635:10;6618:28;;;;;;;;;;;;;;;:39;6647:9;6618:39;;;;;;;;;;;;;;;;:51;;;;;;;;;;;;;;;;;;6707:9;6680:48;;6695:10;6680:48;;;6718:9;6680:48;;;;;;:::i;:::-;;;;;;;;6510:223;;:::o;1544:595:0:-;1683:5;;1672:8;:16;1664:49;;;;;;;;;;;;:::i;:::-;;;;;;;;;1744:9;:19;1754:8;1744:19;;;;;;;;;;;;1731:9;:32;;1723:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1805:16;:26;1822:8;1805:26;;;;;;;;;;;;;;;;;;;;;1804:27;1796:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;1873:21;1905:9;:19;1915:8;1905:19;;;;;;;;;;;;;;;;;;;;;1873:52;;1935:5;:14;;:25;1950:9;1935:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1970:37;1986:10;1998:8;1970:15;:37::i;:::-;2046:4;2017:16;:26;2034:8;2017:26;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;2060:22;2085:12;:22;2098:8;2085:22;;;;;;;;;;;2060:47;;2127:5;;2117:2;:7;;:15;;;;;;;:::i;:::-;;1654:485;;1544:595;;;:::o;1220:318::-;1181:5:1;;;;;;;;;;;1167:19;;:10;:19;;;1188:17;;;;;;;;;;;;;;;;;1159:47;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;1366:15:0::1;1384:5;;1366:23;;1399:25;1411:3;1416:7;1399:11;:25::i;:::-;1458:9;1434:12;:21;1447:7;1434:21;;;;;;;;;;;:33;;;;;;:::i;:::-;;;;1498:6;1477:9;:18;1487:7;1477:18;;;;;;;;;;;:27;;;;1530:1;1522:5;;:9;;;;:::i;:::-;1514:5;:17;;;;1356:182;1220:318:::0;;;:::o;3687:199:6:-;3835:46;3853:5;3860:3;3865:8;3875:5;;3835:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:17;:46::i;:::-;3687:199;;;;;:::o;8343:182::-;8464:4;8485:16;:24;8502:6;8485:24;;;;;;;;;;;;;;;:35;8510:9;8485:35;;;;;;;;;;;;;;;;;;;;;;;;;8478:42;;8343:182;;;;:::o;2259:90:0:-;2311:7;2337:5;;2330:12;;2259:90;:::o;1380:229:1:-;1181:5;;;;;;;;;;;1167:19;;:10;:19;;;1188:17;;;;;;;;;;;;;;;;;1159:47;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;1496:1:::1;1475:23;;:9;:23;;;;1500:31;;;;;;;;;;;;;;;;::::0;1467:65:::1;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;1571:9;1543:38;;1564:5;;;;;;;;;;;1543:38;;;;;;;;;;;;1595:9;1587:5;;:17;;;;;;;;;;;;;;;;;;1380:229:::0;:::o;418:51::-;;;;;;;;;;;;;;;;;;;:::o;8708:274:6:-;8803:12;8818:9;:19;8828:8;8818:19;;;;;;;;;;;;;;;;;;;;;8803:34;;8843:24;8858:8;8843:14;:24::i;:::-;8874:30;8889:4;8895:8;8874:14;:30::i;:::-;8910:26;8922:3;8927:8;8910:11;:26::i;:::-;8968:8;8963:3;8948:29;;8957:4;8948:29;;;;;;;;;;;;8797:185;8708:274;;:::o;12003:353::-;12144:8;2227:18;2248:9;:19;2258:8;2248:19;;;;;;;;;;;;;;;;;;;;;2227:40;;2302:10;2288:24;;:10;:24;;;:70;;;;2348:10;2322:36;;:12;:22;2335:8;2322:22;;;;;;;;;;;;;;;;;;;;;:36;;;2288:70;:120;;;;2368:16;:28;2385:10;2368:28;;;;;;;;;;;;;;;:40;2397:10;2368:40;;;;;;;;;;;;;;;;;;;;;;;;;2288:120;2416:30;;;;;;;;;;;;;;;;;2273:179;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;12171:8:::1;2676:1;2645:33;;:9;:19;2655:8;2645:19;;;;;;;;;;;;;;;;;;;;;:33;;;;2680:13;;;;;;;;;;;;;;;;::::0;2637:57:::1;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;12189:18:::2;12210:9;:19;12220:8;12210:19;;;;;;;;;;;;;;;;;;;;;12189:40;;12257:5;12243:19;;:10;:19;;;12264:9;;;;;;;;;;;;;;;;::::0;12235:39:::2;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;12303:1;12288:17;;:3;:17;;;;12307:12;;;;;;;;;;;;;;;;::::0;12280:40:::2;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;12327:24;12337:3;12342:8;12327:9;:24::i;:::-;12183:173;2458:1:::1;2221:243:::0;12003:353;;;;;:::o;5242:165:5:-;5353:7;5377:10;:18;5388:6;5377:18;;;;;;;;;;;;;;;:25;;;;5370:32;;5242:165;;;:::o;2461:207::-;2565:26;2577:3;2582:8;2565:11;:26::i;:::-;2597:6;2609:8;2597:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2662:1;2646:6;:13;;;;:17;;;;:::i;:::-;2624:9;:19;2634:8;2624:19;;;;;;;;;;;:39;;;;2461:207;;:::o;12483:104:6:-;12560:12;:22;12573:8;12560:22;;;;;;;;;;;;12553:29;;;;;;;;;;;12483:104;:::o;3808:580:5:-;3954:5;3931:28;;:9;:19;3941:8;3931:19;;;;;;;;;;;;;;;;;;;;;:28;;;3961:9;;;;;;;;;;;;;;;;;3923:48;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;3984:9;:19;3994:8;3984:19;;;;;;;;;;;;3977:26;;;;;;;;;;;4010;4039:14;:24;4054:8;4039:24;;;;;;;;;;;;4010:53;;4069:22;4121:1;4094:10;:17;4105:5;4094:17;;;;;;;;;;;;;;;:24;;;;:28;;;;:::i;:::-;4069:53;;4151:18;4133:14;:36;4129:225;;4183:17;4203:10;:17;4214:5;4203:17;;;;;;;;;;;;;;;4221:14;4203:33;;;;;;;;:::i;:::-;;;;;;;;;;4183:53;;4284:9;4244:10;:17;4255:5;4244:17;;;;;;;;;;;;;;;4262:18;4244:37;;;;;;;;:::i;:::-;;;;;;;;;:49;;;;4329:18;4301:14;:25;4316:9;4301:25;;;;;;;;;;;:46;;;;4175:179;4129:225;4360:10;:17;4371:5;4360:17;;;;;;;;;;;;;;;:23;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3917:471;;3808:580;;:::o;4651:304::-;4800:1;4769:33;;:9;:19;4779:8;4769:19;;;;;;;;;;;;;;;;;;;;;:33;;;4804:18;;;;;;;;;;;;;;;;;4761:62;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;4851:3;4829:9;:19;4839:8;4829:19;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;4861:10;:15;4872:3;4861:15;;;;;;;;;;;;;;;4882:8;4861:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4949:1;4924:10;:15;4935:3;4924:15;;;;;;;;;;;;;;;:22;;;;:26;;;;:::i;:::-;4897:14;:24;4912:8;4897:24;;;;;;;;;;;:53;;;;4651:304;;:::o;9363:284:6:-;9477:1;9462:17;;:3;:17;;;;9481:12;;;;;;;;;;;;;;;;;9454:40;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;9539:1;9508:33;;:9;:19;9518:8;9508:19;;;;;;;;;;;;;;;;;;;;;:33;;;9543:18;;;;;;;;;;;;;;;;;9500:62;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;9569:26;9581:3;9586:8;9569:11;:26::i;:::-;9633:8;9628:3;9607:35;;9624:1;9607:35;;;;;;;;;;;;9363:284;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;88:117:10:-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:307::-;1866:1;1876:113;1890:6;1887:1;1884:13;1876:113;;;1975:1;1970:3;1966:11;1960:18;1956:1;1951:3;1947:11;1940:39;1912:2;1909:1;1905:10;1900:15;;1876:113;;;2007:6;2004:1;2001:13;1998:101;;;2087:1;2078:6;2073:3;2069:16;2062:27;1998:101;1847:258;1798:307;;;:::o;2111:102::-;2152:6;2203:2;2199:7;2194:2;2187:5;2183:14;2179:28;2169:38;;2111:102;;;:::o;2219:364::-;2307:3;2335:39;2368:5;2335:39;:::i;:::-;2390:71;2454:6;2449:3;2390:71;:::i;:::-;2383:78;;2470:52;2515:6;2510:3;2503:4;2496:5;2492:16;2470:52;:::i;:::-;2547:29;2569:6;2547:29;:::i;:::-;2542:3;2538:39;2531:46;;2311:272;2219:364;;;;:::o;2589:313::-;2702:4;2740:2;2729:9;2725:18;2717:26;;2789:9;2783:4;2779:20;2775:1;2764:9;2760:17;2753:47;2817:78;2890:4;2881:6;2817:78;:::i;:::-;2809:86;;2589:313;;;;:::o;2908:77::-;2945:7;2974:5;2963:16;;2908:77;;;:::o;2991:122::-;3064:24;3082:5;3064:24;:::i;:::-;3057:5;3054:35;3044:63;;3103:1;3100;3093:12;3044:63;2991:122;:::o;3119:139::-;3165:5;3203:6;3190:20;3181:29;;3219:33;3246:5;3219:33;:::i;:::-;3119:139;;;;:::o;3264:329::-;3323:6;3372:2;3360:9;3351:7;3347:23;3343:32;3340:119;;;3378:79;;:::i;:::-;3340:119;3498:1;3523:53;3568:7;3559:6;3548:9;3544:22;3523:53;:::i;:::-;3513:63;;3469:117;3264:329;;;;:::o;3599:126::-;3636:7;3676:42;3669:5;3665:54;3654:65;;3599:126;;;:::o;3731:96::-;3768:7;3797:24;3815:5;3797:24;:::i;:::-;3786:35;;3731:96;;;:::o;3833:118::-;3920:24;3938:5;3920:24;:::i;:::-;3915:3;3908:37;3833:118;;:::o;3957:222::-;4050:4;4088:2;4077:9;4073:18;4065:26;;4101:71;4169:1;4158:9;4154:17;4145:6;4101:71;:::i;:::-;3957:222;;;;:::o;4185:128::-;4222:7;4262:44;4255:5;4251:56;4240:67;;4185:128;;;:::o;4319:122::-;4392:24;4410:5;4392:24;:::i;:::-;4385:5;4382:35;4372:63;;4431:1;4428;4421:12;4372:63;4319:122;:::o;4447:181::-;4493:5;4531:6;4518:20;4509:29;;4547:33;4574:5;4547:33;:::i;:::-;4598:24;4616:5;4598:24;:::i;:::-;4589:33;;4447:181;;;;:::o;4634:474::-;4702:6;4710;4759:2;4747:9;4738:7;4734:23;4730:32;4727:119;;;4765:79;;:::i;:::-;4727:119;4885:1;4910:53;4955:7;4946:6;4935:9;4931:22;4910:53;:::i;:::-;4900:63;;4856:117;5012:2;5038:53;5083:7;5074:6;5063:9;5059:22;5038:53;:::i;:::-;5028:63;;4983:118;4634:474;;;;;:::o;5114:118::-;5201:24;5219:5;5201:24;:::i;:::-;5196:3;5189:37;5114:118;;:::o;5238:222::-;5331:4;5369:2;5358:9;5354:18;5346:26;;5382:71;5450:1;5439:9;5435:17;5426:6;5382:71;:::i;:::-;5238:222;;;;:::o;5466:619::-;5543:6;5551;5559;5608:2;5596:9;5587:7;5583:23;5579:32;5576:119;;;5614:79;;:::i;:::-;5576:119;5734:1;5759:53;5804:7;5795:6;5784:9;5780:22;5759:53;:::i;:::-;5749:63;;5705:117;5861:2;5887:53;5932:7;5923:6;5912:9;5908:22;5887:53;:::i;:::-;5877:63;;5832:118;5989:2;6015:53;6060:7;6051:6;6040:9;6036:22;6015:53;:::i;:::-;6005:63;;5960:118;5466:619;;;;;:::o;6091:329::-;6150:6;6199:2;6187:9;6178:7;6174:23;6170:32;6167:119;;;6205:79;;:::i;:::-;6167:119;6325:1;6350:53;6395:7;6386:6;6375:9;6371:22;6350:53;:::i;:::-;6340:63;;6296:117;6091:329;;;;:::o;6426:114::-;6493:6;6527:5;6521:12;6511:22;;6426:114;;;:::o;6546:184::-;6645:11;6679:6;6674:3;6667:19;6719:4;6714:3;6710:14;6695:29;;6546:184;;;;:::o;6736:132::-;6803:4;6826:3;6818:11;;6856:4;6851:3;6847:14;6839:22;;6736:132;;;:::o;6874:108::-;6951:24;6969:5;6951:24;:::i;:::-;6946:3;6939:37;6874:108;;:::o;6988:179::-;7057:10;7078:46;7120:3;7112:6;7078:46;:::i;:::-;7156:4;7151:3;7147:14;7133:28;;6988:179;;;;:::o;7173:113::-;7243:4;7275;7270:3;7266:14;7258:22;;7173:113;;;:::o;7322:732::-;7441:3;7470:54;7518:5;7470:54;:::i;:::-;7540:86;7619:6;7614:3;7540:86;:::i;:::-;7533:93;;7650:56;7700:5;7650:56;:::i;:::-;7729:7;7760:1;7745:284;7770:6;7767:1;7764:13;7745:284;;;7846:6;7840:13;7873:63;7932:3;7917:13;7873:63;:::i;:::-;7866:70;;7959:60;8012:6;7959:60;:::i;:::-;7949:70;;7805:224;7792:1;7789;7785:9;7780:14;;7745:284;;;7749:14;8045:3;8038:10;;7446:608;;;7322:732;;;;:::o;8060:373::-;8203:4;8241:2;8230:9;8226:18;8218:26;;8290:9;8284:4;8280:20;8276:1;8265:9;8261:17;8254:47;8318:108;8421:4;8412:6;8318:108;:::i;:::-;8310:116;;8060:373;;;;:::o;8439:159::-;8513:11;8547:6;8542:3;8535:19;8587:4;8582:3;8578:14;8563:29;;8439:159;;;;:::o;8604:344::-;8682:3;8710:39;8743:5;8710:39;:::i;:::-;8765:61;8819:6;8814:3;8765:61;:::i;:::-;8758:68;;8835:52;8880:6;8875:3;8868:4;8861:5;8857:16;8835:52;:::i;:::-;8912:29;8934:6;8912:29;:::i;:::-;8907:3;8903:39;8896:46;;8686:262;8604:344;;;;:::o;9002:2196::-;9125:3;9161:6;9156:3;9152:16;9250:4;9243:5;9239:16;9233:23;9303:3;9297:4;9293:14;9286:4;9281:3;9277:14;9270:38;9329:73;9397:4;9383:12;9329:73;:::i;:::-;9321:81;;9178:235;9494:4;9487:5;9483:16;9477:23;9547:3;9541:4;9537:14;9530:4;9525:3;9521:14;9514:38;9573:73;9641:4;9627:12;9573:73;:::i;:::-;9565:81;;9423:234;9742:4;9735:5;9731:16;9725:23;9795:3;9789:4;9785:14;9778:4;9773:3;9769:14;9762:38;9821:73;9889:4;9875:12;9821:73;:::i;:::-;9813:81;;9667:238;9994:4;9987:5;9983:16;9977:23;10047:3;10041:4;10037:14;10030:4;10025:3;10021:14;10014:38;10073:73;10141:4;10127:12;10073:73;:::i;:::-;10065:81;;9915:242;10243:4;10236:5;10232:16;10226:23;10296:3;10290:4;10286:14;10279:4;10274:3;10270:14;10263:38;10322:73;10390:4;10376:12;10322:73;:::i;:::-;10314:81;;10167:239;10496:4;10489:5;10485:16;10479:23;10549:3;10543:4;10539:14;10532:4;10527:3;10523:14;10516:38;10575:73;10643:4;10629:12;10575:73;:::i;:::-;10567:81;;10416:243;10753:4;10746:5;10742:16;10736:23;10806:3;10800:4;10796:14;10789:4;10784:3;10780:14;10773:38;10832:73;10900:4;10886:12;10832:73;:::i;:::-;10824:81;;10669:247;11008:4;11001:5;10997:16;10991:23;11061:3;11055:4;11051:14;11044:4;11039:3;11035:14;11028:38;11087:73;11155:4;11141:12;11087:73;:::i;:::-;11079:81;;10926:245;11188:4;11181:11;;9130:2068;9002:2196;;;;:::o;11204:381::-;11351:4;11389:2;11378:9;11374:18;11366:26;;11438:9;11432:4;11428:20;11424:1;11413:9;11409:17;11402:47;11466:112;11573:4;11564:6;11466:112;:::i;:::-;11458:120;;11204:381;;;;:::o;11591:116::-;11661:21;11676:5;11661:21;:::i;:::-;11654:5;11651:32;11641:60;;11697:1;11694;11687:12;11641:60;11591:116;:::o;11713:133::-;11756:5;11794:6;11781:20;11772:29;;11810:30;11834:5;11810:30;:::i;:::-;11713:133;;;;:::o;11852:468::-;11917:6;11925;11974:2;11962:9;11953:7;11949:23;11945:32;11942:119;;;11980:79;;:::i;:::-;11942:119;12100:1;12125:53;12170:7;12161:6;12150:9;12146:22;12125:53;:::i;:::-;12115:63;;12071:117;12227:2;12253:50;12295:7;12286:6;12275:9;12271:22;12253:50;:::i;:::-;12243:60;;12198:115;11852:468;;;;;:::o;12326:117::-;12435:1;12432;12425:12;12449:117;12558:1;12555;12548:12;12572:117;12681:1;12678;12671:12;12709:553;12767:8;12777:6;12827:3;12820:4;12812:6;12808:17;12804:27;12794:122;;12835:79;;:::i;:::-;12794:122;12948:6;12935:20;12925:30;;12978:18;12970:6;12967:30;12964:117;;;13000:79;;:::i;:::-;12964:117;13114:4;13106:6;13102:17;13090:29;;13168:3;13160:4;13152:6;13148:17;13138:8;13134:32;13131:41;13128:128;;;13175:79;;:::i;:::-;13128:128;12709:553;;;;;:::o;13268:674::-;13348:6;13356;13364;13413:2;13401:9;13392:7;13388:23;13384:32;13381:119;;;13419:79;;:::i;:::-;13381:119;13567:1;13556:9;13552:17;13539:31;13597:18;13589:6;13586:30;13583:117;;;13619:79;;:::i;:::-;13583:117;13732:65;13789:7;13780:6;13769:9;13765:22;13732:65;:::i;:::-;13714:83;;;;13510:297;13846:2;13872:53;13917:7;13908:6;13897:9;13893:22;13872:53;:::i;:::-;13862:63;;13817:118;13268:674;;;;;:::o;13948:117::-;14057:1;14054;14047:12;14097:234;14172:5;14213:3;14204:6;14199:3;14195:16;14191:26;14188:113;;;14220:79;;:::i;:::-;14188:113;14319:6;14310:15;;14097:234;;;;:::o;14337:837::-;14443:6;14451;14459;14508:2;14496:9;14487:7;14483:23;14479:32;14476:119;;;14514:79;;:::i;:::-;14476:119;14634:1;14659:53;14704:7;14695:6;14684:9;14680:22;14659:53;:::i;:::-;14649:63;;14605:117;14789:2;14778:9;14774:18;14761:32;14820:18;14812:6;14809:30;14806:117;;;14842:79;;:::i;:::-;14806:117;14947:82;15021:7;15012:6;15001:9;14997:22;14947:82;:::i;:::-;14937:92;;14732:307;15078:2;15104:53;15149:7;15140:6;15129:9;15125:22;15104:53;:::i;:::-;15094:63;;15049:118;14337:837;;;;;:::o;15193:552::-;15250:8;15260:6;15310:3;15303:4;15295:6;15291:17;15287:27;15277:122;;15318:79;;:::i;:::-;15277:122;15431:6;15418:20;15408:30;;15461:18;15453:6;15450:30;15447:117;;;15483:79;;:::i;:::-;15447:117;15597:4;15589:6;15585:17;15573:29;;15651:3;15643:4;15635:6;15631:17;15621:8;15617:32;15614:41;15611:128;;;15658:79;;:::i;:::-;15611:128;15193:552;;;;;:::o;15751:963::-;15848:6;15856;15864;15872;15880;15929:3;15917:9;15908:7;15904:23;15900:33;15897:120;;;15936:79;;:::i;:::-;15897:120;16056:1;16081:53;16126:7;16117:6;16106:9;16102:22;16081:53;:::i;:::-;16071:63;;16027:117;16183:2;16209:53;16254:7;16245:6;16234:9;16230:22;16209:53;:::i;:::-;16199:63;;16154:118;16311:2;16337:53;16382:7;16373:6;16362:9;16358:22;16337:53;:::i;:::-;16327:63;;16282:118;16467:2;16456:9;16452:18;16439:32;16498:18;16490:6;16487:30;16484:117;;;16520:79;;:::i;:::-;16484:117;16633:64;16689:7;16680:6;16669:9;16665:22;16633:64;:::i;:::-;16615:82;;;;16410:297;15751:963;;;;;;;;:::o;16720:474::-;16788:6;16796;16845:2;16833:9;16824:7;16820:23;16816:32;16813:119;;;16851:79;;:::i;:::-;16813:119;16971:1;16996:53;17041:7;17032:6;17021:9;17017:22;16996:53;:::i;:::-;16986:63;;16942:117;17098:2;17124:53;17169:7;17160:6;17149:9;17145:22;17124:53;:::i;:::-;17114:63;;17069:118;16720:474;;;;;:::o;17200:180::-;17248:77;17245:1;17238:88;17345:4;17342:1;17335:15;17369:4;17366:1;17359:15;17386:320;17430:6;17467:1;17461:4;17457:12;17447:22;;17514:1;17508:4;17504:12;17535:18;17525:81;;17591:4;17583:6;17579:17;17569:27;;17525:81;17653:2;17645:6;17642:14;17622:18;17619:38;17616:84;;;17672:18;;:::i;:::-;17616:84;17437:269;17386:320;;;:::o;17712:180::-;17760:77;17757:1;17750:88;17857:4;17854:1;17847:15;17881:4;17878:1;17871:15;17898:170;18038:22;18034:1;18026:6;18022:14;18015:46;17898:170;:::o;18074:366::-;18216:3;18237:67;18301:2;18296:3;18237:67;:::i;:::-;18230:74;;18313:93;18402:3;18313:93;:::i;:::-;18431:2;18426:3;18422:12;18415:19;;18074:366;;;:::o;18446:419::-;18612:4;18650:2;18639:9;18635:18;18627:26;;18699:9;18693:4;18689:20;18685:1;18674:9;18670:17;18663:47;18727:131;18853:4;18727:131;:::i;:::-;18719:139;;18446:419;;;:::o;18871:168::-;19011:20;19007:1;18999:6;18995:14;18988:44;18871:168;:::o;19045:366::-;19187:3;19208:67;19272:2;19267:3;19208:67;:::i;:::-;19201:74;;19284:93;19373:3;19284:93;:::i;:::-;19402:2;19397:3;19393:12;19386:19;;19045:366;;;:::o;19417:419::-;19583:4;19621:2;19610:9;19606:18;19598:26;;19670:9;19664:4;19660:20;19656:1;19645:9;19641:17;19634:47;19698:131;19824:4;19698:131;:::i;:::-;19690:139;;19417:419;;;:::o;19842:177::-;19982:29;19978:1;19970:6;19966:14;19959:53;19842:177;:::o;20025:366::-;20167:3;20188:67;20252:2;20247:3;20188:67;:::i;:::-;20181:74;;20264:93;20353:3;20264:93;:::i;:::-;20382:2;20377:3;20373:12;20366:19;;20025:366;;;:::o;20397:419::-;20563:4;20601:2;20590:9;20586:18;20578:26;;20650:9;20644:4;20640:20;20636:1;20625:9;20621:17;20614:47;20678:131;20804:4;20678:131;:::i;:::-;20670:139;;20397:419;;;:::o;21008:117::-;21117:1;21114;21107:12;21131:117;21240:1;21237;21230:12;21254:117;21363:1;21360;21353:12;21377:725;21455:4;21461:6;21517:11;21504:25;21617:1;21611:4;21607:12;21596:8;21580:14;21576:29;21572:48;21552:18;21548:73;21538:168;;21625:79;;:::i;:::-;21538:168;21737:18;21727:8;21723:33;21715:41;;21789:4;21776:18;21766:28;;21817:18;21809:6;21806:30;21803:117;;;21839:79;;:::i;:::-;21803:117;21947:2;21941:4;21937:13;21929:21;;22004:4;21996:6;21992:17;21976:14;21972:38;21966:4;21962:49;21959:136;;;22014:79;;:::i;:::-;21959:136;21468:634;21377:725;;;;;:::o;22108:97::-;22167:6;22195:3;22185:13;;22108:97;;;;:::o;22211:180::-;22259:77;22256:1;22249:88;22356:4;22353:1;22346:15;22380:4;22377:1;22370:15;22397:141;22446:4;22469:3;22461:11;;22492:3;22489:1;22482:14;22526:4;22523:1;22513:18;22505:26;;22397:141;;;:::o;22544:93::-;22581:6;22628:2;22623;22616:5;22612:14;22608:23;22598:33;;22544:93;;;:::o;22643:107::-;22687:8;22737:5;22731:4;22727:16;22706:37;;22643:107;;;;:::o;22756:393::-;22825:6;22875:1;22863:10;22859:18;22898:97;22928:66;22917:9;22898:97;:::i;:::-;23016:39;23046:8;23035:9;23016:39;:::i;:::-;23004:51;;23088:4;23084:9;23077:5;23073:21;23064:30;;23137:4;23127:8;23123:19;23116:5;23113:30;23103:40;;22832:317;;22756:393;;;;;:::o;23155:60::-;23183:3;23204:5;23197:12;;23155:60;;;:::o;23221:142::-;23271:9;23304:53;23322:34;23331:24;23349:5;23331:24;:::i;:::-;23322:34;:::i;:::-;23304:53;:::i;:::-;23291:66;;23221:142;;;:::o;23369:75::-;23412:3;23433:5;23426:12;;23369:75;;;:::o;23450:269::-;23560:39;23591:7;23560:39;:::i;:::-;23621:91;23670:41;23694:16;23670:41;:::i;:::-;23662:6;23655:4;23649:11;23621:91;:::i;:::-;23615:4;23608:105;23526:193;23450:269;;;:::o;23725:73::-;23770:3;23725:73;:::o;23804:189::-;23881:32;;:::i;:::-;23922:65;23980:6;23972;23966:4;23922:65;:::i;:::-;23857:136;23804:189;;:::o;23999:186::-;24059:120;24076:3;24069:5;24066:14;24059:120;;;24130:39;24167:1;24160:5;24130:39;:::i;:::-;24103:1;24096:5;24092:13;24083:22;;24059:120;;;23999:186;;:::o;24191:543::-;24292:2;24287:3;24284:11;24281:446;;;24326:38;24358:5;24326:38;:::i;:::-;24410:29;24428:10;24410:29;:::i;:::-;24400:8;24396:44;24593:2;24581:10;24578:18;24575:49;;;24614:8;24599:23;;24575:49;24637:80;24693:22;24711:3;24693:22;:::i;:::-;24683:8;24679:37;24666:11;24637:80;:::i;:::-;24296:431;;24281:446;24191:543;;;:::o;24740:117::-;24794:8;24844:5;24838:4;24834:16;24813:37;;24740:117;;;;:::o;24863:169::-;24907:6;24940:51;24988:1;24984:6;24976:5;24973:1;24969:13;24940:51;:::i;:::-;24936:56;25021:4;25015;25011:15;25001:25;;24914:118;24863:169;;;;:::o;25037:295::-;25113:4;25259:29;25284:3;25278:4;25259:29;:::i;:::-;25251:37;;25321:3;25318:1;25314:11;25308:4;25305:21;25297:29;;25037:295;;;;:::o;25337:1403::-;25461:44;25501:3;25496;25461:44;:::i;:::-;25570:18;25562:6;25559:30;25556:56;;;25592:18;;:::i;:::-;25556:56;25636:38;25668:4;25662:11;25636:38;:::i;:::-;25721:67;25781:6;25773;25767:4;25721:67;:::i;:::-;25815:1;25844:2;25836:6;25833:14;25861:1;25856:632;;;;26532:1;26549:6;26546:84;;;26605:9;26600:3;26596:19;26583:33;26574:42;;26546:84;26656:67;26716:6;26709:5;26656:67;:::i;:::-;26650:4;26643:81;26505:229;25826:908;;25856:632;25908:4;25904:9;25896:6;25892:22;25942:37;25974:4;25942:37;:::i;:::-;26001:1;26015:215;26029:7;26026:1;26023:14;26015:215;;;26115:9;26110:3;26106:19;26093:33;26085:6;26078:49;26166:1;26158:6;26154:14;26144:24;;26213:2;26202:9;26198:18;26185:31;;26052:4;26049:1;26045:12;26040:17;;26015:215;;;26258:6;26249:7;26246:19;26243:186;;;26323:9;26318:3;26314:19;26301:33;26366:48;26408:4;26400:6;26396:17;26385:9;26366:48;:::i;:::-;26358:6;26351:64;26266:163;26243:186;26475:1;26471;26463:6;26459:14;26455:22;26449:4;26442:36;25863:625;;;25826:908;;25436:1304;;;25337:1403;;;:::o;26746:218::-;26861:97;26950:7;26941;26935:4;26861:97;:::i;:::-;26746:218;;;:::o;26970:3057::-;27150:1;27144:4;27140:12;27196:1;27189:5;27185:13;27261:63;27311:12;27304:5;27261:63;:::i;:::-;27338:112;27436:13;27421;27409:10;27338:112;:::i;:::-;27107:354;;;;27514:1;27508:4;27504:12;27560:2;27553:5;27549:14;27626:63;27676:12;27669:5;27626:63;:::i;:::-;27703:112;27801:13;27786;27774:10;27703:112;:::i;:::-;27471:355;;;;27879:1;27873:4;27869:12;27925:2;27918:5;27914:14;27991:63;28041:12;28034:5;27991:63;:::i;:::-;28068:112;28166:13;28151;28139:10;28068:112;:::i;:::-;27836:355;;;;28244:1;28238:4;28234:12;28290:2;28283:5;28279:14;28356:63;28406:12;28399:5;28356:63;:::i;:::-;28433:112;28531:13;28516;28504:10;28433:112;:::i;:::-;28201:355;;;;28609:1;28603:4;28599:12;28655:3;28648:5;28644:15;28722:63;28772:12;28765:5;28722:63;:::i;:::-;28799:112;28897:13;28882;28870:10;28799:112;:::i;:::-;28566:356;;;;28975:1;28969:4;28965:12;29021:3;29014:5;29010:15;29088:63;29138:12;29131:5;29088:63;:::i;:::-;29165:112;29263:13;29248;29236:10;29165:112;:::i;:::-;28932:356;;;;29341:1;29335:4;29331:12;29387:3;29380:5;29376:15;29454:63;29504:12;29497:5;29454:63;:::i;:::-;29531:112;29629:13;29614;29602:10;29531:112;:::i;:::-;29298:356;;;;29707:1;29701:4;29697:12;29753:3;29746:5;29742:15;29820:63;29870:12;29863:5;29820:63;:::i;:::-;29897:112;29995:13;29980;29968:10;29897:112;:::i;:::-;29664:356;;;;26970:3057;;:::o;30033:264::-;30173:118;30283:7;30277:4;30173:118;:::i;:::-;30033:264;;:::o;30303:180::-;30351:77;30348:1;30341:88;30448:4;30445:1;30438:15;30472:4;30469:1;30462:15;30489:305;30529:3;30548:20;30566:1;30548:20;:::i;:::-;30543:25;;30582:20;30600:1;30582:20;:::i;:::-;30577:25;;30736:1;30668:66;30664:74;30661:1;30658:81;30655:107;;;30742:18;;:::i;:::-;30655:107;30786:1;30783;30779:9;30772:16;;30489:305;;;;:::o;30800:191::-;30840:4;30860:20;30878:1;30860:20;:::i;:::-;30855:25;;30894:20;30912:1;30894:20;:::i;:::-;30889:25;;30933:1;30930;30927:8;30924:34;;;30938:18;;:::i;:::-;30924:34;30983:1;30980;30976:9;30968:17;;30800:191;;;;:::o;30997:180::-;31045:77;31042:1;31035:88;31142:4;31139:1;31132:15;31166:4;31163:1;31156:15",
    "source": "pragma solidity ^0.8.0;\n\nimport \"./ownership/ownable.sol\";\nimport \"./tokens/nf-token-enumerable.sol\";\n\nstruct NFTMetadata {\n    string name;\n    string uri;\n    string species;\n    string description;\n    string location;\n    string organization;\n    string sponsorshipStart;\n    string sponsorshipEnd;\n}\n\ncontract SponsorshipToken is\nNFTokenEnumerable,\nOwnable\n{\n    string internal nftName;\n\n    string internal nftSymbol;\n\n    uint256 internal nonce;\n\n    mapping(uint256 => NFTMetadata) internal idToMetadata;\n\n    mapping(uint256 => bool) internal hasTokenBeenSold;\n\n    mapping(uint256 => uint256) internal idToPrice;\n\n    constructor()\n    {\n        nonce = 0;\n        nftName = \"Animal Sponsorship Token\";\n        nftSymbol = \"AST\";\n        supportedInterfaces[0x5b5e139f] = true; // ERC721Metadata\n    }\n\n    function name()\n    external\n    view\n    returns (string memory _name)\n    {\n        _name = nftName;\n    }\n\n    function symbol()\n    external\n    view\n    returns (string memory _symbol)\n    {\n        _symbol = nftSymbol;\n    }\n\n    function tokenMetadata(\n        uint256 _tokenId\n    )\n    external\n    view\n    returns (NFTMetadata memory)\n    {\n        return idToMetadata[_tokenId];\n    }\n\n    function mint(\n        address _to,\n        NFTMetadata calldata _metadata,\n        uint256 _price\n    )\n    external\n    onlyOwner\n    {\n        uint256 tokenId = nonce;\n        super._mint(_to, tokenId);\n        idToMetadata[tokenId] = _metadata;\n        idToPrice[tokenId] = _price;\n        nonce = nonce + 1;\n    }\n\n    function purchase(\n        string calldata _name,\n        uint256 _tokenId\n    )\n    external\n    payable\n    {\n        require(_tokenId < nonce, \"Token does not exist\");\n        require(msg.value >= idToPrice[_tokenId], \"Insufficient funds\");\n        require(!hasTokenBeenSold[_tokenId], \"Token has already been sold\");\n        address payable owner = payable(idToOwner[_tokenId]);\n        owner.transfer(msg.value);\n        super._transfer(msg.sender, _tokenId);\n        hasTokenBeenSold[_tokenId] = true;\n        NFTMetadata storage md = idToMetadata[_tokenId];\n        md.name = _name;\n    }\n\n    function price(uint256 _tokenId) external view returns (uint256) {\n        return idToPrice[_tokenId];\n    }\n\n    function getNumberOfTokens() external view returns (uint256) {\n        return nonce;\n    }\n\n    function getTokensByOwner(address _owner) external view returns (uint256[] memory) {\n        return ownerToIds[_owner];\n    }\n\n    function adopted(uint256 _tokenId) external view returns (bool) {\n        return hasTokenBeenSold[_tokenId];\n    }\n}\n",
    "sourcePath": "/home/vincetiu/Documents/github/hackathons/hack-web3-2022/contracts/contracts/SponsorshipToken.sol",
    "ast": {
        "absolutePath": "/home/vincetiu/Documents/github/hackathons/hack-web3-2022/contracts/contracts/SponsorshipToken.sol",
        "exportedSymbols": {
            "AddressUtils": [
                1497
            ],
            "ERC165": [
                1509
            ],
            "ERC721": [
                493
            ],
            "ERC721Enumerable": [
                362
            ],
            "ERC721TokenReceiver": [
                380
            ],
            "NFTMetadata": [
                20
            ],
            "NFToken": [
                1465
            ],
            "NFTokenEnumerable": [
                820
            ],
            "Ownable": [
                334
            ],
            "SponsorshipToken": [
                262
            ],
            "SupportsInterface": [
                1546
            ]
        },
        "id": 263,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1,
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".0"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:23:0"
            },
            {
                "absolutePath": "/home/vincetiu/Documents/github/hackathons/hack-web3-2022/contracts/contracts/ownership/ownable.sol",
                "file": "./ownership/ownable.sol",
                "id": 2,
                "nameLocation": "-1:-1:-1",
                "nodeType": "ImportDirective",
                "scope": 263,
                "sourceUnit": 335,
                "src": "25:33:0",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "/home/vincetiu/Documents/github/hackathons/hack-web3-2022/contracts/contracts/tokens/nf-token-enumerable.sol",
                "file": "./tokens/nf-token-enumerable.sol",
                "id": 3,
                "nameLocation": "-1:-1:-1",
                "nodeType": "ImportDirective",
                "scope": 263,
                "sourceUnit": 821,
                "src": "59:42:0",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "canonicalName": "NFTMetadata",
                "id": 20,
                "members": [
                    {
                        "constant": false,
                        "id": 5,
                        "mutability": "mutable",
                        "name": "name",
                        "nameLocation": "135:4:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "128:11:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 4,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "128:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 7,
                        "mutability": "mutable",
                        "name": "uri",
                        "nameLocation": "152:3:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "145:10:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 6,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "145:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 9,
                        "mutability": "mutable",
                        "name": "species",
                        "nameLocation": "168:7:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "161:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 8,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "161:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 11,
                        "mutability": "mutable",
                        "name": "description",
                        "nameLocation": "188:11:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "181:18:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 10,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "181:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 13,
                        "mutability": "mutable",
                        "name": "location",
                        "nameLocation": "212:8:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "205:15:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 12,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "205:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 15,
                        "mutability": "mutable",
                        "name": "organization",
                        "nameLocation": "233:12:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "226:19:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 14,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "226:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 17,
                        "mutability": "mutable",
                        "name": "sponsorshipStart",
                        "nameLocation": "258:16:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "251:23:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 16,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "251:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 19,
                        "mutability": "mutable",
                        "name": "sponsorshipEnd",
                        "nameLocation": "287:14:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "280:21:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 18,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "280:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    }
                ],
                "name": "NFTMetadata",
                "nameLocation": "110:11:0",
                "nodeType": "StructDefinition",
                "scope": 263,
                "src": "103:201:0",
                "visibility": "public"
            },
            {
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 21,
                            "name": "NFTokenEnumerable",
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 820,
                            "src": "335:17:0"
                        },
                        "id": 22,
                        "nodeType": "InheritanceSpecifier",
                        "src": "335:17:0"
                    },
                    {
                        "baseName": {
                            "id": 23,
                            "name": "Ownable",
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 334,
                            "src": "354:7:0"
                        },
                        "id": 24,
                        "nodeType": "InheritanceSpecifier",
                        "src": "354:7:0"
                    }
                ],
                "canonicalName": "SponsorshipToken",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "id": 262,
                "linearizedBaseContracts": [
                    262,
                    334,
                    820,
                    362,
                    1465,
                    1546,
                    1509,
                    493
                ],
                "name": "SponsorshipToken",
                "nameLocation": "315:16:0",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 26,
                        "mutability": "mutable",
                        "name": "nftName",
                        "nameLocation": "384:7:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "368:23:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 25,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "368:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 28,
                        "mutability": "mutable",
                        "name": "nftSymbol",
                        "nameLocation": "414:9:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "398:25:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 27,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "398:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 30,
                        "mutability": "mutable",
                        "name": "nonce",
                        "nameLocation": "447:5:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "430:22:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 29,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "430:7:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 35,
                        "mutability": "mutable",
                        "name": "idToMetadata",
                        "nameLocation": "500:12:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "459:53:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFTMetadata_$20_storage_$",
                            "typeString": "mapping(uint256 => struct NFTMetadata)"
                        },
                        "typeName": {
                            "id": 34,
                            "keyType": {
                                "id": 31,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "467:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "459:31:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFTMetadata_$20_storage_$",
                                "typeString": "mapping(uint256 => struct NFTMetadata)"
                            },
                            "valueType": {
                                "id": 33,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 32,
                                    "name": "NFTMetadata",
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 20,
                                    "src": "478:11:0"
                                },
                                "referencedDeclaration": 20,
                                "src": "478:11:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                    "typeString": "struct NFTMetadata"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 39,
                        "mutability": "mutable",
                        "name": "hasTokenBeenSold",
                        "nameLocation": "553:16:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "519:50:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                            "typeString": "mapping(uint256 => bool)"
                        },
                        "typeName": {
                            "id": 38,
                            "keyType": {
                                "id": 36,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "527:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "519:24:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                "typeString": "mapping(uint256 => bool)"
                            },
                            "valueType": {
                                "id": 37,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "538:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 43,
                        "mutability": "mutable",
                        "name": "idToPrice",
                        "nameLocation": "613:9:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "576:46:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                        },
                        "typeName": {
                            "id": 42,
                            "keyType": {
                                "id": 40,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "584:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "576:27:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                            },
                            "valueType": {
                                "id": 41,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "595:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 64,
                            "nodeType": "Block",
                            "src": "647:165:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 48,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 46,
                                            "name": "nonce",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30,
                                            "src": "657:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "30",
                                            "id": 47,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "665:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "657:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 49,
                                    "nodeType": "ExpressionStatement",
                                    "src": "657:9:0"
                                },
                                {
                                    "expression": {
                                        "id": 52,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 50,
                                            "name": "nftName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26,
                                            "src": "676:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "416e696d616c2053706f6e736f727368697020546f6b656e",
                                            "id": 51,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "686:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_a902b8f09c255901dbf49b48598ea7458f38a209911c95935156d1ee3d60a5d9",
                                                "typeString": "literal_string \"Animal Sponsorship Token\""
                                            },
                                            "value": "Animal Sponsorship Token"
                                        },
                                        "src": "676:36:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 53,
                                    "nodeType": "ExpressionStatement",
                                    "src": "676:36:0"
                                },
                                {
                                    "expression": {
                                        "id": 56,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 54,
                                            "name": "nftSymbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 28,
                                            "src": "722:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "415354",
                                            "id": 55,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "734:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_e54622415812af84f32384ba09ac23633d4358fa25ae37d40e5ecbda3dbecb0d",
                                                "typeString": "literal_string \"AST\""
                                            },
                                            "value": "AST"
                                        },
                                        "src": "722:17:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 57,
                                    "nodeType": "ExpressionStatement",
                                    "src": "722:17:0"
                                },
                                {
                                    "expression": {
                                        "id": 62,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 58,
                                                "name": "supportedInterfaces",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1520,
                                                "src": "749:19:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                                                    "typeString": "mapping(bytes4 => bool)"
                                                }
                                            },
                                            "id": 60,
                                            "indexExpression": {
                                                "hexValue": "30783562356531333966",
                                                "id": 59,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "769:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1532892063_by_1",
                                                    "typeString": "int_const 1532892063"
                                                },
                                                "value": "0x5b5e139f"
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "749:31:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 61,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "783:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "749:38:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 63,
                                    "nodeType": "ExpressionStatement",
                                    "src": "749:38:0"
                                }
                            ]
                        },
                        "id": 65,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 44,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "640:2:0"
                        },
                        "returnParameters": {
                            "id": 45,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "647:0:0"
                        },
                        "scope": 262,
                        "src": "629:183:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 74,
                            "nodeType": "Block",
                            "src": "894:32:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 70,
                                            "name": "_name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "904:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71,
                                            "name": "nftName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26,
                                            "src": "912:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "src": "904:15:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "id": 73,
                                    "nodeType": "ExpressionStatement",
                                    "src": "904:15:0"
                                }
                            ]
                        },
                        "functionSelector": "06fdde03",
                        "id": 75,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nameLocation": "827:4:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 66,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "831:2:0"
                        },
                        "returnParameters": {
                            "id": 69,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68,
                                    "mutability": "mutable",
                                    "name": "_name",
                                    "nameLocation": "883:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 75,
                                    "src": "869:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 67,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "869:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "868:21:0"
                        },
                        "scope": 262,
                        "src": "818:108:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 84,
                            "nodeType": "Block",
                            "src": "1012:36:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 82,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 80,
                                            "name": "_symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 78,
                                            "src": "1022:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 81,
                                            "name": "nftSymbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 28,
                                            "src": "1032:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "src": "1022:19:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "id": 83,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1022:19:0"
                                }
                            ]
                        },
                        "functionSelector": "95d89b41",
                        "id": 85,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nameLocation": "941:6:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 76,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "947:2:0"
                        },
                        "returnParameters": {
                            "id": 79,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 78,
                                    "mutability": "mutable",
                                    "name": "_symbol",
                                    "nameLocation": "999:7:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 85,
                                    "src": "985:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 77,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "985:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "984:23:0"
                        },
                        "scope": 262,
                        "src": "932:116:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 97,
                            "nodeType": "Block",
                            "src": "1168:46:0",
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 93,
                                            "name": "idToMetadata",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35,
                                            "src": "1185:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFTMetadata_$20_storage_$",
                                                "typeString": "mapping(uint256 => struct NFTMetadata storage ref)"
                                            }
                                        },
                                        "id": 95,
                                        "indexExpression": {
                                            "id": 94,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 87,
                                            "src": "1198:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "1185:22:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NFTMetadata_$20_storage",
                                            "typeString": "struct NFTMetadata storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 92,
                                    "id": 96,
                                    "nodeType": "Return",
                                    "src": "1178:29:0"
                                }
                            ]
                        },
                        "functionSelector": "6914db60",
                        "id": 98,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tokenMetadata",
                        "nameLocation": "1063:13:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 88,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 87,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "1094:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 98,
                                    "src": "1086:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 86,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1086:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1076:32:0"
                        },
                        "returnParameters": {
                            "id": 92,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 91,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 98,
                                    "src": "1144:18:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_NFTMetadata_$20_memory_ptr",
                                        "typeString": "struct NFTMetadata"
                                    },
                                    "typeName": {
                                        "id": 90,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 89,
                                            "name": "NFTMetadata",
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 20,
                                            "src": "1144:11:0"
                                        },
                                        "referencedDeclaration": 20,
                                        "src": "1144:11:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                            "typeString": "struct NFTMetadata"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1143:20:0"
                        },
                        "scope": 262,
                        "src": "1054:160:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 139,
                            "nodeType": "Block",
                            "src": "1356:182:0",
                            "statements": [
                                {
                                    "assignments": [
                                        111
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 111,
                                            "mutability": "mutable",
                                            "name": "tokenId",
                                            "nameLocation": "1374:7:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 139,
                                            "src": "1366:15:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 110,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1366:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 113,
                                    "initialValue": {
                                        "id": 112,
                                        "name": "nonce",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 30,
                                        "src": "1384:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1366:23:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 117,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 100,
                                                "src": "1411:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 118,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 111,
                                                "src": "1416:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 114,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4294967271,
                                                "src": "1399:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_super$_SponsorshipToken_$262_$",
                                                    "typeString": "type(contract super SponsorshipToken)"
                                                }
                                            },
                                            "id": 116,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "_mint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 630,
                                            "src": "1399:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 119,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1399:25:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 120,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1399:25:0"
                                },
                                {
                                    "expression": {
                                        "id": 125,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 121,
                                                "name": "idToMetadata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35,
                                                "src": "1434:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFTMetadata_$20_storage_$",
                                                    "typeString": "mapping(uint256 => struct NFTMetadata storage ref)"
                                                }
                                            },
                                            "id": 123,
                                            "indexExpression": {
                                                "id": 122,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 111,
                                                "src": "1447:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "1434:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_NFTMetadata_$20_storage",
                                                "typeString": "struct NFTMetadata storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 124,
                                            "name": "_metadata",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 103,
                                            "src": "1458:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_NFTMetadata_$20_calldata_ptr",
                                                "typeString": "struct NFTMetadata calldata"
                                            }
                                        },
                                        "src": "1434:33:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NFTMetadata_$20_storage",
                                            "typeString": "struct NFTMetadata storage ref"
                                        }
                                    },
                                    "id": 126,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1434:33:0"
                                },
                                {
                                    "expression": {
                                        "id": 131,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 127,
                                                "name": "idToPrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 43,
                                                "src": "1477:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 129,
                                            "indexExpression": {
                                                "id": 128,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 111,
                                                "src": "1487:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "1477:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 130,
                                            "name": "_price",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 105,
                                            "src": "1498:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1477:27:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 132,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1477:27:0"
                                },
                                {
                                    "expression": {
                                        "id": 137,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 133,
                                            "name": "nonce",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30,
                                            "src": "1514:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 136,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 134,
                                                "name": "nonce",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30,
                                                "src": "1522:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "hexValue": "31",
                                                "id": 135,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1530:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "1522:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1514:17:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 138,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1514:17:0"
                                }
                            ]
                        },
                        "functionSelector": "b4c886c3",
                        "id": 140,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 108,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 107,
                                    "name": "onlyOwner",
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 305,
                                    "src": "1342:9:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1342:9:0"
                            }
                        ],
                        "name": "mint",
                        "nameLocation": "1229:4:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 106,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 100,
                                    "mutability": "mutable",
                                    "name": "_to",
                                    "nameLocation": "1251:3:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 140,
                                    "src": "1243:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 99,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1243:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 103,
                                    "mutability": "mutable",
                                    "name": "_metadata",
                                    "nameLocation": "1285:9:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 140,
                                    "src": "1264:30:0",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_NFTMetadata_$20_calldata_ptr",
                                        "typeString": "struct NFTMetadata"
                                    },
                                    "typeName": {
                                        "id": 102,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 101,
                                            "name": "NFTMetadata",
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 20,
                                            "src": "1264:11:0"
                                        },
                                        "referencedDeclaration": 20,
                                        "src": "1264:11:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                            "typeString": "struct NFTMetadata"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 105,
                                    "mutability": "mutable",
                                    "name": "_price",
                                    "nameLocation": "1312:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 140,
                                    "src": "1304:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 104,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1304:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1233:91:0"
                        },
                        "returnParameters": {
                            "id": 109,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1356:0:0"
                        },
                        "scope": 262,
                        "src": "1220:318:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 215,
                            "nodeType": "Block",
                            "src": "1654:485:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 150,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 148,
                                                    "name": "_tokenId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144,
                                                    "src": "1672:8:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 149,
                                                    "name": "nonce",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 30,
                                                    "src": "1683:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "1672:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "546f6b656e20646f6573206e6f74206578697374",
                                                "id": 151,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1690:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_547be7f5ed2d17cca91d35e8212265e350385ed13daeee07722cf3e686dd6726",
                                                    "typeString": "literal_string \"Token does not exist\""
                                                },
                                                "value": "Token does not exist"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_547be7f5ed2d17cca91d35e8212265e350385ed13daeee07722cf3e686dd6726",
                                                    "typeString": "literal_string \"Token does not exist\""
                                                }
                                            ],
                                            "id": 147,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "1664:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 152,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1664:49:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 153,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1664:49:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 160,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 155,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967281,
                                                        "src": "1731:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 156,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "value",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1731:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "baseExpression": {
                                                        "id": 157,
                                                        "name": "idToPrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 43,
                                                        "src": "1744:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                            "typeString": "mapping(uint256 => uint256)"
                                                        }
                                                    },
                                                    "id": 159,
                                                    "indexExpression": {
                                                        "id": 158,
                                                        "name": "_tokenId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144,
                                                        "src": "1754:8:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1744:19:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "1731:32:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "496e73756666696369656e742066756e6473",
                                                "id": 161,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1765:20:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_63452317cb6d597bef833f023ed2962a84dbd24c571e27629ed1e3056d6cfd8d",
                                                    "typeString": "literal_string \"Insufficient funds\""
                                                },
                                                "value": "Insufficient funds"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_63452317cb6d597bef833f023ed2962a84dbd24c571e27629ed1e3056d6cfd8d",
                                                    "typeString": "literal_string \"Insufficient funds\""
                                                }
                                            ],
                                            "id": 154,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "1723:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 162,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1723:63:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 163,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1723:63:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 168,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "1804:27:0",
                                                "subExpression": {
                                                    "baseExpression": {
                                                        "id": 165,
                                                        "name": "hasTokenBeenSold",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 39,
                                                        "src": "1805:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                            "typeString": "mapping(uint256 => bool)"
                                                        }
                                                    },
                                                    "id": 167,
                                                    "indexExpression": {
                                                        "id": 166,
                                                        "name": "_tokenId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144,
                                                        "src": "1822:8:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1805:26:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "546f6b656e2068617320616c7265616479206265656e20736f6c64",
                                                "id": 169,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1833:29:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_aebc55b227036b503d742775b6945a05704530f91ecba16b715229377f96f7f6",
                                                    "typeString": "literal_string \"Token has already been sold\""
                                                },
                                                "value": "Token has already been sold"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_aebc55b227036b503d742775b6945a05704530f91ecba16b715229377f96f7f6",
                                                    "typeString": "literal_string \"Token has already been sold\""
                                                }
                                            ],
                                            "id": 164,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "1796:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 170,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1796:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 171,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1796:67:0"
                                },
                                {
                                    "assignments": [
                                        173
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 173,
                                            "mutability": "mutable",
                                            "name": "owner",
                                            "nameLocation": "1889:5:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 215,
                                            "src": "1873:21:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            },
                                            "typeName": {
                                                "id": 172,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1873:15:0",
                                                "stateMutability": "payable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 180,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "baseExpression": {
                                                    "id": 176,
                                                    "name": "idToOwner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 868,
                                                    "src": "1905:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                                        "typeString": "mapping(uint256 => address)"
                                                    }
                                                },
                                                "id": 178,
                                                "indexExpression": {
                                                    "id": 177,
                                                    "name": "_tokenId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144,
                                                    "src": "1915:8:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1905:19:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 175,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1897:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_payable_$",
                                                "typeString": "type(address payable)"
                                            },
                                            "typeName": {
                                                "id": 174,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1897:8:0",
                                                "stateMutability": "payable",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 179,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1897:28:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1873:52:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 184,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "1950:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 185,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "src": "1950:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 181,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 173,
                                                "src": "1935:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            "id": 183,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "transfer",
                                            "nodeType": "MemberAccess",
                                            "src": "1935:14:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256)"
                                            }
                                        },
                                        "id": 186,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1935:25:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 187,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1935:25:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 191,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "1986:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 192,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1986:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 193,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144,
                                                "src": "1998:8:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 188,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4294967271,
                                                "src": "1970:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_super$_SponsorshipToken_$262_$",
                                                    "typeString": "type(contract super SponsorshipToken)"
                                                }
                                            },
                                            "id": 190,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "_transfer",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1251,
                                            "src": "1970:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 194,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1970:37:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 195,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1970:37:0"
                                },
                                {
                                    "expression": {
                                        "id": 200,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 196,
                                                "name": "hasTokenBeenSold",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39,
                                                "src": "2017:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                    "typeString": "mapping(uint256 => bool)"
                                                }
                                            },
                                            "id": 198,
                                            "indexExpression": {
                                                "id": 197,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144,
                                                "src": "2034:8:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2017:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 199,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2046:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "2017:33:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 201,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2017:33:0"
                                },
                                {
                                    "assignments": [
                                        204
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 204,
                                            "mutability": "mutable",
                                            "name": "md",
                                            "nameLocation": "2080:2:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 215,
                                            "src": "2060:22:0",
                                            "stateVariable": false,
                                            "storageLocation": "storage",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                                "typeString": "struct NFTMetadata"
                                            },
                                            "typeName": {
                                                "id": 203,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 202,
                                                    "name": "NFTMetadata",
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 20,
                                                    "src": "2060:11:0"
                                                },
                                                "referencedDeclaration": 20,
                                                "src": "2060:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                                    "typeString": "struct NFTMetadata"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 208,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 205,
                                            "name": "idToMetadata",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35,
                                            "src": "2085:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFTMetadata_$20_storage_$",
                                                "typeString": "mapping(uint256 => struct NFTMetadata storage ref)"
                                            }
                                        },
                                        "id": 207,
                                        "indexExpression": {
                                            "id": 206,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144,
                                            "src": "2098:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2085:22:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NFTMetadata_$20_storage",
                                            "typeString": "struct NFTMetadata storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2060:47:0"
                                },
                                {
                                    "expression": {
                                        "id": 213,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 209,
                                                "name": "md",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 204,
                                                "src": "2117:2:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                                    "typeString": "struct NFTMetadata storage pointer"
                                                }
                                            },
                                            "id": 211,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "name",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 5,
                                            "src": "2117:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 212,
                                            "name": "_name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 142,
                                            "src": "2127:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_calldata_ptr",
                                                "typeString": "string calldata"
                                            }
                                        },
                                        "src": "2117:15:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 214,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2117:15:0"
                                }
                            ]
                        },
                        "functionSelector": "aa38e38c",
                        "id": 216,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "purchase",
                        "nameLocation": "1553:8:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 145,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 142,
                                    "mutability": "mutable",
                                    "name": "_name",
                                    "nameLocation": "1587:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 216,
                                    "src": "1571:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 141,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1571:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "1610:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 216,
                                    "src": "1602:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 143,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1602:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1561:63:0"
                        },
                        "returnParameters": {
                            "id": 146,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1654:0:0"
                        },
                        "scope": 262,
                        "src": "1544:595:0",
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 227,
                            "nodeType": "Block",
                            "src": "2210:43:0",
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 223,
                                            "name": "idToPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 43,
                                            "src": "2227:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                "typeString": "mapping(uint256 => uint256)"
                                            }
                                        },
                                        "id": 225,
                                        "indexExpression": {
                                            "id": 224,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 218,
                                            "src": "2237:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2227:19:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 222,
                                    "id": 226,
                                    "nodeType": "Return",
                                    "src": "2220:26:0"
                                }
                            ]
                        },
                        "functionSelector": "26a49e37",
                        "id": 228,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "price",
                        "nameLocation": "2154:5:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 219,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 218,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "2168:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 228,
                                    "src": "2160:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 217,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2160:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2159:18:0"
                        },
                        "returnParameters": {
                            "id": 222,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 221,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 228,
                                    "src": "2201:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 220,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2201:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2200:9:0"
                        },
                        "scope": 262,
                        "src": "2145:108:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 235,
                            "nodeType": "Block",
                            "src": "2320:29:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 233,
                                        "name": "nonce",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 30,
                                        "src": "2337:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 232,
                                    "id": 234,
                                    "nodeType": "Return",
                                    "src": "2330:12:0"
                                }
                            ]
                        },
                        "functionSelector": "efeecb51",
                        "id": 236,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getNumberOfTokens",
                        "nameLocation": "2268:17:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 229,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2285:2:0"
                        },
                        "returnParameters": {
                            "id": 232,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 231,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 236,
                                    "src": "2311:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 230,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2311:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2310:9:0"
                        },
                        "scope": 262,
                        "src": "2259:90:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 248,
                            "nodeType": "Block",
                            "src": "2438:42:0",
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 244,
                                            "name": "ownerToIds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 521,
                                            "src": "2455:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                                                "typeString": "mapping(address => uint256[] storage ref)"
                                            }
                                        },
                                        "id": 246,
                                        "indexExpression": {
                                            "id": 245,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 238,
                                            "src": "2466:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2455:18:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                            "typeString": "uint256[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 243,
                                    "id": 247,
                                    "nodeType": "Return",
                                    "src": "2448:25:0"
                                }
                            ]
                        },
                        "functionSelector": "40398d67",
                        "id": 249,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTokensByOwner",
                        "nameLocation": "2364:16:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 239,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 238,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "2389:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 249,
                                    "src": "2381:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 237,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2381:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2380:16:0"
                        },
                        "returnParameters": {
                            "id": 243,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 242,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 249,
                                    "src": "2420:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 240,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2420:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 241,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2420:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2419:18:0"
                        },
                        "scope": 262,
                        "src": "2355:125:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 260,
                            "nodeType": "Block",
                            "src": "2550:50:0",
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 256,
                                            "name": "hasTokenBeenSold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 39,
                                            "src": "2567:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                "typeString": "mapping(uint256 => bool)"
                                            }
                                        },
                                        "id": 258,
                                        "indexExpression": {
                                            "id": 257,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 251,
                                            "src": "2584:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2567:26:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 255,
                                    "id": 259,
                                    "nodeType": "Return",
                                    "src": "2560:33:0"
                                }
                            ]
                        },
                        "functionSelector": "754b86ea",
                        "id": 261,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "adopted",
                        "nameLocation": "2495:7:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 252,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 251,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "2511:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 261,
                                    "src": "2503:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 250,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2503:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2502:18:0"
                        },
                        "returnParameters": {
                            "id": 255,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 254,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 261,
                                    "src": "2544:4:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 253,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2544:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2543:6:0"
                        },
                        "scope": 262,
                        "src": "2486:114:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "scope": 263,
                "src": "306:2296:0",
                "usedErrors": []
            }
        ],
        "src": "0:2603:0"
    },
    "legacyAST": {
        "absolutePath": "/home/vincetiu/Documents/github/hackathons/hack-web3-2022/contracts/contracts/SponsorshipToken.sol",
        "exportedSymbols": {
            "AddressUtils": [
                1497
            ],
            "ERC165": [
                1509
            ],
            "ERC721": [
                493
            ],
            "ERC721Enumerable": [
                362
            ],
            "ERC721TokenReceiver": [
                380
            ],
            "NFTMetadata": [
                20
            ],
            "NFToken": [
                1465
            ],
            "NFTokenEnumerable": [
                820
            ],
            "Ownable": [
                334
            ],
            "SponsorshipToken": [
                262
            ],
            "SupportsInterface": [
                1546
            ]
        },
        "id": 263,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1,
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".0"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:23:0"
            },
            {
                "absolutePath": "/home/vincetiu/Documents/github/hackathons/hack-web3-2022/contracts/contracts/ownership/ownable.sol",
                "file": "./ownership/ownable.sol",
                "id": 2,
                "nameLocation": "-1:-1:-1",
                "nodeType": "ImportDirective",
                "scope": 263,
                "sourceUnit": 335,
                "src": "25:33:0",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "/home/vincetiu/Documents/github/hackathons/hack-web3-2022/contracts/contracts/tokens/nf-token-enumerable.sol",
                "file": "./tokens/nf-token-enumerable.sol",
                "id": 3,
                "nameLocation": "-1:-1:-1",
                "nodeType": "ImportDirective",
                "scope": 263,
                "sourceUnit": 821,
                "src": "59:42:0",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "canonicalName": "NFTMetadata",
                "id": 20,
                "members": [
                    {
                        "constant": false,
                        "id": 5,
                        "mutability": "mutable",
                        "name": "name",
                        "nameLocation": "135:4:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "128:11:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 4,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "128:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 7,
                        "mutability": "mutable",
                        "name": "uri",
                        "nameLocation": "152:3:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "145:10:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 6,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "145:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 9,
                        "mutability": "mutable",
                        "name": "species",
                        "nameLocation": "168:7:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "161:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 8,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "161:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 11,
                        "mutability": "mutable",
                        "name": "description",
                        "nameLocation": "188:11:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "181:18:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 10,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "181:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 13,
                        "mutability": "mutable",
                        "name": "location",
                        "nameLocation": "212:8:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "205:15:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 12,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "205:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 15,
                        "mutability": "mutable",
                        "name": "organization",
                        "nameLocation": "233:12:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "226:19:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 14,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "226:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 17,
                        "mutability": "mutable",
                        "name": "sponsorshipStart",
                        "nameLocation": "258:16:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "251:23:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 16,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "251:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 19,
                        "mutability": "mutable",
                        "name": "sponsorshipEnd",
                        "nameLocation": "287:14:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 20,
                        "src": "280:21:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 18,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "280:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    }
                ],
                "name": "NFTMetadata",
                "nameLocation": "110:11:0",
                "nodeType": "StructDefinition",
                "scope": 263,
                "src": "103:201:0",
                "visibility": "public"
            },
            {
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 21,
                            "name": "NFTokenEnumerable",
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 820,
                            "src": "335:17:0"
                        },
                        "id": 22,
                        "nodeType": "InheritanceSpecifier",
                        "src": "335:17:0"
                    },
                    {
                        "baseName": {
                            "id": 23,
                            "name": "Ownable",
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 334,
                            "src": "354:7:0"
                        },
                        "id": 24,
                        "nodeType": "InheritanceSpecifier",
                        "src": "354:7:0"
                    }
                ],
                "canonicalName": "SponsorshipToken",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "id": 262,
                "linearizedBaseContracts": [
                    262,
                    334,
                    820,
                    362,
                    1465,
                    1546,
                    1509,
                    493
                ],
                "name": "SponsorshipToken",
                "nameLocation": "315:16:0",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 26,
                        "mutability": "mutable",
                        "name": "nftName",
                        "nameLocation": "384:7:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "368:23:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 25,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "368:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 28,
                        "mutability": "mutable",
                        "name": "nftSymbol",
                        "nameLocation": "414:9:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "398:25:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 27,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "398:6:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 30,
                        "mutability": "mutable",
                        "name": "nonce",
                        "nameLocation": "447:5:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "430:22:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 29,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "430:7:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 35,
                        "mutability": "mutable",
                        "name": "idToMetadata",
                        "nameLocation": "500:12:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "459:53:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFTMetadata_$20_storage_$",
                            "typeString": "mapping(uint256 => struct NFTMetadata)"
                        },
                        "typeName": {
                            "id": 34,
                            "keyType": {
                                "id": 31,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "467:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "459:31:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFTMetadata_$20_storage_$",
                                "typeString": "mapping(uint256 => struct NFTMetadata)"
                            },
                            "valueType": {
                                "id": 33,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 32,
                                    "name": "NFTMetadata",
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 20,
                                    "src": "478:11:0"
                                },
                                "referencedDeclaration": 20,
                                "src": "478:11:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                    "typeString": "struct NFTMetadata"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 39,
                        "mutability": "mutable",
                        "name": "hasTokenBeenSold",
                        "nameLocation": "553:16:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "519:50:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                            "typeString": "mapping(uint256 => bool)"
                        },
                        "typeName": {
                            "id": 38,
                            "keyType": {
                                "id": 36,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "527:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "519:24:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                "typeString": "mapping(uint256 => bool)"
                            },
                            "valueType": {
                                "id": 37,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "538:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 43,
                        "mutability": "mutable",
                        "name": "idToPrice",
                        "nameLocation": "613:9:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 262,
                        "src": "576:46:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                        },
                        "typeName": {
                            "id": 42,
                            "keyType": {
                                "id": 40,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "584:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "576:27:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                            },
                            "valueType": {
                                "id": 41,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "595:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 64,
                            "nodeType": "Block",
                            "src": "647:165:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 48,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 46,
                                            "name": "nonce",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30,
                                            "src": "657:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "30",
                                            "id": 47,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "665:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "657:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 49,
                                    "nodeType": "ExpressionStatement",
                                    "src": "657:9:0"
                                },
                                {
                                    "expression": {
                                        "id": 52,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 50,
                                            "name": "nftName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26,
                                            "src": "676:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "416e696d616c2053706f6e736f727368697020546f6b656e",
                                            "id": 51,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "686:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_a902b8f09c255901dbf49b48598ea7458f38a209911c95935156d1ee3d60a5d9",
                                                "typeString": "literal_string \"Animal Sponsorship Token\""
                                            },
                                            "value": "Animal Sponsorship Token"
                                        },
                                        "src": "676:36:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 53,
                                    "nodeType": "ExpressionStatement",
                                    "src": "676:36:0"
                                },
                                {
                                    "expression": {
                                        "id": 56,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 54,
                                            "name": "nftSymbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 28,
                                            "src": "722:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "415354",
                                            "id": 55,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "734:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_e54622415812af84f32384ba09ac23633d4358fa25ae37d40e5ecbda3dbecb0d",
                                                "typeString": "literal_string \"AST\""
                                            },
                                            "value": "AST"
                                        },
                                        "src": "722:17:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 57,
                                    "nodeType": "ExpressionStatement",
                                    "src": "722:17:0"
                                },
                                {
                                    "expression": {
                                        "id": 62,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 58,
                                                "name": "supportedInterfaces",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1520,
                                                "src": "749:19:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                                                    "typeString": "mapping(bytes4 => bool)"
                                                }
                                            },
                                            "id": 60,
                                            "indexExpression": {
                                                "hexValue": "30783562356531333966",
                                                "id": 59,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "769:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1532892063_by_1",
                                                    "typeString": "int_const 1532892063"
                                                },
                                                "value": "0x5b5e139f"
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "749:31:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 61,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "783:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "749:38:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 63,
                                    "nodeType": "ExpressionStatement",
                                    "src": "749:38:0"
                                }
                            ]
                        },
                        "id": 65,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 44,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "640:2:0"
                        },
                        "returnParameters": {
                            "id": 45,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "647:0:0"
                        },
                        "scope": 262,
                        "src": "629:183:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 74,
                            "nodeType": "Block",
                            "src": "894:32:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 70,
                                            "name": "_name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "904:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71,
                                            "name": "nftName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26,
                                            "src": "912:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "src": "904:15:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "id": 73,
                                    "nodeType": "ExpressionStatement",
                                    "src": "904:15:0"
                                }
                            ]
                        },
                        "functionSelector": "06fdde03",
                        "id": 75,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nameLocation": "827:4:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 66,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "831:2:0"
                        },
                        "returnParameters": {
                            "id": 69,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68,
                                    "mutability": "mutable",
                                    "name": "_name",
                                    "nameLocation": "883:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 75,
                                    "src": "869:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 67,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "869:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "868:21:0"
                        },
                        "scope": 262,
                        "src": "818:108:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 84,
                            "nodeType": "Block",
                            "src": "1012:36:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 82,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 80,
                                            "name": "_symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 78,
                                            "src": "1022:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 81,
                                            "name": "nftSymbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 28,
                                            "src": "1032:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "src": "1022:19:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "id": 83,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1022:19:0"
                                }
                            ]
                        },
                        "functionSelector": "95d89b41",
                        "id": 85,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nameLocation": "941:6:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 76,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "947:2:0"
                        },
                        "returnParameters": {
                            "id": 79,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 78,
                                    "mutability": "mutable",
                                    "name": "_symbol",
                                    "nameLocation": "999:7:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 85,
                                    "src": "985:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 77,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "985:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "984:23:0"
                        },
                        "scope": 262,
                        "src": "932:116:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 97,
                            "nodeType": "Block",
                            "src": "1168:46:0",
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 93,
                                            "name": "idToMetadata",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35,
                                            "src": "1185:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFTMetadata_$20_storage_$",
                                                "typeString": "mapping(uint256 => struct NFTMetadata storage ref)"
                                            }
                                        },
                                        "id": 95,
                                        "indexExpression": {
                                            "id": 94,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 87,
                                            "src": "1198:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "1185:22:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NFTMetadata_$20_storage",
                                            "typeString": "struct NFTMetadata storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 92,
                                    "id": 96,
                                    "nodeType": "Return",
                                    "src": "1178:29:0"
                                }
                            ]
                        },
                        "functionSelector": "6914db60",
                        "id": 98,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tokenMetadata",
                        "nameLocation": "1063:13:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 88,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 87,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "1094:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 98,
                                    "src": "1086:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 86,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1086:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1076:32:0"
                        },
                        "returnParameters": {
                            "id": 92,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 91,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 98,
                                    "src": "1144:18:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_NFTMetadata_$20_memory_ptr",
                                        "typeString": "struct NFTMetadata"
                                    },
                                    "typeName": {
                                        "id": 90,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 89,
                                            "name": "NFTMetadata",
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 20,
                                            "src": "1144:11:0"
                                        },
                                        "referencedDeclaration": 20,
                                        "src": "1144:11:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                            "typeString": "struct NFTMetadata"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1143:20:0"
                        },
                        "scope": 262,
                        "src": "1054:160:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 139,
                            "nodeType": "Block",
                            "src": "1356:182:0",
                            "statements": [
                                {
                                    "assignments": [
                                        111
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 111,
                                            "mutability": "mutable",
                                            "name": "tokenId",
                                            "nameLocation": "1374:7:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 139,
                                            "src": "1366:15:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 110,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1366:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 113,
                                    "initialValue": {
                                        "id": 112,
                                        "name": "nonce",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 30,
                                        "src": "1384:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1366:23:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 117,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 100,
                                                "src": "1411:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 118,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 111,
                                                "src": "1416:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 114,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4294967271,
                                                "src": "1399:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_super$_SponsorshipToken_$262_$",
                                                    "typeString": "type(contract super SponsorshipToken)"
                                                }
                                            },
                                            "id": 116,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "_mint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 630,
                                            "src": "1399:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 119,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1399:25:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 120,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1399:25:0"
                                },
                                {
                                    "expression": {
                                        "id": 125,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 121,
                                                "name": "idToMetadata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35,
                                                "src": "1434:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFTMetadata_$20_storage_$",
                                                    "typeString": "mapping(uint256 => struct NFTMetadata storage ref)"
                                                }
                                            },
                                            "id": 123,
                                            "indexExpression": {
                                                "id": 122,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 111,
                                                "src": "1447:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "1434:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_NFTMetadata_$20_storage",
                                                "typeString": "struct NFTMetadata storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 124,
                                            "name": "_metadata",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 103,
                                            "src": "1458:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_NFTMetadata_$20_calldata_ptr",
                                                "typeString": "struct NFTMetadata calldata"
                                            }
                                        },
                                        "src": "1434:33:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NFTMetadata_$20_storage",
                                            "typeString": "struct NFTMetadata storage ref"
                                        }
                                    },
                                    "id": 126,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1434:33:0"
                                },
                                {
                                    "expression": {
                                        "id": 131,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 127,
                                                "name": "idToPrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 43,
                                                "src": "1477:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 129,
                                            "indexExpression": {
                                                "id": 128,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 111,
                                                "src": "1487:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "1477:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 130,
                                            "name": "_price",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 105,
                                            "src": "1498:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1477:27:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 132,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1477:27:0"
                                },
                                {
                                    "expression": {
                                        "id": 137,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 133,
                                            "name": "nonce",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30,
                                            "src": "1514:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 136,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 134,
                                                "name": "nonce",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30,
                                                "src": "1522:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "hexValue": "31",
                                                "id": 135,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1530:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "1522:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1514:17:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 138,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1514:17:0"
                                }
                            ]
                        },
                        "functionSelector": "b4c886c3",
                        "id": 140,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 108,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 107,
                                    "name": "onlyOwner",
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 305,
                                    "src": "1342:9:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1342:9:0"
                            }
                        ],
                        "name": "mint",
                        "nameLocation": "1229:4:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 106,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 100,
                                    "mutability": "mutable",
                                    "name": "_to",
                                    "nameLocation": "1251:3:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 140,
                                    "src": "1243:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 99,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1243:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 103,
                                    "mutability": "mutable",
                                    "name": "_metadata",
                                    "nameLocation": "1285:9:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 140,
                                    "src": "1264:30:0",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_NFTMetadata_$20_calldata_ptr",
                                        "typeString": "struct NFTMetadata"
                                    },
                                    "typeName": {
                                        "id": 102,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 101,
                                            "name": "NFTMetadata",
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 20,
                                            "src": "1264:11:0"
                                        },
                                        "referencedDeclaration": 20,
                                        "src": "1264:11:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                            "typeString": "struct NFTMetadata"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 105,
                                    "mutability": "mutable",
                                    "name": "_price",
                                    "nameLocation": "1312:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 140,
                                    "src": "1304:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 104,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1304:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1233:91:0"
                        },
                        "returnParameters": {
                            "id": 109,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1356:0:0"
                        },
                        "scope": 262,
                        "src": "1220:318:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 215,
                            "nodeType": "Block",
                            "src": "1654:485:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 150,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 148,
                                                    "name": "_tokenId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144,
                                                    "src": "1672:8:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 149,
                                                    "name": "nonce",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 30,
                                                    "src": "1683:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "1672:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "546f6b656e20646f6573206e6f74206578697374",
                                                "id": 151,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1690:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_547be7f5ed2d17cca91d35e8212265e350385ed13daeee07722cf3e686dd6726",
                                                    "typeString": "literal_string \"Token does not exist\""
                                                },
                                                "value": "Token does not exist"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_547be7f5ed2d17cca91d35e8212265e350385ed13daeee07722cf3e686dd6726",
                                                    "typeString": "literal_string \"Token does not exist\""
                                                }
                                            ],
                                            "id": 147,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "1664:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 152,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1664:49:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 153,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1664:49:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 160,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 155,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967281,
                                                        "src": "1731:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 156,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "value",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1731:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "baseExpression": {
                                                        "id": 157,
                                                        "name": "idToPrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 43,
                                                        "src": "1744:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                            "typeString": "mapping(uint256 => uint256)"
                                                        }
                                                    },
                                                    "id": 159,
                                                    "indexExpression": {
                                                        "id": 158,
                                                        "name": "_tokenId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144,
                                                        "src": "1754:8:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1744:19:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "1731:32:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "496e73756666696369656e742066756e6473",
                                                "id": 161,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1765:20:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_63452317cb6d597bef833f023ed2962a84dbd24c571e27629ed1e3056d6cfd8d",
                                                    "typeString": "literal_string \"Insufficient funds\""
                                                },
                                                "value": "Insufficient funds"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_63452317cb6d597bef833f023ed2962a84dbd24c571e27629ed1e3056d6cfd8d",
                                                    "typeString": "literal_string \"Insufficient funds\""
                                                }
                                            ],
                                            "id": 154,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "1723:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 162,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1723:63:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 163,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1723:63:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 168,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "1804:27:0",
                                                "subExpression": {
                                                    "baseExpression": {
                                                        "id": 165,
                                                        "name": "hasTokenBeenSold",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 39,
                                                        "src": "1805:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                            "typeString": "mapping(uint256 => bool)"
                                                        }
                                                    },
                                                    "id": 167,
                                                    "indexExpression": {
                                                        "id": 166,
                                                        "name": "_tokenId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144,
                                                        "src": "1822:8:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1805:26:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "546f6b656e2068617320616c7265616479206265656e20736f6c64",
                                                "id": 169,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1833:29:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_aebc55b227036b503d742775b6945a05704530f91ecba16b715229377f96f7f6",
                                                    "typeString": "literal_string \"Token has already been sold\""
                                                },
                                                "value": "Token has already been sold"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_aebc55b227036b503d742775b6945a05704530f91ecba16b715229377f96f7f6",
                                                    "typeString": "literal_string \"Token has already been sold\""
                                                }
                                            ],
                                            "id": 164,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "1796:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 170,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1796:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 171,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1796:67:0"
                                },
                                {
                                    "assignments": [
                                        173
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 173,
                                            "mutability": "mutable",
                                            "name": "owner",
                                            "nameLocation": "1889:5:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 215,
                                            "src": "1873:21:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            },
                                            "typeName": {
                                                "id": 172,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1873:15:0",
                                                "stateMutability": "payable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 180,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "baseExpression": {
                                                    "id": 176,
                                                    "name": "idToOwner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 868,
                                                    "src": "1905:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                                        "typeString": "mapping(uint256 => address)"
                                                    }
                                                },
                                                "id": 178,
                                                "indexExpression": {
                                                    "id": 177,
                                                    "name": "_tokenId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144,
                                                    "src": "1915:8:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1905:19:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 175,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1897:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_payable_$",
                                                "typeString": "type(address payable)"
                                            },
                                            "typeName": {
                                                "id": 174,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1897:8:0",
                                                "stateMutability": "payable",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 179,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1897:28:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1873:52:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 184,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "1950:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 185,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "src": "1950:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 181,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 173,
                                                "src": "1935:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            "id": 183,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "transfer",
                                            "nodeType": "MemberAccess",
                                            "src": "1935:14:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256)"
                                            }
                                        },
                                        "id": 186,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1935:25:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 187,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1935:25:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 191,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "1986:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 192,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1986:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 193,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144,
                                                "src": "1998:8:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 188,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4294967271,
                                                "src": "1970:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_super$_SponsorshipToken_$262_$",
                                                    "typeString": "type(contract super SponsorshipToken)"
                                                }
                                            },
                                            "id": 190,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "_transfer",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1251,
                                            "src": "1970:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 194,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1970:37:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 195,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1970:37:0"
                                },
                                {
                                    "expression": {
                                        "id": 200,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 196,
                                                "name": "hasTokenBeenSold",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39,
                                                "src": "2017:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                    "typeString": "mapping(uint256 => bool)"
                                                }
                                            },
                                            "id": 198,
                                            "indexExpression": {
                                                "id": 197,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144,
                                                "src": "2034:8:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2017:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 199,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2046:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "2017:33:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 201,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2017:33:0"
                                },
                                {
                                    "assignments": [
                                        204
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 204,
                                            "mutability": "mutable",
                                            "name": "md",
                                            "nameLocation": "2080:2:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 215,
                                            "src": "2060:22:0",
                                            "stateVariable": false,
                                            "storageLocation": "storage",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                                "typeString": "struct NFTMetadata"
                                            },
                                            "typeName": {
                                                "id": 203,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 202,
                                                    "name": "NFTMetadata",
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 20,
                                                    "src": "2060:11:0"
                                                },
                                                "referencedDeclaration": 20,
                                                "src": "2060:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                                    "typeString": "struct NFTMetadata"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 208,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 205,
                                            "name": "idToMetadata",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35,
                                            "src": "2085:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_NFTMetadata_$20_storage_$",
                                                "typeString": "mapping(uint256 => struct NFTMetadata storage ref)"
                                            }
                                        },
                                        "id": 207,
                                        "indexExpression": {
                                            "id": 206,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144,
                                            "src": "2098:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2085:22:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NFTMetadata_$20_storage",
                                            "typeString": "struct NFTMetadata storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2060:47:0"
                                },
                                {
                                    "expression": {
                                        "id": 213,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 209,
                                                "name": "md",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 204,
                                                "src": "2117:2:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_NFTMetadata_$20_storage_ptr",
                                                    "typeString": "struct NFTMetadata storage pointer"
                                                }
                                            },
                                            "id": 211,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "name",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 5,
                                            "src": "2117:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 212,
                                            "name": "_name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 142,
                                            "src": "2127:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_calldata_ptr",
                                                "typeString": "string calldata"
                                            }
                                        },
                                        "src": "2117:15:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 214,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2117:15:0"
                                }
                            ]
                        },
                        "functionSelector": "aa38e38c",
                        "id": 216,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "purchase",
                        "nameLocation": "1553:8:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 145,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 142,
                                    "mutability": "mutable",
                                    "name": "_name",
                                    "nameLocation": "1587:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 216,
                                    "src": "1571:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 141,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1571:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "1610:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 216,
                                    "src": "1602:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 143,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1602:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1561:63:0"
                        },
                        "returnParameters": {
                            "id": 146,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1654:0:0"
                        },
                        "scope": 262,
                        "src": "1544:595:0",
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 227,
                            "nodeType": "Block",
                            "src": "2210:43:0",
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 223,
                                            "name": "idToPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 43,
                                            "src": "2227:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                "typeString": "mapping(uint256 => uint256)"
                                            }
                                        },
                                        "id": 225,
                                        "indexExpression": {
                                            "id": 224,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 218,
                                            "src": "2237:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2227:19:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 222,
                                    "id": 226,
                                    "nodeType": "Return",
                                    "src": "2220:26:0"
                                }
                            ]
                        },
                        "functionSelector": "26a49e37",
                        "id": 228,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "price",
                        "nameLocation": "2154:5:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 219,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 218,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "2168:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 228,
                                    "src": "2160:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 217,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2160:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2159:18:0"
                        },
                        "returnParameters": {
                            "id": 222,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 221,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 228,
                                    "src": "2201:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 220,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2201:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2200:9:0"
                        },
                        "scope": 262,
                        "src": "2145:108:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 235,
                            "nodeType": "Block",
                            "src": "2320:29:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 233,
                                        "name": "nonce",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 30,
                                        "src": "2337:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 232,
                                    "id": 234,
                                    "nodeType": "Return",
                                    "src": "2330:12:0"
                                }
                            ]
                        },
                        "functionSelector": "efeecb51",
                        "id": 236,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getNumberOfTokens",
                        "nameLocation": "2268:17:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 229,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2285:2:0"
                        },
                        "returnParameters": {
                            "id": 232,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 231,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 236,
                                    "src": "2311:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 230,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2311:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2310:9:0"
                        },
                        "scope": 262,
                        "src": "2259:90:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 248,
                            "nodeType": "Block",
                            "src": "2438:42:0",
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 244,
                                            "name": "ownerToIds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 521,
                                            "src": "2455:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                                                "typeString": "mapping(address => uint256[] storage ref)"
                                            }
                                        },
                                        "id": 246,
                                        "indexExpression": {
                                            "id": 245,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 238,
                                            "src": "2466:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2455:18:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                            "typeString": "uint256[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 243,
                                    "id": 247,
                                    "nodeType": "Return",
                                    "src": "2448:25:0"
                                }
                            ]
                        },
                        "functionSelector": "40398d67",
                        "id": 249,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTokensByOwner",
                        "nameLocation": "2364:16:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 239,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 238,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "2389:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 249,
                                    "src": "2381:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 237,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2381:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2380:16:0"
                        },
                        "returnParameters": {
                            "id": 243,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 242,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 249,
                                    "src": "2420:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 240,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2420:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 241,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2420:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2419:18:0"
                        },
                        "scope": 262,
                        "src": "2355:125:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 260,
                            "nodeType": "Block",
                            "src": "2550:50:0",
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 256,
                                            "name": "hasTokenBeenSold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 39,
                                            "src": "2567:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                "typeString": "mapping(uint256 => bool)"
                                            }
                                        },
                                        "id": 258,
                                        "indexExpression": {
                                            "id": 257,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 251,
                                            "src": "2584:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2567:26:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 255,
                                    "id": 259,
                                    "nodeType": "Return",
                                    "src": "2560:33:0"
                                }
                            ]
                        },
                        "functionSelector": "754b86ea",
                        "id": 261,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "adopted",
                        "nameLocation": "2495:7:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 252,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 251,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "2511:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 261,
                                    "src": "2503:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 250,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2503:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2502:18:0"
                        },
                        "returnParameters": {
                            "id": 255,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 254,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 261,
                                    "src": "2544:4:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 253,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2544:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2543:6:0"
                        },
                        "scope": 262,
                        "src": "2486:114:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "scope": 263,
                "src": "306:2296:0",
                "usedErrors": []
            }
        ],
        "src": "0:2603:0"
    },
    "compiler": {
        "name": "solc",
        "version": "0.8.11+commit.b01f3284.mod.Emscripten.clang"
    },
    "networks": {
        "2": {
            "events": {},
            "links": {},
            "address": "41ea7efc80630fc282e0f46899b7d874933d53d8a7"
        }
    },
    "schemaVersion": "2.0.1",
    "updatedAt": "2022-11-12T23:21:57.378Z"
}
