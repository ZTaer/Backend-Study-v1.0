"use strict";(self.webpackChunkAPP=self.webpackChunkAPP||[]).push([[819],{3819:function(e,a,r){r.r(a),r.d(a,{default:function(){return h}});var t=r(4165),n=r(1413),c=r(5861),i=r(9439),s=r(7313),d=r(3355),o=r(9811),l=r(8524),u=r(6417),h=function(e){var a=e.requestProduct,r=void 0===a?{url:"/api/all-data",method:"GET"}:a,h=(0,s.useState)({loading:!1,data:[]}),v=(0,i.Z)(h,2),m=v[0],f=v[1],p=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var a,c,i,s,o,u,h,v,m,p=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>0&&void 0!==p[0]?p[0]:{},e.prev=1,c=r.url,i=void 0===c?"":c,s=r.data,o=void 0===s?{}:s,u=r.method,h=void 0===u?"GET":u,v={},f((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!0})})),e.next=7,(0,l.WY)({url:i,method:h,data:(0,n.Z)((0,n.Z)((0,n.Z)({},o),a),v)});case 7:200===(m=e.sent).code?f((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1,data:m.data})})):(d.ZP.error("\u8bf7\u6c42\u5931\u8d25!"),f((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1})}))),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.warn("handleAsyncRequestProduct error"),d.ZP.error("\u8bf7\u6c42\u5931\u8d25!"),f((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1})}));case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){p({})}),[]),(0,u.jsx)("div",{className:"index-page",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("h1",{children:"\ud83c\udf3d Node Farm \ud83e\udd66"}),(0,u.jsx)(o.Z,{active:!0,loading:m.loading,style:{marginTop:"3rem"},children:(0,u.jsx)("div",{className:"cards-container",children:m.data instanceof Array&&m.data.map((function(e){var a=e.id,r=e.productName,t=void 0===r?"":r,n=e.image,c=void 0===n?"":n,i=(e.from,e.nutrients,e.quantity),s=void 0===i?"":i,d=e.price,o=void 0===d?"":d,l=e.organic,h=void 0!==l&&l;e.description;return(0,u.jsxs)("figure",{className:"card",children:[(0,u.jsx)("div",{className:"card__emoji",children:c}),(0,u.jsx)("div",{className:"card__title-box",children:(0,u.jsx)("h2",{className:"card__title",children:t})}),(0,u.jsxs)("div",{className:"card__details",children:[h&&(0,u.jsx)("div",{className:"card__detail-box",children:(0,u.jsx)("h6",{className:"card__detail card__detail--organic",children:"Organic!"})}),(0,u.jsx)("div",{className:"card__detail-box",children:(0,u.jsx)("h6",{className:"card__detail",children:s})}),(0,u.jsx)("div",{className:"card__detail-box",children:(0,u.jsxs)("h6",{className:"card__detail card__detail--price",children:[o,"\u20ac"]})})]}),(0,u.jsx)("a",{className:"card__link",href:"/product/".concat(a),children:(0,u.jsxs)("span",{children:["Detail"," ",(0,u.jsx)("i",{className:"emoji-right",children:"\ud83d\udc49"})]})})]},a)}))})})]})})}},8524:function(e,a,r){r.d(a,{WY:function(){return o}});var t=r(4165),n=r(1413),c=r(4925),i=r(5861),s=r(6573),d=["url","method","data","params"];s.Z.interceptors.response.use((function(e){return e.data&&401===e.data.code&&function(){try{sessionStorage.clear(),localStorage.setItem("user",null),location.href="/login"}catch(e){console.warn("handleUtilSignOut error")}}(),e}),(function(e){return Promise.reject(e)}));var o=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var a,r,i,o,l,u,h,v,m,f,p,Z,x=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x.length>0&&void 0!==x[0]?x[0]:{},e.prev=1,r=a.url,i=void 0===r?"":r,o=a.method,l=void 0===o?"get":o,u=a.data,h=void 0===u?{}:u,v=a.params,m=void 0===v?{}:v,f=(0,c.Z)(a,d),e.next=5,(0,s.Z)((0,n.Z)({url:i,method:l,params:(0,n.Z)((0,n.Z)({},"get"===l.toLowerCase()||"delete"===l.toLowerCase()?h:{}),m),data:(0,n.Z)({},"post"===l.toLowerCase()?h:{})},f));case 5:return p=e.sent,Z=p.data instanceof Array||!(p.data instanceof Object)?{data:p.data}:p.data,e.abrupt("return",200===p.status&&Z.code?(0,n.Z)({code:p.status},Z):(0,n.Z)((0,n.Z)({},Z),{},{code:p.status}));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",{success:!1,error:"".concat(a.url," request error"),data:{}});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}()}}]);