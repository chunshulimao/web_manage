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
            status: "commingSoon",
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
                factory:"0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
            },
            ethereum: {
                name: "ethereum",
                chainId: "0x1",
                // router:"0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",//v3
                router:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                factory:"0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
            }
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
            ethereum: [],
            bsc: [
             ]
        },
        airdrop: {
            ethereum: [],
            bsc: [

            ]
        },
        dao: {
            bsc: []
        },
        staking: {
            bsc: [
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x5b3Bbe23a9f26b779cec6f8CeBA2736ECa748Fc7",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    projectName:"bond测试",
                    basePath: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"//用于计算价格
                },
            ]
        },
        pools: {
            //0 MiningWithToken/PoolingWithToken  1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            //3 NewMiningWithToken
            bsc: [
                {
                    contractType: "NewMiningWithToken",
                    contractAddress: "0xb9278b3753d12CB16E6ac0545bEAA9FD9aE0d6Ed",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    projectName: "机枪池测试",
                    basePath: "0x55d398326f99059ff775485246999027b3197955",//用于计算价格
                    targetReward: "CAKE",
                }, {
                    contractType: "NewMiningWithToken",
                    contractAddress: "0xF3fF286976C37B08bDa0d23a008bcb6DF0521F8c",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    projectName: "机枪池测试2",
                    basePath: "0x55d398326f99059ff775485246999027b3197955",//用于计算价格
                    targetReward: "CAKE",
                }

            ]
        },
        farms: {
            //type 0 PoolingWithToken 1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            bsc: [
                {
                    contractType: "MiningWithTokenLPBeefy",
                    contractAddress: "0xebf4a63eeFc6Eb66df0834535E0Cf8261433291c",
                    stake: "Static-BUSD",
                    stakeIcon: ["/img/coin/STATIC.png", "/img/coin/busd.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",

                    basePath: "0x55d398326f99059ff775485246999027b3197955",//usdt
                    stakeTokens: [
                        {
                            index: 0,
                            text: "Static-BUSD LP",
                            address: "0x69758726b04e527238B261ab00236AFE9F34929D"
                        },
                        {
                            index: 1,
                            text: "BUSD",
                            address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
                        },
                        {
                            index: 2,
                            text: "STATIC",
                            address: "0x7dEb9906BD1d77B410a56E5C23c36340Bd60C983"
                        }]
                }
            ]
        },
        newMiningWithTokenTarget: [
            {
                stake: "CAKE",
                earn: "OLE",
                decimals: 18,
                contractAddress: "0xda6F750be1331963E5772BEe757062f6bddcEA4C",
            },
            {
                stake: "CAKE",
                earn: "Trivian",
                decimals: 3,
                contractAddress: "0x86471019Bf3f403083390AC47643062e15B0256e",
            },
            {
                stake: "CAKE",
                earn: "SDAO",
                decimals: 18,
                contractAddress: "0x168eF2e470bfeAEB32BE52FB218A41483904851c",
            },
            {
                stake: "CAKE",
                earn: "ANTEX",
                decimals: 8,
                contractAddress: "0xdC37A2B2A6a62008beEe029E36153dF8055a8ADa",
            },
            {
                stake: "CAKE",
                earn: "XCN",
                decimals: 8,
                contractAddress: "0xa79D37ce9DF9443eF4B6DEC2e38a8ecd35303adc",
            } ,{
                stake: "CAKE",
                earn: "MIX",
                decimals: 18,
                contractAddress: "0x0F96E19Bdc787e767BA1e8F1aDD0f62cbdad87C8",
            },

        ],
        governance: {
            bsc:
                [
                    {
                        type: 0,
                        stake: "APK",//cake -usdt  rewar usdt1
                        stakeIcon: "/img/coin/apk.png",
                        contractAddress: "0x177801E228063e46a56162e27b3DDD7AF6181021",
                        contractType: "NewQuanticNext",
                        projectName: "apk金库合约测试",

                    },

                ]
        },
        tokenManage:{

            bsc: [

            ]
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
    }

};
