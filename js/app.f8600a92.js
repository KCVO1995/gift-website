(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gift-website/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"18da":function(t,e,n){},"22e5":function(t,e,n){"use strict";var r=n("f588"),o=n.n(r);o.a},"32a3":function(t,e,n){"use strict";var r=n("7064"),o=n.n(r);o.a},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"6ab1":function(t,e,n){t.exports=n.p+"img/birthday.013fe7cd.png"},7064:function(t,e,n){},"745d":function(t,e,n){"use strict";var r=n("9eee"),o=n.n(r);o.a},"9c0c":function(t,e,n){},"9eee":function(t,e,n){},c3f6:function(t,e,n){t.exports=n.p+"img/tree.2e1777df.png"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("audio",{attrs:{src:"assets/song.mp3",autoplay:"",loop:""}})],1)},a=[],s=(n("5c0b"),n("2877")),i={},c=Object(s["a"])(i,o,a,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/gift-website/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var f=n("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{src:n("6ab1"),alt:"birthday"}}),r("div",{staticClass:"options"},[r("span",[t._v("小霞，请收下今年特殊的礼物吧")]),r("span",[r("router-link",{attrs:{to:"/heart"}},[t._v("嗯嗯，好的")])],1),r("span",[r("router-link",{attrs:{to:"/reject"}},[t._v("不要了")])],1)])])},d=[],v={name:"Home"},m=v,h=(n("32a3"),Object(s["a"])(m,p,d,!1,null,"24fdc2a8",null)),b=h.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"global"},[r("div",{staticClass:"placeholder"}),r("myText",{staticClass:"text"}),r("div",{staticClass:"placeholder"}),r("div",{staticClass:"heart"},[r("router-link",{staticClass:"a",attrs:{to:"/time"}},[r("img",{attrs:{src:n("fa49"),alt:"heart"}})])],1),r("div",{staticClass:"to"},[t._v(" 请点击可爱的小心心 ")])],1)},y=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pre",{attrs:{id:"x"}},[t._v(t._s(t.content))])])},w=[],x={name:"myText",data(){return{content:"",poetry:"所爱隔山海，山海皆可平\n\n入目无别人，四下皆是你\n\n你是年少的欢喜。这句话，反过来，也是你\n\n我想，把自己涂黑\n\n这样，我就可以，暗中保护你了\n\n跟你说了多少遍了，抱怨没用，抱我\n\n你是我这一生，等了半世，未拆的礼物"}},mounted(){let t=0;const e=setInterval(()=>{t+=1,this.content=this.poetry.substr(0,t),t>=this.poetry.length&&clearInterval(e)},150)},updated(){this.$nextTick(()=>{const t=document.getElementById("x");t.scrollTop=t.scrollHeight})}},j=x,O=(n("edcb"),Object(s["a"])(j,_,w,!1,null,"9ef86ee0",null)),k=O.exports,C={components:{myText:k},name:"Heart"},S=C,E=(n("22e5"),Object(s["a"])(S,g,y,!1,null,null,null)),M=E.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"global"},[n("div",{staticClass:"title"},[t._v(" 亲爱的，我喜欢你已经 ")]),n("div",{staticClass:"time"},[t._v(" "+t._s(t.myDay)+"天"+t._s(t.myHour)+"时"+t._s(t.myMin)+"分"+t._s(t.mySecond)+"秒 ")]),t._m(0),n("div",{staticClass:"options"},[n("span",[n("router-link",{attrs:{to:"/heart"}},[t._v("上一页")])],1),n("span",[n("router-link",{attrs:{to:"/home"}},[t._v("回到首页")])],1)])])},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tree"},[r("img",{attrs:{src:n("c3f6"),alt:"tree"}})])}],H={name:"Time",data(){return{myDay:0,myHour:0,myMin:0,mySecond:0}},mounted(){setInterval(()=>{const t=new Date,e=new Date("2018-6-3");this.myDay=parseInt(Math.abs(t-e)/1e3/60/60/24),this.myHour=t.getHours(),this.myMin=t.getMinutes(),this.mySecond=t.getSeconds()},100)}},P=H,D=(n("745d"),Object(s["a"])(P,T,$,!1,null,"8ce22fd0",null)),I=D.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"global"},[n("div",[n("router-link",{attrs:{to:"/home"}},[t._v(" 小姐姐，再考虑一下吧"),n("br"),t._v(" 爱你么么哒 ")])],1)])])},N=[],B={name:"Reject"},F=B,J=(n("f8e8"),Object(s["a"])(F,A,N,!1,null,"789da75b",null)),q=J.exports;r["a"].use(f["a"]);var R=[{path:"/",redirect:"/home"},{path:"/home",component:b},{path:"/heart",component:M},{path:"/time",component:I},{path:"/reject",component:q}],z=new f["a"]({mode:"hash",routes:R}),G=z,K=n("2f62");r["a"].use(K["a"]);var L=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:G,store:L,render:function(t){return t(l)}}).$mount("#app")},edcb:function(t,e,n){"use strict";var r=n("18da"),o=n.n(r);o.a},f588:function(t,e,n){},f870:function(t,e,n){},f8e8:function(t,e,n){"use strict";var r=n("f870"),o=n.n(r);o.a},fa49:function(t,e,n){t.exports=n.p+"img/heart.f445c4b7.png"}});
//# sourceMappingURL=app.f8600a92.js.map