(this.webpackJsonptrade_buddy=this.webpackJsonptrade_buddy||[]).push([[0],{100:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(47),o=n.n(c),l=(n(100),n(29)),i=n(23),u=n(17),s=n(18),d=n(21),m=n(20),p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:"ui header center aligned blue",style:{padding:"40px 0"}},r.a.createElement("h1",null,"Trade Buddy"),r.a.createElement("h4",null,"Organize  Stock Trades and Keep Track of Progress"))}}]),n}(a.Component),h=n(14),b=n(205),E=n(204),f=function(){return{type:"FETCH_TRADES"}},v=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.createTrade(t)},e}return Object(s.a)(n,[{key:"renderInput",value:function(e){var t=e.input,n=(e.name,e.label);return r.a.createElement("div",{className:"field",style:{margin:"20px 50px",width:"50%"}},r.a.createElement("label",null,n),r.a.createElement("input",t))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form"},r.a.createElement(b.a,{name:"Ticker",label:"Enter Ticker/Symbol",component:this.renderInput}),r.a.createElement(b.a,{name:"BuyPrice/ShortPrice",label:"Buy Price/Short Price",component:this.renderInput}),r.a.createElement(b.a,{name:"SellPrice/CoverPrice",label:"Sell Price/Cover Price",component:this.renderInput}),r.a.createElement(b.a,{name:"#OfShares",label:"# of Shares",component:this.renderInput}),r.a.createElement("button",{className:"ui button primary"},"Submit"),r.a.createElement(l.b,{to:"/pages/trade_view"},"to pages"))}}]),n}(a.Component),O=Object(h.b)((function(e){return{trades:e.trades}}),{createTrade:function(e){return{type:"CREATE_TRADES",payload:e}},fetchTrades:f})(Object(E.a)({form:"enterTradesForm"})(v)),y=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(l.b,{to:"/pages/trade_enter"},"Enter Your Trades"))}}]),n}(a.Component),T=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).renderTrades=function(){return console.log(e.props.trades,"renderFunction"),e.props.trades.map((function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.Ticker))}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTrades()}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderTrades())}}]),n}(a.Component),j=Object(h.b)((function(e){return{trades:e.trades}}),{fetchTrades:f})(T);var g=function(){return r.a.createElement("div",{className:""},r.a.createElement(p,null),r.a.createElement(l.a,null,r.a.createElement(i.a,{path:"/pages",exact:!0,component:y}),r.a.createElement(i.a,{path:"/pages/trade_enter",exact:!0,component:O}),r.a.createElement(i.a,{path:"/pages/trade_view",exact:!0,component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(6),_=n(206),w=n(68),k=(n(202),Object(S.c)({trades:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TRADES":return[].concat(Object(w.a)(e),[t.payload]);case"FETCH_TRADES":return Object(w.a)(e);default:return e}},form:_.a})),C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.d,P=Object(S.e)(k,C(Object(S.a)()));o.a.render(r.a.createElement(h.a,{store:P},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,n){e.exports=n(203)}},[[95,1,2]]]);
//# sourceMappingURL=main.87730ebc.chunk.js.map