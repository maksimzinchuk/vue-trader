(function(t){function n(n){for(var s,r,i=n[0],c=n[1],u=n[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],s=!0,i=1;i<e.length;i++){var c=e[i];0!==a[c]&&(s=!1)}s&&(o.splice(n--,1),t=r(r.s=e[0]))}return t}var s={},a={app:0},o=[];function r(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)r.d(e,s,function(n){return t[n]}.bind(null,s));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var l=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var s=e("85ec"),a=e.n(s);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("Header"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("transition",{attrs:{name:"main",mode:"out-in"}},[e("router-view")],1)],1)])],1)},o=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Брокер")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("router-link",{attrs:{to:"/portfolio",tag:"li","active-class":"active"}},[e("a",{staticClass:"nav-link"},[t._v("Портфель")])]),e("router-link",{attrs:{to:"/stocks",tag:"li","active-class":"active"}},[e("a",{staticClass:"nav-link"},[t._v("Что купить")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.endDay}},[t._v("Закрыть день")])])],1),e("strong",{staticClass:"navbar-text"},[t._v(" Баланс: "+t._s(t.funds)+" ₽ ")])])],1)])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],c=e("5530"),u=e("2f62"),l={computed:{funds:function(){return this.$store.getters.funds}},methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["randomizeStocks"])),{},{endDay:function(){this.randomizeStocks()}})},d=l,f=e("2877"),p=Object(f["a"])(d,r,i,!1,null,null,null),m=p.exports,v={components:{Header:m},created:function(){this.$store.dispatch("initStocks")}},b=v,k=(e("034f"),Object(f["a"])(b,a,o,!1,null,null,null)),h=k.exports,y=e("8c4f"),_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"border mt-3 p-3"},[e("h1",[t._v("Добро пожаловать в Брокер")]),e("h6",[t._v('Чтобы закрыть торговый день - нажмите "Закрыть день"')]),e("hr"),e("p",[t._v("Баланс: "+t._s(t.funds)+" ₽")])])},g=[],S={computed:{funds:function(){return this.$store.getters.funds}}},C=S,O=Object(f["a"])(C,_,g,!1,null,null,null),w=O.exports,q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"row row-cols-2 row-cols-md-3 "},t._l(t.stocks,(function(t){return e("Stock",{key:t.id,attrs:{stock:t}})})),1)])},j=[],x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-sm-6 col-md-6 col-lg-4 col-12 w-25 mt-3"},[e("div",{staticClass:"card border-info mb-3 shadow"},[e("div",{staticClass:"card-header"},[t._v(" "+t._s(t.stock.name)+" "),e("h6",{staticClass:"card-subtitle mt-2 text-muted"},[t._v(" (Цена: "+t._s(t.stock.price)+" | Количество: "+t._s(t.stock.quantity)+") ")])]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control sm-col-2",attrs:{type:"number",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}}),e("button",{staticClass:"btn btn-success mt-3 float-right",class:{"btn-danger":t.lowQuantity},attrs:{href:"#",disabled:t.lowQuantity||t.quantity<=0||Number.isInteger(t.quantity)},on:{click:t.sellStock}},[t._v(" "+t._s(t.lowQuantity?"Неверное количество":"Продать")+" ")])])])])])},P=[],$={props:["stock"],data:function(){return{quantity:0}},computed:{lowQuantity:function(){return this.quantity>this.stock.quantity}},methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])({placeSellOrder:"sellStock"})),{},{sellStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.placeSellOrder(t),this.quantity=0}})},T=$,E=Object(f["a"])(T,x,P,!1,null,null,null),M=E.exports,K={computed:Object(c["a"])({},Object(u["c"])({stocks:"stockPortfolio"})),components:{Stock:M}},I=K,N=Object(f["a"])(I,q,j,!1,null,null,null),Q=N.exports,D=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mt-3 mb-3"},[e("h1",[t._v("Портфель")]),e("div",{staticClass:"row row-cols-2 row-cols-md-3"},t._l(t.stocks,(function(t){return e("Stock",{key:t.id,attrs:{stock:t}})})),1)])},F=[],L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-sm-6 col-md-6 col-lg-4 col-12 w-25"},[e("div",{staticClass:"card border-info mb-3 shadow"},[e("div",{staticClass:"card-header"},[t._v(" "+t._s(t.stock.name)+" "),e("h6",{staticClass:"card-subtitle mt-2 text-muted"},[t._v(" (Цена: "+t._s(t.stock.price)+") ")])]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"form-control sm-col-2",attrs:{type:"number",placeholder:"Количество"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}}),e("button",{staticClass:"btn btn-success mt-3 float-right",class:{"btn-danger":t.lowFunds},attrs:{href:"#",disabled:t.lowFunds||t.quantity<=0||!Number.isInteger(t.quantity)},on:{click:t.buyStock}},[t._v(" "+t._s(t.lowFunds?"Недостаточно средств":"Купить")+" ")])])])])])},z=[],A={props:["stock"],data:function(){return{quantity:0}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("buyStock",t),this.quantity=0}},computed:{funds:function(){return this.$store.getters.funds},lowFunds:function(){return this.quantity*this.stock.price>this.funds}}},H=A,U=Object(f["a"])(H,L,z,!1,null,null,null),Y=U.exports,B={components:{Stock:Y},computed:{stocks:function(){return this.$store.getters.stocks}}},J=B,R=Object(f["a"])(J,D,F,!1,null,null,null),G=R.exports;s["a"].use(y["a"]);var V=[{path:"/",name:"Home",component:w},{path:"/portfolio",name:"Portfolio",component:Q},{path:"/stocks",name:"Stocks",component:G}],W=new y["a"]({mode:"history",base:"/",routes:V}),X=W,Z=(e("4160"),e("159b"),[{id:1,name:"Mail.ru",price:2199},{id:2,name:"Yandex",price:4920},{id:3,name:"Tinkoff",price:1870},{id:4,name:"Apple",price:24e3}]),tt={stocks:[]},nt={SET_STOCKS:function(t,n){t.stocks=n},RANDOM_STOCKS:function(){tt.stocks.forEach((function(t){t.price=Math.round(t.price*(1+Math.random()-.5))}))}},et={buyStock:function(t,n){var e=t.commit;e("BUY_STOCK",n)},initStocks:function(t){var n=t.commit;n("SET_STOCKS",Z)},randomizeStocks:function(t){var n=t.commit;n("RANDOM_STOCKS")}},st={stocks:function(t){return t.stocks}},at={state:tt,mutations:nt,actions:et,getters:st},ot=(e("7db0"),e("c975"),e("d81d"),e("a434"),e("b0c0"),{funds:1e5,stocks:[]}),rt={BUY_STOCK:function(t,n){var e=n.stockId,s=n.quantity,a=n.stockPrice,o=t.stocks.find((function(t){return t.id==e}));o?o.quantity+=s:t.stocks.push({id:e,quantity:s}),t.funds-=a*s},SELL_STOCKS:function(t,n){var e=n.stockId,s=n.quantity,a=n.stockPrice,o=t.stocks.find((function(t){return t.id==e}));o.quantity>s?o.quantity-=s:t.stocks.splice(t.stocks.indexOf(o,1)),t.funds+=a*s}},it={sellStock:function(t,n){var e=t.commit;e("SELL_STOCKS",n)}},ct={stockPortfolio:function(t,n){return t.stocks.map((function(t){var e=n.stocks.find((function(n){return n.id==t.id}));return{id:t.id,quantity:t.quantity,name:e.name,price:e.price}}))},funds:function(t){return t.funds}},ut={state:ot,actions:it,mutations:rt,getters:ct};s["a"].use(u["a"]);var lt=new u["a"].Store({modules:{stocks:at,portfolio:ut}});s["a"].config.productionTip=!1,new s["a"]({router:X,store:lt,render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.a2ce264c.js.map