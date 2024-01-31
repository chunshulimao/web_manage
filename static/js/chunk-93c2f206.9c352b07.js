(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93c2f206"],{"0fd9":function(e,t,i){"use strict";i("4b85");var s=i("2b0e"),n=i("d9f7"),r=i("80d2");const a=["sm","md","lg","xl"],o=["start","end","center"];function l(e,t){return a.reduce((i,s)=>(i[e+Object(r["m"])(s)]=t(),i),{})}const c=e=>[...o,"baseline","stretch"].includes(e),d=l("align",()=>({type:String,default:null,validator:c})),h=e=>[...o,"space-between","space-around"].includes(e),u=l("justify",()=>({type:String,default:null,validator:h})),p=e=>[...o,"space-between","space-around","stretch"].includes(e),m=l("alignContent",()=>({type:String,default:null,validator:p})),v={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function f(e,t,i){let s=g[e];if(null!=i){if(t){const i=t.replace(e,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const y=new Map;t["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:p},...m},render(e,{props:t,data:i,children:s}){let r="";for(const n in t)r+=String(t[n]);let a=y.get(r);if(!a){let e;for(e in a=[],v)v[e].forEach(i=>{const s=t[i],n=f(e,i,s);n&&a.push(n)});a.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),y.set(r,a)}return e(t.tag,Object(n["a"])(i,{staticClass:"row",class:a}),s)}})},"24b2":function(e,t,i){"use strict";var s=i("80d2"),n=i("2b0e");t["a"]=n["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const e={},t=Object(s["d"])(this.height),i=Object(s["d"])(this.minHeight),n=Object(s["d"])(this.minWidth),r=Object(s["d"])(this.maxHeight),a=Object(s["d"])(this.maxWidth),o=Object(s["d"])(this.width);return t&&(e.height=t),i&&(e.minHeight=i),n&&(e.minWidth=n),r&&(e.maxHeight=r),a&&(e.maxWidth=a),o&&(e.width=o),e}}})},"25a8":function(e,t,i){},"58df8":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("2b0e");function n(...e){return s["a"].extend({mixins:e})}},"615b":function(e,t,i){},"6ece":function(e,t,i){},7435:function(e,t,i){},7560:function(e,t,i){"use strict";var s=i("2b0e");const n=s["a"].extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});t["a"]=n},"90a2":function(e,t,i){"use strict";function s(e,t){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=t.modifiers||{},s=t.value,{handler:r,options:a}="object"===typeof s?s:{handler:s,options:{}},o=new IntersectionObserver((t=[],s)=>{if(!e._observe)return;const a=t.some(e=>e.isIntersecting);!r||i.quiet&&!e._observe.init||i.once&&!a&&e._observe.init||r(t,s,a),a&&i.once?n(e):e._observe.init=!0},a);e._observe={init:!1,observer:o},o.observe(e)}function n(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}const r={inserted:s,unbind:n};t["a"]=r},b0afa:function(e,t,i){"use strict";i("615b"),i("25a8");var s=i("2b0e");function n(e){return function(t,i){for(const s in i)Object.prototype.hasOwnProperty.call(t,s)||this.$delete(this.$data[e],s);for(const s in t)this.$set(this.$data[e],s,t[s])}}var r=s["a"].extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",n("attrs$"),{immediate:!0}),this.$watch("$listeners",n("listeners$"),{immediate:!0})}}),a=i("d9bd"),o=i("7bc6"),l=s["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(e,t={}){return"string"===typeof t.style?(Object(a["a"])("style must be an object",this),t):"string"===typeof t.class?(Object(a["a"])("class must be an object",this),t):(Object(o["d"])(e)?t.style={...t.style,"background-color":""+e,"border-color":""+e}:e&&(t.class={...t.class,[e]:!0}),t)},setTextColor(e,t={}){if("string"===typeof t.style)return Object(a["a"])("style must be an object",this),t;if("string"===typeof t.class)return Object(a["a"])("class must be an object",this),t;if(Object(o["d"])(e))t.style={...t.style,color:""+e,"caret-color":""+e};else if(e){const[i,s]=e.toString().trim().split(" ",2);t.class={...t.class,[i+"--text"]:!0},s&&(t.class["text--"+s]=!0)}return t}}}),c=s["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const e=this.computedElevation;return null==e||isNaN(parseInt(e))?{}:{["elevation-"+this.elevation]:!0}}}}),d=i("24b2"),h=s["a"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const e=[],t="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)e.push("rounded-0");else if("string"===typeof t){const i=t.split(" ");for(const t of i)e.push("rounded-"+t)}else t&&e.push("rounded");return e.length>0?{[e.join(" ")]:!0}:{}}}}),u=i("7560"),p=i("58df8"),m=Object(p["a"])(r,l,c,d["a"],h,u["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(e){const t={class:this.classes,style:this.styles,on:this.listeners$};return e(this.tag,this.setBackgroundColor(this.color,t),this.$slots.default)}}),v=m,g=(i("6ece"),i("d9f7"));function f(e=[],...t){return Array().concat(e,...t)}function y(e,t="top center 0",i){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:t}},render(t,i){const s="transition"+(i.props.group?"-group":""),n={props:{name:e,mode:i.props.mode},on:{beforeEnter(e){e.style.transformOrigin=i.props.origin,e.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(n.on.leave=f(n.on.leave,e=>{const{offsetTop:t,offsetLeft:i,offsetWidth:s,offsetHeight:n}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=i+"px",e.style.width=s+"px",e.style.height=n+"px"}),n.on.afterLeave=f(n.on.afterLeave,e=>{if(e&&e._transitionInitialStyles){const{position:t,top:i,left:s,width:n,height:r}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=i||"",e.style.left=s||"",e.style.width=n||"",e.style.height=r||""}})),i.props.hideOnLeave&&(n.on.leave=f(n.on.leave,e=>{e._initialDisplay=[e.style.display,e.style.getPropertyPriority("display")],e.style.setProperty("display","none","important")}),n.on.afterLeave=f(n.on.afterLeave,e=>{e&&(e._initialDisplay?e.style.setProperty("display",...e._initialDisplay):e.style.removeProperty("display"))})),t(s,Object(g["a"])(i.data,n),i.children)}}}function b(e,t,i="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:i}},render(i,s){return i("transition",Object(g["a"])(s.data,{props:{name:e},on:t}),s.children)}}}var _=i("80d2"),C=function(e="",t=!1){const i=t?"width":"height",s="offset"+Object(_["m"])(i);return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[i]:e.style[i]}},enter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const r=t[s]+"px";t.style[i]="0",t.offsetHeight,t.style.transition=n.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[i]=r})},afterEnter:r,enterCancelled:r,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[i]:e.style[i]},e.style.overflow="hidden",e.style[i]=e[s]+"px",e.offsetHeight,requestAnimationFrame(()=>e.style[i]="0")},afterLeave:n,leaveCancelled:n};function n(t){e&&t._parent&&t._parent.classList.remove(e),r(t)}function r(e){const t=e._initialStyle[i];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[i]=t),delete e._initialStyle}};y("carousel-transition"),y("carousel-reverse-transition"),y("tab-transition"),y("tab-reverse-transition"),y("menu-transition"),y("fab-transition","center center","out-in"),y("dialog-transition"),y("dialog-bottom-transition"),y("dialog-top-transition");const x=y("fade-transition"),w=(y("scale-transition"),y("scroll-x-transition"),y("scroll-x-reverse-transition"),y("scroll-y-transition"),y("scroll-y-reverse-transition"),y("slide-x-transition"));y("slide-x-reverse-transition"),y("slide-y-transition"),y("slide-y-reverse-transition"),b("expand-transition",C()),b("expand-x-transition",C("",!0));var k=i("90a2");const B={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function S(e=[]){return s["a"].extend({name:"positionable",props:e.length?Object(_["e"])(B,e):B})}S();function $(e="value",t="change"){return s["a"].extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const j=$();var L=j;const O=Object(p["a"])(l,S(["absolute","fixed","top","bottom"]),L,u["a"]);var E=O.extend({name:"v-progress-linear",directives:{intersect:k["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(_["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(_["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:Object(_["d"])(this.normalizedValue,"%"),width:Object(_["d"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?x:w},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(_["d"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(_["h"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,i){this.isVisible=i},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(_["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),T=E,N=s["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(T,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}});i("7435");const P=80;function z(e,t){e.style.transform=t,e.style.webkitTransform=t}function V(e,t){e.style.opacity=t.toString()}function D(e){return"TouchEvent"===e.constructor.name}function H(e){return"KeyboardEvent"===e.constructor.name}const A=(e,t,i={})=>{let s=0,n=0;if(!H(e)){const i=t.getBoundingClientRect(),r=D(e)?e.touches[e.touches.length-1]:e;s=r.clientX-i.left,n=r.clientY-i.top}let r=0,a=.3;t._ripple&&t._ripple.circle?(a=.15,r=t.clientWidth/2,r=i.center?r:r+Math.sqrt((s-r)**2+(n-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=(t.clientWidth-2*r)/2+"px",l=(t.clientHeight-2*r)/2+"px",c=i.center?o:s-r+"px",d=i.center?l:n-r+"px";return{radius:r,scale:a,x:c,y:d,centerX:o,centerY:l}},I={show(e,t,i={}){if(!t._ripple||!t._ripple.enabled)return;const s=document.createElement("span"),n=document.createElement("span");s.appendChild(n),s.className="v-ripple__container",i.class&&(s.className+=" "+i.class);const{radius:r,scale:a,x:o,y:l,centerX:c,centerY:d}=A(e,t,i),h=2*r+"px";n.className="v-ripple__animation",n.style.width=h,n.style.height=h,t.appendChild(s);const u=window.getComputedStyle(t);u&&"static"===u.position&&(t.style.position="relative",t.dataset.previousPosition="static"),n.classList.add("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--visible"),z(n,`translate(${o}, ${l}) scale3d(${a},${a},${a})`),V(n,0),n.dataset.activated=String(performance.now()),setTimeout(()=>{n.classList.remove("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--in"),z(n,`translate(${c}, ${d}) scale3d(1,1,1)`),V(n,.25)},0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const i=t[t.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const s=performance.now()-Number(i.dataset.activated),n=Math.max(250-s,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),V(i,0),setTimeout(()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),i.parentNode&&e.removeChild(i.parentNode)},300)},n)}};function R(e){return"undefined"===typeof e||!!e}function W(e){const t={},i=e.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,D(e))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(t.center=i._ripple.centered||H(e),i._ripple.class&&(t.class=i._ripple.class),D(e)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{I.show(e,i,t)},i._ripple.showTimer=window.setTimeout(()=>{i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)},P)}else I.show(e,i,t)}}function q(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout(()=>{q(e)}));window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),I.hide(t)}}function F(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let M=!1;function X(e){M||e.keyCode!==_["i"].enter&&e.keyCode!==_["i"].space||(M=!0,W(e))}function Y(e){M=!1,q(e)}function G(e){!0===M&&(M=!1,q(e))}function J(e,t,i){const s=R(t.value);s||I.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=s;const n=t.value||{};n.center&&(e._ripple.centered=!0),n.class&&(e._ripple.class=t.value.class),n.circle&&(e._ripple.circle=n.circle),s&&!i?(e.addEventListener("touchstart",W,{passive:!0}),e.addEventListener("touchend",q,{passive:!0}),e.addEventListener("touchmove",F,{passive:!0}),e.addEventListener("touchcancel",q),e.addEventListener("mousedown",W),e.addEventListener("mouseup",q),e.addEventListener("mouseleave",q),e.addEventListener("keydown",X),e.addEventListener("keyup",Y),e.addEventListener("blur",G),e.addEventListener("dragstart",q,{passive:!0})):!s&&i&&K(e)}function K(e){e.removeEventListener("mousedown",W),e.removeEventListener("touchstart",W),e.removeEventListener("touchend",q),e.removeEventListener("touchmove",F),e.removeEventListener("touchcancel",q),e.removeEventListener("mouseup",q),e.removeEventListener("mouseleave",q),e.removeEventListener("keydown",X),e.removeEventListener("keyup",Y),e.removeEventListener("dragstart",q),e.removeEventListener("blur",G)}function Q(e,t,i){J(e,t,!1)}function U(e){delete e._ripple,K(e)}function Z(e,t){if(t.value===t.oldValue)return;const i=R(t.oldValue);J(e,t,i)}const ee={bind:Q,unbind:U,update:Z};var te=ee,ie=s["a"].extend({name:"routable",directives:{Ripple:te},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple(){var e;return null!=(e=this.ripple)?e:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{click(e){this.$emit("click",e)},generateRouteLink(){let e,t=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,click:this.click},ref:"link"};if("undefined"===typeof this.exact&&(t="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,n=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:t,exactPath:this.exactPath,activeClass:s,exactActiveClass:n,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:e,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const e=`${this.activeClass} ${this.proxyClass||""}`.trim(),t=`${this.exactActiveClass} ${this.proxyClass||""}`.trim()||e,i="_vnode.data.class."+(this.exact?t:e);this.$nextTick(()=>{!Object(_["g"])(this.$refs.link,i)===this.isActive&&this.toggle()})},toggle(){this.isActive=!this.isActive}}});t["a"]=Object(p["a"])(N,ie,v).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...ie.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...v.options.computed.classes.call(this)}},styles(){const e={...v.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=N.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);