(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,r){e.exports={overlay:"Drawer_overlay__sNcKU",overlayVisible:"Drawer_overlayVisible__3ZBrq",drawer:"Drawer_drawer__JsxWx",items:"Drawer_items__k8Vqz"}},20:function(e,t,r){e.exports={card:"Card_card__3iYk1",plus:"Card_plus__3exjA",favorite:"Card_favorite__1lczU"}},42:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),n=r(14),s=r(34),i=r.n(s),o=(r(42),r(43),r(11)),l=r(12),d=r(8),j=r.n(d),u=r(13),b=r(4),x=r(2),m=r(5),h=r.n(m),f=a.a.createContext({}),p=function(){var e=a.a.useContext(f),t=e.cartItems,r=e.setCartItems,c=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:r,totalPrice:c}},O=r(1);var v=function(e){var t=p().totalPrice;return Object(O.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(O.jsx)(n.b,{to:"/",children:Object(O.jsxs)("div",{className:"d-flex align-center",children:[Object(O.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"Logotype"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:"text-uppercase",children:"Rocksi Store"}),Object(O.jsx)("p",{className:"opacity-5",children:"\u041a\u0440\u0430\u043c\u043d\u0438\u0446\u044f \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0445 \u043a\u0440\u043e\u0441\u0456\u0432"})]})]})}),Object(O.jsxs)("ul",{className:"d-flex",children:[Object(O.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(O.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"\u041a\u043e\u0448\u0438\u043a"}),Object(O.jsxs)("span",{children:[t," \u0433\u0440\u043d."]})]}),Object(O.jsx)("li",{className:"mr-20 cu-p",children:Object(O.jsx)(n.b,{to:"/favorites",children:Object(O.jsx)("img",{width:18,height:18,src:"img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(n.b,{to:"/orders",children:Object(O.jsx)("img",{width:18,height:18,src:"img/user.svg",alt:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"})})})]})]})},g=function(e){var t=e.title,r=e.image,c=e.description,n=a.a.useContext(f).setCartOpened;return Object(O.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(O.jsx)("img",{className:"mb-20",width:"120px",src:r,alt:"Empty"}),Object(O.jsx)("h2",{children:t}),Object(O.jsx)("p",{className:"opacity-6",children:c}),Object(O.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(O.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},N=r(19),k=r.n(N),w=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var C=function(e){var t=e.onClose,r=e.onRemove,c=e.items,n=void 0===c?[]:c,s=e.opened,i=p(),o=i.cartItems,l=i.setCartItems,d=i.totalPrice,x=a.a.useState(null),m=Object(b.a)(x,2),f=m[0],v=m[1],N=a.a.useState(!1),C=Object(b.a)(N,2),y=C[0],I=C[1],_=a.a.useState(!1),S=Object(b.a)(_,2),A=S[0],P=S[1],T=function(){var e=Object(u.a)(j.a.mark((function e(){var t,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,h.a.post("https://613f8e11e9d92a0017e17778.mockapi.io/orders",{items:o});case 4:t=e.sent,r=t.data,v(r.id),I(!0),l([]),c=0;case 10:if(!(c<o.length)){e.next=19;break}return a=o[c],e.next=14,h.a.delete("https://613f8e11e9d92a0017e17778.mockapi.io/cart/"+a.id);case 14:return e.next=16,w(1e3);case 16:c++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u0456 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f :(");case 24:P(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"".concat(k.a.overlay," ").concat(s?k.a.overlayVisible:""),children:Object(O.jsxs)("div",{className:k.a.drawer,children:[Object(O.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 ",Object(O.jsx)("img",{onClick:t,className:"cu-p",src:"img/btn-remove.svg",alt:"Close"})]}),n.length>0?Object(O.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(O.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(O.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(O.jsxs)("div",{className:"mr-20 flex",children:[Object(O.jsx)("p",{className:"mb-5",children:e.title}),Object(O.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(O.jsx)("img",{onClick:function(){return r(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(O.jsxs)("div",{className:"cartTotalBlock",children:[Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u0426\u0456\u043d\u0430:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d," \u0433\u0440\u043d. "]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u0417\u043d\u0438\u0436\u043a\u0430 5%:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[Math.round(d/100*5)," \u0433\u0440\u043d. "]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u0421\u0443\u043c\u0430 \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d-Math.round(d/100*5)," \u0433\u0440\u043d. "]})]})]}),Object(O.jsxs)("button",{disabled:A,onClick:T,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(O.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(O.jsx)(g,{title:y?"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043e!":"\u041a\u043e\u0448\u0438\u043a \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439",description:y?"\u0412\u0430\u0448\u0435 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f #".concat(f," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043a\u0443\u0440'\u0454\u0440\u0441\u044c\u043a\u0456\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u0446\u0456"):"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0445\u043e\u0447\u0430 \u0431 \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0456\u0432, \u0449\u043e\u0431 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f.",image:y?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})},y=r(37),I=r(20),_=r.n(I);var S=function(e){var t=e.id,r=e.title,c=e.imageUrl,n=e.price,s=e.onFavorite,i=e.onPlus,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,u=a.a.useContext(f).isItemAdded,x=a.a.useState(l),m=Object(b.a)(x,2),h=m[0],p=m[1],v={id:t,parentId:t,title:r,imageUrl:c,price:n};return Object(O.jsx)("div",{className:_.a.card,children:j?Object(O.jsxs)(y.a,{speed:2,width:155,height:250,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(O.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(O.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(O.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(O.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(O.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(O.jsxs)(O.Fragment,{children:[s&&Object(O.jsx)("div",{className:_.a.favorite,onClick:function(){s(v),p(!h)},children:Object(O.jsx)("img",{src:h?"img/liked.svg":"img/unliked.svg",alt:"Unliked"})}),Object(O.jsx)("img",{width:"100%",height:135,src:c,alt:"Sneakers"}),Object(O.jsx)("h5",{children:r}),Object(O.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("span",{children:"\u0426\u0456\u043d\u0430:"}),Object(O.jsxs)("b",{children:[n," \u0433\u0440\u043d."]})]}),i&&Object(O.jsx)("img",{className:_.a.plus,onClick:function(){i(v)},src:u(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus"})]})]})})};var A=function(e){var t=e.items,r=e.searchValue,c=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(O.jsx)("h1",{children:r?'\u041f\u043e\u0448\u0443\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0442\u0443: "'.concat(r,'"'):"\u0423\u0441\u0456 \u043a\u0440\u043e\u0441\u0438"}),Object(O.jsxs)("div",{className:"search-block d-flex",children:[Object(O.jsx)("img",{src:"img/search.svg",alt:"Search"}),r&&Object(O.jsx)("img",{onClick:function(){return c("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"Clear"}),Object(O.jsx)("input",{onChange:a,value:r,placeholder:"\u041f\u043e\u0448\u0443\u043a..."})]})]}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));return(i?Object(l.a)(Array(12)):e).map((function(e,t){return Object(O.jsx)(S,Object(o.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})};var P=function(){var e=a.a.useContext(f),t=e.favorites,r=e.onAddToFavorite;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0457 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(O.jsx)(S,Object(o.a)({favorited:!0,onFavorite:r},e),t)}))})]})};var T=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),r=t[0],c=t[1],n=a.a.useState(!0),s=Object(b.a)(n,2),i=s[0],d=s[1];return a.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://613f8e11e9d92a0017e17778.mockapi.io/orders");case 3:t=e.sent,r=t.data,c(r.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),d(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0442\u0456 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0457 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:(i?Object(l.a)(Array(8)):r).map((function(e,t){return Object(O.jsx)(S,Object(o.a)({loading:i},e),t)}))})]})};var F=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),r=t[0],c=t[1],n=a.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],m=a.a.useState([]),p=Object(b.a)(m,2),g=p[0],N=p[1],k=a.a.useState(""),w=Object(b.a)(k,2),y=w[0],I=w[1],_=a.a.useState(!1),S=Object(b.a)(_,2),F=S[0],V=S[1],B=a.a.useState(!0),U=Object(b.a)(B,2),E=U[0],L=U[1];a.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,r,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([h.a.get("https://613f8e11e9d92a0017e17778.mockapi.io/cart"),h.a.get("https://613f8e11e9d92a0017e17778.mockapi.io/favorites"),h.a.get("https://613f8e11e9d92a0017e17778.mockapi.io/items")]);case 3:t=e.sent,r=Object(b.a)(t,3),a=r[0],n=r[1],s=r[2],L(!1),d(a.data),N(n.data),c(s.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0442\u0456 \u0434\u0430\u043d\u0438\u0445 ;("),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=function(){var e=Object(u.a)(j.a.mark((function e(t){var r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,h.a.delete("https://613f8e11e9d92a0017e17778.mockapi.io/cart/".concat(r.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,h.a.post("https://613f8e11e9d92a0017e17778.mockapi.io/cart",t);case 11:c=e.sent,a=c.data,d((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u0456 \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0430"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(j.a.mark((function e(t){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!g.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}h.a.delete("https://613f8e11e9d92a0017e17778.mockapi.io/favorites/".concat(t.id)),N((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,h.a.post("https://613f8e11e9d92a0017e17778.mockapi.io/favorites",t);case 8:r=e.sent,c=r.data,N((function(e){return[].concat(Object(l.a)(e),[c])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0434\u043e\u0434\u0430\u0442\u0438 \u0432 \u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0435"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(f.Provider,{value:{items:r,cartItems:i,favorites:g,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:R,onAddToCart:D,setCartOpened:V,setCartItems:d},children:Object(O.jsxs)("div",{className:"wrapper clear",children:[Object(O.jsx)(C,{items:i,onClose:function(){return V(!1)},onRemove:function(e){try{h.a.delete("https://613f8e11e9d92a0017e17778.mockapi.io/cart/".concat(e)),d((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u0456 \u0437 \u043a\u043e\u0448\u0438\u043a\u0430"),console.error(t)}},opened:F}),Object(O.jsx)(v,{onClickCart:function(){return V(!0)}}),Object(O.jsx)(x.a,{path:"/",exact:!0,children:Object(O.jsx)(A,{items:r,cartItems:i,searchValue:y,setSearchValue:I,onChangeSearchInput:function(e){I(e.target.value)},onAddToFavorite:R,onAddToCart:D,isLoading:E})}),Object(O.jsx)(x.a,{path:"/favorites",exact:!0,children:Object(O.jsx)(P,{})}),Object(O.jsx)(x.a,{path:"/orders",exact:!0,children:Object(O.jsx)(T,{})})]})})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(n.a,{children:Object(O.jsx)(F,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.87b4e842.chunk.js.map