(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[427],{9315:function(e,t,n){"use strict";n.d(t,{Hx:function(){return l},Y5:function(){return p},cl:function(){return i},wr:function(){return o},xc:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),s=n(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="api_key=7e3931999c630336c410d8a20aa0361e",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits?").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews?").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7427:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5861),a=n(9439),c=n(7757),s=n.n(c),u=n(2791),o=n(9315),i=n(7689),p=n(1087),f="HomeList_trendingLi__aGYjB",l="HomeList_trendingImg__6vada",d="HomeList_trendingTitle__rRvOP",m="Home_trendingDiv__B5UsC",v="Home_treandingHeading__JK6OD",h="Home_trendingUl__JRJdw",g=n(184);function _(e){var t=e.trendings,n=(0,i.TH)();return t&&(0,g.jsx)("ul",{className:h,children:t.map((function(e){return(0,g.jsxs)("li",{className:f,children:[console.log(e),(0,g.jsxs)(p.rU,{to:"movies/".concat(e.id),state:{from:n},children:[(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path),alt:e.title,className:l}),(0,g.jsx)("p",{className:d,children:e.title})]})]},e.id)}))})}var x=n(2007),y=n.n(x);function w(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.wr)();case 3:t=e.sent,c(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,g.jsxs)("div",{className:m,children:[(0,g.jsx)("h1",{className:v,children:"Popular today"}),n.length>0&&(0,g.jsx)(_,{trendings:n})]})}_.propTypes={trendings:y().arrayOf(y().shape({id:y().number.isRequired})).isRequired}},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,c,s){if(s!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=427.09a9fea9.chunk.js.map