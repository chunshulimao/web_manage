(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5957da78"],{"7bf9":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home poolContent home70"},[n("div",{staticStyle:{"text-align":"center",padding:"20px"}},[e._v(" "+e._s(e.token.tokenName)+"代币管理 ")]),n("div",{staticStyle:{background:"rgb(29, 30, 35)",padding:"15px","border-radius":"10px"}},[n("div",[n("div",[e._v("当前代币地址: "+e._s(e.token.contractAddress))]),n("div",[e._v("总供给: "+e._s(e._f("transformationNumber")(e.token.totalSupply,0,e.token.decimals)))]),n("div",[e._v("decimals: "+e._s(e.token.decimals))]),e.token.owner?n("div",[e._v("owner: "+e._s(e.token.owner)+e._s(e.token.owner&&e.currentAddress?e.currentAddress.toLowerCase()===e.token.owner.toLowerCase()?"(当前链接是owner)":"(当前链接非owner)":"")+" ")]):e._e(),n("div",[e._v("合约内当前代币余额: "+e._s(e._f("transformationNumber")(e.token.tokenBalance,4,e.token.decimals)))]),e.token.mintPerBlock?n("div",[e._v(" 出块铸币数量: "+e._s(e._f("transformationNumber")(e.token.mintPerBlock,4,e.token.decimals))+" ")]):e._e(),e.token.rootMember?n("div",[e._v(" 根会员地址: "+e._s(e.token.rootMember)+" ")]):e._e(),e.token.startTime?n("div",[e._v(" 奖励起始时间:"+e._s(e.token.startTime)+": "+e._s(e._f("formatDate")(1e3*e.token.startTime))+" ")]):e._e(),"DIDNET"===e.token.contractType?n("div",{staticClass:"margin-top-32"},[e._v(" 推荐奖励: "),n("div",{staticClass:"flex align-center"},[e._v(" 下标:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.refIndex,expression:"refIndex"}],staticClass:"input  flex1",staticStyle:{"margin-top":"0"},domProps:{value:e.refIndex},on:{input:function(t){t.target.composing||(e.refIndex=t.target.value)}}}),n("div",{staticClass:"btn",staticStyle:{width:"30%","margin-top":"0",padding:"5px",height:"auto","font-size":"100%"},on:{click:function(t){return e.getRef()}}},[e._v("查询 ")])]),n("div",[e._v(" 有锁仓推荐奖励系数:"+e._s(e.token.refRate))]),n("div",[e._v("无锁仓推荐奖励数值:"+e._s(e.token.refAmount))])]):e._e(),e.token.zMin?n("div",{staticClass:"margin-top-32"},[e._v(" Z最小锁仓天数zMin: "+e._s(e.token.zMin)+" ")]):e._e(),e.token.zMax?n("div",[e._v(" Z最大锁仓天数zMax: "+e._s(e.token.zMax)+" ")]):e._e(),e.token.zDiv?n("div",[e._v(" Z的除数zDiv: "+e._s(e.token.zDiv)+" ")]):e._e(),e.token.xBase?n("div",[e._v(" x基数xBase: "+e._s(e.token.xBase)+" ")]):e._e(),e.token.xDiv?n("div",[e._v(" x除数xDiv: "+e._s(e.token.xDiv)+" ")]):e._e(),e.token.xMul?n("div",[e._v(" x乘数xMul: "+e._s(e.token.xMul)+" ")]):e._e(),e.token.xBase?n("div",[e._v(" y基数yBase: "+e._s(e.token.yBase)+" ")]):e._e(),e.token.yDiv?n("div",[e._v(" y除数yDiv: "+e._s(e.token.yDiv)+" ")]):e._e(),e.token.yMul?n("div",[e._v(" y乘数yMul: "+e._s(e.token.yMul)+" ")]):e._e(),e.token.penaltyTimeUnit?n("div",[e._v(" 惩罚时间: "+e._s(e._f("formatDate")(1e3*e.token.penaltyTimeUnit))+" ")]):e._e(),e.token.penaltyFactor?n("div",[e._v(" 惩罚计算除数因子: "+e._s(e.token.penaltyFactor)+" ")]):e._e(),e.token.rewardTotal?n("div",[e._v(" 当前未提取的奖励总量: "+e._s(e._f("transformationNumber")(e.token.rewardTotal,4,e.token.decimals))+" ")]):e._e(),e.token.memberCount?n("div",[e._v(" 会员总数: "+e._s(e.token.memberCount)+" ")]):e._e(),e.token.rewardEndsAt?n("div",[e._v(" 奖励终止会员数: "+e._s(e.token.rewardEndsAt)+" ")]):e._e()])]),n("div",{staticClass:"margin-top-32"},[n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.shows,expression:"shows === 1"}],staticClass:"flex align-center justify-between"},[n("div",{staticClass:"flex1 title font-bold"},[e._v("出块铸币数量")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_mintPerBlock,expression:"token.new_mintPerBlock"}],staticClass:"flex2 input ",attrs:{type:"text"},domProps:{value:e.token.new_mintPerBlock},on:{input:function(t){t.target.composing||e.$set(e.token,"new_mintPerBlock",t.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.shows,expression:"shows === 2"}]},[n("div",{staticClass:"flex align-center justify-between margin-top-32"},[n("div",{staticClass:"flex1 title font-bold"},[e._v("代币地址")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTokenAddr,expression:"newTokenAddr"}],staticClass:"flex2 input ",attrs:{type:"text"},domProps:{value:e.newTokenAddr},on:{input:function(t){t.target.composing||(e.newTokenAddr=t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-between margin-top-32"},[n("div",{staticClass:"flex1 title font-bold"},[e._v("接收人地址")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newReciverAddr,expression:"newReciverAddr"}],staticClass:"flex2 input ",attrs:{type:"text"},domProps:{value:e.newReciverAddr},on:{input:function(t){t.target.composing||(e.newReciverAddr=t.target.value)}}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:3===e.shows,expression:"shows === 3"}],staticClass:"flex align-center justify-between"},[n("div",{staticClass:"flex1 title font-bold"},[e._v("起始时间戳")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.newStartTime,expression:"token.newStartTime"}],staticClass:"flex2 input ",attrs:{type:"text"},domProps:{value:e.token.newStartTime},on:{input:function(t){t.target.composing||e.$set(e.token,"newStartTime",t.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:4===e.shows,expression:"shows === 4"}],staticClass:"flex ",staticStyle:{"flex-wrap":"wrap"}},[n("div",{staticClass:"flex align-center justify-center margin-top-32 with30"},[n("div",{staticClass:"flex2 title font-bold"},[e._v("zMin")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_zMin,expression:"token.new_zMin"}],staticClass:"flex3 input ",attrs:{type:"text"},domProps:{value:e.token.new_zMin},on:{input:function(t){t.target.composing||e.$set(e.token,"new_zMin",t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-center margin-top-32 with30"},[n("div",{staticClass:"flex2 title font-bold"},[e._v("zMax")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_zMax,expression:"token.new_zMax"}],staticClass:"flex3 input ",attrs:{type:"text"},domProps:{value:e.token.new_zMax},on:{input:function(t){t.target.composing||e.$set(e.token,"new_zMax",t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-center margin-top-32 with30"},[n("div",{staticClass:"flex2 title font-bold"},[e._v("zDiv")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_zDiv,expression:"token.new_zDiv"}],staticClass:"flex3 input ",attrs:{type:"text"},domProps:{value:e.token.new_zDiv},on:{input:function(t){t.target.composing||e.$set(e.token,"new_zDiv",t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-center margin-top-32 with30"},[n("div",{staticClass:"flex2 title font-bold"},[e._v("xBase")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_xBase,expression:"token.new_xBase"}],staticClass:"flex3 input ",attrs:{type:"text"},domProps:{value:e.token.new_xBase},on:{input:function(t){t.target.composing||e.$set(e.token,"new_xBase",t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-center margin-top-32 with30"},[n("div",{staticClass:"flex2 title font-bold"},[e._v("xDiv")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_xDiv,expression:"token.new_xDiv"}],staticClass:"flex3 input ",attrs:{type:"text"},domProps:{value:e.token.new_xDiv},on:{input:function(t){t.target.composing||e.$set(e.token,"new_xDiv",t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-center margin-top-32 with30"},[n("div",{staticClass:"flex2 title font-bold"},[e._v("xMul")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_xMul,expression:"token.new_xMul"}],staticClass:"flex3 input ",attrs:{type:"text"},domProps:{value:e.token.new_xMul},on:{input:function(t){t.target.composing||e.$set(e.token,"new_xMul",t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-center margin-top-32 with30"},[n("div",{staticClass:"flex2 title font-bold"},[e._v("yBase")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_yBase,expression:"token.new_yBase"}],staticClass:"flex3 input ",attrs:{type:"text"},domProps:{value:e.token.new_yBase},on:{input:function(t){t.target.composing||e.$set(e.token,"new_yBase",t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-center margin-top-32 with30"},[n("div",{staticClass:"flex2 title font-bold"},[e._v("yDiv")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_yDiv,expression:"token.new_yDiv"}],staticClass:"flex3 input ",attrs:{type:"text"},domProps:{value:e.token.new_yDiv},on:{input:function(t){t.target.composing||e.$set(e.token,"new_yDiv",t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-center margin-top-32 with30"},[n("div",{staticClass:"flex2 title font-bold"},[e._v("yMul")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_yMul,expression:"token.new_yMul"}],staticClass:"flex3 input ",attrs:{type:"text"},domProps:{value:e.token.new_yMul},on:{input:function(t){t.target.composing||e.$set(e.token,"new_yMul",t.target.value)}}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:5===e.shows,expression:"shows === 5"}]},[n("div",{staticClass:"flex align-center justify-between margin-top-32"},[n("div",{staticClass:"flex1 title font-bold"},[e._v(" 有锁仓时推荐奖励系数数组，数组长度为推荐奖励层级，单位为百万分之一(英文逗号分隔) ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_refRates,expression:"token.new_refRates"}],staticClass:"flex2 input ",attrs:{type:"text",placeholder:"1,2,3"},domProps:{value:e.token.new_refRates},on:{input:function(t){t.target.composing||e.$set(e.token,"new_refRates",t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-between margin-top-32"},[n("div",{staticClass:"flex1 title font-bold"},[e._v("无锁仓时推荐奖励数量数组，数组长度为推荐奖励层级，以 10^-18 为单位(英文逗号分隔) ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_refAmounts,expression:"token.new_refAmounts"}],staticClass:"flex2 input ",attrs:{type:"text",placeholder:"1,2,3"},domProps:{value:e.token.new_refAmounts},on:{input:function(t){t.target.composing||e.$set(e.token,"new_refAmounts",t.target.value)}}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:6===e.shows,expression:"shows === 6"}]},[n("div",{staticClass:"flex align-center justify-between margin-top-32"},[n("div",{staticClass:"flex1 title font-bold"},[e._v(" 惩罚计算时间单位，以秒为单位 ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_penaltyTimeUnit,expression:"token.new_penaltyTimeUnit"}],staticClass:"flex2 input ",attrs:{type:"text"},domProps:{value:e.token.new_penaltyTimeUnit},on:{input:function(t){t.target.composing||e.$set(e.token,"new_penaltyTimeUnit",t.target.value)}}})]),n("div",{staticClass:"flex align-center justify-between margin-top-32"},[n("div",{staticClass:"flex1 title font-bold"},[e._v("乘法计算除数因子")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.new_penaltyFactor,expression:"token.new_penaltyFactor"}],staticClass:"flex2 input ",attrs:{type:"text"},domProps:{value:e.token.new_penaltyFactor},on:{input:function(t){t.target.composing||e.$set(e.token,"new_penaltyFactor",t.target.value)}}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:100===e.shows,expression:"shows === 100"}],staticClass:"flex align-center justify-between"},[n("div",{staticClass:"title font-bold flex1"},[e._v("新owner")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token.newOwner,expression:"token.newOwner"}],staticClass:"flex2 input",attrs:{type:"text"},domProps:{value:e.token.newOwner},on:{input:function(t){t.target.composing||e.$set(e.token,"newOwner",t.target.value)}}})])]),n("div",{staticClass:"flex align-center justify-between my-1",staticStyle:{"flex-wrap":"wrap"}},[e.token.mintPerBlock?n("div",{staticClass:"tab",class:{active:1==e.shows},on:{click:function(t){return e.doneTab(1)}}},[e._v(" 出块铸币数量 ")]):e._e(),e.token.canRescueToken?n("div",{staticClass:"tab",class:{active:2==e.shows},on:{click:function(t){return e.doneTab(2)}}},[e._v(" 提取代币 ")]):e._e(),e.token.startTime?n("div",{staticClass:"tab",class:{active:3==e.shows},on:{click:function(t){return e.doneTab(3)}}},[e._v(" 设置起始时间 ")]):e._e(),e.token.yMul?n("div",{staticClass:"tab",class:{active:4==e.shows},on:{click:function(t){return e.doneTab(4)}}},[e._v(" 激活奖励参数 ")]):e._e(),"DIDNET"===e.token.contractType?n("div",{staticClass:"tab",class:{active:5==e.shows},on:{click:function(t){return e.doneTab(5)}}},[e._v(" 推荐奖励参数 ")]):e._e(),e.token.penaltyTimeUnit?n("div",{staticClass:"tab",class:{active:6==e.shows},on:{click:function(t){return e.doneTab(6)}}},[e._v(" 惩罚参数 ")]):e._e(),e.token.owner?n("div",{staticClass:"tab",class:{active:100==e.shows},on:{click:function(t){return e.doneTab(100)}}},[e._v(" owner(owner) ")]):e._e()]),n("div",{staticClass:"btn",on:{click:e.send}},[e._v("确认")])])},a=[],o=n("1da1"),r=(n("ac1f"),n("1276"),n("96cf"),n("d399")),i=n("a232"),c=n("b775"),l={data:function(){return{currentAddress:this.$web3Obj.currentAddress,token:null,shows:100,newTokenAddr:null,newReciverAddr:null,refIndex:0}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.$route.query.network?e.$route.query.network:"bsc",s=e.$route.query.index,a=e.$config.project.tokenManage[n]?e.$config.project.tokenManage[n]:[],e.token=a[s],e.token.tokenContract=new e.$web3Obj.web3.eth.Contract(e.$config.abi[e.token.contractType],e.token.contractAddress),e.getOverview();case 6:case"end":return t.stop()}}),t)})))()},methods:{getRef:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$set(e.token,"refRate","--"),e.$set(e.token,"refAmount","--"),t.next=4,e.token.tokenContract.methods.refRates(e.refIndex).call();case 4:return e.token.refRate=t.sent,t.next=7,e.token.tokenContract.methods.refAmounts(e.refIndex).call();case 7:n=t.sent,e.$set(e.token,"refAmount",n);case 9:case"end":return t.stop()}}),t)})))()},send:function(){switch(this.shows){case 1:this.setMintPerBlock();break;case 2:this.rescueToken();break;case 3:this.setStartTime();break;case 4:this.setRewardParam();break;case 5:this.setRefParam();break;case 6:this.setPenaltyParam();break;case 100:this.transferOwnership();break}},doneTab:function(e){this.shows=e},getOverview:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.token.tokenContract.methods.balanceOf(this.token.contractAddress).call();case 2:return this.token.tokenBalance=e.sent,e.next=5,this.token.tokenContract.methods.decimals().call();case 5:return this.token.decimals=e.sent,e.next=8,this.token.tokenContract.methods.totalSupply().call();case 8:if(this.token.totalSupply=e.sent,"DXP"!==this.token.contractType){e.next=20;break}return e.next=12,this.token.tokenContract.methods.owner().call();case 12:return this.token.owner=e.sent,e.next=15,this.token.tokenContract.methods.mintPerBlock().call();case 15:t=e.sent,this.token.canRescueToken=!0,this.$set(this.token,"mintPerBlock",t),e.next=74;break;case 20:if("DIDNET"!==this.token.contractType){e.next=74;break}return e.next=23,this.token.tokenContract.methods.owner().call();case 23:return this.token.owner=e.sent,e.next=26,this.token.tokenContract.methods.rootMember().call();case 26:return this.token.rootMember=e.sent,e.next=29,this.token.tokenContract.methods.zMin().call();case 29:return this.token.zMin=e.sent,e.next=32,this.token.tokenContract.methods.zMax().call();case 32:return this.token.zMax=e.sent,e.next=35,this.token.tokenContract.methods.zDiv().call();case 35:return this.token.zDiv=e.sent,e.next=38,this.token.tokenContract.methods.xBase().call();case 38:return this.token.xBase=e.sent,e.next=41,this.token.tokenContract.methods.xDiv().call();case 41:return this.token.xDiv=e.sent,e.next=44,this.token.tokenContract.methods.xMul().call();case 44:return this.token.xMul=e.sent,e.next=47,this.token.tokenContract.methods.yBase().call();case 47:return this.token.yBase=e.sent,e.next=50,this.token.tokenContract.methods.yDiv().call();case 50:return this.token.yDiv=e.sent,e.next=53,this.token.tokenContract.methods.yMul().call();case 53:return this.token.yMul=e.sent,e.next=56,this.token.tokenContract.methods.penaltyTimeUnit().call();case 56:return this.token.penaltyTimeUnit=e.sent,e.next=59,this.token.tokenContract.methods.penaltyFactor().call();case 59:return this.token.penaltyFactor=e.sent,e.next=62,this.token.tokenContract.methods.rewardTotal().call();case 62:return this.token.rewardTotal=e.sent,e.next=65,this.token.tokenContract.methods.memberCount().call();case 65:return this.token.memberCount=e.sent,e.next=68,this.token.tokenContract.methods.rewardEndsAt().call();case 68:return this.token.rewardEndsAt=e.sent,e.next=71,this.token.tokenContract.methods.startTime().call();case 71:n=e.sent,this.$set(this.token,"startTime",n),this.token.canRescueToken=!0;case 74:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setMintPerBlock:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!Object(i["invalidNumber"])(this.token.new_mintPerBlock)){e.next=3;break}return Object(r["a"])("无效的参数"),e.abrupt("return");case 3:if(t=confirm("确认设置出块铸币数量为"+this.token.new_mintPerBlock),!t){e.next=8;break}return e.next=7,c["a"].contractSend(this.token.tokenContract.methods.setMintPerBlock(Object(i["transformationNumber18"])(this.token.new_mintPerBlock,this.token.decimals)).send({from:this.currentAddress}));case 7:this.getOverview();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),transferOwnership:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.token.newOwner&&!(this.token.newOwner.length<40)){e.next=3;break}return Object(r["a"])("无效的地址"),e.abrupt("return");case 3:if(t=confirm("确认设置新的owner为"+this.token.newOwner),!t){e.next=8;break}return e.next=7,c["a"].contractSend(this.token.tokenContract.methods.transferOwnership(this.token.newOwner).send({from:this.currentAddress}));case 7:this.getOverview();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),rescueToken:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.newTokenAddr&&!(this.newTokenAddr.length<40)){e.next=3;break}return Object(r["a"])("无效的地址"),e.abrupt("return");case 3:if(t=confirm("确认提取"+this.newTokenAddr+"代币到"+this.newReciverAddr),!t){e.next=8;break}return e.next=7,c["a"].contractSend(this.token.tokenContract.methods.rescueToken(this.newTokenAddr,this.newReciverAddr).send({from:this.currentAddress}));case 7:this.getOverview();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setStartTime:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(i["formatDate2"])(1e3*this.token.newStartTime),n=confirm("确认设置时间为"+t),!n){e.next=6;break}return e.next=5,c["a"].contractSend(this.token.tokenContract.methods.setStartTime(this.token.newStartTime).send({from:this.currentAddress}));case 5:this.getOverview();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setRewardParam:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=confirm("确认设置激活参数?"),!t){e.next=5;break}return e.next=4,c["a"].contractSend(this.token.tokenContract.methods.setRewardParam(this.token.new_zMin,this.token.new_zMax,this.token.new_zDiv,this.token.new_xBase,this.token.new_xDiv,this.token.new_xMul,this.token.new_yBase,this.token.new_yDiv,this.token.new_yMul).send({from:this.currentAddress}));case 4:this.getOverview();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setRefParam:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=confirm("确认推荐奖励参数?"),n=this.token.new_refRates.split(","),s=this.token.new_refAmounts.split(","),n.length===s.length){e.next=6;break}return Object(r["a"])("非法参数,两个参数数组长度必须相同"),e.abrupt("return");case 6:if(!t){e.next=10;break}return e.next=9,c["a"].contractSend(this.token.tokenContract.methods.setRefParam(n,s).send({from:this.currentAddress}));case 9:this.getOverview();case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setPenaltyParam:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(i["formatDate2"])(1e3*this.token.new_penaltyTimeUnit),n=confirm("设置奖励惩罚参数时间:"+t),!n){e.next=6;break}return e.next=5,c["a"].contractSend(this.token.tokenContract.methods.setPenaltyParam(this.token.new_penaltyTimeUnit,this.token.new_penaltyFactor).send({from:this.currentAddress}));case 5:this.getOverview();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},u=l,d=(n("8ce4"),n("2877")),v=Object(d["a"])(u,s,a,!1,null,"65675fb8",null);t["default"]=v.exports},"8b55":function(e,t,n){},"8ce4":function(e,t,n){"use strict";n("8b55")}}]);