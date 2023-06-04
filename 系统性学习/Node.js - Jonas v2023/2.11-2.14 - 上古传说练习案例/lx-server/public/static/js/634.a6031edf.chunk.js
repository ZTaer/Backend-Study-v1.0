"use strict";(self.webpackChunkAPP=self.webpackChunkAPP||[]).push([[634],{634:function(e,a,r){r.r(a),r.d(a,{default:function(){return m}});var t=r(4165),s=r(1413),n=r(5861),c=r(9439),o=r(7313),i=r(3355),d=r(9811),u=r(8467),l=r(8524),p=r(6417),m=function(e){var a=e.requestProductItem,r=void 0===a?{url:"/api/find-data",method:"GET"}:a,m=(0,o.useState)({loading:!1,data:{id:0,productName:"\u67e5\u65e0\u6b64\u4ea7\u54c1",image:"",from:"",nutrients:"",quantity:"",price:"",organic:!1,description:""}}),h=(0,c.Z)(m,2),j=h[0],_=h[1],f=(0,u.UO)().id,x=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var a,n,c,o,d,u,p,m,h,j=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.length>0&&void 0!==j[0]?j[0]:{},e.prev=1,n=r.url,c=void 0===n?"":n,o=r.data,d=void 0===o?{}:o,u=r.method,p=void 0===u?"GET":u,m={},_((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loading:!0})})),e.next=7,(0,l.WY)({url:c,method:p,data:(0,s.Z)((0,s.Z)((0,s.Z)({},d),a),m)});case 7:200===(h=e.sent).code?_((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loading:!1,data:h.data})})):(i.ZP.error("\u8bf7\u6c42\u5931\u8d25!"),_((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loading:!1})}))),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.warn("handleAsyncRequestProductItem error"),i.ZP.error("\u8bf7\u6c42\u5931\u8d25!"),_((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loading:!1})}));case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){x({id:f})}),[]),(0,p.jsx)("div",{className:"product-page",children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h1",{children:"\ud83c\udf3d Node Farm \ud83e\udd66"}),(0,p.jsx)(d.Z,{active:!0,loading:j.loading,style:{marginTop:"3rem"},children:(0,p.jsxs)("figure",{className:"product",children:[j.data.organic&&(0,p.jsx)("div",{className:"product__organic NOT_ORGANIC",children:(0,p.jsx)("h5",{children:"Organic"})}),(0,p.jsxs)("a",{href:"/overview",className:"product__back",children:[(0,p.jsx)("span",{className:"emoji-left",children:"\ud83d\udc48"}),"Back"]}),(0,p.jsxs)("div",{className:"product__hero",children:[(0,p.jsx)("span",{className:"product__emoji product__emoji--1",children:j.data.image}),(0,p.jsx)("span",{className:"product__emoji product__emoji--2",children:j.data.image}),(0,p.jsx)("span",{className:"product__emoji product__emoji--3",children:j.data.image}),(0,p.jsx)("span",{className:"product__emoji product__emoji--4",children:j.data.image}),(0,p.jsx)("span",{className:"product__emoji product__emoji--5",children:j.data.image}),(0,p.jsx)("span",{className:"product__emoji product__emoji--6",children:j.data.image}),(0,p.jsx)("span",{className:"product__emoji product__emoji--7",children:j.data.image}),(0,p.jsx)("span",{className:"product__emoji product__emoji--8",children:j.data.image}),(0,p.jsx)("span",{className:"product__emoji product__emoji--9",children:j.data.image})]}),(0,p.jsx)("h2",{className:"product__name",children:j.data.productName||"\u67e5\u65e0\u6b64\u4ea7\u54c1"}),(0,p.jsxs)("div",{className:"product__details",children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{className:"emoji-left",children:"\ud83c\udf0d"}),"From"," ",j.data.from]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{className:"emoji-left",children:"\u2764\ufe0f"}),j.data.nutrients]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{className:"emoji-left",children:"\ud83d\udce6"}),j.data.quantity]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{className:"emoji-left",children:"\ud83c\udff7"}),j.data.price,"\u20ac"]})]}),(0,p.jsxs)("a",{href:"#",className:"product__link",children:[(0,p.jsx)("span",{className:"emoji-left",children:"\ud83d\uded2"}),(0,p.jsx)("span",{children:"Add to shopping card (PRICE\u20ac)"})]}),(0,p.jsx)("p",{className:"product__description",children:j.data.description})]})})]})})}},8524:function(e,a,r){r.d(a,{WY:function(){return d}});var t=r(4165),s=r(1413),n=r(4925),c=r(5861),o=r(6573),i=["url","method","data","params"];o.Z.interceptors.response.use((function(e){return e.data&&401===e.data.code&&function(){try{sessionStorage.clear(),localStorage.setItem("user",null),location.href="/login"}catch(e){console.warn("handleUtilSignOut error")}}(),e}),(function(e){return Promise.reject(e)}));var d=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var a,r,c,d,u,l,p,m,h,j,_,f,x=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x.length>0&&void 0!==x[0]?x[0]:{},e.prev=1,r=a.url,c=void 0===r?"":r,d=a.method,u=void 0===d?"get":d,l=a.data,p=void 0===l?{}:l,m=a.params,h=void 0===m?{}:m,j=(0,n.Z)(a,i),e.next=5,(0,o.Z)((0,s.Z)({url:c,method:u,params:(0,s.Z)((0,s.Z)({},"get"===u.toLowerCase()||"delete"===u.toLowerCase()?p:{}),h),data:(0,s.Z)({},"post"===u.toLowerCase()?p:{})},j));case 5:return _=e.sent,f=_.data instanceof Array||!(_.data instanceof Object)?{data:_.data}:_.data,e.abrupt("return",200===_.status&&f.code?(0,s.Z)({code:_.status},f):(0,s.Z)((0,s.Z)({},f),{},{code:_.status}));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",{success:!1,error:"".concat(a.url," request error"),data:{}});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}()}}]);