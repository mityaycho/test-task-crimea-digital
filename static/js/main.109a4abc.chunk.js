(this["webpackJsonptest-task-crimea-digital"]=this["webpackJsonptest-task-crimea-digital"]||[]).push([[0],{11:function(a,e,t){a.exports={App:"App_App__3b5w5",cardsSixteen:"App_cardsSixteen__3Ws1H",levelUp:"App_levelUp__18e1p"}},12:function(a,e,t){a.exports={button:"Button_button__3WO5N"}},16:function(a,e,t){a.exports=t.p+"static/media/logo.5d5d9eef.svg"},18:function(a,e,t){a.exports=t(30)},23:function(a,e,t){},30:function(a,e,t){"use strict";t.r(e);var c=t(0),o=t.n(c),r=t(6),i=t.n(r),n=(t(23),t(17)),s=t(4),l=t(16),d=t.n(l),u=t(5),p=t.n(u),v=function(a){return o.a.createElement("div",{id:a.id,className:"".concat(p.a.card," ").concat(p.a[a.active]," ").concat(p.a[a.opacity]),style:a.color,onClick:a.clickHandler,"data-value":a.value},o.a.createElement("img",{src:d.a,className:p.a.logo,alt:"logo"}))},m=t(11),C=t.n(m),_=t(12),y=t.n(_),b=o.a.memo((function(a){return o.a.createElement("div",{className:y.a.container},o.a.createElement("button",{className:y.a.button,onClick:a.onClick},a.title))})),E="setGame-reducer/ACTIVE_GAME",f="setGame-reducer/LEVEL_UP",g="setGame-reducer/SET_ACTIVE_CLASS",O="setGame-reducer/GUESSED_CARDS",k=function(){var a=Object(s.b)(),e=Object(s.c)((function(a){return a.cardsReducer})),t=e.cards,r=e.cardsClass,i=e.activeCard,l=Object(c.useState)(!1),d=Object(n.a)(l,2),u=d[0],p=d[1],m=function(e){var t,c=e.currentTarget.id,o=e.currentTarget.dataset.value;i.color===o?a((t=i.id,{type:O,idFirst:t,idNext:c})):a({type:g,classActive:c,color:o}),console.log(o)},_=t.map((function(a,e){return o.a.createElement(v,{key:e,id:e,color:{background:a.color},clickHandler:m,value:a.color,active:a.activeClass,opacity:a.opacity})})),y=Object(c.useCallback)((function(){return a(function(a){return{type:f,cardsClass:a}}("levelUp"))}),[a]);return o.a.createElement("div",{className:C.a.App},u&&o.a.createElement("div",{className:C.a[r]},_),!u&&o.a.createElement(b,{title:"active game",onClick:function(){p(!0),a({type:E})}}),u&&o.a.createElement(b,{title:"next level",onClick:y}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(2),h=t(13),S=t(1),w={cardsClass:"cardsSixteen",cards:[{color:"green",activeClass:"",opacity:""},{color:"green",activeClass:"",opacity:""},{color:"yellow",activeClass:"",opacity:""},{color:"yellow",activeClass:"",opacity:""},{color:"gray",activeClass:"",opacity:""},{color:"gray",activeClass:"",opacity:""},{color:"red",activeClass:"",opacity:""},{color:"red",activeClass:"",opacity:""},{color:"purple",activeClass:"",opacity:""},{color:"purple",activeClass:"",opacity:""},{color:"black",activeClass:"",opacity:""},{color:"black",activeClass:"",opacity:""},{color:"aqua",activeClass:"",opacity:""},{color:"aqua",activeClass:"",opacity:""},{color:"pink",activeClass:"",opacity:""},{color:"pink",activeClass:"",opacity:""}],activeCard:{id:"",color:""}},A=Object(j.b)({cardsReducer:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return Object(S.a)(Object(S.a)({},a),{},{cards:a.cards.sort((function(){return Math.random()-.5}))});case g:return Object(S.a)(Object(S.a)({},a),{},{cards:a.cards.map((function(a,t){return t===+e.classActive?{color:a.color,activeClass:"active",opacity:""}:a})),activeCard:{id:e.classActive,color:e.color}});case O:return Object(S.a)(Object(S.a)({},a),{},{cards:a.cards.map((function(a,t){return t===+e.idFirst||t===+e.idNext?{color:a.color,activeClass:"active",opacity:"disabled"}:a}))});case f:return a.cards.sort((function(){return Math.random()-.5})),Object(S.a)(Object(S.a)({},a),{},{cards:[].concat(Object(h.a)(a.cards.map((function(a){return{color:a.color,activeClass:"",opacity:""}}))),Object(h.a)(a.cards.map((function(a){return{color:a.color,activeClass:"",opacity:""}})))),cardsClass:e.cardsClass});default:return a}}}),N=window,x=Object(j.d)(A,Object(j.c)(N.__REDUX_DEVTOOLS_EXTENSION__&&N.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,{store:x},o.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},5:function(a,e,t){a.exports={card:"Card_card__3FQZf",logo:"Card_logo__2yubE",active:"Card_active__2JW4j",disabled:"Card_disabled__x0N1U"}}},[[18,1,2]]]);
//# sourceMappingURL=main.109a4abc.chunk.js.map