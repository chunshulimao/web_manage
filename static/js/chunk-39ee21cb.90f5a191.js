(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39ee21cb"],{1322:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pool"},[n("div",{staticClass:"home"},[e._m(0),n("div",{staticClass:"pool"},[n("div",{staticClass:"margin-top-20"},[e._v("合约地址:"+e._s(e.currentOBJ.contractAddress))]),n("div",{staticClass:"margin-top-20"},[e._v("合约类型:"+e._s(e.currentOBJ.contractType))]),n("div",{staticClass:"margin-top-20"},[e._v("NFT合约地址:"+e._s(e.currentOBJ.nft))]),n("div",{staticClass:"margin-top-20"},[e._v("质押锁仓时间:"+e._s(e.currentOBJ.stakePeriod))]),n("div",{staticClass:"margin-top-20"},[e._v("NFT升级冷却时间:"+e._s(e.currentOBJ.levelUpPeriod))]),n("div",{staticClass:"margin-top-20"},[e._v("用户升级所需消耗代币地址:"+e._s(e.currentOBJ.consumeToken))]),n("div",{staticClass:"margin-top-20"},[e._v("消耗代币转入的地址:"+e._s(e.currentOBJ.consumeAddr))]),n("div",{staticClass:"margin-top-20"},[e._v(" 每个等级时升级NFT到下一级时所需消耗代币的数量:"+e._s(e._f("transformationNumber")(e.currentOBJ.consumeAmount))+" "),n("div",{staticClass:"flex justify-between align-center margin-top-20",staticStyle:{gap:"20px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentOBJ.consumeIndex,expression:"currentOBJ.consumeIndex"}],attrs:{type:"number"},domProps:{value:e.currentOBJ.consumeIndex},on:{input:function(t){t.target.composing||e.$set(e.currentOBJ,"consumeIndex",t.target.value)}}}),n("span",{staticClass:"tab flex1 active",on:{click:e.consumeAmounts}},[e._v("查询")])])]),n("div",{staticClass:"margin-top-20"},[e._v("owner:"+e._s(e.currentOBJ.owner))]),n("div",{staticClass:"margin-top-20"},[e._v("operators:"+e._s(e.currentOBJ.operators))])]),n("div",{staticClass:"margin-top-20"},[n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.shows,expression:"shows === 1"}],staticClass:"flex flex-column  justify-between"},[e._v(" NFT合约地址: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentOBJ.newNFT,expression:"currentOBJ.newNFT"}],attrs:{type:"text"},domProps:{value:e.currentOBJ.newNFT},on:{input:function(t){t.target.composing||e.$set(e.currentOBJ,"newNFT",t.target.value)}}}),e._v(" 质押锁仓时间:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentOBJ.newStakePeriod,expression:"currentOBJ.newStakePeriod"}],attrs:{type:"text"},domProps:{value:e.currentOBJ.newStakePeriod},on:{input:function(t){t.target.composing||e.$set(e.currentOBJ,"newStakePeriod",t.target.value)}}}),e._v(" NFT升级冷却时间: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentOBJ.newLevelUpPeriod,expression:"currentOBJ.newLevelUpPeriod"}],attrs:{type:"text"},domProps:{value:e.currentOBJ.newLevelUpPeriod},on:{input:function(t){t.target.composing||e.$set(e.currentOBJ,"newLevelUpPeriod",t.target.value)}}}),e._v(" 升级NFT时所需消耗代币的地址: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentOBJ.newConsumeToken,expression:"currentOBJ.newConsumeToken"}],attrs:{type:"text"},domProps:{value:e.currentOBJ.newConsumeToken},on:{input:function(t){t.target.composing||e.$set(e.currentOBJ,"newConsumeToken",t.target.value)}}}),e._v(" 消耗代币转入的地址: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentOBJ.newConsumeAddr,expression:"currentOBJ.newConsumeAddr"}],attrs:{type:"text"},domProps:{value:e.currentOBJ.newConsumeAddr},on:{input:function(t){t.target.composing||e.$set(e.currentOBJ,"newConsumeAddr",t.target.value)}}}),e._v(" 升级所需代币的数量数组:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentOBJ.newConsumeAmounts,expression:"currentOBJ.newConsumeAmounts"}],attrs:{type:"text",placeholder:'例如数组:["1000"]代币1000个代币'},domProps:{value:e.currentOBJ.newConsumeAmounts},on:{input:function(t){t.target.composing||e.$set(e.currentOBJ,"newConsumeAmounts",t.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:100===e.shows,expression:"shows === 100"}],staticClass:"flex flex-column  justify-between"},[e._v(" owner:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentOBJ.newOwner,expression:"currentOBJ.newOwner"}],attrs:{type:"text"},domProps:{value:e.currentOBJ.newOwner},on:{input:function(t){t.target.composing||e.$set(e.currentOBJ,"newOwner",t.target.value)}}})])]),n("div",{staticClass:"flex align-center justify-between margin-top-20",staticStyle:{"flex-wrap":"wrap"}},[n("div",{staticClass:"tab",class:{active:1==e.shows},on:{click:function(t){return e.doneTab(1)}}},[e._v("设置参数")]),n("div",{staticClass:"tab",class:{active:100==e.shows},on:{click:function(t){return e.doneTab(100)}}},[e._v("修改Owner")])]),n("div",{staticClass:"btn",on:{click:e.send}},[e._v("确认（onlyOwner）")])])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("img",{staticClass:"titleImg",attrs:{src:n("c58f"),alt:""}})])}],a=n("1da1"),c=(n("96cf"),n("b775")),o=n("d399"),u=n("a232"),i={data:function(){return{network:"bsc",showActive:!0,currentOBJ:{},shows:100}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$route.query.network&&(e.network=e.$route.query.network),e.currentOBJ=e.$config.project.NFTStaking[e.network][e.$route.query.index],e.currentOBJ.contract=new e.$web3Obj.web3.eth.Contract(e.$config.abi[e.currentOBJ.contractType],e.currentOBJ.contractAddress),e.getData();case 4:case"end":return t.stop()}}),t)})))()},methods:{getData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.currentOBJ.contract.methods.operators().call();case 3:return e.currentOBJ.operators=t.sent,t.next=6,e.currentOBJ.contract.methods.nft().call();case 6:return e.currentOBJ.nft=t.sent,t.next=9,e.currentOBJ.contract.methods.stakePeriod().call();case 9:return e.currentOBJ.stakePeriod=t.sent,t.next=12,e.currentOBJ.contract.methods.levelUpPeriod().call();case 12:return e.currentOBJ.levelUpPeriod=t.sent,t.next=15,e.currentOBJ.contract.methods.consumeToken().call();case 15:return e.currentOBJ.consumeToken=t.sent,t.next=18,e.currentOBJ.contract.methods.consumeAddr().call();case 18:return e.currentOBJ.consumeAddr=t.sent,t.next=21,e.currentOBJ.contract.methods.owner().call();case 21:n=t.sent,e.$set(e.currentOBJ,"owner",null),e.$set(e.currentOBJ,"owner",n),t.next=29;break;case 26:t.prev=26,t.t0=t["catch"](0),Object(o["a"])("获得数据失败,请手动刷新");case 29:case"end":return t.stop()}}),t,null,[[0,26]])})))()},consumeAmounts:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$set(e.currentOBJ,"consumeAmount",null),t.next=3,e.currentOBJ.contract.methods.consumeAmounts(e.currentOBJ.consumeIndex).call();case 3:n=t.sent,e.$set(e.currentOBJ,"consumeAmount",n);case 5:case"end":return t.stop()}}),t)})))()},doneTab:function(e){this.shows=e},send:function(){switch(this.shows){case 1:this.setParams();break;case 100:this.setOwner();break}},setParams:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=confirm("请核对参数"),!n){t.next=15;break}for(t.prev=2,r=JSON.parse(e.currentOBJ.newConsumeAmounts),s=0;s<r.length;s++)r[s]=Object(u["transformationNumber18"])(r[s]);return console.log(r),t.next=8,c["a"].contractSend(e.currentOBJ.contract.methods.setParams(e.currentOBJ.newNFT,e.currentOBJ.newStakePeriod,e.currentOBJ.newLevelUpPeriod,e.currentOBJ.newConsumeToken,e.currentOBJ.newConsumeAddr,r).send({from:e.$web3Obj.currentAddress}));case 8:e.getData(),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0),Object(o["a"])(t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))()},setBaseURI:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=confirm("请核对BaseURI:"+e.currentOBJ.newBaseURI),!n){t.next=12;break}return t.prev=2,t.next=5,c["a"].contractSend(e.currentOBJ.contract.methods.setBaseURI(e.currentOBJ.newBaseURI).send({from:e.$web3Obj.currentAddress}));case 5:e.getData(),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](2),console.log(t.t0),Object(o["a"])(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,8]])})))()},ownerMint:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=confirm("请核对铸币信息:铸币数量分别:"+e.currentOBJ.newQtys+"对应等级分别:"+e.currentOBJ.newLvls),!n){t.next=15;break}return r=JSON.parse(e.currentOBJ.newQtys),s=JSON.parse(e.currentOBJ.newLvls),console.log(r),t.prev=5,t.next=8,c["a"].contractSend(e.currentOBJ.contract.methods.ownerMint(r,s).send({from:e.$web3Obj.currentAddress}));case 8:e.getData(),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](5),console.log(t.t0),Object(o["a"])(t.t0);case 15:case"end":return t.stop()}}),t,null,[[5,11]])})))()},setOwner:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=confirm("请核对修改后的地址不是合约地址并再次确认修改owner到地址:"+e.currentOBJ.newOwner),!n){t.next=12;break}return t.prev=2,t.next=5,c["a"].contractSend(e.currentOBJ.contract.methods.transferOwnership(e.currentOBJ.newOwner).send({from:e.$web3Obj.currentAddress}));case 5:e.getData(),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](2),console.log(t.t0),Object(o["a"])(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,8]])})))()}}},m=i,l=(n("c72c"),n("2877")),d=Object(l["a"])(m,r,s,!1,null,"1eee332d",null);t["default"]=d.exports},c58f:function(e,t,n){e.exports=n.p+"static/img/nft.9e778fb0.png"},c72c:function(e,t,n){"use strict";n("e1d39")},e1d39:function(e,t,n){}}]);