(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f06316a"],{"1aca":function(t,s,i){},"2ccf":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pool"},[i("div",{staticClass:"home"},[t._m(0),i("div",{staticClass:"pool"},[i("div",{staticClass:"poolDec"},[i("div",{staticClass:"poolDecLeft"},[t._v(t._s(t.$t("Categary")))])]),t._l(t.list,(function(s,e){return i("div",{staticClass:"item",on:{click:function(s){return t.toDetail(e)}}},[i("div",{staticClass:"poolContent centerText"},[i("div",[i("span",[t._v(t._s(s.projectName)+" ")])])]),i("div",{staticClass:"airdrop flex justify-between padding13"},[i("div"),i("div",[t._v(" >> "+t._s(t.$t("Enter")))])])])}))],2)])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header"},[e("img",{staticClass:"titleImg",attrs:{src:i("c58f"),alt:""}})])}],n={data:function(){return{network:"bsc",list:[],showActive:!0}},created:function(){this.network=this.$route.query.network,this.getPoolsData(this.network)},methods:{getPoolsData:function(t){this.list=this.$config.project.NFTStaking[t]},toDetail:function(t){this.$router.push("/nftStakingDetail?index="+t)}}},c=n,o=(i("c607"),i("2877")),r=Object(o["a"])(c,e,a,!1,null,"69407edf",null);s["default"]=r.exports},c58f:function(t,s,i){t.exports=i.p+"static/img/nft.9e778fb0.png"},c607:function(t,s,i){"use strict";i("1aca")}}]);