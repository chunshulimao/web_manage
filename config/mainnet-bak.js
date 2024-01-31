export default {
    menu: [
        {
            img: require("../img/menu/menu1w.png"),
            imged: require("../img/menu/menu1ed.png"),
            name: "Swap",
            url: "/home",
        },
        {
            img: require("../img/menu/menu2w.png"),
            imged: require("../img/menu/menu2ed.png"),
            name: "Liquidity",
            url: "/liquidity",
        },
        {
            img: require("../img/menu/menu3w.png"),
            imged: require("../img/menu/menu3ed.png"),
            name: "Pools",
            url: "/pools",
        },
        {
            img: require("../img/menu/menu4w.png"),
            imged: require("../img/menu/menu4ed.png"),
            name: "Farms",
            url: "/farms",
        },
        {
            img: require("../img/menu/menu5w.png"),
            imged: require("../img/menu/menu5ed.png"),
            name: "Staking",
            url: "/staking",
        },
        {
            img: require("../img/menu/bridge.png"),
            imged: require("../img/menu/bridged.png"),
            name: "Bridge",
            url: "/bridge",
        },
        {
            img: require("../img/menu/menu6w.png"),
            imged: require("../img/menu/menu6ed.png"),
            name: "LaunchDAO",
            url: "/daoList",
        },
        {
            img: require("../img/menu/menu7w.png"),
            imged: require("../img/menu/menu7ed.png"),
            name: "Airdrop",
            url: "/airdrop",
        },
        {
            img: require("../img/menu/menu13w.png"),
            imged: require("../img/menu/menu13ed.png"),
            name: "Invite",
            url: "/invite",
        },
        {
            img: require("../img/menu/node.png"),
            imged: require("../img/menu/node2.png"),
            name: "Node",
            url: "/node",
        },
        {
            img: require("../img/menu/icon_news.png"),
            imged: require("../img/menu/icon_news2.png"),
            name: "Message",
            url: "/message",
        },
        {
            img: require("../img/menu/icon_no governance.png"),
            imged: require("../img/menu/icon_governance.png"),
            name: "Governance",
            url: "/governance",
        },
        {
            img: require("../img/menu/menu12w.png"),
            imged: require("../img/menu/menu12ed.png"),
            name: "共管",
            url: "/publicmanage",
        },
        {
            img: require("../img/menu/menu12w.png"),
            imged: require("../img/menu/menu12ed.png"),
            name: "代币管理",
            url: "/tokenManage",
        },
        {
            img: require("../img/menu/menu8w.png"),
            imged: require("../img/menu/menu8ed.png"),
            name: "NFTs",
            url: "/nft",
        }, {
            img: require("../img/menu/menu8w.png"),
            imged: require("../img/menu/menu8ed.png"),
            name: "NFTStaking",
            url: "/nftStaking",
        },
        {
            img: require("../img/menu/menu10w.png"),
            imged: require("../img/menu/menu10ed.png"),
            name: "Games",
            status: "commingSoon",
        },
        {
            img: require("../img/menu/menu11w.png"),
            imged: require("../img/menu/menu11ed.png"),
            name: "Stats",
            status: "commingSoon",
        },
        {
            img: require("../img/menu/menu12w.png"),
            imged: require("../img/menu/menu12ed.png"),
            name: "Knowledge",
            status: "commingSoon",
        },
        {
            img: require("../img/menu/menu12w.png"),
            imged: require("../img/menu/menu12ed.png"),
            name: "分币管理",
            url: "/vesting",
        },
        {
            img: require("../img/menu/menu12w.png"),
            imged: require("../img/menu/menu12ed.png"),
            name: "合约升级",
            url: "/upgrade",
        },
        {
            img: require("../img/menu/menu12w.png"),
            imged: require("../img/menu/menu12ed.png"),
            name: "Mint",
            url: "/mint",
        },

    ],
    project: {
        network: {
            // tokenAddress wbnb
            bsc: {
                name: "bsc",
                chainId: "0x38", // A 0x-prefixed hexadecimal string
                chainName: "Binance Smart Chain Mainnet",
                nativeCurrency: {
                    name: "bsc",
                    symbol: "BNB", // 2-6 characters long
                    decimals: 18,
                },
                rpcUrls: ["https://bscscan.com/"],
                blockExplorerUrls: ["https://bscscan.com/"],
                tokenAddress: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
                factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
            },
            ethereum: {
                name: "ethereum",
                chainId: "0x1",
                // router:"0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",//v3
                router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
            },
            arbitrum: {
                name: "arbitrum",
                chainId: "0xA4B1", // A 0x-prefixed hexadecimal string
                chainName: "Arbitrum One",
                nativeCurrency: {
                    name: "arbitrum",
                    symbol: "ETH", // 2-6 characters long
                    decimals: 18,
                },
                rpcUrls: ["https://endpoints.omniatech.io/v1/arbitrum/one/public"],
                blockExplorerUrls: ["https://arbiscan.io"],
                tokenAddress: "",
                router: "",
                factory: "",
            },
        },
        //https://api.paraswap.io/adapters/contracts?network=56获得
        paraswap: {
            AugustusSwapper: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
            TokenTransferProxy: "0x216b4b4ba9f3e719726886d34a177484278bfcae",
            partnerAddress: "0xC18cD8E6463f7Db3e604eB0D246907A5e81fDbcF",
            partnerFeeBps: 10
        },
        did: {
            bsc: "0x2fa49abA5AFB2d542683C4c9bC5BB227fCdB2E96",
            //rootID: "0x8baf45f17e5a"
        },
        publicv3: {
            ethereum: [
                {
                    contractAddress: "0xe6f646e10b3f300E8972A330ED3c1ed9de65525d",
                    tokens: [
                        {
                            tokenName: "X2Y2",
                            address: "0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9",
                        },
                        {
                            tokenName: "FEI",
                            address: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA"
                        }, {
                            tokenName: "MT",
                            address: "0x9b4e2B4B13d125238Aa0480dD42B4f6fC71b37CC"
                        }, {
                            tokenName: "OHM",
                            address: "0x64aa3364F17a4D01c6f1751Fd97C2BD3D7e7f1D5"
                        }],
                    projectName: "跨链桥共管合约",
                },
            ],
            bsc: [
                {
                    contractAddress: "0x2CcE6992BA2a566640B2B1428bc1F01BcDe14eDb",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "USDT",
                            address: "0x55d398326f99059fF775485246999027B3197955",
                        }],
                    projectName: "NFT收币共管合约",
                }, {
                    contractAddress: "0x0F38f2D7305c747675Bd473F0ee49ffb7dE53BA5",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "ODO",
                            address: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2"
                        }],
                    projectName: "ODO预挖铸币共管合约",
                }, {
                    contractAddress: "0x9B5C6f65C4114f9FcD57739320e25Dec3a90b6d6",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "ODO",
                            address: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2"
                        }],
                    projectName: "ODO区块铸币共管合约1",
                },
                {
                    contractAddress: "0xCa05eD5034F7848401c08660942DAeC24EC96590",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "ODO",
                            address: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2"
                        }],
                    projectName: "ODO区块铸币共管合约2",
                },
                {
                    contractAddress: "0x23F4FcdBcD683FB353eCc7932E89EB1335879254",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "ODO",
                            address: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2"
                        }],
                    projectName: "ODO区块铸币共管合约3",
                },
                {
                    contractAddress: "0xF948a157188670DD7D062f8C35E7345023E24e4A",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "ODO",
                            address: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2"
                        }],
                    projectName: "ODO区块铸币共管合约4",
                },
                {
                    contractAddress: "0xD5FF4bE04B852cb66391418bf6777254452C1FB4",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "OPO",
                            address: "0x74dA0B2539220f34587aEeA3e960Cc61F678FE5D"
                        }],
                    projectName: "OPO预挖铸币共管合约",
                },
                {
                    contractAddress: "0xBcCFC65d22c4f0965F46b018F4536F5c74993f62",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "OPO",
                            address: "0x74dA0B2539220f34587aEeA3e960Cc61F678FE5D"
                        }],
                    projectName: "OPO区块铸币共管合约",
                },
                {
                    contractAddress: "0x061811b074D32033Ee6bB54a90C134A725789C53",
                    tokens: [
                        {
                            tokenName: "LDOS",
                            address: "0x7F9Bc502E56271D5933b4BEAdA34d604B75d39B6"
                        }],
                    projectName: "LDOS共管合约1",
                },
                {
                    contractAddress: "0xdfC031B60690D2c15B1AcbA99332829722134715",
                    tokens: [
                        {
                            tokenName: "LDOS",
                            address: "0x7F9Bc502E56271D5933b4BEAdA34d604B75d39B6"
                        }],
                    projectName: "LDOS共管合约2",
                },
                {
                    contractAddress: "0x903891e26e2E1B9dce2dd334d4CB34044efb6267",
                    tokens: [
                        {
                            tokenName: "LDOS",
                            address: "0x7F9Bc502E56271D5933b4BEAdA34d604B75d39B6"
                        }],
                    projectName: "LDOS共管合约3",
                },
                {
                    contractAddress: "0x67A105733B5dcEdEA47941d10dbBc1Fb3d4745f6",
                    projectName: "跨链桥共管合约",
                    tokens: [
                        {
                            tokenName: "XEN",
                            address: "0xCb0A57FF5bc717aEe552C3a872456B4325380D3d"
                        },
                        {
                            tokenName: "stOHM",
                            address: "0xB728eB00d9BC278B248058f741c69E9391b56FC0"
                        },
                        {
                            tokenName: "stX2Y2",
                            address: "0x82a9177D283b178373994Ebb5C33f9aF4cb74739"
                        },
                        {
                            tokenName: "FEI",
                            address: "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111"
                        },
                        {
                            tokenName: "MT",
                            address: "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"
                        }, {
                            tokenName: "OHM",
                            address: "0x85bb59A8e466B55946841d3258d412aEF5927865"
                        }, {
                            tokenName: "stCAKE",
                            address: "0x22Bd6EE0015251957A34399F6b1140232BF08bC2"
                        }, {
                            tokenName: "X2Y2",
                            address: "0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7"
                        }],
                },
                {
                    contractAddress: "0x56296c51Cdf7e4dff049E542455f1dA17d7205e1",
                    tokens: [
                        {
                            tokenName: "APK",
                            address: "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"
                        }],
                    projectName: "APK共管合约",
                }, {
                    contractAddress: "0x1dD77F4aEfAFC8D5490D1436fdC215E1aDDA51Fe",
                    tokens: [
                        {
                            tokenName: "VAPK",
                            address: "0xae862Dd46146217A756776B2b2CEB1c324E41153"
                        }],
                    projectName: "VAPK共管合约",
                },],
            arbitrum: [
                {
                    contractAddress: "0x2CcE6992BA2a566640B2B1428bc1F01BcDe14eDb",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "USDT",
                            address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
                        }],
                    projectName: "NFT收币共管合约",
                }, {
                    contractAddress: "0x0F38f2D7305c747675Bd473F0ee49ffb7dE53BA5",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "ODO",
                            address: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2"
                        }],
                    projectName: "ODO预挖铸币共管合约",
                }, {
                    contractAddress: "0x9B5C6f65C4114f9FcD57739320e25Dec3a90b6d6",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "ODO",
                            address: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2"
                        }],
                    projectName: "ODO区块铸币共管合约1",
                },
                {
                    contractAddress: "0xCa05eD5034F7848401c08660942DAeC24EC96590",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "ODO",
                            address: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2"
                        }],
                    projectName: "ODO区块铸币共管合约2",
                },
                {
                    contractAddress: "0x23F4FcdBcD683FB353eCc7932E89EB1335879254",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "ODO",
                            address: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2"
                        }],
                    projectName: "ODO区块铸币共管合约3",
                },
                {
                    contractAddress: "0xF948a157188670DD7D062f8C35E7345023E24e4A",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "ODO",
                            address: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2"
                        }],
                    projectName: "ODO区块铸币共管合约4",
                },
                {
                    contractAddress: "0xD5FF4bE04B852cb66391418bf6777254452C1FB4",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "OPO",
                            address: "0x74dA0B2539220f34587aEeA3e960Cc61F678FE5D"
                        }],
                    projectName: "OPO预挖铸币共管合约",
                },
                {
                    contractAddress: "0xBcCFC65d22c4f0965F46b018F4536F5c74993f62",
                    contractType: "JointWalletV3",
                    tokens: [
                        {
                            tokenName: "OPO",
                            address: "0x74dA0B2539220f34587aEeA3e960Cc61F678FE5D"
                        }],
                    projectName: "OPO区块铸币共管合约",
                },
            ]
        },
        airdrop: {
            ethereum: [],
            bsc: [
                {
                    projectName: "空投1",
                    contractType: "AirdropFast",
                    coin: "OPO",
                    contractAddress: "0xFAc00182D1f5E39f35e8ed0a9D7651489031CdAe",
                    icon: "img/coin/opo.png",
                    apiType: "onedao"
                }, {
                    projectName: "空投2",
                    contractType: "AirdropFast",
                    coin: "OPO",
                    contractAddress: "0x1482734758594DBB522D0e2287eFB236D9341d3B",
                    icon: "img/coin/opo.png",
                    apiType: "onedao"
                },
                {
                    projectName: "空投3",
                    contractType: "AirdropFast",
                    coin: "OPO",
                    contractAddress: "0x2444f16E27f019226884e09307aE666ed6fFcee7",
                    icon: "img/coin/opo.png",
                    apiType: "onedao"
                },
                {
                    projectName: "空投0天",
                    contractType: "AirdropFast",
                    coin: "DXP",
                    contractAddress: "0x4be8628041B764527AB8CA5F61F7F08f2e077120",
                    icon: "img/coin/DXP.png",
                },
                {
                    projectName: "活动空投2号",
                    contractType: "AirdropFast",
                    icon: "/img/coin/MT.png",
                    coin: "MT",
                    contractAddress: "0xcD22ee77cAce9ec5e4Bc9d42b2876Da475502d93",
                    status: "ongoing",
                    logoUrl: "img/coin/MT.png",
                },
                {
                    projectName: "launcharidrop",
                    contractType: "AirdropV2",
                    icon: "/img/coin/MT.png",
                    coin: "MT",
                    contractAddress: "0x7497825B189009dAB74e022DAF5d3F0Cc19098a8",
                    status: "ongoing",
                    logoUrl: "img/coin/MT.png",
                },
                {
                    projectName: "launcharidrop",
                    contractType: "AirdropV2",
                    icon: "/img/coin/MT.png",
                    coin: "MT",
                    contractAddress: "0xAbfc2e8A740040F7620171f71B8B545ADE8591A6",
                    status: "ongoing",
                    logoUrl: "img/coin/MT.png",
                },
                {
                    projectName: "launcharidrop",
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x8E8575e81cFF331e5d571bfBc2641368DeC2A62C",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                },
                {
                    projectName: "launcharidrop2",
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0xe85BE5a188cBCFb3E4Db8e5d97f77189fD46214c",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                    hidden: true,
                }, {
                    projectName: "launcharidrop",
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x1A2D9AE19315a50c9e34B7b4A0013135517A1120",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                },
                {
                    projectName: "launcharidrop",
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x38969f2C94C6e7f1AC31283463C59DCC5A7ffCD2",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                }
            ],
            arbitrum:[ {
                projectName: "空投1",
                contractType: "AirdropFast",
                coin: "OPO",
                contractAddress: "0xFAc00182D1f5E39f35e8ed0a9D7651489031CdAe",
                icon: "img/coin/opo.png",
                apiType: "onedao"
            }, {
                projectName: "空投2",
                contractType: "AirdropFast",
                coin: "OPO",
                contractAddress: "0x1482734758594DBB522D0e2287eFB236D9341d3B",
                icon: "img/coin/opo.png",
                apiType: "onedao"
            },
                {
                    projectName: "空投3",
                    contractType: "AirdropFast",
                    coin: "OPO",
                    contractAddress: "0x2444f16E27f019226884e09307aE666ed6fFcee7",
                    icon: "img/coin/opo.png",
                    apiType: "onedao"
                },]
        },
        dao: {
            bsc: []
        },
        staking: {
            bsc: [
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0xB87a01DCAC5ee3F1cbDa41C06A2f9fe6E9878e39",
                    stake: "MT",
                    stakeIcon: "/img/coin/MT.png",
                    earn: "bXEN",
                    earnIcon: "/img/coin/bXEN.png",
                    path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x451a9F934c76c898F243707C3e5a5F0CF9fec235",
                    stake: "MT",
                    stakeIcon: "/img/coin/MT.png",
                    earn: "bXEN",
                    earnIcon: "/img/coin/bXEN.png",
                    path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0xe2F7d18AcCE0B27BA18F0DC10E5509B5FCA99eD6",
                    stake: "MT",
                    stakeIcon: "/img/coin/MT.png",
                    earn: "bXEN",
                    earnIcon: "/img/coin/bXEN.png",
                    path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x97438e92aAafCCdb12e195703E0Fd7373c0ca63F",
                    stake: "MT",
                    stakeIcon: "/img/coin/MT.png",
                    earn: "XEN",
                    earnIcon: "/img/coin/XEN.png",
                    path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0xCb0A57FF5bc717aEe552C3a872456B4325380D3d"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x128BD88914d728705A51BfdaB1c9A77bC9e1CF30",
                    stake: "MT",
                    stakeIcon: "/img/coin/MT.png",
                    earn: "XEN",
                    earnIcon: "/img/coin/XEN.png",
                    path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0xCb0A57FF5bc717aEe552C3a872456B4325380D3d"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x8AA7E58e0Cc75aD3A0120331F82a680747eEaDc3",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                }, {
                    contractType: "PoolingBond15",
                    contractAddress: "0x1efEC8872e6ba74af50f3E886Df375fc700E3Be8",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                }, {
                    contractType: "PoolingBond30",
                    contractAddress: "0xa5F92BAE0d391DbB539Df8a0de361D78641EdC79",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                }, {
                    contractType: "PoolingBond45",
                    contractAddress: "0x245A4D588E2DA0b20B7FbF4044e346ADd2ABE68e",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                }, {
                    contractType: "PoolingBond52",
                    contractAddress: "0xa80394d79911E4be911B3b86b96BF69CEf7883cB",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                }, {
                    contractType: "PoolingBond1",
                    contractAddress: "0xf1c060aFd48F83109Fb06a23Abc2A19a08Ac527b",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "stCAKE",
                    earnIcon: "/img/coin/stCAKE.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x22Bd6EE0015251957A34399F6b1140232BF08bC2"]
                }, {
                    contractType: "PoolingBond30",
                    contractAddress: "0xAEaE19628784a8a6B88d92C6f8Dfbf63c685be9e",
                    stake: "stCAKE",
                    stakeIcon: "/img/coin/stCAKE.png",
                    earn: "CAKE",
                    earnIcon: "/img/coin/CAKE.png",
                    path: ["0x22Bd6EE0015251957A34399F6b1140232BF08bC2", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x708A27eA80ac03A4032251097F092645F0A912AE",
                    stake: "OHM",
                    stakeDecimals: 9,
                    stakeIcon: "/img/coin/OHM.png",
                    earn: "stOHM",
                    earnIcon: "/img/coin/stOHM.png",
                    path: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xB728eB00d9BC278B248058f741c69E9391b56FC0"]
                },
                {
                    contractType: "PoolingBond30",
                    contractAddress: "0x25ad734547f8Fb3B562e5B3029B0D2A717AB4C44",
                    stake: "stOHM",
                    stakeIcon: "/img/coin/stOHM.png",
                    earn: "OHM",
                    stakeDecimals: 9,
                    earnIcon: "/img/coin/OHM.png",
                    path: ["0xB728eB00d9BC278B248058f741c69E9391b56FC0", "0x85bb59A8e466B55946841d3258d412aEF5927865"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0xB287192365a5BE5bbA333405A6452Ea9520d5F5D",
                    stake: "X2Y2",
                    stakeIcon: "/img/coin/X2Y2.png",
                    earn: "stX2Y2",
                    earnIcon: "/img/coin/stX2Y2.png",
                    path: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0x82a9177D283b178373994Ebb5C33f9aF4cb74739"]
                },
                {
                    contractType: "PoolingBond30",
                    contractAddress: "0xA7A2F4CA343D502243B1D1Cf5F50f279344a725a",
                    stake: "stX2Y2",
                    stakeIcon: "/img/coin/stX2Y2.png",
                    earn: "X2Y2",
                    earnIcon: "/img/coin/X2Y2.png",
                    path: ["0x82a9177D283b178373994Ebb5C33f9aF4cb74739", "0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7"]
                },
            ]
        },
        pools: {
            //0 MiningWithToken/PoolingWithToken  1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            //3 NewMiningWithToken
            bsc: [
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x4b89A0769963776d5aF1962F34f0C72D89db8693",
                    stake: "FEI",
                    stakeIcon: "/img/coin/FEI.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "MiningWithCakeFixedTerm",
                    contractAddress: "0x461D7B6b4a707AdF0a4a642Fcd18D2D27b407FE1",
                    stake: "CAKE",
                    stakeDecimals: 18,
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    projectName: "Locked",
                    targetReward: "CAKE",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                },
                {
                    contractType: "NewMiningWithToken",
                    contractAddress: "0xD8B3eb7Cab9855C388ea86dE82C7DC99eF6eeCdc",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    projectName: "Vault3",
                    targetReward: "CAKE",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                },
                {
                    type: 3,
                    contractType: "NewMiningWithToken",
                    contractAddress: "0x2E7dfFaA7f820F2475433EB28102C7d8a1C4ee80",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    projectName: "Vault2",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                }, {
                    type: 0,
                    contractType: "MiningWithToken",
                    contractAddress: "0x5F725bF341c5aF148F797bb4119d1898993804E9",
                    stake: "CAKE",
                    stakeDecimals: 18,
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    status: 1,
                    projectName: "Vault1",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                }, {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x30Ef81b7b96DC2Ac0898D1CE16233D533776164e",
                    stake: "VAPK",
                    stakeDecimals: 18,
                    stakeIcon: "/img/coin/vapk.jpg",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0xae862Dd46146217A756776B2b2CEB1c324E41153", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                }, {
                    type: 0,
                    contractType: "OLDPoolingWithToken",
                    contractAddress: "0xDd07987F56695DD1A685CA5D15f6F9a4863af048",
                    stake: "Face",
                    stakeDecimals: 9,
                    stakeIcon: "/img/coin/face.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    status: 1,
                    path: ["0x623B64D0e2483B77Cdd36308066B3d747603c498", "0x55d398326f99059fF775485246999027B3197955", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    days: 350,
                    time: 7
                }, {
                    type: 1,
                    contractType: "MiningWithTokenLPBeefy",
                    contractAddress: "0x7FdA03cbd76873c04db27452dDf0b5F45F04F175",
                    stake: "Pacoca",
                    stakeDecimals: 18,
                    stakeIcon: "/img/coin/PACOCA.svg",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    status: 1,
                    path: ["0x55671114d774ee99D653D6C12460c780a67f1D18", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                }, {
                    type: 0,
                    contractType: "OLDPoolingWithToken",
                    contractAddress: "0x916eb608F9c000374a013551804B8635D9A718f7",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                }, {
                    contractType: "NewMiningWithToken",
                    contractAddress: "0x0871270af61bfFA2ab5A5ccEab8e6F77e799DbF0",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                }, {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x160AF9E01D2DD30e401F2F4BfbE4FC0fAb862eDA",
                    stake: "OHM",
                    stakeDecimals: 9,
                    stakeIcon: "/img/coin/OHM.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                }, {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x57257A414e6dbe26560186AC978fF21c9708F45E",
                    stake: "X2Y2",
                    stakeIcon: "/img/coin/X2Y2.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x2F0eCDa29e6280c645299ff89927A8862f1cb84e",
                    stake: "stCAKE",
                    stakeIcon: "/img/coin/stCAKE.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x22Bd6EE0015251957A34399F6b1140232BF08bC2", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"]
                }, {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xBd6f799FD6C69C16D971Da6e58b791157074b47d",
                    stake: "stOHM",
                    stakeDecimals: 9,
                    stakeIcon: "/img/coin/stOHM.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xB728eB00d9BC278B248058f741c69E9391b56FC0", "0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                }, {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x0199175508a681070e6b05f51a6cCe5aa29cc680",
                    stake: "stX2Y2",
                    stakeIcon: "/img/coin/stX2Y2.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x82a9177D283b178373994Ebb5C33f9aF4cb74739", "0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                }

            ]
        },
        farms: {
            //type 0 PoolingWithToken 1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            bsc: [
                {
                    contractType: "MiningWithO3",
                    contractAddress: "0x69e34aa9b3b3B56fD58185Cc3adD043Ce60AB745",
                    stake: "pUSDT/USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/usdt.png", "/img/coin/LP-USDT.png"],
                    earn: "MT",
                    poolAddress: "0x5F5737403c8b30288299e51d94d007a826f9d593",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                },
                {
                    contractType: "MiningWithTokenV2",
                    contractAddress: "0x4349E0ff0703Aa4287df09fA9a30222CCf5BAEdc",
                    stake: "CAKE-USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/CAKE.png", "/img/coin/usdt.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                }, {
                    contractType: "MiningWithTokenV2",
                    contractAddress: "0x8EB54659ABCAc867Dd7771F5fC4d2F9308A469B6",
                    stake: "CAKE-BUSD",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/CAKE.png", "/img/coin/busd.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xad670576Eb8dE1Bda4a4B9dC26520E775704150b",
                    stake: "VAPK-USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/vapk.jpg", "/img/coin/usdt.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x55d398326f99059fF775485246999027B3197955", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x80608f7371FEf96fEc21F89812edfE69cebDFA93",
                    stake: "VAPK-CAKE",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/vapk.jpg", "/img/coin/CAKE.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xa92839ABa314252260408f8Ea69BcB4AAD6DedC6",
                    stake: "APK-CAKE",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/apk.png", "/img/coin/CAKE.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"]
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x60B1016296014e273b966c5DcD73E184c21Ce5b0",
                    stake: "APK-BUSD",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/apk.png", "/img/coin/busd.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"]
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x75BA912bCA589Ec9950c060c1D4e42F71949d8D1",
                    stake: "APK-USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/apk.png", "/img/coin/usdt.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"]
                },
                {
                    contractType: "MiningWithTokenV2",
                    contractAddress: "0x816E7E9f59EceCBbE0dc60F073e0b9ca491472Ea",
                    stake: "CAKE-BUSD",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/CAKE.png", "/img/coin/busd.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                },
                {
                    contractType: "MiningWithTokenV2",
                    contractAddress: "0x0131057a1459a099b9EA9f017e73eAcB0636D3c4",
                    stake: "CAKE-USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/CAKE.png", "/img/coin/usdt.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                }, {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xFBEC86882e1F3DdeCa6eD598F9D0585352421fE8",
                    stake: "stCAKE/CAKE",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/stCAKE.png", "/img/coin/CAKE.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"]
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x5Ed12f9187412b28A68a49fa619d5AaD10D3cE1f",
                    stake: "OHM/FEI",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/OHM.png", "/img/coin/FEI.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"]
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xd0a29C30Fce91CcFc3C8c7416f6b57935c5717Fc",
                    stake: "X2Y2/FEI",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/X2Y2.png", "/img/coin/FEI.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"]
                }, {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x087FfE61a5d6395b9CFd1E0D95150f77ef28af60",
                    stake: "stX2Y2/X2Y2",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/stX2Y2.png", "/img/coin/X2Y2.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x8BfA34bDB2C9553f82Bc0eFA542d2D7Cc92D9CDE",
                    stake: "stOHM/OHM",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/stOHM.png", "/img/coin/OHM.png"],
                    earn: "MT",
                    stakeDecimals: 9,//path length-1的Decimals
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                },

            ]
        },

        governance: {
            ethereum:
                [{
                    stake: "OHM",//cake -usdt  rewar usdt1
                    stakeIcon: "/img/coin/OHM.png",
                    contractAddress: "0xB88cd69B2E426B9ba2b43aD3e0ecf7D077589E12",
                    contractType: "QuanticNext",
                    projectName: "OHM金库合约",

                }],
            bsc:
                [
                    {
                        stake: "OHM",//cake -usdt  rewar usdt1
                        stakeIcon: "/img/coin/OHM.png",
                        contractAddress: "0x1D851745c0fbC61e4365fe8b8a941F2A4f389c97",
                        contractType: "NewQuanticNext",
                        projectName: "OHM本金金库合约",

                    },
                    {
                        stake: "X2Y2",//cake -usdt  rewar usdt1
                        stakeIcon: "/img/coin/X2Y2.png",
                        contractAddress: "0xB734909F7cE687D941A9E314376AF4A57067C433",
                        contractType: "NewQuanticNext",
                        projectName: "X2Y2本金金库合约",

                    },
                    {
                        stake: "CAKE",//cake -usdt  rewar usdt1
                        stakeIcon: "/img/coin/CAKE.png",
                        contractAddress: "0x049E72a56B5dE5bEc91eB4a894bE626e3cA44a94",
                        contractType: "NewQuanticNext",
                        projectName: "CAKE本金金库合约",

                    },
                    {
                        stake: "LDOS",//cake -usdt  rewar usdt1
                        stakeIcon: "/img/coin/LUDO.png",
                        contractAddress: "0x7520943BdB473C1A84E8F618D747C60a19FF44a2",
                        contractType: "NewQuanticNext",
                        projectName: "LDOS金库合约",

                    },
                    {
                        stake: "MT",//cake -usdt  rewar usdt1
                        stakeIcon: "/img/coin/MT.png",
                        contractAddress: "0x6638e7a149183b52685b07f392e51A93EE83e901",
                        contractType: "NewQuanticNext",
                        projectName: "MT金库合约",

                    },
                    {
                        stake: "APK",//cake -usdt  rewar usdt1
                        stakeIcon: "/img/coin/apk.png",
                        contractAddress: "0xA60B9DFb1A7725DF739BA179635e2d4443e5b74e",
                        contractType: "NewQuanticNext",
                        projectName: "APK金库合约",
                    },


                ]
        },
        tokenManage: {
            //contractType MT是带owner的通用合约类型
            ethereum: [
                {
                    contractType: "MT",
                    contractAddress: "0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9",
                    tokenName: "X2Y2",
                },
                {
                    contractType: "MT",
                    contractAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
                    tokenName: "FEI",
                }, {
                    contractType: "MT",
                    contractAddress: "0x9b4e2B4B13d125238Aa0480dD42B4f6fC71b37CC",
                    tokenName: "MT",
                }, {
                    contractType: "OHM",
                    decimals: 9,
                    contractAddress: "0x64aa3364F17a4D01c6f1751Fd97C2BD3D7e7f1D5",
                    tokenName: "OHM",
                },],
            bsc: [
                {
                    contractType: "OPO",
                    contractAddress: "0x74dA0B2539220f34587aEeA3e960Cc61F678FE5D",
                    tokenName: "OPO",
                }, {
                    contractType: "ODO",
                    contractAddress: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2",
                    tokenName: "ODO",
                },
                {

                    contractType: "DXP",
                    tokenName: "DXP",
                    contractAddress: "0x1f0c4CF6683b3eA53A5F68B960Bc26224C9A4C8a",
                },
                {
                    contractType: "DIDNET",
                    tokenName: "DID",
                    contractAddress: "0x546495EAe7015e412A493C7fd08D56F71Ce3964d",
                },
                {
                    contractType: "OHM",
                    contractAddress: "0xCb0A57FF5bc717aEe552C3a872456B4325380D3d",
                    tokenName: "XEN",
                },
                {
                    contractType: "MT",
                    contractAddress: "0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7",
                    tokenName: "X2Y2",
                },
                {
                    contractType: "LDOS",
                    contractAddress: "0x22Bd6EE0015251957A34399F6b1140232BF08bC2",
                    tokenName: "stCAKE",
                },
                {
                    contractType: "LDOS",
                    contractAddress: "0x7F9Bc502E56271D5933b4BEAdA34d604B75d39B6",
                    tokenName: "LDOS",
                },
                {
                    contractType: "MT",
                    contractAddress: "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111",
                    tokenName: "FEI",
                },
                {
                    contractType: "MT",
                    contractAddress: "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7",
                    tokenName: "MT",
                }, {
                    contractType: "OHM",
                    decimals: 9,
                    contractAddress: "0x85bb59A8e466B55946841d3258d412aEF5927865",
                    tokenName: "OHM",
                },
                {
                    contractType: "MT",
                    contractAddress: "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E",
                    tokenName: "APK",
                },
                {
                    contractType: "VAPK",
                    contractAddress: "0xae862Dd46146217A756776B2b2CEB1c324E41153",
                    tokenName: "VAPK",
                },

            ],
            arbitrum: [{
                contractType: "OPO",
                contractAddress: "0x74dA0B2539220f34587aEeA3e960Cc61F678FE5D",
                tokenName: "OPO",
            }, {
                contractType: "ODO",
                contractAddress: "0xD3D234f5105e237F7eBeccE94C8d7A244888bDa2",
                tokenName: "ODO",
            },]
        },
        bridge: {
            "Ethereum_BSC": {
                Ethereum: "0x85bb59A8e466B55946841d3258d412aEF5927865",
                BSC: "0x1019081242405cdB57eEA34671fc4084195c35CA",

            },
            /*  "Ethereum_Heco": {
                  Ethereum: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
                  Heco: "0xD45753Ee217beb1f336Fd60352a2F4A04Db364f2",

              },
              "Heco_BSC": {
                  Heco: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
                  BSC: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
              }*/
        },
        vesting: {
            bsc: [
                {
                    projectName: "LDOS分币合约",
                    contractType: "TokenVesting",
                    contractAddress: "0xC9568A9f61c20f314964322F8734d31325465982",
                    tokenName: "LDOS",
                },
                {
                    projectName: "ODO分币合约",
                    contractType: "TokenVesting",
                    contractAddress: "0x35418f2dF5bbfe26cAD8250Fe93c3502E7276fc5",
                    tokenName: "ODO",
                }
            ],  arbitrum: [

                {
                    projectName: "ODO分币合约",
                    contractType: "TokenVesting",
                    contractAddress: "0x35418f2dF5bbfe26cAD8250Fe93c3502E7276fc5",
                    tokenName: "ODO",
                }
            ]
        },
        node: {
            bsc: [
                {
                    contractType: "MiningWithCakeFixedTerm",
                    contractAddress: "0x8A2cdC6088E545d5055468a547cda4c5F6614f43",
                    stake: "CAKE",
                    stakeDecimals: 18,
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "无",
                    earnIcon: "",
                    projectName: "Locked",
                    targetReward: "CAKE",
                },

            ],
            ethereum: [
                {
                    contractType: "MiningWithOHM",
                    contractAddress: "0xc3fc47dC9B465f2EF6F185EdF3147e2711673E77",
                    stake: "OHM",
                    targetReward: "OHM",
                    stakeDecimals: 9,
                    stakeIcon: "/img/coin/OHM.png",
                    projectName: "锁仓1年",
                    earn: "无"
                },
                {
                    contractType: "MiningWithOHM",
                    contractAddress: "0xc33c19192bE0c6e440aef823aAf314f3097dBEa2",
                    stake: "OHM",
                    targetReward: "OHM",
                    stakeDecimals: 9,
                    stakeIcon: "/img/coin/OHM.png",
                    projectName: "金库挖矿",
                    earn: "无"
                },
                {
                    contractType: "MiningWithX2Y2",
                    contractAddress: "0xB2790908Dc099A5a3cA883EE56c320371a158706",
                    stake: "X2Y2",
                    targetReward: "X2Y2",
                    stakeDecimals: 18,
                    stakeIcon: "/img/coin/X2Y2.png",
                    projectName: "锁仓1年",
                    earn: "无"
                },
                {
                    contractType: "MiningWithX2Y2",
                    contractAddress: "0x0871270af61bfFA2ab5A5ccEab8e6F77e799DbF0",
                    stake: "X2Y2",
                    targetReward: "X2Y2",
                    stakeDecimals: 18,
                    stakeIcon: "/img/coin/X2Y2.png",
                    projectName: "金库挖矿",
                    earn: "无"
                },
            ],

        },
        mint: {
            ethereum: [
                {
                    contractType: "XENClaimUtil",
                    contractAddress: "0x25a17AEccEf17d3a0E40a8D01618021BE18726F9",
                    stake: "XEN",
                    stakeIcon: "/img/coin/XEN.png",
                },
            ],
            bsc: [
                {
                    contractType: "XENClaimUtil",
                    contractAddress: "0xeF255bD42269e7207372B02FCE336ce6B2bF3002",
                    stake: "bXEN",
                    stakeIcon: "/img/coin/bXEN.png",
                },
                {
                    contractType: "NewXENClaimUtil",
                    contractAddress: "0x75e28291eeDc48a8792751872E338F1241293a41",
                    stake: "bXEN",
                    stakeIcon: "/img/coin/bXEN.png",
                },

            ],

        },

        nft: {
            bsc: [
                {
                    projectName: "ONEDAONFT",
                    contractType: "ONEDAONFT",
                    contractAddress: "0xAEb8Cf3B626d619ac0975e0F6e2359f273542594",
                    stake: "USDT",
                    community: "community"
                }
            ], arbitrum: [
                {
                    projectName: "ONEDAONFT",
                    contractType: "ONEDAONFT",
                    contractAddress: "0xAEb8Cf3B626d619ac0975e0F6e2359f273542594",
                    stake: "USDT",
                    community: "community"
                }
            ]
        },
        NFTStaking: {
            bsc: [
                {
                    projectName: "NFTStaking",
                    contractType: "NFTStaking",
                    contractAddress: "0x143F2186004d888B835B7C9D9d17E2D3ff7317F5",
                    stake: "USDT",
                    community: "community"
                }
            ],
            arbitrum: [
                {
                    projectName: "NFTStaking",
                    contractType: "NFTStaking",
                    contractAddress: "0x143F2186004d888B835B7C9D9d17E2D3ff7317F5",
                    stake: "USDT",
                    community: "community"
                }
            ]
        },
    },
};
