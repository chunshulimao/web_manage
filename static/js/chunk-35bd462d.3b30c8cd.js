(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35bd462d"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"32a2":function(e,t,a){"use strict";t["a"]={ethereum:[],bsc:[{name:"WBNB Token",symbol:"WBNB",address:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",chainId:56,decimals:18,logoURI:"https://tokens.pancakeswap.finance/images/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png"},{name:"FEI",symbol:"FEI",address:"0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111",chainId:56,decimals:18,logoURI:"/img/coin/FEI.png"},{name:"Binance Pegged USD Coin",symbol:"USDC",address:"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",chainId:56,decimals:18,logoURI:"https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png"},{name:"Binance Pegged USDT",symbol:"USDT",address:"0x55d398326f99059fF775485246999027B3197955",chainId:56,decimals:18,logoURI:"https://tokens.pancakeswap.finance/images/0x55d398326f99059fF775485246999027B3197955.png"},{name:"Binance Pegged BUSD",symbol:"BUSD",address:"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",chainId:56,decimals:18,logoURI:"https://tokens.pancakeswap.finance/images/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png"},{name:"PancakeSwap Token",symbol:"CAKE",address:"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",chainId:56,decimals:18,logoURI:"https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png"}]}},"365c":function(e,t,a){"use strict";var n=a("b775");t["a"]={getTokenList:function(e){return n["a"].get("https://apiv5.paraswap.io/tokens/"+e)},getBscTokenList1:function(){return n["a"].get("https://tokens.pancakeswap.finance/pancakeswap-extended.json")},getBscTokenList2:function(){return n["a"].get("https://tokens.pancakeswap.finance/pancakeswap-top-100.json")},getEtherTokenList1:function(){return n["a"].get("https://tokenlist-aave-eth.ipns.dweb.link/")},getEtherTokenList2:function(){return n["a"].get("https://gateway.ipfs.io/ipns/tokens.uniswap.org")},getTokenPrice:function(e,t){return n["a"].get("https://apiv5.paraswap.io/prices",e,t)},getTransaction:function(e,t){return n["a"].post("https://api.paraswap.io/transactions/"+e,t)},getChart:function(e,t,a,r){return t=t.toLowerCase(),"bsc"===e?(t==="0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()&&(t="0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"),n["a"].get("https://coingecko.ludos.app/coingecko/api/v3/coins/binance-smart-chain/contract/"+t+"/market_chart/range?vs_currency=usd&from="+a+"&to="+r,{},!1)):"ethereum"===e?n["a"].get("https://api.coingecko.com/api/v3/coins/ethereum/contract/"+t+"/market_chart/range?vs_currency=usd&from="+a+"&to="+r):void 0},getAirdropTotal:function(e){return n["a"].get("/api/v1/web/staking/getAirdropTotal",e)},getSignClaim:function(e){return n["a"].post("/api/v1/web/staking/signClaim",e)},getAirdropTotal1:function(e){return n["a"].get("/api/v1/web/airdrop/airdropwithstake/getAirdropTotal",e)},getSignClaim1:function(e){return n["a"].post("/api/v1/web/airdrop/airdropwithstake/signClaim",e)},getAirdropTotalFast:function(e,t){return n["a"].get("onedao"==t?"onedaoApi/v1/web/airdrop/airdropfast/getAirdropFastTotal":"mtapi/v1/web/airdrop/airdropfast/getAirdropFastTotalInfo",e)},getMsg:function(e){return n["a"].get("/api/v1/web/getMsg",e)},getUpgradeMsg:function(e){return n["a"].get("/api/v1/web/getUpgradeMsg",e)},getStatistics:function(e){return n["a"].get("/api/v1/web/statistics/memberStatistics?addr="+e+"&contractAddr=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82")},getQuanticNextSymbolConfig:function(e,t){return n["a"].get("treasuryapi/v2/web/getQuanticTreasurySymbolConfig?chainId="+t+"&contractAddr="+e)},getUserInfo:function(e,t){return n["a"].get("/api/v1/web/pool/miningwithtoken/getUserInfo?contractAddr="+e+"&addr="+t)},getTokenInfo:function(e){return n["a"].get("https://api.bscscan.com/api?module=token&action=tokeninfo&apikey=AYHH23498FIKTXD9UMRBMPQIYCHU7DEXVF&contractaddress="+e)},getblocknobytime:function(e){return n["a"].get("https://api.bscscan.com/api?module=block&action=getblocknobytime&timestamp="+e+"&closest=before&apikey=39YHVTIDM4GIJYI65PR9K7M3KQN5BHG34G",null,!1)}}},"547a":function(e,t,a){"use strict";a("b082")},"841c":function(e,t,a){"use strict";var n=a("c65b"),r=a("d784"),s=a("825a"),i=a("1d80"),c=a("129f"),o=a("577e"),d=a("dc4a"),l=a("14c3");r("search",(function(e,t,a){return[function(t){var a=i(this),r=void 0==t?void 0:d(t,e);return r?n(r,t,a):new RegExp(t)[e](o(a))},function(e){var n=s(this),r=o(e),i=a(t,n,r);if(i.done)return i.value;var d=n.lastIndex;c(d,0)||(n.lastIndex=0);var u=l(n,r);return c(n.lastIndex,d)||(n.lastIndex=d),null===u?-1:u.index}]}))},b082:function(e,t,a){},d2c8:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home poolContent home70 bigcontent"},[a("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[e._v(" Mint:"+e._s(e.selectDetail.stake)+" ")]),a("div",{staticStyle:{background:"#1d1e23",padding:"15px","border-radius":"10px"}},[a("div",[e._v(" 合约地址："+e._s(e.selectDetail.contractAddress)+" ")]),a("div",[e._v(" 合约名称："+e._s(e.selectDetail.contractType)+" ")]),a("div",[e._v(" Global Rank："+e._s(e.selectDetail.globalRank)+" ")])]),a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.shows,expression:"shows === 1"}]},["NewXENClaimUtil"===this.selectDetail.contractType?a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[a("div",{staticClass:" title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("申领地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newAddress,expression:"newAddress"}],attrs:{type:"text"},domProps:{value:e.newAddress},on:{input:function(t){t.target.composing||(e.newAddress=t.target.value)}}})]):e._e(),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[a("div",{staticClass:" title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("周期(天)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newTerm,expression:"newTerm"}],attrs:{type:"text"},domProps:{value:e.newTerm},on:{input:function(t){t.target.composing||(e.newTerm=t.target.value)}}})]),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[a("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("申领个数")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newNumber,expression:"newNumber"}],attrs:{type:"text"},domProps:{value:e.newNumber},on:{input:function(t){t.target.composing||(e.newNumber=t.target.value)}}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.shows,expression:"shows === 2"}]},["NewXENClaimUtil"===this.selectDetail.contractType?a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[a("div",{staticClass:" title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("提取地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newAddress,expression:"newAddress"}],attrs:{type:"text"},domProps:{value:e.newAddress},on:{input:function(t){t.target.composing||(e.newAddress=t.target.value)}}})]):e._e(),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[a("div",{staticClass:" title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("起始位置")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newStart,expression:"newStart"}],attrs:{type:"text"},domProps:{value:e.newStart},on:{input:function(t){t.target.composing||(e.newStart=t.target.value)}}})]),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[a("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("结束位置")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newEnd,expression:"newEnd"}],attrs:{type:"text"},domProps:{value:e.newEnd},on:{input:function(t){t.target.composing||(e.newEnd=t.target.value)}}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:3===e.shows,expression:"shows === 3"}]},[a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[a("div",{staticClass:" title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("钱包地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newAddress,expression:"newAddress"}],attrs:{type:"text"},domProps:{value:e.newAddress},on:{input:function(t){t.target.composing||(e.newAddress=t.target.value)}}})]),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[a("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("位置")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newIndex,expression:"newIndex"}],attrs:{type:"text"},domProps:{value:e.newIndex},on:{input:function(t){t.target.composing||(e.newIndex=t.target.value)}}})]),e.reward?a("div",[e._v(" 钱包历史mint总数目："+e._s(e.reward.mintLength)+" ")]):e._e(),a("div",{staticStyle:{border:"white solid 1px",padding:"10px",margin:"10px"}},[e.reward&&e.reward.term>0?a("div",[e._v(" 当前位置信息("+e._s(e.reward.index)+") "),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[e._v(" 周期:"+e._s(e.reward.term)+"天 ")]),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[e._v(" rank:"+e._s(e.reward.rank)+" ")]),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[e._v(" amplifier:"+e._s(e.reward.amplifier)+" ")]),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[e._v(" eaaRate:"+e._s(e.reward.eaaRate)+" ")]),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[e._v(" penalty:"+e._s(e.reward.penalty)+" ")]),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[e._v(" 可提取时间:"+e._s(e._f("formatDate2")(1e3*e.reward.maturityTs))+" ")]),a("div",{staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[e._v(" 当前预计可获得:"+e._s(e.reward.reward)+" ")])]):a("div",[e._v(" 当前位置已提取或不存在,请重新点击查询")])])])]),a("div",{staticClass:"flex align-center justify-between my-1",staticStyle:{"flex-wrap":"wrap"}},[a("div",{staticClass:"tab",class:{active:1==e.shows},on:{click:function(t){return e.doneTab(1)}}},[e._v(" 申领 ")]),a("div",{staticClass:"tab",class:{active:2==e.shows},on:{click:function(t){return e.doneTab(2)}}},[e._v(" 提取 ")]),a("div",{staticClass:"tab",class:{active:3==e.shows},on:{click:function(t){return e.doneTab(3)}}},[e._v(" 查询 ")])]),a("div",{staticClass:"btn",on:{click:e.send}},[e._v("确认")])])},r=[],s=a("1da1"),i=(a("96cf"),a("ac1f"),a("841c"),a("2b0e")),c=a("d399"),o=(a("4128"),a("a232"),a("32a2"),a("d81c"),a("84d7"),a("b775"));a("365c");i["a"].use(c["a"]);var d={data:function(){return{shows:1,selectDetail:null,currentContract:null,newStart:0,newEnd:0,newTerm:1,newNumber:1,newAddress:this.$web3Obj.currentAddress,newIndex:0,reward:null}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.selectDetail=e.$config.project.mint[e.$route.query.network][e.$route.query.index],t.next=3,e.search();case 3:e.calculateMintReward();case 4:case"end":return t.stop()}}),t)})))()},methods:{doneTab:function(e){this.shows=e},search:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.currentContract=new e.$web3Obj.web3.eth.Contract(e.$config.abi[e.selectDetail.contractType],e.selectDetail.contractAddress),t.next=3,e.currentContract.methods.globalRank().call();case 3:a=t.sent,e.$set(e.selectDetail,"globalRank",a);case 5:case"end":return t.stop()}}),t)})))()},send:function(){switch(this.shows){case 1:this.claimRank();break;case 2:this.claimMintRewardAndShare();break;case 3:this.calculateMintReward();break}},claimRank:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,a=confirm("确认申领"+e.newNumber+"个"+e.newTerm+"天"),!a){t.next=12;break}if("NewXENClaimUtil"!==e.selectDetail.contractType){t.next=8;break}return t.next=6,o["a"].contractSend(e.currentContract.methods.claimRank(e.newTerm,e.newNumber,e.newAddress).send({from:e.$web3Obj.currentAddress}));case 6:t.next=10;break;case 8:return t.next=10,o["a"].contractSend(e.currentContract.methods.claimRank(e.newTerm,e.newNumber).send({from:e.$web3Obj.currentAddress}));case 10:return t.next=12,e.search();case 12:t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0),Object(c["a"])(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))()},claimMintRewardAndShare:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,a=confirm("确认提取? 请确认提取已到期,否则会浪费gas"),!a){t.next=12;break}if("NewXENClaimUtil"!==e.selectDetail.contractType){t.next=8;break}return t.next=6,o["a"].contractSend(e.currentContract.methods.claimMintRewardAndShareExact(e.newStart,e.newEnd,e.newAddress).send({from:e.$web3Obj.currentAddress}));case 6:t.next=10;break;case 8:return t.next=10,o["a"].contractSend(e.currentContract.methods.claimMintRewardAndShare(e.newStart,e.newEnd).send({from:e.$web3Obj.currentAddress}));case 10:return t.next=12,e.search();case 12:t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0),Object(c["a"])(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))()},calculateMintReward:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.reward=null,t.next=3,e.currentContract.methods.calculateMintReward(e.newAddress,e.newIndex).call();case 3:return e.reward=t.sent,t.next=6,e.currentContract.methods.getMintsLength(e.newAddress).call();case 6:a=t.sent,e.$set(e.reward,"mintLength",a),e.$set(e.reward,"index",e.newIndex);case 9:case"end":return t.stop()}}),t)})))()}}},l=d,u=(a("547a"),a("2877")),p=Object(u["a"])(l,n,r,!1,null,"30e210e4",null);t["default"]=p.exports},d81c:function(e,t,a){"use strict";t["a"]=[{stake:"CAKE",earn:"UNW",contractAddress:"0x929641DF8F11b6460efAdb09db357717C60003E1"},{stake:"CAKE",earn:"LVL",contractAddress:"0x1394a09F868bE27B1c8D39D79F0b0D6f112bddAf"},{stake:"CAKE",earn:"CAPS",contractAddress:"0xA31a351e3FBE3278949242Ff152317c12cd786e2"},{stake:"CAKE",earn:"SD",contractAddress:"0xaEC63F134a7853C6DaC9BA428d7962cD7C6c5e30"},{stake:"CAKE",earn:"PSTAKE",contractAddress:"0x98AC153577d65f2eEF2256f3AeF8ba9D7E4B756B"},{stake:"CAKE",earn:"CSIX",contractAddress:"0x8BD7b0d392D2dE8F682704A3186A48467FcDC7AC"},{stake:"CAKE",earn:"axlUSDC",contractAddress:"0x08287F4942A7B68DDb87D20Becd4fdadF4aE206e"},{stake:"CAKE",earn:"SQUAD",contractAddress:"0x08C9d626a2F0CC1ed9BD07eBEdeF8929F45B83d3"}]}}]);