(function(t){function e(e){for(var r,i,a=e[0],u=e[1],c=e[2],l=0,p=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function i(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"914c5918"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=i(t);var c=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vuetifytest/",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3c08":function(t,e,n){"use strict";var r=n("7a08"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("HelloWorld")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-container",[r("v-row",[r("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:function(e){return t.shuffle(t.numbers)}}},[t._v(" reset")]),r("v-btn",{staticClass:"ma-2",attrs:{color:"error"},on:{click:function(e){return t.stop()}}},[t._v(" stop")]),r("v-switch",{staticClass:"mx-2",attrs:{label:"EZ MODE"},model:{value:t.ezmode,callback:function(e){t.ezmode=e},expression:"ezmode"}})],1),r("v-row",{staticClass:"ma-2"},[t._v(" Seconds: "+t._s(t.seconds)+" ")])],1),t.loss?r("div",[t._v(" YOU LOST IT ALL "),r("v-img",{attrs:{src:n("b92b")}})],1):t._e(),t.win?r("div",[t._v(" YOU ARE WINNER "),r("v-img",{attrs:{src:n("6582")}})],1):r("div",{staticClass:"gridy"},[t._l(t.numbers,(function(e){return[r("v-btn",{key:e,attrs:{color:e===t.currentNum+1&&t.ezmode?"success":"normal",disabled:t.clickedNumbers.includes(e)||t.loss||t.stopped},on:{click:function(n){return t.clickNumber(e)}}},[t._v(t._s(e)+" ")])]}))],2)],1)},a=[],u=(n("a630"),n("3ca3"),{name:"HelloWorld",data:function(){return{number:50,numbers:[],clickedNumbers:[],startingSeconds:60,seconds:0,currentNum:0,win:!1,ezmode:!1,stopped:!1}},mounted:function(){this.init(),this.shuffle(this.numbers)},beforeDestroy:function(){this.stopTimer()},computed:{loss:function(){return 0===this.seconds}},methods:{init:function(){this.numbers=Array.from({length:this.number},(function(t,e){return e+1}))},shuffle:function(t){this.stopped=!1,this.win=!1,this.clickedNumbers=[],this.currentNum=0,this.stopTimer();for(var e=t.length-1;e>0;e-=1){var n=Math.floor(Math.random()*(e+1)),o=t[e];r["a"].set(t,e,t[n]),r["a"].set(t,n,o)}this.numbers=t,this.startTimer()},stop:function(){this.stopTimer(),this.stopped=!0},stopTimer:function(){clearInterval(this.timer)},startTimer:function(){var t=this;this.seconds=this.startingSeconds,this.timer=setInterval((function(){t.seconds-=1}),1e3)},clickNumber:function(t){t===this.currentNum+1?(this.currentNum+=1,this.clickedNumbers.push(t)):(this.stopTimer(),this.seconds=0),this.clickedNumbers.length===this.numbers.length&&(this.stopTimer(),this.win=!0)}}}),c=u,l=(n("3c08"),n("2877")),f=n("6544"),p=n.n(f),m=n("8336"),d=n("a523"),h=n("adda"),v=n("0fd9"),b=n("b73d"),g=Object(l["a"])(c,i,a,!1,null,"24b1d16e",null),y=g.exports;p()(g,{VBtn:m["a"],VContainer:d["a"],VImg:h["a"],VRow:v["a"],VSwitch:b["a"]});var w={name:"App",components:{HelloWorld:y},data:function(){return{}}},_=w,O=n("7496"),k=n("f6c4"),j=Object(l["a"])(_,o,s,!1,null,null,null),T=j.exports;p()(j,{VApp:O["a"],VMain:k["a"]});n("d3b7");var x=n("8c4f"),N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},S=[],E={name:"Home",components:{HelloWorld:y}},C=E,P=Object(l["a"])(C,N,S,!1,null,null,null),V=P.exports;r["a"].use(x["a"]);var A=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],M=new x["a"]({mode:"history",base:"/vuetifytest/",routes:A}),H=M,W=n("2f62");r["a"].use(W["a"]);var z=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=n("f309");r["a"].use(I["a"]);var L=new I["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:H,store:z,vuetify:L,render:function(t){return t(T)}}).$mount("#app")},6582:function(t,e,n){t.exports=n.p+"img/success.6ff4975e.png"},"7a08":function(t,e,n){},b92b:function(t,e,n){t.exports=n.p+"img/sad.62f6aa37.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ded3a162.js.map