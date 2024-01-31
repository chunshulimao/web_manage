export default {
    ODO:[
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
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "vesting_",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
            "type": "event"
        },
        {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "rescueWrongToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "startMint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "updateMintPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "account",
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
            "inputs": [],
            "name": "contractVersion",
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
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "DEFLATION_PERIOD",
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
            "name": "DEFLATION_RATE",
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
            "name": "getTotalMinted",
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
            "name": "INIT_MINT_PER_BLOCK",
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
            "name": "MINT_LIMIT",
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
            "name": "minting",
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
            "name": "mintPerBlock",
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
            "name": "mintStartTime",
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
            "name": "name",
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
            "inputs": [],
            "name": "paused",
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
            "name": "RATE_BASE",
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
            "name": "symbol",
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
            "inputs": [],
            "name": "vesting",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    OPO:[
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
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "vesting_",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
            "type": "event"
        },
        {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "rescueWrongToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "minting_",
                    "type": "bool"
                }
            ],
            "name": "setMinting",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "mintPerBlock_",
                    "type": "uint256"
                }
            ],
            "name": "setMintPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "account",
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
            "inputs": [],
            "name": "contractVersion",
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
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTotalMinted",
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
            "name": "MINT_LIMIT",
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
            "name": "minting",
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
            "name": "mintPerBlock",
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
            "name": "name",
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
            "inputs": [],
            "name": "paused",
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
                    "name": "",
                    "type": "string"
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
            "inputs": [],
            "name": "vesting",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    DXP:[
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
                    "name": "addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "parent",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Activated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "activated",
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
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
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
            "inputs": [],
            "name": "blackHole",
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
            "name": "contractVersion",
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
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "didToken",
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
            "name": "dropletAmount",
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
            "name": "getTotalMinted",
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initSupply",
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
            "name": "initWallet",
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
                    "name": "initSupply_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxSupply_",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "initWallet_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "mintPerBlock_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "dropletAmount_",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "didToken_",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maxSupply",
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
            "name": "mintPerBlock",
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
            "name": "name",
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
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "paused",
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
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "rescueToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "rootMember",
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
                    "name": "dropletAmount_",
                    "type": "uint256"
                }
            ],
            "name": "setDropletAmount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "maxSupply_",
                    "type": "uint256"
                }
            ],
            "name": "setMaxSupply",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "mintPerBlock_",
                    "type": "uint256"
                }
            ],
            "name": "setMintPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
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
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    DIDNET:[
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
                    "name": "member",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lockTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "ActivationRewarded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "member",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "parent",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RefRewarded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "member",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "penalty",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [],
            "name": "RATE_BASE",
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
                    "name": "member",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "parent",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "activate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "addrToMember",
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
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
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
            "inputs": [],
            "name": "blackHole",
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
            "name": "contractVersion",
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
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dxpToken",
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
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "estimateReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reward",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "releaseTime",
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initSupply",
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
            "name": "initWallet",
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
                    "name": "initSupply_",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "initWallet_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "dxpToken_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "rootMember_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lockTimeUnit_",
                    "type": "uint256"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "lockTimeUnit",
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
            "name": "memberCount",
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
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "memberInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "parent",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "activationReward",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "refReward",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "activationTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "releaseTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "penalty",
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "members",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "parent",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "joined",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
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
            "name": "overviewInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "total",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "circulating",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "burned",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reward",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endRank",
                    "type": "uint256"
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
            "inputs": [],
            "name": "paused",
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
            "name": "penaltyFactor",
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
            "name": "penaltyTimeUnit",
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "refAmounts",
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "refRates",
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
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "rescueToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "rewardEndsAt",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "rewardTotal",
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
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "rewards",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "z",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "activationLocked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "refLocked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "activationTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "refUnlocked",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "rootMember",
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
                    "name": "penaltyTimeUnit_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "penaltyFactor_",
                    "type": "uint256"
                }
            ],
            "name": "setPenaltyParam",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "refRates_",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "refAmounts_",
                    "type": "uint256[]"
                }
            ],
            "name": "setRefParam",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "zMin_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "zMax_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "zDiv_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "xBase_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "xDiv_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "xMul_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "yBase_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "yDiv_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "yMul_",
                    "type": "uint256"
                }
            ],
            "name": "setRewardParam",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "startTime_",
                    "type": "uint256"
                }
            ],
            "name": "setStartTime",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "xenTool_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "xenOp_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "xenTerm_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "xenNum_",
                    "type": "uint256"
                }
            ],
            "name": "setXENTool",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "startTime",
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
            "name": "symbol",
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
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawReward",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "xBase",
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
            "name": "xDiv",
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
            "name": "xMul",
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
            "name": "xenNum",
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
            "name": "xenOp",
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
            "name": "xenTerm",
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
            "name": "xenTool",
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
            "name": "yBase",
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
            "name": "yDiv",
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
            "name": "yMul",
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
            "name": "zDiv",
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
            "name": "zMax",
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
            "name": "zMin",
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
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    token: [
        {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [
                {
                    name: "name_",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_spender",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "approve",
            outputs: [
                {
                    name: "_success",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [
                {
                    name: "totalSupply_",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_from",
                    type: "address",
                },
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "transferFrom",
            outputs: [
                {
                    name: "_success",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [
                {
                    name: "decimals_",
                    type: "uint8",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address",
                },
            ],
            name: "balanceOf",
            outputs: [
                {
                    name: "_balance",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [
                {
                    name: "symbol_",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "transfer",
            outputs: [
                {
                    name: "_success",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address",
                },
                {
                    name: "_spender",
                    type: "address",
                },
            ],
            name: "allowance",
            outputs: [
                {
                    name: "_remaining",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "_from",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "_to",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "Transfer",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "_owner",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "_spender",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "Approval",
            type: "event",
        },
    ],
    airdrop: [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token1",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_token2",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_projectAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_projectPPM",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseUnit",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_token1Value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_token2Value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_token1ToProject",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_token2ToProject",
                    "type": "uint256"
                }
            ],
            "name": "TokenWithdrawn",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_addrs",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_token1Amounts",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_token2Amounts",
                    "type": "uint256[]"
                }
            ],
            "name": "airdropAddrs",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractCode",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "getUser",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_userAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_token1Amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_token2Amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_token1Withdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_token2Withdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_token1ToProject",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_token2ToProject",
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
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "getWithdrawable",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_token1Withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_token2Withdrawable",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "overview",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_token1Address",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_token2Address",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_token1Balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_token2Balance",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_projectAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_projectPPM",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_token1ProjectAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_token2ProjectAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_active",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "_startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_userCount",
                    "type": "uint256"
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
                    "internalType": "bool",
                    "name": "_state",
                    "type": "bool"
                }
            ],
            "name": "setActive",
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
            "name": "setOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_startTime",
                    "type": "uint256"
                }
            ],
            "name": "start",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    AirdropV2:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Claimed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Withdrawn",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "balanceToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
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
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_sig",
                    "type": "bytes"
                }
            ],
            "name": "claim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_end",
                    "type": "uint256"
                }
            ],
            "name": "getRecord",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "index",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        },
                        {
                            "internalType": "uint8",
                            "name": "types",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IUpgradeableAirdropV2Base.Record[]",
                    "name": "_result",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getRecordCount",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_claimTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_locked",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfoBasic",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_claimTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
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
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseTimes",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releasePeriod",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_operator",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
                    "name": "_from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "nonce",
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
            "name": "operator",
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
                    "internalType": "address",
                    "name": "_newOperator",
                    "type": "address"
                }
            ],
            "name": "operatorTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "overview",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_claimTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_userCount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseTimes",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releasePeriod",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_tokenAddress",
                    "type": "address"
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
            "inputs": [],
            "name": "refreshCache",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newOperator",
                    "type": "address"
                }
            ],
            "name": "setOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    did: [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_rootAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "_bannerLimit",
                    "type": "uint8"
                },
                {
                    "internalType": "uint8",
                    "name": "_msgLimit",
                    "type": "uint8"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes6",
                    "name": "_publisherId",
                    "type": "bytes6"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_publisherAddr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bytes6",
                    "name": "_communityId",
                    "type": "bytes6"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_banner",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_link",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "BannerPublished",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "EtherReceived",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_caller",
                    "type": "address"
                }
            ],
            "name": "FallbackCalled",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes6",
                    "name": "_followerId",
                    "type": "bytes6"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_followerAddr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bytes6",
                    "name": "_communityId",
                    "type": "bytes6"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "FollowCommunity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes6",
                    "name": "_publisherId",
                    "type": "bytes6"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_publisherAddr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bytes6",
                    "name": "_communityId",
                    "type": "bytes6"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_msg",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "MsgPublished",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes6",
                    "name": "_founderId",
                    "type": "bytes6"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_founderAddr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bytes6",
                    "name": "_communityId",
                    "type": "bytes6"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_communityIndex",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_communityName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_communityDesc",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "NewCommunity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes6",
                    "name": "_referrerId",
                    "type": "bytes6"
                },
                {
                    "indexed": true,
                    "internalType": "bytes6",
                    "name": "_leaderId",
                    "type": "bytes6"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_memberAddr",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes6",
                    "name": "_memberId",
                    "type": "bytes6"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_memberIndex",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "NewMember",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_asset",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "_target",
                    "type": "address"
                }
            ],
            "name": "backAsset",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractCode",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "internalType": "address payable",
                    "name": "_didAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_end",
                    "type": "uint256"
                }
            ],
            "name": "copyRecord",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "deepFreeze",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "freeze",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "getCommunityBanners",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "_banners",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "_links",
                    "type": "string[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_bannerTimes",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCommunityCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                },
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "getCommunityFollowerByIndex",
            "outputs": [
                {
                    "internalType": "bytes6",
                    "name": "_follower",
                    "type": "bytes6"
                },
                {
                    "internalType": "uint256",
                    "name": "_followTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "getCommunityFollowerCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_community",
                    "type": "bytes6"
                },
                {
                    "internalType": "bytes6",
                    "name": "_follower",
                    "type": "bytes6"
                }
            ],
            "name": "getCommunityFollowerIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "getCommunityFollowers",
            "outputs": [
                {
                    "internalType": "bytes6[]",
                    "name": "_followers",
                    "type": "bytes6[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_followTimes",
                    "type": "uint256[]"
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
            "name": "getCommunityIdByIndex",
            "outputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "getCommunityInfoBasic",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes6",
                    "name": "_founder",
                    "type": "bytes6"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_desc",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "getCommunityInfoFull",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes6",
                    "name": "_founder",
                    "type": "bytes6"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_desc",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "_banners",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "_links",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "_msgs",
                    "type": "string[]"
                },
                {
                    "internalType": "bytes6[]",
                    "name": "_followers",
                    "type": "bytes6[]"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "getCommunityMsgs",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "_msgs",
                    "type": "string[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_msgTimes",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_follower",
                    "type": "bytes6"
                }
            ],
            "name": "getFollowerCommunities",
            "outputs": [
                {
                    "internalType": "bytes6[]",
                    "name": "_ids",
                    "type": "bytes6[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_followTimes",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_follower",
                    "type": "bytes6"
                }
            ],
            "name": "getFollowerCommunityCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_follower",
                    "type": "bytes6"
                },
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "getFollowerCommunityIdByIndex",
            "outputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                },
                {
                    "internalType": "uint256",
                    "name": "_followTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_follower",
                    "type": "bytes6"
                },
                {
                    "internalType": "bytes6",
                    "name": "_community",
                    "type": "bytes6"
                }
            ],
            "name": "getFollowerCommunityIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_founder",
                    "type": "bytes6"
                }
            ],
            "name": "getFounderCommunities",
            "outputs": [
                {
                    "internalType": "bytes6[]",
                    "name": "_ids",
                    "type": "bytes6[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_foundTimes",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_founder",
                    "type": "bytes6"
                }
            ],
            "name": "getFounderCommunityCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_founder",
                    "type": "bytes6"
                },
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "getFounderCommunityIdByIndex",
            "outputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                },
                {
                    "internalType": "uint256",
                    "name": "_foundTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_founder",
                    "type": "bytes6"
                },
                {
                    "internalType": "bytes6",
                    "name": "_community",
                    "type": "bytes6"
                }
            ],
            "name": "getFounderCommunityIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMemberCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
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
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "getMemberIdByAddr",
            "outputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
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
            "name": "getMemberIdByIndex",
            "outputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "getMemberInfoBasic",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "internalType": "bytes6",
                    "name": "_referrer",
                    "type": "bytes6"
                },
                {
                    "internalType": "bytes6",
                    "name": "_leader",
                    "type": "bytes6"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "getMemberInfoFull",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "internalType": "bytes6",
                    "name": "_referrer",
                    "type": "bytes6"
                },
                {
                    "internalType": "bytes6",
                    "name": "_leader",
                    "type": "bytes6"
                },
                {
                    "internalType": "bytes6[]",
                    "name": "_invites",
                    "type": "bytes6[]"
                },
                {
                    "internalType": "bytes6[]",
                    "name": "_founded",
                    "type": "bytes6[]"
                },
                {
                    "internalType": "bytes6[]",
                    "name": "_followed",
                    "type": "bytes6[]"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "getMemberInvites",
            "outputs": [
                {
                    "internalType": "bytes6[]",
                    "name": "_invites",
                    "type": "bytes6[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_inviteTimes",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "getMemberInvitesCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                },
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "getMemeberInviteByIndex",
            "outputs": [
                {
                    "internalType": "bytes6",
                    "name": "_invite",
                    "type": "bytes6"
                },
                {
                    "internalType": "uint256",
                    "name": "_inviteTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "name": "joinCommunity",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                },
                {
                    "internalType": "string",
                    "name": "_banner",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_link",
                    "type": "string"
                }
            ],
            "name": "publishBanner",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                },
                {
                    "internalType": "string",
                    "name": "_msg",
                    "type": "string"
                }
            ],
            "name": "publishMsg",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes6",
                    "name": "_referrer",
                    "type": "bytes6"
                }
            ],
            "name": "register",
            "outputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
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
            "name": "setOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "internalType": "string",
                    "name": "_desc",
                    "type": "string"
                }
            ],
            "name": "startCommunity",
            "outputs": [
                {
                    "internalType": "bytes6",
                    "name": "_id",
                    "type": "bytes6"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "thaw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    invest: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_eth",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "EthDelivered",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_eth",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "EthDeposited",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_eth",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_deposited",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_won",
                    "type": "uint256"
                }
            ],
            "name": "EthWon",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "name": "LibraryContract",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "TokenAcceled",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "TokenBought",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_time",
                    "type": "uint256"
                }
            ],
            "name": "TokenLocked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "TokenUnlocked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "TokenWithdrawn",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_addrs",
                    "type": "address[]"
                }
            ],
            "name": "blacklistAddrs",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "currentLevel",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_level",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "currentPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "currentState",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "_state",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "divieAddrs",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "_addrs",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_refAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_eths",
                    "type": "uint256"
                }
            ],
            "name": "doInvest",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "doWithdraw",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "ethAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_ethAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "ethReceived",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_ethAmount",
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
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "getAddrAllowed",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_allowed",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLibraryContract",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_buybackAddress",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_divieAddrs",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_diviePPMs",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_refAccelPPMs",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_refReqs",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint8[]",
                    "name": "_refLevels",
                    "type": "uint8[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_agentAddrs",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_agentAccelPPMs",
                    "type": "uint256[]"
                }
            ],
            "name": "initInvest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_ethAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenPriceBase",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_stepSize",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_stepPoints",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_stepPrices",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "investCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
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
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_end",
                    "type": "uint256"
                }
            ],
            "name": "investHistory",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_eths",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_tokens",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_timestamps",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "investorAddrById",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "investorInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_refs",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "investorStatus",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_ethInvested",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenReceived",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenLocked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenUnlocked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenWithdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenWithdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenAcceled",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lastInvestTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lastWithdrawTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lastAccelTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "overviewConf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_minPayment",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockPeriod",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "_lockUnit",
                    "type": "uint8"
                },
                {
                    "internalType": "uint8",
                    "name": "_lockCount",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "_lockFirst",
                    "type": "bool"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_stepPoints",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_stepPrices",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_refReqs",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint8[]",
                    "name": "_refLevels",
                    "type": "uint8[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_refAccelPPMs",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "overviewExtra",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investorCount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lastInvestTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lastWithdrawTime",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_agentAddrs",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_agentAccelPPMs",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_divieAddrs",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_diviePPMs",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256",
                    "name": "_initTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_quotaLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_quotaAvail",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_whitelisting",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "overviewStatus",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_ethAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenPriceBase",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_buybackAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalTokenDelivered",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalEthReceived",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_ethBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_stepSize",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalWithdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalAcceled",
                    "type": "uint256"
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
                    "name": "_level",
                    "type": "uint256"
                }
            ],
            "name": "priceAtLevel",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "name": "setLibraryContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_quotaLimit",
                    "type": "uint256"
                }
            ],
            "name": "setQuota",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "_whitelisting",
                    "type": "bool"
                }
            ],
            "name": "setWhitelist",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_minPayment",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockPeriod",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "_lockUnit",
                    "type": "uint8"
                },
                {
                    "internalType": "uint8",
                    "name": "_lockCount",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "_lockFirst",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_whitelisting",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "_quotaLimit",
                    "type": "uint256"
                }
            ],
            "name": "setupInvest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "stepSize",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_size",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "name": "tokenAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_tokenAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "tokenDelivered",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenAmount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tokenPriceBase",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenPriceBase",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalEthReceived",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_ethAmount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalInvestors",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_total",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalTokenDelivered",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenAmount",
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
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_addrs",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_amounts",
                    "type": "uint256[]"
                }
            ],
            "name": "whitelistAddrs",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    buyback: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "AnonymousReceived",
            "type": "event"
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
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokens",
                    "type": "uint256"
                }
            ],
            "name": "buybackToken",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "name": "_eths",
                    "type": "uint256"
                }
            ],
            "name": "depositEths",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_userAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_eths",
                    "type": "uint256"
                }
            ],
            "name": "estimateSuperNodeUserOutput",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_nodeWithdrawToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_nodeEthInvest",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBuybackAllTokenNum",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_buybackAllTokenNum",
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
                    "name": "_userAddr",
                    "type": "address"
                }
            ],
            "name": "getBuybackByUserAddr",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_canRedeemToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_buybackToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_buybackEth",
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
                    "name": "_userAddr",
                    "type": "address"
                }
            ],
            "name": "getBuybackEth",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_buybackEth",
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
                    "name": "_userAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_end",
                    "type": "uint256"
                }
            ],
            "name": "getBuybackHistory",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_ethNum",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_tokenNum",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_timestamp",
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
                    "name": "_userAddr",
                    "type": "address"
                }
            ],
            "name": "getBuybackHistoryCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBuybackInfoCollections",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_buybackAllTokenNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_ethBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lastPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lastPriceTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalEth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_buybackTotalEth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_unredeem",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBuybackInfoExtra",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_burned",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lastNodeEth",
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
                    "name": "_userAddr",
                    "type": "address"
                }
            ],
            "name": "getBuybackTokenByAddr",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_buybackToken",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBuybackTokenDivieNum",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_totalDiviePool",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBuybackTotalEth",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_buybackTotalEth",
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
                    "name": "_userAddr",
                    "type": "address"
                }
            ],
            "name": "getCanRedeemToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_canRedeemToken",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getDestroyTokenTotalNum",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_totalBurned",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getEthAddr",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_ethAddr",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getEthBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_ethBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getEthContractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_ethBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getEthTargetAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_ethBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getEthTargetPending",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_ethBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getEthTotalBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_ethBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getFaucetCycle",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_cycle",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getFaucetRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getInvestContractAddr",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_investContractAddr",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLastOverNodeEth",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_eths",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLastPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_lastPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lastPriceTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMiningReward",
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
                    "name": "_userAddr",
                    "type": "address"
                }
            ],
            "name": "getNodeEthInvest",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_nodeEthInvest",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNodeTotalDivie",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_nodeTotalDivie",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getProjectAddr",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_projectAddr",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getReleasedAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_eths",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getSuperNode",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_totalDiviePool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalNodeEth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_nodeEthBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenBalance",
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
                    "name": "_userAddr",
                    "type": "address"
                }
            ],
            "name": "getSuperNodeByUserAddr",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_nodeWithdrawToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_nodeEthInvest",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTokenBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTokenContractAddr",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_tokenContractAddr",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTotalEth",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_totalEth",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTotalNodeEth",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_totalNodeEth",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTotalTopped",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokens",
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
                    "name": "_project",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_investContract",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_releaseTimes",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_releasePPMs",
                    "type": "uint256[]"
                }
            ],
            "name": "initBuyback",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_ethAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_targetAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_burnPPM",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_projectPPM",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_topPPM",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_topRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalPPM",
                    "type": "uint256"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
                    "internalType": "uint256",
                    "name": "_eths",
                    "type": "uint256"
                }
            ],
            "name": "nodeDepositEths",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "nodeWithdrawAllToken",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawTokenValue",
                    "type": "uint256"
                }
            ],
            "name": "nodeWithdrawToken",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
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
            "inputs": [],
            "name": "reinvestMining",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_faucetTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_faucetPPM",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_nodeReqs",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_nodeHCs",
                    "type": "uint256[]"
                }
            ],
            "name": "setupBuyback",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "watchNodeWithdrawToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_nodeWithdrawToken",
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
                    "name": "_userAddr",
                    "type": "address"
                }
            ],
            "name": "watchNodeWithdrawTokenByAddr",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_nodeWithdrawToken",
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
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_eths",
                    "type": "uint256"
                }
            ],
            "name": "withdrawMiningReward",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_eths",
                    "type": "uint256"
                }
            ],
            "name": "withdrawReleased",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    QuanticNext:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "AssetBurned",
            "type": "event"
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
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_input",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_output",
                    "type": "uint256"
                }
            ],
            "name": "AssetSwapped",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "BuybackFundsDrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "DAOMemberAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_target",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "DAOTokenTransferred",
            "type": "event"
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
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "ETHReceived",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                }
            ],
            "name": "FallbackCalled",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "name": "LibraryContract",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset1",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset2",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_liquidity",
                    "type": "uint256"
                }
            ],
            "name": "LiquidityAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset1",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset2",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_liquidity",
                    "type": "uint256"
                }
            ],
            "name": "LiquidityRemoved",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "pathHash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                }
            ],
            "name": "SymbolAdded",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "DAOAddMember",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_completed",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                }
            ],
            "name": "DAOAddSymbol",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_completed",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_target",
                    "type": "address"
                }
            ],
            "name": "DAOTransferToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_input1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minInput1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_input2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minInput2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                }
            ],
            "name": "addLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidity",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_inputToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_inputETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                }
            ],
            "name": "addLiquidityETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amountToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amountETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidity",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "burnToken",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractCode",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "drawBuybackFunds",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_input",
                    "type": "uint256"
                }
            ],
            "name": "estimateSymbolOutput",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
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
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBuybackReleased",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
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
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getContractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_balance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getDAOMembers",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "_members",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLibraryContract",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token1",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_token2",
                    "type": "address"
                }
            ],
            "name": "getPairInfo",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_pairAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquiditySelf",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidityTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_price1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_price2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
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
                    "name": "_symbolIndex",
                    "type": "uint256"
                }
            ],
            "name": "getSymbolByIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                },
                {
                    "internalType": "bytes32",
                    "name": "_pathHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_inputBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_outputBalance",
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
                    "name": "_symbolName",
                    "type": "string"
                }
            ],
            "name": "getSymbolByName",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                },
                {
                    "internalType": "bytes32",
                    "name": "_pathHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_inputBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_outputBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getSymbolCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
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
                }
            ],
            "name": "getSymbolPoolInfo",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_pairAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquiditySelf",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidityTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_price1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_price2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
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
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getTarget",
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
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getTargetAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_balance",
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
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getTargetPending",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_balance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_daoMembers",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "_router",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_wrappedNative",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_buyback",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_operator",
                    "type": "address"
                },
                {
                    "internalType": "address[][]",
                    "name": "_paths",
                    "type": "address[][]"
                },
                {
                    "internalType": "string[]",
                    "name": "_names",
                    "type": "string[]"
                },
                {
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "investTarget",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newOperator",
                    "type": "address"
                }
            ],
            "name": "operatorTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                }
            ],
            "name": "removeLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                }
            ],
            "name": "removeLiquidityETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amountToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amountETH",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "name": "setLibraryContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_targetAddress",
                    "type": "address"
                }
            ],
            "name": "setTarget",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_input",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapETH2Token",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_output",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_input",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapToken2ETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_output",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_input",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapToken2Token",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_output",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    NewQuanticNext:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "AssetBurned",
            "type": "event"
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
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_input",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_output",
                    "type": "uint256"
                }
            ],
            "name": "AssetSwapped",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "BuybackFundsDrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "DAOMemberAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_target",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "DAOTokenTransferred",
            "type": "event"
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
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "ETHReceived",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                }
            ],
            "name": "FallbackCalled",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "name": "LibraryContract",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset1",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset2",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_liquidity",
                    "type": "uint256"
                }
            ],
            "name": "LiquidityAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset1",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset2",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_liquidity",
                    "type": "uint256"
                }
            ],
            "name": "LiquidityRemoved",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "pathHash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                }
            ],
            "name": "SymbolAdded",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "DAOAddMember",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_completed",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                }
            ],
            "name": "DAOAddSymbol",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_completed",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_target",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "DAOTransferToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_input1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minInput1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_input2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minInput2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "addLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidity",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_inputToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_inputETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "addLiquidityETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amountToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amountETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidity",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "burnToken",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractCode",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "drawBuybackFunds",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "drawTargetReward",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "name": "_input",
                    "type": "uint256"
                }
            ],
            "name": "estimateSymbolOutput",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
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
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBuybackReleased",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
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
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getContractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_balance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getDAOMembers",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "_members",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLibraryContract",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token1",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_token2",
                    "type": "address"
                }
            ],
            "name": "getPairInfo",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_pairAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquiditySelf",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidityTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_price1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_price2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
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
                    "name": "_symbolIndex",
                    "type": "uint256"
                }
            ],
            "name": "getSymbolByIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                },
                {
                    "internalType": "bytes32",
                    "name": "_pathHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_inputBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_outputBalance",
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
                    "name": "_symbolName",
                    "type": "string"
                }
            ],
            "name": "getSymbolByName",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                },
                {
                    "internalType": "bytes32",
                    "name": "_pathHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_inputBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_outputBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getSymbolCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
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
                }
            ],
            "name": "getSymbolPoolInfo",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_pairAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquiditySelf",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidityTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_price1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_price2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
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
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getTarget",
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
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getTargetInfo",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_staked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewarded",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_released",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_daoMembers",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "_router",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_wrappedNative",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_buyback",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_operator",
                    "type": "address"
                },
                {
                    "internalType": "address[][]",
                    "name": "_paths",
                    "type": "address[][]"
                },
                {
                    "internalType": "string[]",
                    "name": "_names",
                    "type": "string[]"
                },
                {
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "investTarget",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_targetAddress",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "migrateFromManualCake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newOperator",
                    "type": "address"
                }
            ],
            "name": "operatorTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "removeLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount2",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "removeLiquidityETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amountToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amountETH",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_libraryAddress",
                    "type": "address"
                }
            ],
            "name": "setLibraryContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_targetAddress",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "setTarget",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_input",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "swapETH2Token",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_output",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_input",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "swapToken2ETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_output",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "_input",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_swapPath",
                    "type": "address[]"
                }
            ],
            "name": "swapToken2Token",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_output",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    router: [
        {
            "inputs": [{"internalType": "address", "name": "_factory", "type": "address"}, {
                "internalType": "address",
                "name": "_WETH",
                "type": "address"
            }], "stateMutability": "nonpayable", "type": "constructor"
        },
        {
            "inputs": [],
            "name": "WETH",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
            }, {"internalType": "uint256", "name": "amountADesired", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountBDesired",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amountAMin", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountBMin",
                "type": "uint256"
            }, {"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }],
            "name": "addLiquidity",
            "outputs": [{"internalType": "uint256", "name": "amountA", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountB",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
                "internalType": "uint256",
                "name": "amountTokenDesired",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountETHMin",
                "type": "uint256"
            }, {"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }],
            "name": "addLiquidityETH",
            "outputs": [{"internalType": "uint256", "name": "amountToken", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountETH",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}],
            "stateMutability": "payable",
            "type": "function"
        }, {
            "inputs": [],
            "name": "factory",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "reserveIn",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "reserveOut", "type": "uint256"}],
            "name": "getAmountIn",
            "outputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}],
            "stateMutability": "pure",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "reserveIn",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "reserveOut", "type": "uint256"}],
            "name": "getAmountOut",
            "outputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}],
            "stateMutability": "pure",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
            }],
            "name": "getAmountsIn",
            "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
            }],
            "name": "getAmountsOut",
            "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountA", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "reserveA",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "reserveB", "type": "uint256"}],
            "name": "quote",
            "outputs": [{"internalType": "uint256", "name": "amountB", "type": "uint256"}],
            "stateMutability": "pure",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
            }, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountAMin",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amountBMin", "type": "uint256"}, {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
            "name": "removeLiquidity",
            "outputs": [{"internalType": "uint256", "name": "amountA", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountB",
                "type": "uint256"
            }],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountETHMin",
                "type": "uint256"
            }, {"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }],
            "name": "removeLiquidityETH",
            "outputs": [{"internalType": "uint256", "name": "amountToken", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountETH",
                "type": "uint256"
            }],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountETHMin",
                "type": "uint256"
            }, {"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }],
            "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
            "outputs": [{"internalType": "uint256", "name": "amountETH", "type": "uint256"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountETHMin",
                "type": "uint256"
            }, {"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }, {"internalType": "bool", "name": "approveMax", "type": "bool"}, {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }],
            "name": "removeLiquidityETHWithPermit",
            "outputs": [{"internalType": "uint256", "name": "amountToken", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountETH",
                "type": "uint256"
            }],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountETHMin",
                "type": "uint256"
            }, {"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }, {"internalType": "bool", "name": "approveMax", "type": "bool"}, {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }],
            "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
            "outputs": [{"internalType": "uint256", "name": "amountETH", "type": "uint256"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
            }, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountAMin",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amountBMin", "type": "uint256"}, {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}, {
                "internalType": "bool",
                "name": "approveMax",
                "type": "bool"
            }, {"internalType": "uint8", "name": "v", "type": "uint8"}, {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            }, {"internalType": "bytes32", "name": "s", "type": "bytes32"}],
            "name": "removeLiquidityWithPermit",
            "outputs": [{"internalType": "uint256", "name": "amountA", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountB",
                "type": "uint256"
            }],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
            }, {"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }],
            "name": "swapETHForExactTokens",
            "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
            "stateMutability": "payable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
            }, {"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }],
            "name": "swapExactETHForTokens",
            "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
            "stateMutability": "payable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
            }, {"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }],
            "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
            }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
            "name": "swapExactTokensForETH",
            "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
            }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
            "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
            }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
            "name": "swapExactTokensForTokens",
            "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
            }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
            "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountInMax",
                "type": "uint256"
            }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
            "name": "swapTokensForExactETH",
            "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountInMax",
                "type": "uint256"
            }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
            "name": "swapTokensForExactTokens",
            "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"stateMutability": "payable", "type": "receive"}],
    MiningWithToken: [
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_targetAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "reinvestTarget",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                }
            ],
            "name": "setRewardPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "withdrawTargetReward",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeContractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeTargetAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeTargetPending",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeTotalBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTargetReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentPending",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserWithdrawable",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
                    "type": "uint256"
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
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
        }
    ],
    NewMiningWithToken:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_oldImplementation",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_activatable",
                    "type": "uint256"
                }
            ],
            "name": "ImplementationPending",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOperator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOperator",
                    "type": "address"
                }
            ],
            "name": "OperatorTransferred",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_penalty",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardPenalty",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "RATE_BASE",
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
            "name": "activateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "name": "_amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                }
            ],
            "name": "estimate",
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
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "getBalance",
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
            "name": "getDAOMembers",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "_members",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPenaltyConfig",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_penaltyRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_penaltyEndTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPendingImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
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
            "name": "getPoolReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getRouter",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_router",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeContractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeTargetAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                }
            ],
            "name": "getStakeTargetPending",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                }
            ],
            "name": "getStakeTotalBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTargetInfo",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_target",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_stake",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_reward",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_pending",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                }
            ],
            "name": "getTargetReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentPending",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserWithdrawable",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
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
                    "name": "_newTarget",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_router",
                    "type": "address"
                }
            ],
            "name": "initOldTarget",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_targetAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_DAOMembers",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "_router",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "migrated",
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
            "name": "operator",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
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
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                }
            ],
            "name": "reinvestTarget",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "router",
            "outputs": [
                {
                    "internalType": "contract IPancakeRouter02",
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
                    "internalType": "address[]",
                    "name": "_DAOMembers",
                    "type": "address[]"
                }
            ],
            "name": "setDAOMembers",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                }
            ],
            "name": "setMinRelease",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOperator",
                    "type": "address"
                }
            ],
            "name": "setOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_penaltyRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_penaltyEndTime",
                    "type": "uint256"
                }
            ],
            "name": "setPenaltyConfig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                }
            ],
            "name": "setReceiver",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                }
            ],
            "name": "setRewardPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_router",
                    "type": "address"
                }
            ],
            "name": "setRouter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOperator",
                    "type": "address"
                }
            ],
            "name": "transferOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_targetAddr",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                }
            ],
            "name": "updateTarget",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_path",
                    "type": "address[]"
                }
            ],
            "name": "withdrawTargetReward",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    PoolingBond1:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20Token",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC20Token",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "invest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maxInvest",
                    "type": "uint256"
                }
            ],
            "name": "setMaxInvest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                }
            ],
            "name": "setRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                }
            ],
            "name": "setState",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawInterest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "balanceToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractCode",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserBaseInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct PoolingBondInterface.UserRelease[1]",
                    "name": "_userRelease",
                    "type": "tuple[1]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxInvest",
                    "type": "uint256"
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
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
        }
    ],
    PoolingBond15:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20Token",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC20Token",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "invest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maxInvest",
                    "type": "uint256"
                }
            ],
            "name": "setMaxInvest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                }
            ],
            "name": "setRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                }
            ],
            "name": "setState",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawInterest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "balanceToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractCode",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserBaseInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct PoolingBondInterface.UserRelease[15]",
                    "name": "_userRelease",
                    "type": "tuple[15]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxInvest",
                    "type": "uint256"
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
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
        }
    ],
    PoolingBond30:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20Token",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC20Token",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "invest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maxInvest",
                    "type": "uint256"
                }
            ],
            "name": "setMaxInvest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                }
            ],
            "name": "setRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                }
            ],
            "name": "setState",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawInterest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "balanceToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractCode",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserBaseInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct PoolingBondInterface.UserRelease[30]",
                    "name": "_userRelease",
                    "type": "tuple[30]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxInvest",
                    "type": "uint256"
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
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
        }
    ],
    PoolingBond45:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20Token",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC20Token",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "invest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maxInvest",
                    "type": "uint256"
                }
            ],
            "name": "setMaxInvest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                }
            ],
            "name": "setRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                }
            ],
            "name": "setState",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawInterest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "balanceToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractCode",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserBaseInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct PoolingBondInterface.UserRelease[45]",
                    "name": "_userRelease",
                    "type": "tuple[45]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxInvest",
                    "type": "uint256"
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
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
        }
    ],
    PoolingBond52:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20Token",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC20Token",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "invest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maxInvest",
                    "type": "uint256"
                }
            ],
            "name": "setMaxInvest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                }
            ],
            "name": "setRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                }
            ],
            "name": "setState",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawInterest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "balanceToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractCode",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserBaseInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct PoolingBondInterface.UserRelease[52]",
                    "name": "_userRelease",
                    "type": "tuple[52]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_investTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxInvest",
                    "type": "uint256"
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
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
        }
    ],
    airdropWithStake:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Claimed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Withdrawn",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "balanceToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
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
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_sig",
                    "type": "bytes"
                }
            ],
            "name": "claim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_end",
                    "type": "uint256"
                }
            ],
            "name": "getRecord",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "index",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        },
                        {
                            "internalType": "uint8",
                            "name": "types",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IUpgradeableAirdropBase.Record[]",
                    "name": "_result",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getRecordCount",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_claimTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseEndTime",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IUpgradeableAirdropBase.UserRelease[]",
                    "name": "_userRelease",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfoBasic",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_claimTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseTimes",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releasePeriod",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_operator",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
                    "name": "_from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "nonce",
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
            "name": "operator",
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
                    "internalType": "address",
                    "name": "_newOperator",
                    "type": "address"
                }
            ],
            "name": "operatorTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "overview",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_claimTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_userCount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releaseTimes",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_releasePeriod",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_tokenAddress",
                    "type": "address"
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
            "inputs": [],
            "name": "refreshCache",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newOperator",
                    "type": "address"
                }
            ],
            "name": "setOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    OLDPoolingWithToken: [
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolContractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentPending",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserWithdrawable",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
                    "type": "uint256"
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                }
            ],
            "name": "setRewardPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    PoolingWithToken:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_penalty",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardPenalty",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "RATE_BASE",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPenaltyConfig",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_penaltyRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_penaltyEndTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolContractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentPending",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserWithdrawable",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                }
            ],
            "name": "setMinRelease",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_penaltyRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_penaltyEndTime",
                    "type": "uint256"
                }
            ],
            "name": "setPenaltyConfig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                }
            ],
            "name": "setRewardPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    pancakePair: [
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
            "name": "Approval",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0",
                "type": "uint256"
            }, {"indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256"}, {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }],
            "name": "Burn",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0",
                "type": "uint256"
            }, {"indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256"}],
            "name": "Mint",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0In",
                "type": "uint256"
            }, {"indexed": false, "internalType": "uint256", "name": "amount1In", "type": "uint256"}, {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0Out",
                "type": "uint256"
            }, {"indexed": false, "internalType": "uint256", "name": "amount1Out", "type": "uint256"}, {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }],
            "name": "Swap",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "internalType": "uint112",
                "name": "reserve0",
                "type": "uint112"
            }, {"indexed": false, "internalType": "uint112", "name": "reserve1", "type": "uint112"}],
            "name": "Sync",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
            "name": "Transfer",
            "type": "event"
        }, {
            "constant": true,
            "inputs": [],
            "name": "DOMAIN_SEPARATOR",
            "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "MINIMUM_LIQUIDITY",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "PERMIT_TYPEHASH",
            "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "allowance",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }],
            "name": "approve",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"internalType": "address", "name": "", "type": "address"}],
            "name": "balanceOf",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "to", "type": "address"}],
            "name": "burn",
            "outputs": [{"internalType": "uint256", "name": "amount0", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amount1",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "factory",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "getReserves",
            "outputs": [{"internalType": "uint112", "name": "_reserve0", "type": "uint112"}, {
                "internalType": "uint112",
                "name": "_reserve1",
                "type": "uint112"
            }, {"internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "_token0", "type": "address"}, {
                "internalType": "address",
                "name": "_token1",
                "type": "address"
            }],
            "name": "initialize",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "kLast",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "to", "type": "address"}],
            "name": "mint",
            "outputs": [{"internalType": "uint256", "name": "liquidity", "type": "uint256"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{"internalType": "string", "name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"internalType": "address", "name": "", "type": "address"}],
            "name": "nonces",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }, {"internalType": "uint256", "name": "value", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }, {"internalType": "uint8", "name": "v", "type": "uint8"}, {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            }, {"internalType": "bytes32", "name": "s", "type": "bytes32"}],
            "name": "permit",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "price0CumulativeLast",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "price1CumulativeLast",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "to", "type": "address"}],
            "name": "skim",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "uint256", "name": "amount0Out", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amount1Out",
                "type": "uint256"
            }, {"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }],
            "name": "swap",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{"internalType": "string", "name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "sync",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "token0",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "token1",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }],
            "name": "transfer",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {"internalType": "uint256", "name": "value", "type": "uint256"}],
            "name": "transferFrom",
            "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }],
    pancakeFactory: [
        {
            "inputs": [{"internalType": "address", "name": "_feeToSetter", "type": "address"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "internalType": "address", "name": "token0", "type": "address"}, {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
            }, {"indexed": false, "internalType": "address", "name": "pair", "type": "address"}, {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "PairCreated",
            "type": "event"
        }, {
            "constant": true,
            "inputs": [],
            "name": "INIT_CODE_PAIR_HASH",
            "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "name": "allPairs",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
            }],
            "name": "createPair",
            "outputs": [{"internalType": "address", "name": "pair", "type": "address"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "getPair",
            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "_feeTo", "type": "address"}],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"internalType": "address", "name": "_feeToSetter", "type": "address"}],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }],
    MiningWithTokenLPBeefy:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "WETH",
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
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "balanceOfToken",
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
            "name": "checkWETH",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "isValid",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "internalType": "address",
                    "name": "tokenOut",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "LPInvestmentIn",
                    "type": "uint256"
                }
            ],
            "name": "estimateLPSwap",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "swapAmountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "swapAmountOutOther",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "swapToAmountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "swapTokenOutOther",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fullInvestmentIn",
                    "type": "uint256"
                }
            ],
            "name": "estimateSwap",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "swapAmountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "swapAmountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "swapTokenOut",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_desiredToken",
                    "type": "address"
                }
            ],
            "name": "getTargetReward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentPending",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserWithdrawable",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_router",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_WETH",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_beefyVault",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "minimumAmount",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "router",
            "outputs": [
                {
                    "internalType": "contract IUniswapV2Router02",
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
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                }
            ],
            "name": "setRewardPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                }
            ],
            "name": "setState",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_beefyVault",
                    "type": "address"
                }
            ],
            "name": "setVault",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenAmountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenInAmount",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "vault",
            "outputs": [
                {
                    "internalType": "contract IBeefyVaultV6",
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
                    "name": "_withdrawAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_desiredToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_desiredTokenOutMin",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawInterest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_desiredToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_desiredTokenOutMin",
                    "type": "uint256"
                }
            ],
            "name": "withdrawTargetReward",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    MiningWithTokenLPDog:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "balanceOfToken",
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
            "name": "contactCanHarvest",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTargetReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentPending",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserWithdrawable",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_targetAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_target",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                }
            ],
            "name": "setRewardPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_state",
                    "type": "uint256"
                }
            ],
            "name": "setState",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "targetInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawInterest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawTargetReward",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    SmartChefInitializable:[{"inputs":[{"internalType":"address","name":"_pancakeProfile","type":"address"},{"internalType":"bool","name":"_pancakeProfileIsRequested","type":"bool"},{"internalType":"uint256","name":"_pancakeProfileThresholdPoints","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolLimitPerUser","type":"uint256"}],"name":"NewPoolLimit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"NewRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewStartAndEndBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"RewardsStop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isProfileRequested","type":"bool"},{"indexed":false,"internalType":"uint256","name":"thresholdPoints","type":"uint256"}],"name":"UpdateProfileAndThresholdPointsRequirement","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"PRECISION_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SMART_CHEF_FACTORY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accTokenPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hasUserLimit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20Metadata","name":"_stakedToken","type":"address"},{"internalType":"contract IERC20Metadata","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"uint256","name":"_poolLimitPerUser","type":"uint256"},{"internalType":"uint256","name":"_numberBlocksForUserLimit","type":"uint256"},{"internalType":"address","name":"_admin","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRewardBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberBlocksForUserLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract IPancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfileIsRequested","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfileThresholdPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLimitPerUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"recoverToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20Metadata","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IERC20Metadata","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_userLimit","type":"bool"},{"internalType":"uint256","name":"_poolLimitPerUser","type":"uint256"}],"name":"updatePoolLimitPerUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isRequested","type":"bool"},{"internalType":"uint256","name":"_thresholdPoints","type":"uint256"}],"name":"updateProfileAndThresholdPointsRequirement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"updateStartAndEndBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"userLimit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    MiningWithTokenV2:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_oldImplementation",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_activatable",
                    "type": "uint256"
                }
            ],
            "name": "ImplementationPending",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "name": "ImplementationUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOperator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOperator",
                    "type": "address"
                }
            ],
            "name": "OperatorTransferred",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_penalty",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardPenalty",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "RATE_BASE",
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
            "name": "activateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getBalance",
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
            "name": "getDAOMembers",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "_members",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_implementation",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPenaltyConfig",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_penaltyRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_penaltyEndTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPendingImplementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
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
            "name": "getPoolReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeContractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeTargetAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeTargetPending",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeTotalBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_stakeBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTargetReward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentPending",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_reward",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserWithdrawable",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawable",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC20",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_targetAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_DAOMembers",
                    "type": "address[]"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialized",
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
            "name": "operator",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentStaked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rewardWithdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_lockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_target",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
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
            "inputs": [],
            "name": "reinvestTarget",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_DAOMembers",
                    "type": "address[]"
                }
            ],
            "name": "setDAOMembers",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_minRelease",
                    "type": "uint256"
                }
            ],
            "name": "setMinRelease",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOperator",
                    "type": "address"
                }
            ],
            "name": "setOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_penaltyRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_penaltyEndTime",
                    "type": "uint256"
                }
            ],
            "name": "setPenaltyConfig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_receiverAddr",
                    "type": "address"
                }
            ],
            "name": "setReceiver",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rewardPerBlock",
                    "type": "uint256"
                }
            ],
            "name": "setRewardPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOperator",
                    "type": "address"
                }
            ],
            "name": "transferOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newImplementation",
                    "type": "address"
                }
            ],
            "name": "updateImplementation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "withdrawTargetReward",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    JointWallet:[
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "_threshold",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "_needOwner",
                    "type": "bool"
                },
                {
                    "internalType": "uint8",
                    "name": "_liquidationThreshold",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "_ownerLiquidation",
                    "type": "bool"
                },
                {
                    "internalType": "address payable[]",
                    "name": "_members",
                    "type": "address[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
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
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "AnonymousCalled",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Deposited",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Liquidated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_requester",
                    "type": "address"
                }
            ],
            "name": "LiquidationRequested",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_requester",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "TransferRequested",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Transferred",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "addrAllowed",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_value",
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
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "addrBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_balance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "deposit",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getAllMemberShares",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "_members",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_shares",
                    "type": "uint256[]"
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
            "name": "getLiquidationRequestRecord",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_requester",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "_status",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "_memberVotes",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_ownerVoted",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_end",
                    "type": "uint256"
                }
            ],
            "name": "getLiquidationRequestRecords",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "_tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_requesters",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_values",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint8[]",
                    "name": "_statuses",
                    "type": "uint8[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_memberVoteses",
                    "type": "uint256[]"
                },
                {
                    "internalType": "bool[]",
                    "name": "_ownerVoteds",
                    "type": "bool[]"
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
            "name": "getRequestRecord",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_requester",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "_status",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "_memberVotes",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_ownerVoted",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_end",
                    "type": "uint256"
                }
            ],
            "name": "getRequestRecords",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "_tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_requesters",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_receivers",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_values",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint8[]",
                    "name": "_statuses",
                    "type": "uint8[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_memberVoteses",
                    "type": "uint256[]"
                },
                {
                    "internalType": "bool[]",
                    "name": "_ownerVoteds",
                    "type": "bool[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_member",
                    "type": "address"
                }
            ],
            "name": "getShare",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_share",
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
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isMember",
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
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "liquidationAmount",
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
            "name": "liquidationCount",
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
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "liquidationRequestIndex",
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
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "liquidationRequests",
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
            "name": "liquidationThreshold",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "liquidationVote",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "members",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "needOwner",
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
            "name": "overview",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_requestCount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidationCount",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_members",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "_threshold",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "_needOwner",
                    "type": "bool"
                },
                {
                    "internalType": "uint8",
                    "name": "_liquidationThreshold",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "_ownerLiquidation",
                    "type": "bool"
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
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "ownerLiquidation",
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
            "name": "requestCount",
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
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "requestIndex",
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
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "requests",
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
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "selfBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_balance",
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
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "shares",
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
            "name": "threshold",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "tokenInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalShares",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_ownerShare",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidationAmount",
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
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "totalShares",
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
                    "internalType": "address payable",
                    "name": "_newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferVote",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    JointWalletV3: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_lockDuring",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "_threshold",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "_needOwner",
                    "type": "bool"
                },
                {
                    "internalType": "uint8",
                    "name": "_liquidationThreshold",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "_ownerLiquidation",
                    "type": "bool"
                },
                {
                    "internalType": "address payable[]",
                    "name": "_members",
                    "type": "address[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
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
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }
],
    "name": "AnonymousCalled",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }
],
    "name": "Deposited",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }
],
    "name": "Liquidated",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "_requester",
        "type": "address"
    }
],
    "name": "LiquidationRequested",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "_requester",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }
],
    "name": "TransferRequested",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }
],
    "name": "Transferred",
    "type": "event"
},
{
    "stateMutability": "payable",
    "type": "fallback"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
    }
],
    "name": "addrAllowed",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "_value",
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
        "name": "_token",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
    }
],
    "name": "addrBalance",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "_balance",
        "type": "uint256"
    }
],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "contractName",
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
    "name": "contractVersion",
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
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }
],
    "name": "deposit",
    "outputs": [
    {
        "internalType": "bool",
        "name": "_success",
        "type": "bool"
    }
],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "_token",
        "type": "address"
    }
],
    "name": "getAllMemberShares",
    "outputs": [
    {
        "internalType": "address[]",
        "name": "_members",
        "type": "address[]"
    },
    {
        "internalType": "uint256[]",
        "name": "_shares",
        "type": "uint256[]"
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
    "name": "getLiquidationRequestRecord",
    "outputs": [
    {
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "_requester",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    },
    {
        "internalType": "uint8",
        "name": "_status",
        "type": "uint8"
    },
    {
        "internalType": "uint256",
        "name": "_memberVotes",
        "type": "uint256"
    },
    {
        "internalType": "bool",
        "name": "_ownerVoted",
        "type": "bool"
    }
],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "uint256",
        "name": "_start",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_end",
        "type": "uint256"
    }
],
    "name": "getLiquidationRequestRecords",
    "outputs": [
    {
        "internalType": "address[]",
        "name": "_tokens",
        "type": "address[]"
    },
    {
        "internalType": "address[]",
        "name": "_requesters",
        "type": "address[]"
    },
    {
        "internalType": "uint256[]",
        "name": "_values",
        "type": "uint256[]"
    },
    {
        "internalType": "uint8[]",
        "name": "_statuses",
        "type": "uint8[]"
    },
    {
        "internalType": "uint256[]",
        "name": "_memberVoteses",
        "type": "uint256[]"
    },
    {
        "internalType": "bool[]",
        "name": "_ownerVoteds",
        "type": "bool[]"
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
    "name": "getRequestRecord",
    "outputs": [
    {
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "_requester",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    },
    {
        "internalType": "uint8",
        "name": "_status",
        "type": "uint8"
    },
    {
        "internalType": "uint256",
        "name": "_memberVotes",
        "type": "uint256"
    },
    {
        "internalType": "bool",
        "name": "_ownerVoted",
        "type": "bool"
    }
],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "uint256",
        "name": "_start",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_end",
        "type": "uint256"
    }
],
    "name": "getRequestRecords",
    "outputs": [
    {
        "internalType": "address[]",
        "name": "_tokens",
        "type": "address[]"
    },
    {
        "internalType": "address[]",
        "name": "_requesters",
        "type": "address[]"
    },
    {
        "internalType": "address[]",
        "name": "_receivers",
        "type": "address[]"
    },
    {
        "internalType": "uint256[]",
        "name": "_values",
        "type": "uint256[]"
    },
    {
        "internalType": "uint8[]",
        "name": "_statuses",
        "type": "uint8[]"
    },
    {
        "internalType": "uint256[]",
        "name": "_memberVoteses",
        "type": "uint256[]"
    },
    {
        "internalType": "bool[]",
        "name": "_ownerVoteds",
        "type": "bool[]"
    }
],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "_member",
        "type": "address"
    }
],
    "name": "getShare",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "_share",
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
        "name": "",
        "type": "address"
    }
],
    "name": "isMember",
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
        "name": "",
        "type": "address"
    }
],
    "name": "liquidationAmount",
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
    "name": "liquidationCount",
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
        "name": "",
        "type": "address"
    }
],
    "name": "liquidationRequestIndex",
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
        "name": "",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
],
    "name": "liquidationRequests",
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
    "name": "liquidationThreshold",
    "outputs": [
    {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }
],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "_token",
        "type": "address"
    }
],
    "name": "liquidationVote",
    "outputs": [
    {
        "internalType": "bool",
        "name": "_success",
        "type": "bool"
    }
],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "lockTime",
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
        "name": "",
        "type": "uint256"
    }
],
    "name": "members",
    "outputs": [
    {
        "internalType": "address payable",
        "name": "",
        "type": "address"
    }
],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "needOwner",
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
    "name": "overview",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "_lockTime",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_requestCount",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_liquidationCount",
        "type": "uint256"
    },
    {
        "internalType": "address[]",
        "name": "_members",
        "type": "address[]"
    },
    {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
    },
    {
        "internalType": "uint8",
        "name": "_threshold",
        "type": "uint8"
    },
    {
        "internalType": "bool",
        "name": "_needOwner",
        "type": "bool"
    },
    {
        "internalType": "uint8",
        "name": "_liquidationThreshold",
        "type": "uint8"
    },
    {
        "internalType": "bool",
        "name": "_ownerLiquidation",
        "type": "bool"
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
        "internalType": "address payable",
        "name": "",
        "type": "address"
    }
],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "ownerLiquidation",
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
    "name": "requestCount",
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
        "name": "",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
    "name": "requestIndex",
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
        "name": "",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
    "name": "requests",
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
        "name": "_token",
        "type": "address"
    }
],
    "name": "selfBalance",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "_balance",
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
        "name": "",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
],
    "name": "shares",
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
    "name": "threshold",
    "outputs": [
    {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }
],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "_token",
        "type": "address"
    }
],
    "name": "tokenInfo",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "_balance",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_totalShares",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_ownerShare",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_liquidationAmount",
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
        "name": "",
        "type": "address"
    }
],
    "name": "totalShares",
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
        "internalType": "address payable",
        "name": "_newOwner",
        "type": "address"
    }
],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "_token",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "_to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }
],
    "name": "transferVote",
    "outputs": [
    {
        "internalType": "bool",
        "name": "_success",
        "type": "bool"
    }
],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "stateMutability": "payable",
    "type": "receive"
}
],
    MiningWithCakeFixedTerm:[
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lockStartTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lockEndTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenLocked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenUnlocked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenUnstaked",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "SHARE_BASE",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "userAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currentStaked",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lockStartTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lockEndTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currentUnlocked",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shares",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "boostWeight",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardDebt",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardLocked",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardSettled",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardWithdrawn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardReleased",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardLockNum",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastReleaseTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "investor",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct IMiningDataStructure.UserInfo",
                    "name": "userInfo",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "shares",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastDepositedTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "cakeAtLastUserAction",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastUserActionTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lockStartTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lockEndTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "userBoostedShare",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "locked",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lockedAmount",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ICakePool.UserInfo",
                    "name": "targetInfo",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "unsettledReward",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "unsettledReleased",
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
                    "name": "stakeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardLockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minLockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxLockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "investor",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "minStakeAmount",
                    "type": "uint256"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "overview",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "stakeToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "rewardToken",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardPerBlock",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastRewardBlock",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "accRewardPerShare",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currentStaked",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currentUnlocked",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "totalShares",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardSettled",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardWithdrawn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardLockTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minLockNum",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxLockNum",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minRelease",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "beacon",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "investor",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minStakeAmount",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IMiningDataStructure.PoolInfo",
                    "name": "poolInfo",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "boostWeight",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minDepositAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minLockDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxLockDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "unsettledReward",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "latestAccRewardPerShare",
                    "type": "uint256"
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "minRelease",
                    "type": "uint256"
                }
            ],
            "name": "setMinRelease",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "minStakeAmount",
                    "type": "uint256"
                }
            ],
            "name": "setMinStakeAmount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "setReceiver",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "rewardPerBlock",
                    "type": "uint256"
                }
            ],
            "name": "setRewardPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lockDuration",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "unlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unlockSelf",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unstake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "investor",
                    "type": "address"
                }
            ],
            "name": "upgradeInvestor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    VAPK:[{"inputs":[{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"qTokenAddr","type":"address"},{"internalType":"address","name":"miner_","type":"address"},{"internalType":"address","name":"vault_","type":"address"},{"internalType":"uint256","name":"initialLp","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"BurnFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"LPFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Snapshot","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"VaultFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"}],"name":"VaultLP","type":"event"},{"inputs":[],"name":"BURN_LIMIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BURN_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LP_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_LIMIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RATE_BASE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VAULT_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"snapshotId","type":"uint256"}],"name":"balanceOfAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"contract IUniswapV2Factory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manualLpAdd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minLpQAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"miner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"qToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"qTokenHolder","outputs":[{"internalType":"contract QTokenHolder","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"rescueWrongToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"minLpQAmount_","type":"uint256"}],"name":"setMinLpQAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mintPerBlock_","type":"uint256"}],"name":"setMintPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"snapshot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"snapshotId","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vAPK","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],
    CustomProxyAdmin:[
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "daoMembers_",
                    "type": "address[]"
                },
                {
                    "internalType": "uint8",
                    "name": "threshold_",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "delay_",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newAdmin",
                    "type": "address"
                }
            ],
            "name": "ChangeProxyAdminComplete",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newAdmin",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "ChangeProxyAdminPending",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newAdmin",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "voter",
                    "type": "address"
                }
            ],
            "name": "ChangeProxyAdminVoted",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                }
            ],
            "name": "UpgradeComplete",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "UpgradePending",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "voter",
                    "type": "address"
                }
            ],
            "name": "UpgradeVoted",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                }
            ],
            "name": "activateDelayedAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                }
            ],
            "name": "activateDelayedUpgrade",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "newAdmin",
                    "type": "address"
                }
            ],
            "name": "changeProxyAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "daoMembers",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "delay",
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
                    "name": "proxy",
                    "type": "address"
                }
            ],
            "name": "getPendingAdmin",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "admin",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "time",
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
                    "name": "proxy",
                    "type": "address"
                }
            ],
            "name": "getPendingUpgrade",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "impl",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "time",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                }
            ],
            "name": "getProxyAdmin",
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
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                }
            ],
            "name": "getProxyImplementation",
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "threshold",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                }
            ],
            "name": "upgrade",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "upgradeAndCall",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    CustomTransparentProxy:[
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_logic",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "admin_",
                    "type": "address"
                }
            ],
            "stateMutability": "payable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "previousAdmin",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newAdmin",
                    "type": "address"
                }
            ],
            "name": "AdminChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                }
            ],
            "name": "Upgraded",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [],
            "name": "admin",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "admin_",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newAdmin",
                    "type": "address"
                }
            ],
            "name": "changeAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "contractName_",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractVersion",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "contractVersion_",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "implementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "implementation_",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newImplementation",
                    "type": "address"
                }
            ],
            "name": "upgradeTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newImplementation",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "upgradeToAndCall",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    OHM:[
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "wallet_",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "Snapshot",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
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
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "snapshotId",
                    "type": "uint256"
                }
            ],
            "name": "balanceOfAt",
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
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount_",
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
                    "name": "",
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
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "paused",
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
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "snapshot",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
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
                    "internalType": "uint256",
                    "name": "snapshotId",
                    "type": "uint256"
                }
            ],
            "name": "totalSupplyAt",
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
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    MT:[
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "wallet_",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "Snapshot",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
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
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "snapshotId",
                    "type": "uint256"
                }
            ],
            "name": "balanceOfAt",
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
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
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
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "paused",
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
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "snapshot",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
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
                    "internalType": "uint256",
                    "name": "snapshotId",
                    "type": "uint256"
                }
            ],
            "name": "totalSupplyAt",
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
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    CrossChainBridge:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "tokenAddr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "CrossDes",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "tokenAddr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "crossAmount",
                    "type": "uint256"
                }
            ],
            "name": "CrossRes",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "status",
                    "type": "uint256"
                }
            ],
            "name": "FinishOrder",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "previousOperators",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "OperatorTransferred",
            "type": "event"
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
            "type": "event"
        },
        {
            "inputs": [],
            "name": "SHARE_BASE",
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
                    "internalType": "address[]",
                    "name": "tokenAddrs",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "limits",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "feeRates",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "minimums",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address[]",
                    "name": "targetAddrs",
                    "type": "address[]"
                }
            ],
            "name": "addToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "bond",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "contractAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "chainId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "overtime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "resetLimitDuring",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "internalType": "address[]",
                    "name": "userAddrs",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokenAddrs",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "orderIds",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "timestamps",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "crossDes",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "crossRes",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "orderIds",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "finishOrder",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "sig",
                    "type": "bytes"
                }
            ],
            "name": "getBack",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "getDesOrderInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "userAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "orderId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "fee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "status",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ICrossChainBridgeStructure.OrderInfo",
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
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "getResOrderInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "userAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "orderId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "fee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "status",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ICrossChainBridgeStructure.OrderInfo",
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
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                }
            ],
            "name": "getResOrders",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "userAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "orderId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "fee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "status",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ICrossChainBridgeStructure.OrderInfo[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenAddr",
                    "type": "address"
                }
            ],
            "name": "getTokenBalance",
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
                    "name": "tokenAddr",
                    "type": "address"
                }
            ],
            "name": "getTokenInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "tokenAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "limit",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "feeRate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "fee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimum",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "restLimit",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastCrossTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "targetAddr",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct ICrossChainBridgeStructure.TokenInfo",
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
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getUserResOrderCount",
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
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                }
            ],
            "name": "getUserResOrders",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "userAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "orderId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "fee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "status",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ICrossChainBridgeStructure.OrderInfo[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
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
                }
            ],
            "name": "nonce",
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
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "operator",
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
            "name": "operatorCount",
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
            "name": "operators",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
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
            "inputs": [],
            "name": "refreshCache",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_contractAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_chainId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_resetLimitDuring",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_overtime",
                    "type": "uint256"
                }
            ],
            "name": "setBond",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "setOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "overtime",
                    "type": "uint256"
                }
            ],
            "name": "setOvertime",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "transferOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "toAddress",
                    "type": "address"
                }
            ],
            "name": "withdrawFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdrawToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    TokenVesting:[
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token_",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "beneficiaries_",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "ratios_",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address[]",
                    "name": "daoMembers_",
                    "type": "address[]"
                },
                {
                    "internalType": "uint8",
                    "name": "daoVoteThreshold_",
                    "type": "uint8"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "voter",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "voteHash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "beneficiaries",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "ratios",
                    "type": "uint256[]"
                }
            ],
            "name": "AddBeneficiariesVoted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "adder",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "beneficiaries",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "ratios",
                    "type": "uint256[]"
                }
            ],
            "name": "BeneficiariesAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "setter",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "beneficiaries",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "ratios",
                    "type": "uint256[]"
                }
            ],
            "name": "BeneficiariesSet",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "voter",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "voteHash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "beneficiaries",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "ratios",
                    "type": "uint256[]"
                }
            ],
            "name": "SetBeneficiariesVoted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TokenDistributed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "beneficiaries_",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "ratios_",
                    "type": "uint256[]"
                }
            ],
            "name": "addBeneficiaries",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "beneficiaries",
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
            "name": "beneficiaryCount",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "daoMembers",
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
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "daoVoteCount",
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
            "name": "daoVoteThreshold",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "daoVoted",
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
            "name": "distribute",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "emergencyWithdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isDaoMember",
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
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "paused",
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
            "name": "ratioTotal",
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "ratios",
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
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "beneficiaries_",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "ratios_",
                    "type": "uint256[]"
                }
            ],
            "name": "setBeneficiaries",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "token",
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
            "name": "tokenBalance",
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
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    LDOS:[
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
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "vesting_",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
            "type": "event"
        },
        {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "rescueWrongToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "mintPerBlock_",
                    "type": "uint256"
                }
            ],
            "name": "setMintPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "snapshot",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "Snapshot",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "account",
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
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "snapshotId",
                    "type": "uint256"
                }
            ],
            "name": "balanceOfAt",
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
            "name": "contractVersion",
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
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTotalMinted",
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
            "name": "MINT_LIMIT",
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
            "name": "mintPerBlock",
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
            "name": "name",
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
            "inputs": [],
            "name": "paused",
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
                    "name": "",
                    "type": "string"
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
                    "internalType": "uint256",
                    "name": "snapshotId",
                    "type": "uint256"
                }
            ],
            "name": "totalSupplyAt",
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
            "name": "vesting",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    MiningWithOHM:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "ContractWithdraw",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "previousOperators",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "OperatorTransferred",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "mount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "UserStaked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "UserWithdraw",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "contractWithdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getBalance",
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
            "name": "getOHMBalance",
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
            "name": "getPoolInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lockTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "totalUserStake",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawable",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IMiningWithOHMStructure.PoolInfo",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getSOHMBalance",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getSimpleUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "stakeAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "withdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "withdrawable",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "stakeAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawable",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "amounts",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "timestamps",
                            "type": "uint256[]"
                        }
                    ],
                    "internalType": "struct IMiningWithOHMStructure.UserInfo",
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
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "lockTime",
                    "type": "uint256"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "operator",
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
            "name": "operatorCount",
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
            "name": "operators",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "setOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "transferOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "lockTime",
                    "type": "uint256"
                }
            ],
            "name": "updatePoolInfo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "userStake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "userWithdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    IOlympusStaking:[
        {
            "inputs": [],
            "name": "OHM",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "gOHM",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sOHM",
            "outputs": [
                {
                    "internalType": "contract IERC20",
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
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_rebasing",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_claim",
                    "type": "bool"
                }
            ],
            "name": "stake",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_trigger",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_rebasing",
                    "type": "bool"
                }
            ],
            "name": "unstake",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amount_",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    MiningWithX2Y2:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "ContractWithdraw",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "previousOperators",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "OperatorTransferred",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "mount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "UserStaked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "UserWithdraw",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "contractWithdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getBalance",
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
            "name": "getPoolInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "contract Target",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "contract IERC20",
                            "name": "stakeToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lockTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "totalUserStake",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawable",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "otherwithdrawable",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IMiningWithX2Y2Structure.PoolInfo",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getRewardBalance",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getSimpleUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "stakeAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "withdrawn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "withdrawable",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getStakeBalance",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "stakeAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawable",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "amounts",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "timestamps",
                            "type": "uint256[]"
                        }
                    ],
                    "internalType": "struct IMiningWithX2Y2Structure.UserInfo",
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
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "lockTime",
                    "type": "uint256"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "operator",
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
            "name": "operatorCount",
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
            "name": "operators",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "setOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "transferOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "lockTime",
                    "type": "uint256"
                }
            ],
            "name": "updatePoolInfo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "userStake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "userWithdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    MiningWithO3:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "previousOperators",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "OperatorTransferred",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_penalty",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardPenalty",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "rewardLeft",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RewardWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "prev",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "currentReward",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TokenStaked",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getBalance",
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
            "name": "getTargetReward",
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
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "userAddr",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currentStaked",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardDebt",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardSettled",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardWithdrawn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardReleased",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastReleaseTime",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IMiningWithO3Structure.UserInfo",
                    "name": "userInfo",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "unsettledReward",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "unsettledReleased",
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
                    "name": "rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardLockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardLockNum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minRelease",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "operator",
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
            "name": "operatorCount",
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
            "name": "operators",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "overview",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "stakeToken",
                            "type": "address"
                        },
                        {
                            "internalType": "contract IERC20",
                            "name": "rewardToken",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardPerBlock",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastRewardBlock",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "accRewardPerStake",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currentStaked",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardSettled",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardWithdrawn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardLockTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rewardLockNum",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minRelease",
                            "type": "uint256"
                        },
                        {
                            "internalType": "contract Target",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "penaltyRate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "penaltyEndTime",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IMiningWithO3Structure.PoolInfo",
                    "name": "poolInfo",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "unsettledReward",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "latesAccRewardPerStake",
                    "type": "uint256"
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "minRelease",
                    "type": "uint256"
                }
            ],
            "name": "setMinRelease",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "setOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "penaltyRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "penaltyEndTime",
                    "type": "uint256"
                }
            ],
            "name": "setPenaltyConfig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "setReceiver",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "rewardPerBlock",
                    "type": "uint256"
                }
            ],
            "name": "setRewardPerBlock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "transferOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "unstake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawTargetReward",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    O3Pool:[{"inputs":[{"internalType":"contract IERC20[]","name":"_coins","type":"address[]"},{"internalType":"uint8[]","name":"decimals","type":"uint8[]"},{"internalType":"string","name":"lpTokenName","type":"string"},{"internalType":"string","name":"lpTokenSymbol","type":"string"},{"internalType":"uint256","name":"_a","type":"uint256"},{"internalType":"uint256","name":"_swapFee","type":"uint256"},{"internalType":"uint256","name":"_adminFee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"fees","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"invariant","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newAdminFee","type":"uint256"}],"name":"NewAdminFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newSwapFee","type":"uint256"}],"name":"NewSwapFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"initialTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"futureTime","type":"uint256"}],"name":"RampA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"fees","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"invariant","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"}],"name":"RemoveLiquidityImbalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"boughtId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensBought","type":"uint256"}],"name":"RemoveLiquidityOne","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"currentA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"StopRampA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensBought","type":"uint256"},{"indexed":false,"internalType":"uint128","name":"soldId","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"boughtId","type":"uint128"}],"name":"TokenSwap","type":"event"},{"inputs":[],"name":"A_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_ADMIN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"minToMint","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"adminFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAdminFee","type":"uint256"}],"name":"applyAdminFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newSwapFee","type":"uint256"}],"name":"applySwapFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateRemoveLiquidity","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"tokenIndexFrom","type":"uint8"},{"internalType":"uint8","name":"tokenIndexTo","type":"uint8"},{"internalType":"uint256","name":"dx","type":"uint256"}],"name":"calculateSwap","outputs":[{"internalType":"uint256","name":"dy","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bool","name":"deposit","type":"bool"}],"name":"calculateTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint8","name":"tokenIndex","type":"uint8"}],"name":"calculateWithdrawOneToken","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"coins","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"futureA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"futureATime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAdminBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getTokenIndex","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVirtualPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialATime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract LPToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_futureA","type":"uint256"},{"internalType":"uint256","name":"_futureTime","type":"uint256"}],"name":"rampA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256[]","name":"minAmounts","type":"uint256[]"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"maxBurnAmount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityImbalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint8","name":"tokenIndex","type":"uint8"},{"internalType":"uint256","name":"minAmount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityOneToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopRampA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"tokenIndexFrom","type":"uint8"},{"internalType":"uint8","name":"tokenIndexTo","type":"uint8"},{"internalType":"uint256","name":"dx","type":"uint256"},{"internalType":"uint256","name":"minDy","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"withdrawAdminFee","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    AirdropFast:[
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Withdrawn",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "balanceToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_end",
                    "type": "uint256"
                }
            ],
            "name": "getRecord",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "index",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IAirdropFast.Record[]",
                    "name": "_result",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getRecordCount",
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
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
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
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_operator",
                    "type": "address"
                }
            ],
            "name": "initialize",
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
                }
            ],
            "name": "nonce",
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
            "name": "operator",
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
                    "internalType": "address",
                    "name": "_newOperator",
                    "type": "address"
                }
            ],
            "name": "operatorTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "overview",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawnTotal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_userCount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_tokenAddress",
                    "type": "address"
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
            "inputs": [],
            "name": "refreshCache",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newOperator",
                    "type": "address"
                }
            ],
            "name": "setOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_sig",
                    "type": "bytes"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    XENClaimUtil:[
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "calculateMintReward",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "term",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maturityTs",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amplifier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "eaaRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "penalty",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reward",
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
                    "name": "logic",
                    "type": "address"
                }
            ],
            "name": "calculateMintReward",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "term",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maturityTs",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amplifier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "eaaRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "penalty",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reward",
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
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                }
            ],
            "name": "claimMintRewardAndShare",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "claimMintRewardAndShare",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "term",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "number",
                    "type": "uint256"
                }
            ],
            "name": "claimRank",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "cloneMaster",
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
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "getMintsLength",
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
            "name": "globalRank",
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
                    "name": "_cloneMaster",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "logics",
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
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "userMints",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "term",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maturityTs",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amplifier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "eaaRate",
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
                    "name": "logic",
                    "type": "address"
                }
            ],
            "name": "userMints",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "term",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maturityTs",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amplifier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "eaaRate",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    NewXENClaimUtil:[
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "secsLate",
                    "type": "uint256"
                }
            ],
            "name": "_penalty",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "calculateMintReward",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "term",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maturityTs",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amplifier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "eaaRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "penalty",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reward",
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
                    "name": "logic",
                    "type": "address"
                }
            ],
            "name": "calculateMintReward",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "term",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maturityTs",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amplifier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "eaaRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "penalty",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reward",
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
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "claimMintRewardAndShare",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "claimMintRewardAndShare",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "claimMintRewardAndShareExact",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "term",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "number",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "claimRank",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "cloneMaster",
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
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "getMintsLength",
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
            "name": "globalRank",
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
                    "name": "_cloneMaster",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "logics",
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
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "userMints",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "term",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maturityTs",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amplifier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "eaaRate",
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
                    "name": "logic",
                    "type": "address"
                }
            ],
            "name": "userMints",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "term",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maturityTs",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rank",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amplifier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "eaaRate",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    ONEDAONFT:[
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
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
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
                    "internalType": "uint256",
                    "name": "qty",
                    "type": "uint256"
                }
            ],
            "name": "batchMint",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_staking",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_minLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_consumeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_consumeAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_consumeAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_baseURI",
                    "type": "string"
                },
                {
                    "internalType": "address[]",
                    "name": "_operators",
                    "type": "address[]"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "levelUp",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "level",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "LevelUp",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "mint",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "previousOperator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newOperator",
                    "type": "address"
                }
            ],
            "name": "OperatorTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "previousOperators",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "OperatorsSet",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "qtys",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "lvls",
                    "type": "uint256[]"
                }
            ],
            "name": "ownerMint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "qty",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "sig",
                    "type": "bytes"
                }
            ],
            "name": "permitMint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "qty",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "PermitMinted",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "refreshCache",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
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
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
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
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
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
                    "internalType": "string",
                    "name": "_baseURI",
                    "type": "string"
                }
            ],
            "name": "setBaseURI",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "setOperators",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_staking",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_minLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_consumeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_consumeAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_consumeAmount",
                    "type": "uint256"
                }
            ],
            "name": "setParams",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_tokenURI",
                    "type": "string"
                }
            ],
            "name": "setTokenURI",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
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
                    "name": "newOperator",
                    "type": "address"
                }
            ],
            "name": "transferOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
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
            "inputs": [],
            "name": "baseURI",
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
            "name": "consumeAddr",
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
            "name": "consumeAmount",
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
            "name": "consumeToken",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
                    "name": "tokenId",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
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
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "level",
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
            "name": "maxLevel",
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
            "name": "minLevel",
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
            "name": "name",
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
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "nonce",
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
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "operator",
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
            "name": "operatorCount",
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
            "name": "operators",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
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
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
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
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "permitQtys",
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
            "name": "staking",
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
                    "internalType": "bytes4",
                    "name": "interfaceId",
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
                    "name": "index",
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
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
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
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
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
        }
    ],
    NFTStaking:[
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
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "ERC721TokenReceived",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_nft",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_stakePeriod",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_levelUpPeriod",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_consumeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_consumeAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_consumeAmounts",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_operators",
                    "type": "address[]"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "level",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "LeveledUp",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "levelUp",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "onERC721Received",
            "outputs": [
                {
                    "internalType": "bytes4",
                    "name": "",
                    "type": "bytes4"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "previousOperator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newOperator",
                    "type": "address"
                }
            ],
            "name": "OperatorTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "previousOperators",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "OperatorsSet",
            "type": "event"
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
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "level",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "PermitLeveledUp",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_level",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "sig",
                    "type": "bytes"
                }
            ],
            "name": "permitLevelUp",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "refreshCache",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "newOperators",
                    "type": "address[]"
                }
            ],
            "name": "setOperators",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_nft",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_stakePeriod",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_levelUpPeriod",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_consumeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_consumeAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_consumeAmounts",
                    "type": "uint256[]"
                }
            ],
            "name": "setParams",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "levelUp",
                    "type": "bool"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Staked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOperator",
                    "type": "address"
                }
            ],
            "name": "transferOperator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unstake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Unstaked",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "consumeAddr",
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "consumeAmounts",
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
            "name": "consumeToken",
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
            "name": "contractName",
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
            "name": "contractVersion",
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
            "name": "levelUpPeriod",
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
            "name": "nft",
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
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "nonce",
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
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "operator",
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
            "name": "operatorCount",
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
            "name": "operators",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
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
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "permitValues",
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
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "staked",
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
            "name": "stakePeriod",
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "tokenInfo",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "staked",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "lastStakeTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastLevelUpTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
}
