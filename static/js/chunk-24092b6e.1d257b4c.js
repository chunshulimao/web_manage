(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24092b6e"],{7498:function(t,e,a){"use strict";a("e7dc")},"8c8a4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"farm"},[a("div",{staticClass:"home"},[t._m(0),a("div",{staticClass:"farm"},[a("div",{staticClass:"farmDec"}),t._l(t.farmList,(function(e,n){return a("div",{on:{click:function(a){return t.toDetail(e,n)}}},[a("div",{staticClass:"farmContent centerText"},[a("div",{staticClass:"farmContentMid left-center-text flex1"},[a("span",[t._v(t._s(e.projectName))])])]),a("div",{staticClass:"airdrop right-center-text padding13"},[t._v(" "+t._s(1==e.status?"Paused":">>"+t.$t("Enter"))+" ")])])}))],2)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("img",{staticClass:"titleImg",attrs:{src:a("b1fe"),alt:""}})])}],s=a("1da1"),i=(a("96cf"),a("b775"),{data:function(){return{network:"bsc",farmList:[],routerContact:null}},created:function(){this.network=this.$route.query.network,this.getfarmsData(this.network)},methods:{getfarmsData:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.farmList=e.$config.project.publicv3[t]?e.$config.project.publicv3[t]:[];case 1:case"end":return a.stop()}}),a)})))()},toDetail:function(t,e){this.$router.push("/publicmanageDetail?index="+e)}}}),c=i,o=(a("7498"),a("2877")),u=Object(o["a"])(c,n,r,!1,null,"0f7a948c",null);e["default"]=u.exports},b1fe:function(t,e,a){t.exports=a.p+"static/img/farms.a462518b.png"},e7dc:function(t,e,a){}}]);