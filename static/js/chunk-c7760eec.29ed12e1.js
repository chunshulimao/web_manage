(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7760eec"],{3885:function(e,t,n){},"94ad":function(e,t,n){"use strict";n("3885")},b0c0:function(e,t,n){var r=n("83ab"),s=n("5e77").EXISTS,i=n("e330"),a=n("9bf2").f,o=Function.prototype,c=i(o.toString),d=/^\s*function ([^ (]*)/,u=i(d.exec),l="name";r&&!s&&a(o,l,{configurable:!0,get:function(){try{return u(d,c(this))[1]}catch(e){return""}}})},e7d5:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home poolContent home70"},[n("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[e._v(" "+e._s(e.item.projectName)+" ")]),n("div",[n("div",{staticStyle:{padding:"15px","border-radius":"10px",color:"white",background:"rgb(29, 30, 35)"}},[n("div",[e._v("合约地址: "+e._s(e.contractAddress))]),n("div",[e._v("合约代币"+e._s(e.tokenName)+": "+e._s(e.tokenAddress))]),n("div",[e._v("合约代币余额: "+e._s(e._f("transformationNumber")(e.contractTokenBalance)))]),n("div",[e._v(" 收币地址: "),e._l(e.beneficiaries,(function(t){return n("div",[e._v(" "+e._s(t)+e._s(e.currentAddress.toLowerCase()===t.toLowerCase()?"(是当前钱包)":"(非当前钱包)")+" ")])}))],2),n("div",[e._v(" 收币比例: "),e._l(e.ratios,(function(t){return n("span",[e._v(" "+e._s(t+" ")+" ")])}))],2),n("div",[e._v(" 共管成员: "),e._l(e.DAOMembers,(function(t){return n("div",[e._v(" "+e._s(t)+e._s(e.currentAddress.toLowerCase()===t.toLowerCase()?"(是当前钱包)":"(非当前钱包)")+" ")])}))],2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.shows,expression:"shows === 1"}],staticClass:" align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("新增分币地址")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.addNewBeneficiaries,expression:"addNewBeneficiaries"}],staticStyle:{height:"28px","border-radius":"4px",border:"1px solid #909090",width:"100%"},attrs:{type:"text",placeholder:"英文逗号分隔"},domProps:{value:e.addNewBeneficiaries},on:{input:function(t){t.target.composing||(e.addNewBeneficiaries=t.target.value)}}}),n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("分币比例")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.addNewRatios,expression:"addNewRatios"}],staticStyle:{height:"28px","border-radius":"4px",border:"1px solid #909090",width:"100%"},attrs:{type:"text",placeholder:"英文逗号分隔"},domProps:{value:e.addNewRatios},on:{input:function(t){t.target.composing||(e.addNewRatios=t.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.shows,expression:"shows === 2"}],staticClass:" align-center justify-between",staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("重置分币地址")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.setNewBeneficiaries,expression:"setNewBeneficiaries"}],staticStyle:{height:"28px","border-radius":"4px",border:"1px solid #909090",width:"100%"},attrs:{type:"text",placeholder:"英文逗号分隔"},domProps:{value:e.setNewBeneficiaries},on:{input:function(t){t.target.composing||(e.setNewBeneficiaries=t.target.value)}}}),n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("分币比例")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.setNewRatios,expression:"setNewRatios"}],staticStyle:{height:"28px","border-radius":"4px",border:"1px solid #909090",width:"100%"},attrs:{type:"text",placeholder:"英文逗号分隔"},domProps:{value:e.setNewRatios},on:{input:function(t){t.target.composing||(e.setNewRatios=t.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:3===e.shows,expression:"shows === 3"}],staticStyle:{"margin-top":"13px","margin-bottom":"12px"}},[e._m(0)]),n("div",{staticClass:"flex align-center justify-between my-1",staticStyle:{"flex-wrap":"wrap"}},[n("div",{staticClass:"tab",class:{active:1==e.shows},on:{click:function(t){return e.doneTab(1)}}},[e._v(" 新增收币地址 ")]),n("div",{staticClass:"tab",class:{active:2==e.shows},on:{click:function(t){return e.doneTab(2)}}},[e._v(" 重置收币地址 ")]),n("div",{staticClass:"tab",class:{active:3==e.shows},on:{click:function(t){return e.doneTab(3)}}},[e._v(" 手动分发 ")])]),n("div",{staticClass:"tab active",staticStyle:{width:"100%","margin-top":"50px"},on:{click:e.send}},[e._v("确认")])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex align-center justify-between"},[n("div",{staticClass:"title font-bold",staticStyle:{"margin-right":"8px"}},[e._v("手动分发")])])}],i=n("1da1"),a=(n("96cf"),n("b0c0"),n("ac1f"),n("1276"),n("2b0e")),o=n("d399"),c=n("4128"),d=n.n(c),u=(n("a232"),n("b775"));a["a"].use(o["a"]),d.a.set({precision:100,toExpPos:60,toExpNeg:-20});var l={data:function(){return{DAOMembers:[],tokens:null,tokenAddress:null,tokenName:null,contractAddress:null,shows:1,currentAddress:this.$web3Obj.currentAddress,investValue:"",contractTokenBalance:0,userTokenBlance:0,tokenRate:0,userApproveTokenNum:0,approveTokenNum:null,depositTokenNum:null,transferTokenNum:null,transferTokenTo:"",showApp:!0,contract:null,tokenContract:null,item:null,beneficiaries:[],ratios:[],addNewBeneficiaries:null,addNewRatios:null,setNewBeneficiaries:null,setNewRatios:null}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.query.network,r=e.$route.query.index,e.item=e.$config.project.vesting[n][r],e.contractAddress=e.item.contractAddress,e.contract=new e.$web3Obj.web3.eth.Contract(e.$config.abi[e.item.contractType],e.contractAddress),t.next=7,e.contract.methods.token().call();case 7:return e.tokenAddress=t.sent,e.tokenContract=new e.$web3Obj.web3.eth.Contract(e.$config.abi[e.item.tokenName],e.tokenAddress),console.log(11),t.next=12,e.tokenContract.methods.name().call();case 12:e.tokenName=t.sent,e.getOverview();case 14:case"end":return t.stop()}}),t)})))()},methods:{send:function(){switch(this.shows){case 1:this.addBeneficiaries();break;case 2:this.setBeneficiaries();break;case 3:this.distribute();break}},doneTab:function(e){this.shows=e},getOverview:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r,s,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.contract.methods.tokenBalance().call();case 2:return this.contractTokenBalance=e.sent,this.beneficiaries=[],this.ratios=[],e.next=7,this.contract.methods.beneficiaryCount().call();case 7:t=e.sent,console.log(22),n=0;case 10:if(!(n<t)){e.next=22;break}return e.next=13,this.contract.methods.beneficiaries(n).call();case 13:return r=e.sent,e.next=16,this.contract.methods.ratios(n).call();case 16:s=e.sent,this.beneficiaries.push(r),this.ratios.push(s);case 19:n++,e.next=10;break;case 22:this.DAOMembers=[],i=0;case 24:if(!(i<5)){e.next=42;break}return e.prev=25,e.next=28,this.contract.methods.daoMembers(i).call();case 28:if(a=e.sent,console.log(a),"0x0000000000000000000000000000000000000000"!==a){e.next=32;break}return e.abrupt("break",42);case 32:this.DAOMembers.push(a),e.next=39;break;case 35:return e.prev=35,e.t0=e["catch"](25),console.log(e.t0),e.abrupt("break",42);case 39:i++,e.next=24;break;case 42:case"end":return e.stop()}}),e,this,[[25,35]])})));function t(){return e.apply(this,arguments)}return t}(),addBeneficiaries:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.addNewBeneficiaries.split(","),n=this.addNewRatios.split(","),t.length===n.length){e.next=5;break}return Object(o["a"])("非法参数"),e.abrupt("return");case 5:if(r=confirm("确认添加收币地址?"),!r){e.next=10;break}return e.next=9,u["a"].contractSend(this.contract.methods.addBeneficiaries(t,n).send({from:this.currentAddress}));case 9:this.getOverview();case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setBeneficiaries:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.setNewBeneficiaries.split(","),n=this.setNewRatios.split(","),t.length===n.length){e.next=5;break}return Object(o["a"])("非法参数"),e.abrupt("return");case 5:if(r=confirm("确认重置收币地址?"),!r){e.next=10;break}return e.next=9,u["a"].contractSend(this.contract.methods.setBeneficiaries(t,n).send({from:this.currentAddress}));case 9:this.getOverview();case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),distribute:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=confirm("确认分发?"),!t){e.next=5;break}return e.next=4,u["a"].contractSend(this.contract.methods.distribute().send({from:this.currentAddress}));case 4:this.getOverview();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},p=l,h=(n("94ad"),n("2877")),v=Object(h["a"])(p,r,s,!1,null,"4ee076d1",null);t["default"]=v.exports}}]);