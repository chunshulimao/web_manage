(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c4e0b05"],{"6c77":function(t,e,n){},"84ad":function(t,e,n){"use strict";n("6c77")},"8f1d":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home poolContent home70"},[n("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[t._v(" "+t._s(t.item.tokenName)+"代币管理 ")]),n("div",{staticStyle:{background:"#1d1e23",padding:"15px","border-radius":"10px"}},[n("div",[n("div",[t._v("当前代币地址: "+t._s(t.item.contractAddress))]),n("div",[t._v("总供给: "+t._s(t.totalSupply))]),n("div",[t._v("decimals: "+t._s(t.decimals))]),t.showItem.showQToken?n("div",[t._v("计价代币地址: "+t._s(t.qToken))]):t._e(),t.showItem.showOwner?n("div",[t._v("owner: "+t._s(t.owner)+t._s(t.owner&&t.currentAddress?t.currentAddress.toLowerCase()===t.owner.toLowerCase()?"(当前链接是owner)":"(当前链接非owner)":"")+" ")]):t._e(),n("div",[t._v("合约内当前代币余额: "+t._s(t._f("transformationNumber")(t.tokenBalance,4,t.decimals)))]),t.showItem.showQTokenBalance?n("div",[t._v("合约内计价代币余额: "+t._s(t._f("transformationNumber")(t.qTokenBalance,4,t.decimals))+" ")]):t._e(),t.showItem.showMintPerBlock?n("div",[t._v("出块铸币数量: "+t._s(t._f("transformationNumber")(t.mintPerBlock,4,t.decimals)))]):t._e(),t.showItem.showMinLpQAmount?n("div",[t._v("添加流动性最低计价代币金额: "+t._s(t._f("transformationNumber")(t.minLpQAmount,4,t.decimals))+" ")]):t._e(),t.showItem.showMinting?n("div",[t._v("当前启动状态: "+t._s(t.minting))]):t._e(),t.showItem.showVesting?n("div",[t._v("代币接收地址: "+t._s(t.vesting))]):t._e()]),n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:1===t.shows,expression:"shows === 1"}],staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[t._v("出块铸币数量")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newMintPerBlock,expression:"newMintPerBlock"}],staticStyle:{height:"28px","border-radius":"4px",border:"1px solid #909090",width:"100%"},attrs:{type:"text"},domProps:{value:t.newMintPerBlock},on:{input:function(e){e.target.composing||(t.newMintPerBlock=e.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:2===t.shows,expression:"shows === 2"}],staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[t._v("最低计价代币金额")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newMinLpQAmount,expression:"newMinLpQAmount"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.newMinLpQAmount},on:{input:function(e){e.target.composing||(t.newMinLpQAmount=e.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:3===t.shows,expression:"shows === 3"}],staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[t._v("代币地址")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newAddress,expression:"newAddress"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.newAddress},on:{input:function(e){e.target.composing||(t.newAddress=e.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:5===t.shows,expression:"shows === 5"}],staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[t._v("铸币数量")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newAmount,expression:"newAmount"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.newAmount},on:{input:function(e){e.target.composing||(t.newAmount=e.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:6===t.shows,expression:"shows === 6"}],staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[t._v("启动状态")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newMinting,expression:"newMinting"}],staticClass:"input",attrs:{placeholder:"true/false",type:"text"},domProps:{value:t.newMinting},on:{input:function(e){e.target.composing||(t.newMinting=e.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:100===t.shows,expression:"shows === 100"}],staticClass:"flex align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[t._v("新owner")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newOwner,expression:"newOwner"}],staticStyle:{height:"28px","border-radius":"4px",border:"1px solid #909090",width:"100%"},attrs:{type:"text"},domProps:{value:t.newOwner},on:{input:function(e){e.target.composing||(t.newOwner=e.target.value)}}})])]),n("div",{staticClass:"flex align-center justify-between my-1",staticStyle:{"flex-wrap":"wrap"}},[t.showItem.showButtonMintPerBlock?n("div",{staticClass:"tab",class:{active:1==t.shows},on:{click:function(e){return t.doneTab(1)}}},[t._v(" 出块铸币数量(owner) ")]):t._e(),t.showItem.showButtonMinLpQAmount?n("div",{staticClass:"tab",class:{active:2==t.shows},on:{click:function(e){return t.doneTab(2)}}},[t._v(" 最低计价代币金额(owner) ")]):t._e(),t.showItem.showButtonWithdrawToken?n("div",{staticClass:"tab",class:{active:3==t.shows},on:{click:function(e){return t.doneTab(3)}}},[t._v(" 提取代币(owner) ")]):t._e(),t.showItem.showButtonAddLP?n("div",{staticClass:"tab",class:{active:4==t.shows},on:{click:function(e){return t.doneTab(4)}}},[t._v(" 添加流动性(owner) ")]):t._e(),t.showItem.showButtonMint?n("div",{staticClass:"tab",class:{active:5==t.shows},on:{click:function(e){return t.doneTab(5)}}},[t._v(" 铸币(owner) ")]):t._e(),t.showItem.showButtonMinting?n("div",{staticClass:"tab",class:{active:6==t.shows},on:{click:function(e){return t.doneTab(6)}}},[t._v(" 设置代币启动状态(owner) ")]):t._e(),t.showItem.showButtonStartMinting?n("div",{staticClass:"tab",class:{active:7==t.shows},on:{click:function(e){return t.doneTab(7)}}},[t._v(" 启动铸币(owner) ")]):t._e(),t.showItem.showButtonUpdateMintPerBlock?n("div",{staticClass:"tab",class:{active:8==t.shows},on:{click:function(e){return t.doneTab(8)}}},[t._v(" 触发出块铸币数量通缩 ")]):t._e(),t.showItem.showButtonOwner?n("div",{staticClass:"tab",class:{active:100==t.shows},on:{click:function(e){return t.doneTab(100)}}},[t._v(" 设置owner(owner) ")]):t._e()]),n("div",{staticClass:"tab active",staticStyle:{width:"100%","margin-top":"50px"},on:{click:t.send}},[t._v("确认")])])])},r=[],i=n("1da1"),o=(n("159b"),n("a9e3"),n("96cf"),n("2b0e")),a=n("d399"),c=n("4128"),u=n.n(c),h=n("a232"),w=n("b775");o["a"].use(a["a"]),u.a.set({precision:100,toExpPos:60,toExpNeg:-20});var l={data:function(){return{currentAddress:this.$web3Obj.currentAddress,item:null,qToken:null,tokenBalance:null,qTokenBalance:null,shows:100,newAddress:null,mintPerBlock:null,newMintPerBlock:null,minLpQAmount:null,newMinLpQAmount:null,owner:null,newOwner:null,newAmount:null,totalSupply:null,decimals:null,vesting:null,showItem:{showOwner:!1,showQTokenBalance:!1,showMintPerBlock:!1,showMinLpQAmount:!1,showMinting:!1,showVesting:!1,showButtonMintPerBlock:!1,showButtonMinLpQAmount:!1,showButtonWithdrawToken:!1,showButtonAddLP:!1,showButtonMint:!1,showButtonOwner:!1,showButtonMinting:!1,showButtonStartMinting:!1,showButtonUpdateMintPerBlock:!1},minting:null,newMinting:null}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.$route.query.network,s=t.$route.query.index,r=t.$config.project.tokenManage[n]?t.$config.project.tokenManage[n]:[],t.item=r[s],t.tokenContract=new t.$web3Obj.web3.eth.Contract(t.$config.abi[t.item.contractType],t.item.contractAddress),t.getOverview();case 6:case"end":return e.stop()}}),e)})))()},methods:{setShow:function(t,e){var n=this;t.forEach((function(t){n.showItem[t]=!0})),this.shows=e},send:function(){switch(this.shows){case 1:this.setMintPerBlock();break;case 2:this.setMinLpQAmount();break;case 3:this.rescueWrongToken();break;case 4:this.manualLpAdd();break;case 5:this.mint();break;case 6:this.setMinting();break;case 7:this.startMint();break;case 8:this.updateMintPerBlock();break;case 100:this.transferOwnership();break}},doneTab:function(t){this.shows=t},getOverview:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.tokenContract.methods.balanceOf(this.item.contractAddress).call();case 2:return this.tokenBalance=t.sent,t.next=5,this.tokenContract.methods.decimals().call();case 5:return this.decimals=t.sent,t.next=8,this.tokenContract.methods.totalSupply().call();case 8:if(e=t.sent,this.totalSupply=Object(h["transformationNumber"])(e,0,this.decimals),"VAPK"!==this.item.contractType){t.next=27;break}return this.setShow(["showOwner","showQTokenBalance","showMintPerBlock","showMinLpQAmount","showButtonMintPerBlock","showButtonMinLpQAmount","showButtonWithdrawToken","showButtonAddLP","showButtonOwner"],1),t.next=14,this.tokenContract.methods.qToken().call();case 14:return this.qToken=t.sent,this.qTokenContract=new this.$web3Obj.web3.eth.Contract(this.$config.abi.token,this.qToken),t.next=18,this.tokenContract.methods.owner().call();case 18:return this.owner=t.sent,t.next=21,this.qTokenContract.methods.balanceOf(this.item.contractAddress).call();case 21:return this.qTokenBalance=t.sent,t.next=24,this.tokenContract.methods.mintPerBlock().call();case 24:this.mintPerBlock=t.sent,t.next=81;break;case 27:if("MT"!==this.item.contractType){t.next=34;break}return this.setShow(["showOwner","showButtonOwner"],100),t.next=31,this.tokenContract.methods.owner().call();case 31:this.owner=t.sent,t.next=81;break;case 34:if("OHM"!==this.item.contractType){t.next=41;break}return this.setShow(["showOwner","showButtonOwner","showButtonMint"],5),t.next=38,this.tokenContract.methods.owner().call();case 38:this.owner=t.sent,t.next=81;break;case 41:if("LDOS"!==this.item.contractType){t.next=51;break}return this.setShow(["showOwner","showMintPerBlock","showButtonOwner","showButtonMintPerBlock"],1),t.next=45,this.tokenContract.methods.owner().call();case 45:return this.owner=t.sent,t.next=48,this.tokenContract.methods.mintPerBlock().call();case 48:this.mintPerBlock=t.sent,t.next=81;break;case 51:if("OPO"!==this.item.contractType){t.next=67;break}return this.setShow(["showVesting","showMinting","showOwner","showMintPerBlock","showButtonOwner","showButtonMintPerBlock","showButtonMinting"],1),t.next=55,this.tokenContract.methods.owner().call();case 55:return this.owner=t.sent,t.next=58,this.tokenContract.methods.vesting().call();case 58:return this.vesting=t.sent,t.next=61,this.tokenContract.methods.mintPerBlock().call();case 61:return this.mintPerBlock=t.sent,t.next=64,this.tokenContract.methods.minting().call();case 64:this.minting=t.sent,t.next=81;break;case 67:if("ODO"!==this.item.contractType){t.next=81;break}return this.setShow(["showVesting","showMinting","showOwner","showButtonOwner","showButtonMintPerBlock","showButtonStartMinting","showButtonUpdateMintPerBlock"],1),t.next=71,this.tokenContract.methods.owner().call();case 71:return this.owner=t.sent,t.next=74,this.tokenContract.methods.vesting().call();case 74:return this.vesting=t.sent,t.next=77,this.tokenContract.methods.mintPerBlock().call();case 77:return this.mintPerBlock=t.sent,t.next=80,this.tokenContract.methods.minting().call();case 80:this.minting=t.sent;case 81:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setMintPerBlock:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!Object(h["invalidNumber"])(this.newMintPerBlock)){t.next=3;break}return Object(a["a"])("无效的参数"),t.abrupt("return");case 3:if(e=confirm("确认设置出块铸币数量为"+this.newMintPerBlock),!e){t.next=8;break}return t.next=7,w["a"].contractSend(this.tokenContract.methods.setMintPerBlock(Object(h["transformationNumber18"])(this.newMintPerBlock,this.decimals)).send({from:this.currentAddress}));case 7:this.getOverview();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),transferOwnership:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.newOwner&&!(this.newOwner.length<40)){t.next=3;break}return Object(a["a"])("无效的地址"),t.abrupt("return");case 3:if(e=confirm("确认设置新的owner为"+this.newOwner),!e){t.next=8;break}return t.next=7,w["a"].contractSend(this.tokenContract.methods.transferOwnership(this.newOwner).send({from:this.currentAddress}));case 7:this.getOverview();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),rescueWrongToken:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.newAddress&&!(this.newAddress.length<40)){t.next=3;break}return Object(a["a"])("无效的地址"),t.abrupt("return");case 3:if(e=confirm("确认提取代币到"+this.newAddress),!e){t.next=8;break}return t.next=7,w["a"].contractSend(this.tokenContract.methods.rescueWrongToken(this.newAddress).send({from:this.currentAddress}));case 7:this.getOverview();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setMinLpQAmount:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!Object(h["invalidNumber"])(this.newMinLpQAmount)){t.next=3;break}return Object(a["a"])("无效的参数"),t.abrupt("return");case 3:if(e=confirm("确认设置触发流动性添加操作的最低计价代币金额为"+this.newMinLpQAmount),!e){t.next=8;break}return t.next=7,w["a"].contractSend(this.tokenContract.methods.setMinLpQAmount(Object(h["transformationNumber18"])(this.newMinLpQAmount,this.decimals)).send({from:this.currentAddress}));case 7:this.getOverview();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),manualLpAdd:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=confirm("确认清添加流动性?"),!e){t.next=5;break}return t.next=4,w["a"].contractSend(this.tokenContract.methods.manualLpAdd().send({from:this.currentAddress}));case 4:this.getOverview();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mint:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(Number(this.newAmount)<=0)){t.next=3;break}return Object(a["a"])("铸币数量必须大于0"),t.abrupt("return");case 3:if(e=confirm("确认铸币?"+this.newAmount),!e){t.next=8;break}return t.next=7,w["a"].contractSend(this.tokenContract.methods.mint(Object(h["transformationNumber18"])(this.newAmount,this.decimals)).send({from:this.currentAddress}));case 7:this.getOverview();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setMinting:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=confirm("确认启动状态为:?"+this.newMinting),!e){t.next=5;break}return t.next=4,w["a"].contractSend(this.tokenContract.methods.setMinting(this.newMinting).send({from:this.currentAddress}));case 4:this.getOverview();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),startMint:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=confirm("确认启动铸币?"),!e){t.next=5;break}return t.next=4,w["a"].contractSend(this.tokenContract.methods.startMint().send({from:this.currentAddress}));case 4:this.getOverview();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateMintPerBlock:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=confirm("确认触发出块铸币数量通缩?"),!e){t.next=5;break}return t.next=4,w["a"].contractSend(this.tokenContract.methods.updateMintPerBlock().send({from:this.currentAddress}));case 4:this.getOverview();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},m=l,d=(n("84ad"),n("2877")),p=Object(d["a"])(m,s,r,!1,null,"93045220",null);e["default"]=p.exports}}]);