(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64da54e6"],{"0574":function(t,e,n){"use strict";n("0e3b")},"0e3b":function(t,e,n){},9053:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"tzhy-box content"},[n("div",{staticClass:"rate"},[n("div",{staticClass:"flex align-center justify-center"},[n("div",[t._v(t._s(t.$t("conversion")))])]),n("div",{staticClass:"flex align-center justify-center "},[n("div",[t._v("1 "+t._s(t.tokenName1)+" : "+t._s(t.lockDetail.investData.investRate)+" "+t._s(t.tokenName))])])]),n("div",{staticClass:"flex justify-between pt-2"},[n("div",{staticClass:"dec"},[t._v(t._s(t.$t("startMoney")))]),n("div",[t._v("1 （"+t._s(t.tokenName1)+"）")])]),n("div",{staticClass:"flex justify-between pt-2"},[n("div",{staticClass:"dec"},[t._v(t._s(t.$t("investmentCount")))]),n("div",[t._v(t._s(t.lockDetail.investData.investTotalEths)+"（"+t._s(t.tokenName1)+"）")])]),n("div",{staticClass:"flex justify-between pt-2"},[n("div",{staticClass:"dec"},[t._v(t._s(t.$t("curentrestinvest")))]),n("div",[t._v(t._s(t.lockDetail.investData.quotaAvail)+"（"+t._s(t.tokenName1)+"）")])]),n("div",{staticClass:"flex justify-between pt-2"},[n("div",{staticClass:"dec"},[t._v(t._s(t.$t("investablequota")))]),n("div",[t._v(t._s(0===t.lockDetail.investData.personalAvailable?"--":t.lockDetail.investData.personalAvailable)+"（"+t._s(t.tokenName1)+"） ")])]),n("div",{staticClass:"flex align-center justify-between mt-3"},[n("div",{staticClass:"font-bold",staticStyle:{"margin-right":"8px"}},[t._v(t._s(t.$t("buyNumBer")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.investValue,expression:"investValue"}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.investValue},on:{input:function(e){e.target.composing||(t.investValue=e.target.value)}}}),n("div",{staticClass:"font-weight-5",staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.tokenName1))])]),n("div",{staticClass:"flex align-center justify-between my-1"},[n("div",{staticClass:"tab",on:{click:function(e){return t.addAmount(1)}}},[t._v("+1")]),n("div",{staticClass:"tab",on:{click:function(e){return t.addAmount(5)}}},[t._v("+5")]),n("div",{staticClass:"tab",on:{click:function(e){return t.addAmount(10)}}},[t._v("+10")]),n("div",{staticClass:"tab",on:{click:function(e){return t.addAmount(100)}}},[t._v("+100")])])]),n("div",{staticClass:"btn",on:{click:function(e){t.approved?t.sendInvest():t.approveToken()}}},[t._v(" "+t._s(t.approved?t.$t("promptlYinvest"):"Approve")+" ")])])},s=[],r=n("1da1"),i=(n("96cf"),n("a9e3"),n("d3b7"),n("25f0"),n("2b0e")),c=n("d399"),o=n("a232"),u=n("b775");i["a"].use(c["a"]);var l={data:function(){return{lockDetail:{},investValue:"",tokenName:this.$config.project.dao.bsc[0].symbol,tokenName1:this.$config.project.dao.bsc[0].symbol1,contract:null,tokenContract:null,approved:!1}},methods:{toInvestDest:function(){this.$router.push("/investmentDesc")},toStatic:function(){this.$router.push("/investmentStatistics")},sendInvest:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.investValue){t.next=3;break}return Object(c["a"])("invalid number"),t.abrupt("return");case 3:if(!(this.investValue<1)){t.next=6;break}return Object(c["a"])("must>1"),t.abrupt("return");case 6:return t.prev=6,t.next=9,this.tokenContract.methods.balanceOf(this.$web3Obj.currentAddress).call();case 9:if(e=t.sent,!(new Number(this.investValue)*Math.pow(10,18)>e)){t.next=13;break}return Object(c["a"])("no enough balance"),t.abrupt("return");case 13:return n=(new Number(this.investValue)*Math.pow(10,18)).toString(),t.next=16,this.contract.methods.getAddrAllowed(this.$web3Obj.currentAddress).call();case 16:if(a=t.sent,a._allowed&&!(0!==a._amount&&Number(this.investValue)*Math.pow(10,18)<a._amount)){t.next=20;break}return Object(c["a"])("无效的购买数量"),t.abrupt("return");case 20:u["a"].contractSend(this.contract.methods.doInvest("0x0000000000000000000000000000000000000000",n).send({from:this.$web3Obj.currentAddress,value:0})),t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](6),console.log(t.t0);case 26:case"end":return t.stop()}}),t,this,[[6,23]])})));function e(){return t.apply(this,arguments)}return e}(),addAmount:function(t){var e=Number(this.investValue);(isNaN(e)||e<window.minInvest)&&(e=0),e+=Number(t),this.investValue=e},getInvestData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.contract.methods.overviewStatus().call();case 2:return n=e.sent,e.next=5,t.contract.methods.overviewExtra().call();case 5:return a=e.sent,e.next=8,t.contract.methods.getAddrAllowed(t.$web3Obj.currentAddress).call();case 8:return s=e.sent,e.abrupt("return",{investRate:Object(o["transformationNumber2"])(n._currentPrice),investTotalEths:Object(o["transformationNumber"])(n._totalEthReceived),quotaAvail:Object(o["transformationNumber"])(a._quotaAvail),personalAvailable:Object(o["transformationNumber"])(s._amount)});case 10:case"end":return e.stop()}}),e)})))()},getApprove:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.tokenContract.methods.allowance(t.$web3Obj.currentAddress,t.lockDetail.invest).call();case 2:n=e.sent,Number(n)>1e3&&(t.approved=!0);case 4:case"end":return e.stop()}}),e)})))()},approveToken:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].contractSend(t.tokenContract.methods.approve(t.lockDetail.invest,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({from:t.$web3Obj.currentAddress}));case 3:t.approved=!0,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.lockDetail=this.$config.project.dao.bsc[0].lock[this.$route.query.index],this.contract=new this.$web3Obj.web3.eth.Contract(this.$config.abi.invest,this.lockDetail.invest),t.next=4,this.contract.methods.ethAddress().call();case 4:e=t.sent,this.tokenContract=new this.$web3Obj.web3.eth.Contract(this.$config.abi.token,e),this.getApprove(),this.getInvestData().then((function(t){n.lockDetail.investData=t}));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},v=l,f=(n("0574"),n("2877")),d=Object(f["a"])(v,a,s,!1,null,"465a6dc0",null);e["default"]=d.exports}}]);