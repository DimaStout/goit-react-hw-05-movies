"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[26],{9315:function(t,e,r){r.d(e,{Hx:function(){return f},Y5:function(){return p},cl:function(){return o},wr:function(){return u},xc:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),s=r(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="api_key=7e3931999c630336c410d8a20aa0361e",u=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/movie/day?".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie?".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"?").concat(i,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/credits?").concat(i,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/reviews?").concat(i,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},7026:function(t,e,r){r.r(e),r.d(e,{default:function(){return x}});var n=r(5861),a=r(9439),c=r(7757),s=r.n(c),i=r(9315),u=r(2791),o=r(7689),p=r(1087),l="Similar_castContainer__EAGKZ",f="Similar_castTitle__yO08m",m="Similar_castList__DA7M7",v="Similar_castItem__Jiuyt",d="Similar_movieLink__4-vrG",h="Similar_castImage__etGmV",_="Similar_noCastMessage__v3ISr",g=r(184),x=function(){var t=(0,o.UO)().id,e=(0,u.useState)([]),r=(0,a.Z)(e,2),c=r[0],x=r[1],w=(0,o.TH)();return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.wr)();case 3:e=t.sent,Array.isArray(e)?x(e):x([]),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[t]),(0,g.jsxs)(g.Fragment,{children:[0!==c.length&&(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("h2",{className:f,children:"Similar Movies"}),(0,g.jsx)("ul",{className:m,children:c.map((function(t){return(0,g.jsx)("li",{className:v,children:(0,g.jsx)(p.rU,{className:d,to:"/movies/".concat(t.id),state:{from:w},children:(0,g.jsx)("img",{width:"200px",height:"300px",className:h,src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):"".concat("<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>"),alt:t.title})})},t.id)}))})]}),0===c.length&&(0,g.jsx)("div",{className:_,children:"No similar movies found."})]})}}}]);
//# sourceMappingURL=26.3724749d.chunk.js.map