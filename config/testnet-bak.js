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
            name: "合约升级",
            url: "/upgrade",
        },

    ],
    project: {
        network: {
            // tokenAddress wbnb
            bsc: {
                name: "bsc",
                chainId: "0x61", // A 0x-prefixed hexadecimal string
                chainName: "Binance Smart Chain Testnet",
                nativeCurrency: {
                    name: "bsc",
                    symbol: "tBNB", // 2-6 characters long
                    decimals: 18,
                },
                rpcUrls: ["https://bsctestapi.terminet.io/rpc"],
                blockExplorerUrls: ["https://testnet.bscscan.com"],
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
                }]
        },
        airdrop: {
            ethereum: [],
            bsc: [
                //0airdropValt 1 airdropWithStake 2 airdropWithStake默认不显示 3 airdropWithStake launch  lock 4
                // airdropWithStake launch no lock

                {
                    projectName:"空投",
                    contractType: "AirdropFast",
                    coin: "OPO",
                    contractAddress: "0xF90f2CcFA3b34a305BA803b20e8b46EfcdDf88Ab",
                    icon: "img/coin/opo.png",
                    apiType:"onedao"
                },{
                    projectName:"空投",
                    contractType: "AirdropFast",
                    coin: "OPO",
                    contractAddress: "0x316c803B58D4172c3AB1e2F7d5f99b2E15f0AeC9",
                    icon: "img/coin/opo.png",
                    apiType:"onedao"
                },

                {
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x8E8575e81cFF331e5d571bfBc2641368DeC2A62C",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                    projectName: "activityairdrop",
                    desc: "launcharidrop1"

                },
                {
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0xe85BE5a188cBCFb3E4Db8e5d97f77189fD46214c",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                    hidden: true,
                    projectName: "launcharidrop2",
                    desc: "launcharidrop2"
                }, {
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x1A2D9AE19315a50c9e34B7b4A0013135517A1120",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                    projectName: "launchairroplock",
                    desc: "launcharidrop3"

                },
                {
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x38969f2C94C6e7f1AC31283463C59DCC5A7ffCD2",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                    projectName: "launchairropunlock",
                    desc: "launcharidrop4"

                }
            ]
        },
        dao: {
            bsc: []
        },
        staking: {
            bsc: []
        },
        pools: {
            //0 MiningWithToken/PoolingWithToken  1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            //3 NewMiningWithToken
            bsc: []
        },

        farms: {
            //type 0 PoolingWithToken 1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            bsc: []
        },
        governance: {
            bsc:
                [
                    {
                        type: 0,
                        stake: "APK",//cake -usdt  rewar usdt1
                        stakeIcon: "/img/coin/apk.png",
                        contractAddress: "0xA60B9DFb1A7725DF739BA179635e2d4443e5b74e",
                        contractType: "QuanticNext",
                        projectName: "金库合约",

                    },
                    {
                        type: 0,
                        stake: "APK",//cake -usdt  rewar usdt1
                        stakeIcon: "/img/coin/apk.png",
                        contractAddress: "0x177801E228063e46a56162e27b3DDD7AF6181021",
                        contractType: "NewQuanticNext",
                        projectName: "金库合约测试",

                    },
                ]
        },
        tokenManage: {

            bsc: [
                {
                    contractType: "VAPK",
                    contractAddress: "0xae862Dd46146217A756776B2b2CEB1c324E41153",
                    tokenName: "VAPK",
                }, {
                    contractType: "OPO",
                    contractAddress: "0xfbd8226c49397ff15ab6f7a9f514defa38795073",
                    tokenName: "OPO",
                }, {
                    contractType: "ODO",
                    contractAddress: "0x4210a3Ae81163e4c5b615297D287280357CD8788",
                    tokenName: "ODO",
                },
            ]
        },
        bridge: {
            "Ethereum_BSC": {
                Ethereum: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
                BSC: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",

            },
            "Ethereum_Heco": {
                Ethereum: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
                Heco: "0xD45753Ee217beb1f336Fd60352a2F4A04Db364f2",

            },
            "Heco_BSC": {
                Heco: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
                BSC: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
            }
        },
        nft: {
            bsc: [
                {
                    projectName: "ONEDAONFT",
                    contractType: "ONEDAONFT",
                    contractAddress: "0xe35c39e407495581De30360C40CA71d2a1eB9912",
                    stake: "Token",
                    community: "community"
                }
            ]

        },
        NFTStaking: {
            bsc: [
                {
                    projectName: "NFTStaking",
                    contractType: "NFTStaking",
                    contractAddress: "0x0A6007b075FF42dBE6e2538495EbFe25B1A20332",
                    stake: "Token",
                    community: "community"
                }
            ]

        },
    }

};
